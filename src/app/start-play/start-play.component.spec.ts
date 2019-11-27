import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StartPlayComponent } from './start-play.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'test-component',
  template: '<div>test<div>',
})
export class MockComponent { }

describe('StartPlayComponent', () => {
  let component: StartPlayComponent;
  let fixture: ComponentFixture<StartPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StartPlayComponent, MockComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        MatDialogModule,
      ],

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
