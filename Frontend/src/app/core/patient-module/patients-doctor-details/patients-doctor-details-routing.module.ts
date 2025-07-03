import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsDoctorDetailsComponent } from './patients-doctor-details.component';

const routes: Routes = [{ path: '', component: PatientsDoctorDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsDoctorDetailsRoutingModule { }
