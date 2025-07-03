import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaxRatesSettingsRoutingModule } from './tax-rates-settings-routing.module';
import { TaxRatesSettingsComponent } from './tax-rates-settings.component';


@NgModule({
  declarations: [
    TaxRatesSettingsComponent
  ],
  imports: [
    CommonModule,
    TaxRatesSettingsRoutingModule
  ]
})
export class TaxRatesSettingsModule { }
