import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPlayComponent } from './start-play.component';

describe('StartPlayComponent', () => {
  let component: StartPlayComponent;
  let fixture: ComponentFixture<StartPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
