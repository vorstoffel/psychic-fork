import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../services/inventory.service';
import { FlagService } from'../services/flag.service';
import { AvatarService } from '../services/avatar.service';
import { Weapon } from '../models/weapon.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  InputFormName = 'hello nice c:';
  hint38 = ' not help you.';

  name = '';
  nameMode = true;
  chooseWeaponMode = false;
  displayMode = false;

  nameControl = new FormControl('', Validators.required);
  nameErrorMessage = 'Tell me your name!';

  constructor(
    private avatarService: AvatarService,
    private flagService: FlagService,
    private inventoryService: InventoryService,
  ){}

  // gives back an object
  weaponForm = new FormGroup({
    firstWeapon: new FormControl('', Validators.required),
    secondWeapon: new FormControl('', Validators.required),
    thirdWeapon: new FormControl('', Validators.required)
  });
  weaponErrorMessage = 'You need this weapon!';

  ngOnInit() {
    if (this.flagService.getMeanie() === true) {
      this.InputFormName = 'meanie >:(';
      this.hint38 = '... \' >:( you don\'t need this hint, right? Figure out yourself what its about with the fork!';
    }
  }

  onSubmitName() {
    this.name = this.nameControl.value;
    this.avatarService.setName(this.name);
    this.nameMode = false;
    this.chooseWeaponMode = true;
  }

  onSubmitWeapon() {
    let weapons: Weapon[] = [];

    for (const stringWeapon of Object.values(this.weaponForm.value)) {
      let weaponWeapon = this.inventoryService.createNewWeaponObject(stringWeapon as string, 1)
      weapons.push(weaponWeapon);
    }

    this.inventoryService.setInventory(weapons);

    this.chooseWeaponMode = false;
    this.displayMode = true;
  }
}
