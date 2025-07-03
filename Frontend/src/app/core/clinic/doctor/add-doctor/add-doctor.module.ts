import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDoctorRoutingModule } from './add-doctor-routing.module';
import { AddDoctorComponent } from './add-doctor.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddDoctorComponent
  ],
  imports: [
    CommonModule,
    AddDoctorRoutingModule,
    SharedModule
  ]
})
export class AddDoctorModule { }
