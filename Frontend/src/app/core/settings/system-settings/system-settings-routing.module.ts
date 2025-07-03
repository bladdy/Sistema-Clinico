import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemSettingsComponent } from './system-settings.component';

const routes: Routes = [
  { path: '', 
    component: SystemSettingsComponent,
    children:[
      { path: 'email-settings', loadChildren: () => import('./email-settings/email-settings.module').then(m => m.EmailSettingsModule) },
      { path: 'email-templates-settings', loadChildren: () => import('./email-templates-settings/email-templates-settings.module').then(m => m.EmailTemplatesSettingsModule) },
      { path: 'sms-gateways-settings', loadChildren: () => import('./sms-gateways-settings/sms-gateways-settings.module').then(m => m.SmsGatewaysSettingsModule) },
      { path: 'sms-templates-settings', loadChildren: () => import('./sms-templates-settings/sms-templates-settings.module').then(m => m.SmsTemplatesSettingsModule) },
      { path: 'gdpr-cookies-settings', loadChildren: () => import('./gdpr-cookies-settings/gdpr-cookies-settings.module').then(m => m.GdprCookiesSettingsModule) }
    ]
   }, 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemSettingsRoutingModule { }
