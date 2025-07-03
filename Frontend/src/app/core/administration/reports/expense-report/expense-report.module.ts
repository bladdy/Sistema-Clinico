import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseReportRoutingModule } from './expense-report-routing.module';
import { ExpenseReportComponent } from './expense-report.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    ExpenseReportComponent
  ],
  imports: [
    CommonModule,
    ExpenseReportRoutingModule,
    SharedModule,
    TagInputModule
  ]
})
export class ExpenseReportModule { }
