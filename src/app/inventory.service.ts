import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export interface Inventory {
  name: string;
  weapons: Items[];
}

export interface Items {
  name: string;
  isWeapon: boolean;
  equiped: boolean;
  broken: boolean;
}

const INVENTORY = 'inventory';
const FORK = 'FORK';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private adventureStorage = localStorage;
  private Inventory$ = new ReplaySubject<Inventory>();

  constructor() {
    if (this.adventureStorage.getItem(INVENTORY)) {
      const inventoryLocalStorage = JSON.parse(this.adventureStorage.getItem(INVENTORY))
      this.Inventory$.next(inventoryLocalStorage);
    }
  }

  // *** create objects ***

  createInventoryObject(name: string, weapons: string[]): Inventory {
    return {
      name,
      weapons: weapons.map(weapon => this.createItemObject(weapon, true))
    }
  }

  createItemObject(name: string, isWeapon: boolean) {
    return {
      name: name.toUpperCase(),
      isWeapon,
      equiped: false,
      broken: false
    }
  }

  // *** Setter *** 

  addItem(name: string, isWeapon: boolean){
    // TODO: add one item to the items[] in Inventory$ and save it to adventureStorage
  }

  setInventory(name: string, weapons: string[]): void {
    const newInventory = this.createInventoryObject(name, weapons);
    this.Inventory$.next(newInventory);
    this.adventureStorage.setItem(INVENTORY, JSON.stringify(newInventory));
  }

  // *** Getter ***

  getName(): Observable<string> {
    return this.Inventory$.pipe(
      map(inventory => inventory.name)
    );
  }

  getItems(): Observable<Items[]> {
    return this.Inventory$.pipe(
      map(inventory => inventory.weapons)
    );
  }

  getInventory(): Observable<Inventory> {
    return this.Inventory$;
  }

  // is inventory initially set from user?
  isInventorySet(): boolean {
    if (this.adventureStorage.getItem(INVENTORY)) {
      return true;
    } else {
      return false;
    }
  }

  contains(name: string): Observable<boolean> {
    return this.getItems().pipe(
      map(items => items.findIndex((item) => item.name === name) !== -1)
    );
  }

  // this.Inventory$.value; 
  // returns currently stored object in BehaviourSubject

  deleteItem(toBeDeletedItem: string): void {
    const filteredWeapons = this.getItems().pipe(
      map(items => items.filter(item => item.name !== toBeDeletedItem))
    );

    this.adventureStorage.setInventory(this.getName(), filteredWeapons);
  }

  deleteInventory(): void {
    this.adventureStorage.clear();
  }
}
