import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentCalendarRoutingModule } from './appointment-calendar-routing.module';
import { AppointmentCalendarComponent } from './appointment-calendar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    AppointmentCalendarComponent
  ],
  imports: [
    CommonModule,
    AppointmentCalendarRoutingModule,
    SharedModule,
    FullCalendarModule
  ]
})
export class AppointmentCalendarModule { }
