import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../inventory.service';
import { FlagService } from'../flag.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  inventoryService = new InventoryService();
  flagService = new FlagService();

  InputFormName = 'hello nice c:';
  hint38 = ' not help you.';

  name = '';
  nameMode = true;
  chooseWeaponMode = false;
  displayMode = false;

  nameControl = new FormControl('', Validators.required);
  nameErrorMessage = 'Tell me your name!';

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
    this.inventoryService.setName(this.nameControl.value);
    this.nameMode = false;
    this.chooseWeaponMode = true;
  }

  onSubmitWeapon() {
    let weapons = []; // model values go into the weapons string[]
    for (const weapon of Object.values(this.weaponForm.value)) {
      weapons.push(weapon as string);
    }
    this.chooseWeaponMode = false;
    this.inventoryService.setWeapons(weapons);
    this.displayMode = true;
  }
}
