import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrenciesSettingsRoutingModule } from './currencies-settings-routing.module';
import { CurrenciesSettingsComponent } from './currencies-settings.component';


@NgModule({
  declarations: [
    CurrenciesSettingsComponent
  ],
  imports: [
    CommonModule,
    CurrenciesSettingsRoutingModule
  ]
})
export class CurrenciesSettingsModule { }
