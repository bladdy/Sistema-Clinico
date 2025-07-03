import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientGridRoutingModule } from './patient-grid-routing.module';
import { PatientGridComponent } from './patient-grid.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PatientGridComponent
  ],
  imports: [
    CommonModule,
    PatientGridRoutingModule,
    SharedModule
  ]
})
export class PatientGridModule { }
