import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanIpAddressSettingsComponent } from './ban-ip-address-settings.component';

const routes: Routes = [{ path: '', component: BanIpAddressSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanIpAddressSettingsRoutingModule { }
