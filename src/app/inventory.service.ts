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
  weaponsMock: string[] = [''];

  setName(name: string): void {
    this.adventureStorage.setItem('inventory', JSON.stringify({
      name,
      weapons: this.weaponsMock
    }));
  }

  setWeapons(weapons: string[]): void {
    this.adventureStorage.setItem('inventory', JSON.stringify({
      name: this.getName(),
      weapons: weapons.filter(weapon => weapon.toUpperCase())
    }));
  }

  setInventory(name: string, newWeapons: string[]): void {
    const weapons = newWeapons.map(weapon => weapon.toUpperCase())
    this.adventureStorage.setItem('inventory', JSON.stringify({
      name,
      weapons
    }));
  }

  getName(): string {
    return JSON.parse(this.adventureStorage.getItem('inventory')).name;
  }

  getWeapons(): string[] {
    return JSON.parse(this.adventureStorage.getItem('inventory')).weapons;
  }

  getInventory(): Inventory {
    return JSON.parse(this.adventureStorage.getItem('inventory'));
  }

  containsFork(): boolean {
    return this.getWeapons().includes('FORK');
  }

  deleteWeapon(toBeDeletedWeapon: string): void {
    const filteredWeapons = this.getWeapons().filter(weapon => weapon !== toBeDeletedWeapon.toUpperCase())
    this.adventureStorage.setInventory(this.getName(), filteredWeapons);
  }

  deleteInventory(): void {
    this.adventureStorage.clear();
  }
}
