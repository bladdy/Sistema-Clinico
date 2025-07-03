import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentMethodsSettingsRoutingModule } from './payment-methods-settings-routing.module';
import { PaymentMethodsSettingsComponent } from './payment-methods-settings.component';


@NgModule({
  declarations: [
    PaymentMethodsSettingsComponent
  ],
  imports: [
    CommonModule,
    PaymentMethodsSettingsRoutingModule
  ]
})
export class PaymentMethodsSettingsModule { }
