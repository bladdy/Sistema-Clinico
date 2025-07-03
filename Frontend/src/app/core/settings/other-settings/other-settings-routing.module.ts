import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherSettingsComponent } from './other-settings.component';

const routes: Routes = [
  { path: '', 
    component: OtherSettingsComponent,
    children:[
      { path: 'sitemap-settings', loadChildren: () => import('./sitemap-settings/sitemap-settings.module').then(m => m.SitemapSettingsModule) },
      { path: 'clear-cache-settings', loadChildren: () => import('./clear-cache-settings/clear-cache-settings.module').then(m => m.ClearCacheSettingsModule) },
      { path: 'storage-settings', loadChildren: () => import('./storage-settings/storage-settings.module').then(m => m.StorageSettingsModule) },
      { path: 'cronjob-settings', loadChildren: () => import('./cronjob-settings/cronjob-settings.module').then(m => m.CronjobSettingsModule) },
      { path: 'ban-ip-address-settings', loadChildren: () => import('./ban-ip-address-settings/ban-ip-address-settings.module').then(m => m.BanIpAddressSettingsModule) },
      { path: 'system-backup-settings', loadChildren: () => import('./system-backup-settings/system-backup-settings.module').then(m => m.SystemBackupSettingsModule) },
      { path: 'database-backup-settings', loadChildren: () => import('./database-backup-settings/database-backup-settings.module').then(m => m.DatabaseBackupSettingsModule) }, 
      { path: 'system-update', loadChildren: () => import('./system-update/system-update.module').then(m => m.SystemUpdateModule) }
    ]
   }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherSettingsRoutingModule { }
