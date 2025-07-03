import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorPatientDetailsRoutingModule } from './doctor-patient-details-routing.module';
import { DoctorPatientDetailsComponent } from './doctor-patient-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorPatientDetailsComponent
  ],
  imports: [
    CommonModule,
    DoctorPatientDetailsRoutingModule,
    SharedModule
  ]
})
export class DoctorPatientDetailsModule { }
