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


  constructor(
    private router: Router,
    public emptyInventoryDialog: MatDialog,
    private inventoryService: InventoryService
  ) { }

  playGame() {
    if (this.inventoryService.isInventorySet()) {
      this.router.navigate(['/level1']);
    } else {
      this.emptyInventoryDialog.open(EmptyInventoryDialogComponent, {
        data: { error: 'emptyInventory' }
      });
    }
  }
}
