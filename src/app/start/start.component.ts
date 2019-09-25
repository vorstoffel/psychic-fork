import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Inventory,  InventoryService } from '../inventory.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  inventory: Inventory = {
    name: '',
    weapons: []
  };

  itemService = new InventoryService();

  nameMode = true;
  chooseWeaponMode = false;
  displayMode = false;

  nameControl = new FormControl('', Validators.required);
  nameErrorMessage = 'Tell me your name!';

  weaponForm = new FormGroup({ // gives back an object
    firstWeapon: new FormControl('', Validators.required),
    secondWeapon: new FormControl('', Validators.required),
    thirdWeapon: new FormControl('', Validators.required)
  });
  weaponErrorMessage = 'You need this weapon!';


  constructor() {}

  ngOnInit() {
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
    this.itemService.setItems(this.inventory);
    this.displayMode = true;
  }

  goToLevel1() {
    // TODO: Routing to Level 1
  }
}
