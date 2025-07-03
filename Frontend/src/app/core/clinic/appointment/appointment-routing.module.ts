import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment.component';

const routes: Routes = [{ path: '', component: AppointmentComponent }, { path: 'appointment-list', loadChildren: () => import('./appointment-list/appointment-list.module').then(m => m.AppointmentListModule) }, { path: 'new-appointment', loadChildren: () => import('./new-appointment/new-appointment.module').then(m => m.NewAppointmentModule) }, { path: 'appointment-calendar', loadChildren: () => import('./appointment-calendar/appointment-calendar.module').then(m => m.AppointmentCalendarModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
