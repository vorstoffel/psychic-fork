import { Component } from '@angular/core';
import { FlagService } from '../services/flag.service';

@Component({
  selector: 'app-empty-inventory-dialog',
  templateUrl: './empty-inventory-dialog.component.html',
  styleUrls: ['./empty-inventory-dialog.component.scss']
})
export class EmptyInventoryDialogComponent {
  isCheckedBox = false;

  constructor(private flagService: FlagService) { }

  checkedBox() {
    this.isCheckedBox = true;
  }

  onCloseDialog() {
    if (this.flagService.getMeanie() == false) {
      this.flagService.setMeanie(this.isCheckedBox);
    }
  }
}
