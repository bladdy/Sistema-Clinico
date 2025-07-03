import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxRatesSettingsComponent } from './tax-rates-settings.component';

const routes: Routes = [{ path: '', component: TaxRatesSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxRatesSettingsRoutingModule { }
