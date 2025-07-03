import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAccountsSettingsComponent } from './bank-accounts-settings.component';

const routes: Routes = [{ path: '', component: BankAccountsSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankAccountsSettingsRoutingModule { }
