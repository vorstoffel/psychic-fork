import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Level1Component } from './leve1.component';
import { InventoryBarComponent } from 'src/app/inventory-bar/inventory-bar.component';
import { MatChipsModule } from '@angular/material/chips';

describe('Level1Component', () => {
  let component: Level1Component;
  let fixture: ComponentFixture<Level1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Level1Component,
        InventoryBarComponent
      ],
      imports: [
        MatChipsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
