import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientReportRoutingModule } from './patient-report-routing.module';
import { PatientReportComponent } from './patient-report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    PatientReportComponent
  ],
  imports: [
    CommonModule,
    PatientReportRoutingModule,
    SharedModule,
    TagInputModule
  ]
})
export class PatientReportModule { }
