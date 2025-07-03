import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorPatientDetailsComponent } from './doctor-patient-details.component';

const routes: Routes = [{ path: '', component: DoctorPatientDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorPatientDetailsRoutingModule { }
