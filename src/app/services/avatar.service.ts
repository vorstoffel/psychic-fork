import { Injectable } from '@angular/core';

const NAME = 'avatar-name';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private avatarStorage = localStorage;

  setName(name: string) {
    this.avatarStorage.setItem(NAME, name);
  }

  getName(): string {
    return this.avatarStorage.getItem(NAME);
  }
}
