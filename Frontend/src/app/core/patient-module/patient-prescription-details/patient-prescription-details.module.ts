import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientPrescriptionDetailsRoutingModule } from './patient-prescription-details-routing.module';
import { PatientPrescriptionDetailsComponent } from './patient-prescription-details.component';


@NgModule({
  declarations: [
    PatientPrescriptionDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientPrescriptionDetailsRoutingModule
  ]
})
export class PatientPrescriptionDetailsModule { }
