import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsDoctorDetailsRoutingModule } from './patients-doctor-details-routing.module';
import { PatientsDoctorDetailsComponent } from './patients-doctor-details.component';


@NgModule({
  declarations: [
    PatientsDoctorDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientsDoctorDetailsRoutingModule
  ]
})
export class PatientsDoctorDetailsModule { }
