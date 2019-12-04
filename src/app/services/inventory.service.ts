import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Weapon } from '../models/weapon.model';
import { Inventory } from '../models/inventory.model';
import { StorageService } from './storage.service';

const INVENTORY = 'inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private Inventory$ = new ReplaySubject<Inventory>();

  constructor(private storageService: StorageService) {
    if (this.storageService.getItem(INVENTORY)) {
      const inventoryLocalStorage = JSON.parse(this.storageService.getItem(INVENTORY))
      this.Inventory$.next(inventoryLocalStorage);
    }
  }

  // *** Getter ***
  
  isInventorySet(): boolean {
    return this.storageService.getItem(INVENTORY) ? true : false;
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

  addWeapon(name: string, strength: number): void {
    // TODO: add weapon to weapon[] in inventory and save it to storage
  }

  deleteWeapon(name: string): void {
    // TODO: delete one weapon in the weapon[]
  }

  addItem(name: string): void {
    // TODO: add one item to the items[] in Inventory$ and save it to storage
  }

  deleteItem(name: string): void {
    // TODO: delete one item in the item[]
  }

  setInventory(weapons: Weapon[]): void {
    const newInventory = this.createNewInventoryObject(weapons);
    this.Inventory$.next(newInventory);
    const newInventoryItem = JSON.stringify(newInventory);
    this.storageService.setItem(INVENTORY, newInventoryItem);
  }

  contains(name: string): Observable<boolean> {
    return this.getItems().pipe(
      map(items => items.findIndex((item) => item.name === name) !== -1)
    );
  }
}
