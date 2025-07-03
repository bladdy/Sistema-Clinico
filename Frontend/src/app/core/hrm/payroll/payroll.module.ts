import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollRoutingModule } from './payroll-routing.module';
import { PayrollComponent } from './payroll.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    PayrollComponent
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule,
    SharedModule,
    MultiSelectModule
  ]
})
export class PayrollModule { }
