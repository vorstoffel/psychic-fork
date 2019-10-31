import { Component, OnInit } from '@angular/core';
import { InventoryService, Weapon } from '../inventory.service';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


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
