import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyInventoryDialogComponent } from './empty-inventory-dialog.component';

describe('EmptyInventoryDialogComponent', () => {
  let component: EmptyInventoryDialogComponent;
  let fixture: ComponentFixture<EmptyInventoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyInventoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyInventoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
