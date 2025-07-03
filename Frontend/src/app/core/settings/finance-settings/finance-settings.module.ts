import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceSettingsRoutingModule } from './finance-settings-routing.module';
import { FinanceSettingsComponent } from './finance-settings.component';


@NgModule({
  declarations: [
    FinanceSettingsComponent
  ],
  imports: [
    CommonModule,
    FinanceSettingsRoutingModule
  ]
})
export class FinanceSettingsModule { }
