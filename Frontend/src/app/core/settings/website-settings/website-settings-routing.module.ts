import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteSettingsComponent } from './website-settings.component';

const routes: Routes = [
  { path: '',
    component: WebsiteSettingsComponent,
    children:[
      { path: 'organization-settings', loadChildren: () => import('./organization-settings/organization-settings.module').then(m => m.OrganizationSettingsModule) },
      { path: 'localization-settings', loadChildren: () => import('./localization-settings/localization-settings.module').then(m => m.LocalizationSettingsModule) }, 
      { path: 'prefixes-settings', loadChildren: () => import('./prefixes-settings/prefixes-settings.module').then(m => m.PrefixesSettingsModule) },
      { path: 'seo-setup-settings', loadChildren: () => import('./seo-setup-settings/seo-setup-settings.module').then(m => m.SeoSetupSettingsModule) }, 
      { path: 'language-settings', loadChildren: () => import('./language-settings/language-settings.module').then(m => m.LanguageSettingsModule) }, 
      { path: 'language-settings-2', loadChildren: () => import('./language-settings-2/language-settings-2.module').then(m => m.LanguageSettings2Module) },
      { path: 'maintenance-mode-settings', loadChildren: () => import('./maintenance-mode-settings/maintenance-mode-settings.module').then(m => m.MaintenanceModeSettingsModule) },
      { path: 'login-and-register-settings', loadChildren: () => import('./login-and-register-settings/login-and-register-settings.module').then(m => m.LoginAndRegisterSettingsModule) },
      { path: 'preferences-settings', loadChildren: () => import('./preferences-settings/preferences-settings.module').then(m => m.PreferencesSettingsModule) }
    ]
   },
  { path: 'language-settings-3', loadChildren: () => import('./language-settings-3/language-settings-3.module').then(m => m.LanguageSettings3Module) }, 
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteSettingsRoutingModule { }
