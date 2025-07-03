import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanIpAddressSettingsRoutingModule } from './ban-ip-address-settings-routing.module';
import { BanIpAddressSettingsComponent } from './ban-ip-address-settings.component';


@NgModule({
  declarations: [
    BanIpAddressSettingsComponent
  ],
  imports: [
    CommonModule,
    BanIpAddressSettingsRoutingModule
  ]
})
export class BanIpAddressSettingsModule { }
