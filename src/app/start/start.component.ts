import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  name: string = '';
  weapons: string[] = [];
  itemService: InventoryService;

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


  constructor() {
    this.name = this.itemService.getItems().name;
  }

  ngOnInit() {
  }

  onSubmitName() {
    this.name = this.nameControl.value;
    this.nameMode = false;
    this.chooseWeaponMode = true;
  }

  onSubmitWeapon() {
    this.weapons = []; // model values go into the weapons string[]
    for (const weapon of Object.values(this.weaponForm.value)) {
      this.weapons.push(weapon as string);
    }
    console.log(this.weapons);
    this.chooseWeaponMode = false;
    this.displayMode = true;
  }

  goToLevel1() {
    this.itemService.setItems(this.name, this.weapons);
  }
}
