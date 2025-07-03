import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsGatewaysSettingsComponent } from './sms-gateways-settings.component';

const routes: Routes = [{ path: '', component: SmsGatewaysSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsGatewaysSettingsRoutingModule { }
