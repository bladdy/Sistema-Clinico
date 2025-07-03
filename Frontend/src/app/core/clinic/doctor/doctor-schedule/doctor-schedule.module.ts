import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorScheduleRoutingModule } from './doctor-schedule-routing.module';
import { DoctorScheduleComponent } from './doctor-schedule.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorScheduleComponent
  ],
  imports: [
    CommonModule,
    DoctorScheduleRoutingModule,
    SharedModule
  ]
})
export class DoctorScheduleModule { }
