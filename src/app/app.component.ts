import { Component } from '@angular/core';
import { InventoryService } from './inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inventoryService = new InventoryService();
  play = false;

  constructor() {
    /*
    if (this.inventoryService.getName() != null) {
      this.play = true;
    }*/
  }

  startAgain() {
    this.inventoryService.deleteInventory();
  }

  playGame() {
      this.play = true;
  }
}
