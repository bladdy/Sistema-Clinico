import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddInvoicesRoutingModule } from './add-invoices-routing.module';
import { AddInvoicesComponent } from './add-invoices.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddInvoicesComponent
  ],
  imports: [
    CommonModule,
    AddInvoicesRoutingModule,
    SharedModule
  ]
})
export class AddInvoicesModule { }
