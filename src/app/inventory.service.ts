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

  constructor() {}

  getName(): string {
    return JSON.parse(this.adventureStorage.getItem('inventory')).name;
  }

  getWeapons(): string[] {
    return JSON.parse(this.adventureStorage.getItem('inventory')).weapons;
  }

  getInventory(): Inventory {
    return JSON.parse(this.adventureStorage.getItem('inventory'));
  }

  setInventory(items: Inventory) {
    this.adventureStorage.setItem('inventory', JSON.stringify(items));
  }

  deleteInventory() {
    this.adventureStorage.clear();
  }
}
