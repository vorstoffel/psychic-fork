import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const NAME = 'avatar-name';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private storageService: StorageService) { }

  setName(name: string) {
    this.storageService.setItem(NAME, name);
  }

  getName(): string {
    return this.storageService.getItem(NAME);
  }
}
