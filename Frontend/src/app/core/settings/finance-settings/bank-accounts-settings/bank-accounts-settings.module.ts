import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankAccountsSettingsRoutingModule } from './bank-accounts-settings-routing.module';
import { BankAccountsSettingsComponent } from './bank-accounts-settings.component';


@NgModule({
  declarations: [
    BankAccountsSettingsComponent
  ],
  imports: [
    CommonModule,
    BankAccountsSettingsRoutingModule
  ]
})
export class BankAccountsSettingsModule { }
