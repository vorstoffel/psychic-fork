import { Injectable } from '@angular/core';

export interface Flags {
  meanie: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FlagService {
  flagStorage = localStorage;

  setMeanie(): void {
    this.flagStorage.setItem('flags', JSON.stringify({
      meanie: true,
    }));
  }

  getMeanie(): boolean {
    return JSON.parse(this.flagStorage.getItem('flags')).meanie;
  }
}
