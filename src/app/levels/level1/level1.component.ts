import { Component } from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.scss']
})
export class Level1Component {

  constructor(itemService: InventoryService) {
  }

  attack() {

  }

  greet() {

  }

}
