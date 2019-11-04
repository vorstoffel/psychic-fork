import { Injectable } from '@angular/core';

const CURRENTLEVEL = 'current-level';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levelStorage = localStorage;

  setLevel(currentLevel: string): void {
    this.levelStorage.setItem(CURRENTLEVEL, currentLevel);
  }

  getLevel(): string {
    const currentLevel = this.levelStorage.getItem(CURRENTLEVEL);
    if(currentLevel == undefined) {
      return 'level1';
    }
    else {
      return currentLevel;
    }
  }
}
