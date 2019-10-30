import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

export interface Inventory {
  name: string;
  weapons: string[];
}

export class MockInventory implements Inventory {
  name: 'mock';
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

  setName(name: string): void {
    let weapons = () => {
      if (this.adventureStorage.getItem(INVENTORY)) {
        return JSON.parse(this.adventureStorage.getItem(INVENTORY)).weapons;
      } else {
        return this.mockInventory.weapons;
      }
    };

    const newInventory = this.createInventoryObject(name, weapons());
    this.Inventory$.next(newInventory);
    this.adventureStorage.setItem(INVENTORY, JSON.stringify(newInventory));
  }

  setWeapons(weapons: string[]): void {
    const newInventory = this.createInventoryObject(this.Inventory$.value.name, weapons);
    this.Inventory$.next(newInventory);
    this.adventureStorage.setItem(INVENTORY, JSON.stringify(newInventory));
  }

  setInventory(name: string, weapons: string[]): void {
    const newInventory = this.createInventoryObject(name, weapons);
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

  containsFork(): Observable<boolean> {
    return this.getWeapons().pipe(
      map(weapons => weapons.indexOf(FORK) !== -1)
    );
  }

  deleteWeapon(toBeDeletedWeapon: string): void {
    const filteredWeapons = this.getWeapons().pipe(
      // filter(weapon => weapon !== toBeDeletedWeapon.toUpperCase())
      // TODO 
    );
    this.adventureStorage.setInventory(this.getName(), filteredWeapons);
  }

  /*
    // this.Inventory$.value; 
    // derzeitiges gespeichertes Objekt im BehaviourSubject

  async abcDoSomething(): Promise<void> {
    const containsFork = await this.containsForkAsync();

    if (containsFork) {

    }
  }

  async containsForkAsync(): Promise<boolean> {
    return this.containsFork().pipe(take(1)).toPromise();
  }
  */

  deleteInventory(): void {
    this.adventureStorage.clear();
  }
}
