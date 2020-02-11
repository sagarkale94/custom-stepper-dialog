import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperStepOneComponent } from './stepper-step-one.component';

describe('StepperStepOneComponent', () => {
  let component: StepperStepOneComponent;
  let fixture: ComponentFixture<StepperStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
