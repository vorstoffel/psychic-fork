import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StartPlayComponent } from './start-play.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MockComponent } from 'ng-mocks';
import { Level1Component } from '../levels/level1/leve1.component';


describe('StartPlayComponent', () => {
  let component: StartPlayComponent;
  let fixture: ComponentFixture<StartPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StartPlayComponent, MockComponent(Level1Component)],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'level1', component: MockComponent(Level1Component) }]),
        MatDialogModule
      ]
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
