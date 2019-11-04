import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

// TODO: outsource in extra file
export interface Inventory {
  weapons: Weapon[];
  items?: string[];
}

// TODO: outsource in extra file
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

  // *** Getter ***
  
  isInventorySet(): boolean {
    return this.adventureStorage.getItem(INVENTORY) ? true : false;
  }

  getItems(): Observable<Weapon[]> {
    return this.Inventory$.pipe(
      map(inventory => inventory.weapons)
    );
  }

  getInventory(): Observable<Inventory> {
    return this.Inventory$.asObservable();
  }

  // *** create objects ***

  createNewInventoryObject(weapons: Weapon[], items?: string[]): Inventory {
    return {
      weapons,
    }
  }

  public createNewWeaponObject(name: string, strength: number): Weapon {
    return {
      name: name.toUpperCase(),
      strength,
      equiped: false,
      broken: false
    }
  }

  // *** Setter *** 

  equipWeapon(): string {
    // TODO:
    // this.setInventory() .....
    // take first weapon, set equiped = true and save to adventureStorage and Inventory$
    // if first weapon is fork?
    return 'weapon-mock'
  }

  addWeapon(name: string, strength: number) {
    // TODO: add weapon to weapon[] in inventory and save it to adventureStorage
  }

  addItem(name: string) {
    // TODO: add one item to the items[] in Inventory$ and save it to adventureStorage
  }

  setInventory(weapons: Weapon[]): void {
    const newInventory = this.createNewInventoryObject(weapons);
    this.Inventory$.next(newInventory);
    const newInventoryItem = JSON.stringify(newInventory);
    this.adventureStorage.setItem(INVENTORY, newInventoryItem);
  }

  contains(name: string): Observable<boolean> {
    return this.getItems().pipe(
      map(items => items.findIndex((item) => item.name === name) !== -1)
    );
  }

  deleteItem(toBeDeletedItem: string): void {
    const filteredWeapons = this.getItems().pipe(
      map(items => items.filter(item => item.name !== toBeDeletedItem))
    );

    // TODO: delete from Weapon[]
    console.log('deleteItem(toBeDeletedItem: string) in inventory.service')
    this.adventureStorage.setInventory(filteredWeapons);
  }

  deleteInventory(): void {
    this.adventureStorage.clear();
  }
}
