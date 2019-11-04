import { Injectable } from '@angular/core';

export class Flags {
  meanie: boolean = false;
  breadCrumbs: boolean = false;
}
const FLAGS = 'flags';

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  flagStorage = localStorage;

  setMeanie(flag: boolean): void {
    this.flagStorage.setItem(FLAGS, JSON.stringify({
      meanie: flag,
    }));
  }

  getMeanie(): boolean {
    const flags = JSON.parse(this.flagStorage.getItem(FLAGS));
    if (flags == undefined || flags.meanie == undefined) {
      return false;
    } else {
      return flags.meanie;
    }
  }
}
