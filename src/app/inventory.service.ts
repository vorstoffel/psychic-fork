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

   getItems(): Inventory {
     return JSON.parse(this.adventureStorage.getItem('inventory'));
   }

   setItems(items: Inventory) {
    this.adventureStorage.setItem('inventory', JSON.stringify(items));
   }
}
