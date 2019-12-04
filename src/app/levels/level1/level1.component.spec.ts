import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Level1Component } from './leve1.component';
import { InventoryBarComponent } from 'src/app/inventory-bar/inventory-bar.component';
import { MatChipsModule } from '@angular/material/chips';
import { MockComponent } from 'ng-mocks';
import { LevelService } from 'src/app/services/level.service';
import { InMemoryStorage } from 'src/app/services/storage.service';

describe('Level1Component', () => {
  let component: Level1Component;
  let fixture: ComponentFixture<Level1Component>;
  let levelService: LevelService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Level1Component,
        MockComponent(InventoryBarComponent)
      ],
      imports: [
        MatChipsModule
      ],
      providers: [
        LevelService
      ]
    }).compileComponents();

    levelService = TestBed.get(LevelService);
    levelService.storage = new InMemoryStorage();
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
