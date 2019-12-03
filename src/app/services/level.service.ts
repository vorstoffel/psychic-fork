import { Injectable } from '@angular/core';
import { IStorage } from './storage.service';

const CURRENTLEVEL = 'current-level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private _storage: IStorage;

  set storage(value: IStorage) {
    this._storage = value;
  }

  get storage(): IStorage {
    return this._storage;
  }

  setLevel(currentLevel: number): void {
    this.storage.setItem(CURRENTLEVEL, currentLevel.toString());
  }

  getLevel(): number {
    const currentLevel = this.storage.getItem(CURRENTLEVEL);
    if (currentLevel == undefined) {
      return 1;
    }
    else {
      return parseInt(currentLevel, 10);
    }
  }
}
