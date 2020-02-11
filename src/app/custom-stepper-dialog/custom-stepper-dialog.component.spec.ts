import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStepperDialogComponent } from './custom-stepper-dialog.component';

describe('CustomStepperDialogComponent', () => {
  let component: CustomStepperDialogComponent;
  let fixture: ComponentFixture<CustomStepperDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomStepperDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomStepperDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
