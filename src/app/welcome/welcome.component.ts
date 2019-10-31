import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryService, Weapon } from '../inventory.service';
import { FlagService } from'../flag.service';

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
    this.nameMode = false;
    this.chooseWeaponMode = true;
  }

  onSubmitWeapon() {
    let weapons: Weapon[] = [];

    for (const stringWeapon of Object.values(this.weaponForm.value)) {
      let weaponWeapon = this.inventoryService.createWeaponObject(stringWeapon as string, 1)
      weapons.push(weaponWeapon);
    }

    this.inventoryService.setInventory(this.name, weapons);

    this.chooseWeaponMode = false;
    this.displayMode = true;
  }
}
