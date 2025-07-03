import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsGatewaysSettingsRoutingModule } from './sms-gateways-settings-routing.module';
import { SmsGatewaysSettingsComponent } from './sms-gateways-settings.component';


@NgModule({
  declarations: [
    SmsGatewaysSettingsComponent
  ],
  imports: [
    CommonModule,
    SmsGatewaysSettingsRoutingModule
  ]
})
export class SmsGatewaysSettingsModule { }
