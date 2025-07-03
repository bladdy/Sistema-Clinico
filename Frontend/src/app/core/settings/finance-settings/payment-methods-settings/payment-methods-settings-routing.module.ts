import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentMethodsSettingsComponent } from './payment-methods-settings.component';

const routes: Routes = [{ path: '', component: PaymentMethodsSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentMethodsSettingsRoutingModule { }
