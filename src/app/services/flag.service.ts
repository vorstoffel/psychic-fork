import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

export class Flags {
  meanie: boolean = false;
  breadCrumbs: boolean = false;
}
const FLAGS = 'flags';

@Injectable({
  providedIn: 'root'
})
export class FlagService {

  constructor(private storageService: StorageService) { }

  setMeanie(flag: boolean): void {
    this.storageService.setItem(FLAGS, JSON.stringify({
      meanie: flag,
    }));
  }

  getMeanie(): boolean {
    const flags = JSON.parse(this.storageService.getItem(FLAGS));
    if (flags == undefined || flags.meanie == undefined) {
      return false;
    } else {
      return flags.meanie;
    }
  }
}
