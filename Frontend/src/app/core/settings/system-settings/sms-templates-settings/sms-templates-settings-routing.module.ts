import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmsTemplatesSettingsComponent } from './sms-templates-settings.component';

const routes: Routes = [{ path: '', component: SmsTemplatesSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsTemplatesSettingsRoutingModule { }
