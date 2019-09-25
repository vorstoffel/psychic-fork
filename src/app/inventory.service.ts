import { Injectable } from '@angular/core';

export interface Inventory {
  name: string;
  weapons: string[];
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  adventureStorage = localStorage;
  private items: Inventory;

  constructor() {}

   getItems() {
     return JSON.parse(this.adventureStorage.getItem('inventory'));
   }

   setItems(name: string, weapons: string[]) {
    this.items.name = name;
    this.items.weapons = weapons;
    this.adventureStorage.setItem('inventory', JSON.stringify(this.items));
   }
}
