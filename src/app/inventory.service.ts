import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Inventory {
  name: string;
  weapons: Weapon[];
  items?: string[];
}

export interface Weapon {
  name: string;
  strength: number;
  equiped: boolean;
  broken: boolean;
}

const INVENTORY = 'inventory';

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

  createInventoryObject(name: string, weapons: Weapon[]): Inventory {
    return {
      name,
      weapons
    }
  }

  public createWeaponObject(name: string, strength: number): Weapon {
    return {
      name: name.toUpperCase(),
      strength,
      equiped: false,
      broken: false
    }
  }

  // *** Setter *** 

  addWeapon(name: string, strength: number) {
    // TODO: add weapon to weapon[] in inventory and save it to adventureStorage
  }

  addItem(name: string) {
    // TODO: add one item to the items[] in Inventory$ and save it to adventureStorage
  }

  setInventory(name: string, weapons: Weapon[]): void {
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

  getItems(): Observable<Weapon[]> {
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

    // TODO
    console.log('deleteItem(toBeDeletedItem: string) in inventory.service')
    this.adventureStorage.setInventory(this.getName(), filteredWeapons);
  }

  deleteInventory(): void {
    this.adventureStorage.clear();
  }
}
