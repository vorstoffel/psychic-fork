import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyInventoryDialogComponent } from './empty-inventory-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';

describe('EmptyInventoryDialogComponent', () => {
  let component: EmptyInventoryDialogComponent;
  let fixture: ComponentFixture<EmptyInventoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyInventoryDialogComponent],
      imports: [
        MatDialogModule,
        MatDividerModule,
        MatCheckboxModule
      ]
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
