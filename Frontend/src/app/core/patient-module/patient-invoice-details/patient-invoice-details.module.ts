import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientInvoiceDetailsRoutingModule } from './patient-invoice-details-routing.module';
import { PatientInvoiceDetailsComponent } from './patient-invoice-details.component';


@NgModule({
  declarations: [
    PatientInvoiceDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientInvoiceDetailsRoutingModule
  ]
})
export class PatientInvoiceDetailsModule { }
