import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAppointmentDetailsComponent } from './patient-appointment-details.component';

const routes: Routes = [{ path: '', component: PatientAppointmentDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientAppointmentDetailsRoutingModule { }
