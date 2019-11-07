import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services//inventory.service';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Weapon } from '../models/weapon.model';


@Component({
  selector: 'app-inventory-bar',
  templateUrl: './inventory-bar.component.html',
  styleUrls: ['./inventory-bar.component.scss']
})
export class InventoryBarComponent implements OnInit {

  weapons = new ReplaySubject<Weapon[]>();
  componentWillBeDestroyed = new Subject();

  constructor(
    private inventoryService: InventoryService
  ) { }

  ngOnInit() {
    this.inventoryService.getItems()
      .pipe(
        takeUntil(this.componentWillBeDestroyed)
      )
      .subscribe(items => this.weapons.next(items));
  }

  ngOnDestroy() {
    this.componentWillBeDestroyed.next();
    this.componentWillBeDestroyed.complete();
  }
}
