import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryBarComponent } from './inventory-bar.component';
import { MatChipsModule } from '@angular/material/chips';

describe('InventoryBarComponent', () => {
  let component: InventoryBarComponent;
  let fixture: ComponentFixture<InventoryBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryBarComponent],
      imports: [
        MatChipsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
