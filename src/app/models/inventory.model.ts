import { Weapon } from './weapon.model';

export interface Inventory {
  weapons: Weapon[];
  items?: string[];
}