import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesDetailsRoutingModule } from './invoices-details-routing.module';
import { InvoicesDetailsComponent } from './invoices-details.component';


@NgModule({
  declarations: [
    InvoicesDetailsComponent
  ],
  imports: [
    CommonModule,
    InvoicesDetailsRoutingModule
  ]
})
export class InvoicesDetailsModule { }
