import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorModuleComponent } from './doctor-module.component';

const routes: Routes = [
  { path: '', 
    component: DoctorModuleComponent,
    children:[
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'appointments', loadChildren: () => import('./appointments/appointments/appointments.module').then(m => m.AppointmentsModule) },
      { path: 'online-consultations', loadChildren: () => import('./appointments/online-consultations/online-consultations.module').then(m => m.OnlineConsultationsModule) },
        { path: 'schedules', loadChildren: () => import('./schedules/schedules.module').then(m => m.SchedulesModule) },
  { path: 'prescriptions', loadChildren: () => import('./prescriptions/prescriptions.module').then(m => m.PrescriptionsModule) },
  { path: 'leaves', loadChildren: () => import('./leaves/leaves.module').then(m => m.LeavesModule) },
  { path: 'reviews', loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule) },
  { path: 'profile-settings', loadChildren: () => import('./settings/profile-settings/profile-settings.module').then(m => m.ProfileSettingsModule) },
  { path: 'password-settings', loadChildren: () => import('./settings/password-settings/password-settings.module').then(m => m.PasswordSettingsModule) },
  { path: 'notification-settings', loadChildren: () => import('./settings/notification-settings/notification-settings.module').then(m => m.NotificationSettingsModule) }, 
  { path: 'prescription-details', loadChildren: () => import('./prescription-details/prescription-details.module').then(m => m.PrescriptionDetailsModule) },
  { path: 'doctor-patient-details', loadChildren: () => import('./appointments/doctor-patient-details/doctor-patient-details.module').then(m => m.DoctorPatientDetailsModule) },
  { path: 'patient-appointment-details', loadChildren: () => import('./appointments/patient-appointment-details/patient-appointment-details.module').then(m => m.PatientAppointmentDetailsModule) },
    ]
   },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorModuleRoutingModule { }
