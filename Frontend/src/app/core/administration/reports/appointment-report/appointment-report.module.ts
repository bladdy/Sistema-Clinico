import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentReportRoutingModule } from './appointment-report-routing.module';
import { AppointmentReportComponent } from './appointment-report.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { TagInputModule } from 'ngx-chips';
@NgModule({
  declarations: [
    AppointmentReportComponent
  ],
  imports: [
    CommonModule,
    AppointmentReportRoutingModule,
    SharedModule,
    TagInputModule
  ]
})
export class AppointmentReportModule { }
