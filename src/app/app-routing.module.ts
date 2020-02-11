import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTileComponent } from './create-tile/create-tile.component';
import { StepperStepOneComponent } from './stepper-step-one/stepper-step-one.component';
import { StepperStepThreeComponent } from './stepper-step-three/stepper-step-three.component';
import { StepperStepTwoComponent } from './stepper-step-two/stepper-step-two.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/createTile'
  },
  {
    path: 'createTile',
    component: CreateTileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
