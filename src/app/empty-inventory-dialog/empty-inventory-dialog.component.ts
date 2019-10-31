import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../start-play/start-play.component';
import { FlagService } from '../flag.service';

@Component({
  selector: 'app-empty-inventory-dialog',
  templateUrl: './empty-inventory-dialog.component.html',
  styleUrls: ['./empty-inventory-dialog.component.scss']
})
export class EmptyInventoryDialogComponent {
  isCheckedBox = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private flagService: FlagService
  ) { }

  checkedBox() {
    this.isCheckedBox = true;
  }

  onCloseDialog() {
    if (this.flagService.getMeanie() == false) {
      this.flagService.setMeanie(this.isCheckedBox);
    }
  }
}
