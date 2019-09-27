import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Inventory, InventoryService } from '../inventory.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  inventory: Inventory = {
    name: '',
    weapons: []
  };

  itemService = new InventoryService();

  InputFormName = 'hello nice c:';
  hint38 = ' not help you.';
  meanieFlag = localStorage;

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
    if (this.meanieFlag.getItem('meanie') === '1') {
      this.InputFormName = 'meanie >:(';
      this.hint38 = '... \' >:( you don\'t need this hint, right? Figure out yourself what its about with the fork!';
    }
  }

  onSubmitName() {
    this.inventory.name = this.nameControl.value;
    this.nameMode = false;
    this.chooseWeaponMode = true;
  }

  onSubmitWeapon() {
    this.inventory.weapons = []; // model values go into the weapons string[]
    for (const weapon of Object.values(this.weaponForm.value)) {
      this.inventory.weapons.push(weapon as string);
    }
    this.chooseWeaponMode = false;
    this.itemService.setInventory(this.inventory);
    this.displayMode = true;
  }

  goToLevel1() {
    // TODO: Routing to Level 1
  }
}
