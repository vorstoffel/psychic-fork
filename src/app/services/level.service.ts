import { Injectable } from '@angular/core';

const CURRENTLEVEL = 'current-level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levelStorage = localStorage;

  setLevel(currentLevel: number): void {
    this.levelStorage.setItem(CURRENTLEVEL, currentLevel.toString());
  }

  getLevel(): number {
    const currentLevel = this.levelStorage.getItem(CURRENTLEVEL);
    if (currentLevel == undefined) {
      return 1;
    }
    else {
      return parseInt(currentLevel, 10);
    }
  }

  clear(): void {
    this.levelStorage.removeItem(CURRENTLEVEL);
  }
}
