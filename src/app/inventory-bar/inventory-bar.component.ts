import { Component, OnInit } from '@angular/core';
import { Inventory,  InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-bar',
  templateUrl: './inventory-bar.component.html',
  styleUrls: ['./inventory-bar.component.scss']
})
export class InventoryBarComponent implements OnInit {

  inventoryService = new InventoryService();
  weapons: string[] = [];

  constructor() {}

  // TODO: Update on change

  ngOnInit() {
    this.weapons = this.inventoryService.getWeapons();
  }

}
