import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicSettingsComponent } from './clinic-settings.component';

const routes: Routes = [
  { path: '', 
    component: ClinicSettingsComponent,
    children:[
      { path: 'appointment-settings', loadChildren: () => import('./appointment-settings/appointment-settings.module').then(m => m.AppointmentSettingsModule) },
      { path: 'working-hours-settings', loadChildren: () => import('./working-hours-settings/working-hours-settings.module').then(m => m.WorkingHoursSettingsModule) },
      { path: 'cancellation-reason-settings', loadChildren: () => import('./cancellation-reason-settings/cancellation-reason-settings.module').then(m => m.CancellationReasonSettingsModule) }
    ]
   }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicSettingsRoutingModule { }
