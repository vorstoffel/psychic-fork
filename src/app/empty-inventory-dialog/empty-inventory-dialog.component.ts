import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../start-play/start-play.component';

@Component({
  selector: 'app-empty-inventory-dialog',
  templateUrl: './empty-inventory-dialog.component.html',
  styleUrls: ['./empty-inventory-dialog.component.scss']
})
export class EmptyInventoryDialogComponent {
  checkedBox = false;

  meanieFlag = localStorage;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onCheckedBox() {
    if (this.checkedBox === true) {
      this.meanieFlag.setItem('meanie', '1');
    }
  }
}
