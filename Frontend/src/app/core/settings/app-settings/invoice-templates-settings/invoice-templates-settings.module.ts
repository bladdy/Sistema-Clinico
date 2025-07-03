import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceTemplatesSettingsRoutingModule } from './invoice-templates-settings-routing.module';
import { InvoiceTemplatesSettingsComponent } from './invoice-templates-settings.component';


@NgModule({
  declarations: [
    InvoiceTemplatesSettingsComponent
  ],
  imports: [
    CommonModule,
    InvoiceTemplatesSettingsRoutingModule
  ]
})
export class InvoiceTemplatesSettingsModule { }
