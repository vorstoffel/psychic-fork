import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Level2Component } from './level2.component';
import { LevelService } from 'src/app/services/level.service';

describe('Level2Component', () => {
  let component: Level2Component;
  let fixture: ComponentFixture<Level2Component>;
  let levelService: LevelService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Level2Component ]
    }).compileComponents();

    levelService = TestBed.get(LevelService);

    spyOn(levelService, 'setLevel').and.callFake(() => {})
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Level2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set level to 2', () => {
    expect(levelService.setLevel).toHaveBeenCalledWith(2);
    expect(levelService.setLevel).toHaveBeenCalledTimes(1);
  });
});
