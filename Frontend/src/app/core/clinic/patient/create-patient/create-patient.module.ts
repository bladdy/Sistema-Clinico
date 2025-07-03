import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePatientRoutingModule } from './create-patient-routing.module';
import { CreatePatientComponent } from './create-patient.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CreatePatientComponent
  ],
  imports: [
    CommonModule,
    CreatePatientRoutingModule,
    SharedModule
  ]
})
export class CreatePatientModule { }
