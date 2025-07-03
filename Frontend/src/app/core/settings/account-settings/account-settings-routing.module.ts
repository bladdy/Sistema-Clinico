import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './account-settings.component';

const routes: Routes = [
  { path: '', 
    component: AccountSettingsComponent,
    children:[
  { path: 'profile-settings', loadChildren: () => import('./profile-settings/profile-settings.module').then(m => m.ProfileSettingsModule) },
  { path: 'security-settings', loadChildren: () => import('./security-settings/security-settings.module').then(m => m.SecuritySettingsModule) },
  { path: 'notifications-settings', loadChildren: () => import('./notifications-settings/notifications-settings.module').then(m => m.NotificationsSettingsModule) },
  { path: 'integrations-settings', loadChildren: () => import('./integrations-settings/integrations-settings.module').then(m => m.IntegrationsSettingsModule) }
    ]
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingsRoutingModule { }
