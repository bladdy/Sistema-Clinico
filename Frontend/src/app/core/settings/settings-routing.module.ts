import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', component: SettingsComponent,
  children: [
    { path: 'account-settings', loadChildren: () => import('./account-settings/account-settings.module').then(m => m.AccountSettingsModule) },
    { path: 'website-settings', loadChildren: () => import('./website-settings/website-settings.module').then(m => m.WebsiteSettingsModule) },
    { path: 'app-settings', loadChildren: () => import('./app-settings/app-settings.module').then(m => m.AppSettingsModule) },
    { path: 'clinic-settings', loadChildren: () => import('./clinic-settings/clinic-settings.module').then(m => m.ClinicSettingsModule) },
    { path: 'system-settings', loadChildren: () => import('./system-settings/system-settings.module').then(m => m.SystemSettingsModule) },
    { path: 'finance-settings', loadChildren: () => import('./finance-settings/finance-settings.module').then(m => m.FinanceSettingsModule) },
    { path: 'other-settings', loadChildren: () => import('./other-settings/other-settings.module').then(m => m.OtherSettingsModule) },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
