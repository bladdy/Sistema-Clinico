import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeReportRoutingModule } from './income-report-routing.module';
import { IncomeReportComponent } from './income-report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    IncomeReportComponent
  ],
  imports: [
    CommonModule,
    IncomeReportRoutingModule,
    SharedModule,
    TagInputModule
  ]
})
export class IncomeReportModule { }
