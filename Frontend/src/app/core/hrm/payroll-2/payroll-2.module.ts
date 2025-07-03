import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Payroll2RoutingModule } from './payroll-2-routing.module';
import { Payroll2Component } from './payroll-2.component';


@NgModule({
  declarations: [
    Payroll2Component
  ],
  imports: [
    CommonModule,
    Payroll2RoutingModule
  ]
})
export class Payroll2Module { }
