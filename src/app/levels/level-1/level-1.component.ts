import { Component } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-level-1',
  templateUrl: './level-1.component.html',
  styleUrls: ['./level-1.component.scss']
})
export class Level1Component {

  walkingPeacefullyMode = true;
  breadCrumbsMode = false;

  equipedWeapon;

  constructor(itemService: InventoryService) {
  }

  equipAWeapon() {
    this.walkingPeacefullyMode = false;
    // TODO:
    // equip item from inventory.service
    // show message "you grabbed <item>"
    // (what if fork is chosen?)
    // start countdown to pigeon attack
  }

  attack() {

  }

  giveBreadCrumbs() {

  }

}
