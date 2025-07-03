import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientModuleComponent } from './patient-module.component';

const routes: Routes = [
  { path: '', 
    component: PatientModuleComponent,
    children:[
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'appointments', loadChildren: () => import('./appointments/appointments.module').then(m => m.AppointmentsModule) }, 
        { path: 'profile-settings', loadChildren: () => import('./settings/profile-settings/profile-settings.module').then(m => m.ProfileSettingsModule) },
  { path: 'password-settings', loadChildren: () => import('./settings/password-settings/password-settings.module').then(m => m.PasswordSettingsModule) },
  { path: 'notification-settings', loadChildren: () => import('./settings/notification-settings/notification-settings.module').then(m => m.NotificationSettingsModule) }, 
  { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'prescriptions', loadChildren: () => import('./prescriptions/prescriptions.module').then(m => m.PrescriptionsModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'patients-doctor-details', loadChildren: () => import('./patients-doctor-details/patients-doctor-details.module').then(m => m.PatientsDoctorDetailsModule) },
    ]
   },
  { path: 'patient-prescription-details', loadChildren: () => import('./patient-prescription-details/patient-prescription-details.module').then(m => m.PatientPrescriptionDetailsModule) },
  { path: 'patient-invoice-details', loadChildren: () => import('./patient-invoice-details/patient-invoice-details.module').then(m => m.PatientInvoiceDetailsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientModuleRoutingModule { }
