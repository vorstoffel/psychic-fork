import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InventoryService } from 'src/app/inventory.service';
import { EmptyInventoryDialogComponent } from '../empty-inventory-dialog/empty-inventory-dialog.component';

export interface DialogData {
  error: 'emptyInventory';
}

@Component({
  selector: 'app-start-play',
  templateUrl: './start-play.component.html',
  styleUrls: ['./start-play.component.scss']
})
export class StartPlayComponent {

  inventory = false;

  constructor(
    private router: Router,
    itemService: InventoryService,
    public emptyInventoryDialog: MatDialog
  ) {
    if (itemService.getInventory() != null) {
      this.inventory = true;
    }
  }

  playGame() {
    if (this.inventory == false) {
      this.emptyInventoryDialog.open(EmptyInventoryDialogComponent, {
        data: {error: 'emptyInventory'}
      });
    } else {
      this.router.navigate(['/level1']);
    }
  }

}
