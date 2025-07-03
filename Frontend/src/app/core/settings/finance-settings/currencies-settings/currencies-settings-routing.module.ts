import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrenciesSettingsComponent } from './currencies-settings.component';

const routes: Routes = [{ path: '', component: CurrenciesSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrenciesSettingsRoutingModule { }
