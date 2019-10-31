import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface Inventory {
  name: string;
  weapons: string[];
}

export class MockInventory implements Inventory {
  name: null;
  weapons: ['FORK', 'FORK', 'FORK'];
}

const INVENTORY = 'inventory';
const FORK = 'FORK';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private adventureStorage = localStorage;
  private mockInventory: Inventory = new MockInventory;
  private Inventory$ = new BehaviorSubject<Inventory>(null);

  constructor() {
    if (this.adventureStorage.getItem(INVENTORY)) {
      const inventoryLocalStorage = JSON.parse(this.adventureStorage.getItem(INVENTORY))
      this.Inventory$ = new BehaviorSubject<Inventory>(inventoryLocalStorage);
    } else {
      this.Inventory$ = new BehaviorSubject<Inventory>(this.mockInventory);
    }
  }

  createInventoryObject(name: string, weapons: string[]): Inventory {
    return {
      name,
      weapons: weapons.filter(weapon => weapon.toUpperCase())
    }
  }

  setWeapons(weapons: string[]): void {
    let name = () => {
      if (this.adventureStorage.getItem(INVENTORY)) {
        return JSON.parse(this.adventureStorage.getItem(INVENTORY)).name;
      } else {
        return this.mockInventory.name;
      }
    };

    const newInventory = this.createInventoryObject(name(), weapons);
    this.Inventory$.next(newInventory);
    this.adventureStorage.setItem(INVENTORY, JSON.stringify(newInventory));
  }

  setInventory(name: string, weapons: string[]): void {
    const newInventory = this.createInventoryObject(name, weapons);
    this.Inventory$.next(newInventory);
    this.adventureStorage.setItem(INVENTORY, JSON.stringify(newInventory));
  }

  getName(): Observable<string> {
    return this.Inventory$.pipe(
      map(inventory => inventory.name)
    );
  }

  getWeapons(): Observable<string[]> {
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

  containsFork(): Observable<boolean> {
    return this.getWeapons().pipe(
      map(weapons => weapons.indexOf(FORK) !== -1)
    );
  }
  
  // this.Inventory$.value; 
  // returns currently stored object in BehaviourSubject

  deleteWeapon(toBeDeletedWeapon: string): void {
    const filteredWeapons = this.getWeapons().pipe(
      // filter(weapon => weapon !== toBeDeletedWeapon.toUpperCase())
      // TODO 
    );
    this.adventureStorage.setInventory(this.getName(), filteredWeapons);
  }

  deleteInventory(): void {
    this.adventureStorage.clear();
  }
}
