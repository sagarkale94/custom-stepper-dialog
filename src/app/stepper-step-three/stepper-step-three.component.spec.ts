import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperStepThreeComponent } from './stepper-step-three.component';

describe('StepperStepThreeComponent', () => {
  let component: StepperStepThreeComponent;
  let fixture: ComponentFixture<StepperStepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperStepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
