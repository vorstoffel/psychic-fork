import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { InventoryService } from 'src/app/services/inventory.service';
import { EmptyInventoryDialogComponent } from '../empty-inventory-dialog/empty-inventory-dialog.component';
import { LevelService } from '../services/level.service';

@Component({
  selector: 'app-start-play',
  templateUrl: './start-play.component.html',
  styleUrls: ['./start-play.component.scss']
})
export class StartPlayComponent {
  startNewGameButton = false;

  constructor(
    private router: Router,
    public emptyInventoryDialog: MatDialog,
    private inventoryService: InventoryService,
    private levelService: LevelService,
  ) { }

  playGame() {
    if (this.inventoryService.isInventorySet()) {
      this.router.navigate([`level${this.levelService.getLevel()}`]);
    } else {
      this.emptyInventoryDialog.open(EmptyInventoryDialogComponent);
      this.startNewGameButton = true;
    }
  }
}
