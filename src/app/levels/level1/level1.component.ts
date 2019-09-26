import { Component, OnInit } from '@angular/core';
import { Inventory, InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss']
})
export class Level1Component {

  inventory = false;
  constructor(itemService: InventoryService) {
    if (itemService.getInventory() != null) {
      this.inventory = true;
    }
  }

  attack() {

  }

  greet() {

  }

}
