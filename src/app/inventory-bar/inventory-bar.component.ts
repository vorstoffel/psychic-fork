import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inventory-bar',
  templateUrl: './inventory-bar.component.html',
  styleUrls: ['./inventory-bar.component.scss']
})
export class InventoryBarComponent {

  inventoryService = new InventoryService();
  weapons: Observable<string[]>;

  constructor() {
    this.weapons = this.inventoryService.getWeapons();
  }
}
