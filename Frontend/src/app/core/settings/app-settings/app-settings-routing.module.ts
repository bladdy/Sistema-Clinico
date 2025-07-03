import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSettingsComponent } from './app-settings.component';

const routes: Routes = [
  { path: '', 
    component: AppSettingsComponent,
  children:[
    { path: 'invoice-settings', loadChildren: () => import('./invoice-settings/invoice-settings.module').then(m => m.InvoiceSettingsModule) },
     { path: 'invoice-templates-settings', loadChildren: () => import('./invoice-templates-settings/invoice-templates-settings.module').then(m => m.InvoiceTemplatesSettingsModule) },
     { path: 'signatures-settings', loadChildren: () => import('./signatures-settings/signatures-settings.module').then(m => m.SignaturesSettingsModule) },
     { path: 'custom-fields-settings', loadChildren: () => import('./custom-fields-settings/custom-fields-settings.module').then(m => m.CustomFieldsSettingsModule) }, 
  ] 
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSettingsRoutingModule { }
