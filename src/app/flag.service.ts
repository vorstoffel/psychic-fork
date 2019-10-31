import { Injectable } from '@angular/core';

export class Flags {
  meanie: boolean = false;
  breadCrumbs: boolean = false;
}

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  flagStorage = localStorage;

  setMeanie(flag: boolean): void {
    this.flagStorage.setItem('flags', JSON.stringify({
      meanie: flag,
    }));
  }

  getMeanie(): boolean {
    const flags = JSON.parse(this.flagStorage.getItem('flags'));
    if (flags == undefined || flags.meanie == undefined) {
      return false;
    } else {
      return flags.meanie;
    }
  }
}
