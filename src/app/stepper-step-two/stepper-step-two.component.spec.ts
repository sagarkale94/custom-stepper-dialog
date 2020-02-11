import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperStepTwoComponent } from './stepper-step-two.component';

describe('StepperStepTwoComponent', () => {
  let component: StepperStepTwoComponent;
  let fixture: ComponentFixture<StepperStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
