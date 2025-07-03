import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientAppointmentDetailsRoutingModule } from './patient-appointment-details-routing.module';
import { PatientAppointmentDetailsComponent } from './patient-appointment-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    PatientAppointmentDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientAppointmentDetailsRoutingModule,
    SharedModule,
    FullCalendarModule
  ]
})
export class PatientAppointmentDetailsModule { }
