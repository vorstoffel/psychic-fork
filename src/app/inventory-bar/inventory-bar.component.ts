import { Component, OnInit } from '@angular/core';
import { InventoryService, Items } from '../inventory.service';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-inventory-bar',
  templateUrl: './inventory-bar.component.html',
  styleUrls: ['./inventory-bar.component.scss']
})
export class InventoryBarComponent implements OnInit {

  weapons = new ReplaySubject<Items[]>();
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
