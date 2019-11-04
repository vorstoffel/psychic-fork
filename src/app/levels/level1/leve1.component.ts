import { Component, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';
import { LevelService } from 'src/app/services/level.service';

@Component({
  selector: 'app-level-1',
  templateUrl: './level-1.component.html',
  styleUrls: ['./level-1.component.scss']
})
export class Level1Component implements OnInit {

  walkingPeacefullyMode = true;
  breadCrumbsMode = false;

  equipedWeapon;

  constructor(
    private itemService: InventoryService,
    private levelService: LevelService,
  ) { }

  ngOnInit() {
    this.levelService.setLevel('level2')
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
