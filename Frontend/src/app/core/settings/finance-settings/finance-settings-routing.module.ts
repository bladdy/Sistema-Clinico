import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceSettingsComponent } from './finance-settings.component';

const routes: Routes = [
  { path: '',
    component: FinanceSettingsComponent,
    children:[
      { path: 'payment-methods-settings', loadChildren: () => import('./payment-methods-settings/payment-methods-settings.module').then(m => m.PaymentMethodsSettingsModule) },
      { path: 'bank-accounts-settings', loadChildren: () => import('./bank-accounts-settings/bank-accounts-settings.module').then(m => m.BankAccountsSettingsModule) },
      { path: 'tax-rates-settings', loadChildren: () => import('./tax-rates-settings/tax-rates-settings.module').then(m => m.TaxRatesSettingsModule) },
      { path: 'currencies-settings', loadChildren: () => import('./currencies-settings/currencies-settings.module').then(m => m.CurrenciesSettingsModule) }
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceSettingsRoutingModule { }
