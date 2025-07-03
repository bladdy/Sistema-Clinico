import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'index',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'application',
        loadChildren: () =>
          import('./application/application.module').then(
            (m) => m.ApplicationModule,
          ),
      },
      {
        path: 'base-ui',
        loadChildren: () =>
          import('./ui-interface/base-ui/base-ui.module').then(
            (m) => m.BaseUIModule,
          ),
      },
      {
        path: 'advanced-ui',
        loadChildren: () =>
          import('./ui-interface/advanced-ui/advanced-ui.module').then(
            (m) => m.AdvancedUiModule,
          ),
      },

      {
        path: 'maps',
        loadChildren: () =>
          import('./ui-interface/maps/maps.module').then((m) => m.MapsModule),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./ui-interface/tables/tables.module').then(
            (m) => m.TablesModule,
          ),
      },
      {
        path: 'icon',
        loadChildren: () =>
          import('./ui-interface/icon/icon.module').then((m) => m.IconModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./ui-interface/forms/forms.module').then(
            (m) => m.FormsModule,
          ),
      },
      {
        path: 'chart',
        loadChildren: () =>
          import('./ui-interface/charts/charts.module').then(
            (m) => m.ChartsModule,
          ),
      },

    
     


      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      
        { path: 'doctors', loadChildren: () => import('./doctor-module/doctor-module.module').then(m => m.DoctorModuleModule) },
  { path: 'patients', loadChildren: () => import('./patient-module/patient-module.module').then(m => m.PatientModuleModule) },
  //clinic
    { path: 'doctor', loadChildren: () => import('./clinic/doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'patient', loadChildren: () => import('./clinic/patient/patient.module').then(m => m.PatientModule) },
  { path: 'appointment', loadChildren: () => import('./clinic/appointment/appointment.module').then(m => m.AppointmentModule) },
  { path: 'locations', loadChildren: () => import('./clinic/locations/locations.module').then(m => m.LocationsModule) },
  { path: 'services', loadChildren: () => import('./clinic/services/services.module').then(m => m.ServicesModule) },
  { path: 'assets', loadChildren: () => import('./clinic/assets/assets.module').then(m => m.AssetsModule) },
  { path: 'activities', loadChildren: () => import('./clinic/activites/activites.module').then(m => m.ActivitesModule) },
  { path: 'messages', loadChildren: () => import('./clinic/messages/messages.module').then(m => m.MessagesModule) },
  { path: 'specializations', loadChildren: () => import('./clinic/specializations/specializations.module').then(m => m.SpecializationsModule) },
  { path: 'reports', loadChildren: () => import('./administration/reports/reports.module').then(m => m.ReportsModule) },
  { path: 'users', loadChildren: () => import('./administration/users/users.module').then(m => m.UsersModule) },
  //hrm
  { path: 'staffs', loadChildren: () => import('./hrm/staffs/staffs.module').then(m => m.StaffsModule) },
  { path: 'departments', loadChildren: () => import('./hrm/departments/departments.module').then(m => m.DepartmentsModule) },
  { path: 'designation', loadChildren: () => import('./hrm/designation/designation.module').then(m => m.DesignationModule) },
  { path: 'attendance', loadChildren: () => import('./hrm/attendance/attendance.module').then(m => m.AttendanceModule) },
  { path: 'holidays', loadChildren: () => import('./hrm/holidays/holidays.module').then(m => m.HolidaysModule) },
  { path: 'payroll', loadChildren: () => import('./hrm/payroll/payroll.module').then(m => m.PayrollModule) },
  { path: 'leaves', loadChildren: () => import('./hrm/leaves/leaves.module').then(m => m.LeavesModule) },
  { path: 'payroll-2', loadChildren: () => import('./hrm/payroll-2/payroll-2.module').then(m => m.Payroll2Module) },
  
  //Pages
  { path: 'starter', loadChildren: () => import('./pages/starter/starter.module').then(m => m.StarterModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'gallery', loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule) },
  { path: 'timeline', loadChildren: () => import('./pages/timeline/timeline.module').then(m => m.TimelineModule) },
  { path: 'pricing', loadChildren: () => import('./pages/pricing/pricing.module').then(m => m.PricingModule) },
  { path: 'privacy-policy', loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
  { path: 'terms-and-conditions', loadChildren: () => import('./pages/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsModule) },
  { path: 'payments', loadChildren: () => import('./finance/payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'transactions', loadChildren: () => import('./finance/transactions/transactions.module').then(m => m.TransactionsModule) },
  { path: 'income', loadChildren: () => import('./finance/income/income.module').then(m => m.IncomeModule) },
  { path: 'expenses', loadChildren: () => import('./finance/expenses/expenses.module').then(m => m.ExpensesModule) },
  { path: 'invoices', loadChildren: () => import('./finance/invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'pages', loadChildren: () => import('./content/pages/pages.module').then(m => m.PagesModule) },
   { path: 'add-page', loadChildren: () => import('./content/add-page/add-page.module').then(m => m.AddPageModule) },
  { path: 'edit-page', loadChildren: () => import('./content/edit-page/edit-page.module').then(m => m.EditPageModule) },
  { path: 'contact-messages', loadChildren: () => import('./support/contact-messages/contact-messages.module').then(m => m.ContactMessagesModule) },
   { path: 'tickets', loadChildren: () => import('./support/tickets/tickets.module').then(m => m.TicketsModule) },
    { path: 'ticket-details', loadChildren: () => import('./support/ticket-details/ticket-details.module').then(m => m.TicketDetailsModule) },
    { path: 'announcements', loadChildren: () => import('./support/announcements/announcements.module').then(m => m.AnnouncementsModule) },
  { path: 'newsletters', loadChildren: () => import('./support/newsletters/newsletters.module').then(m => m.NewslettersModule) },
        {
        path: 'layout-default',
        loadChildren: () =>
          import('./modal-dashboard/modal-dashboard.module').then(
            (m) => m.ModalDashboardModule,
          ),
      },
      {
        path: 'layout-single',
        loadChildren: () =>
          import('./modal-dashboard/modal-dashboard.module').then(
            (m) => m.ModalDashboardModule,
          ),
      },
      {
        path: 'layout-rtl',
        loadChildren: () =>
          import('./modal-dashboard/modal-dashboard.module').then(
            (m) => m.ModalDashboardModule,
          ),
      },
      {
        path: 'layout-mini',
        loadChildren: () =>
          import('./modal-dashboard/modal-dashboard.module').then(
            (m) => m.ModalDashboardModule,
          ),
      },
      {
        path: 'layout-hover-view',
        loadChildren: () =>
          import('./modal-dashboard/modal-dashboard.module').then(
            (m) => m.ModalDashboardModule,
          ),
      },
      {
        path: 'layout-hidden',
        loadChildren: () =>
          import('./modal-dashboard/modal-dashboard.module').then(
            (m) => m.ModalDashboardModule,
          ),
      },
      {
        path: 'layout-full-width',
        loadChildren: () =>
          import('./modal-dashboard/modal-dashboard.module').then(
            (m) => m.ModalDashboardModule,
          ),
      },
        { path: 'blogs', loadChildren: () => import('./content/blogs/blogs.module').then(m => m.BlogsModule) },
  { path: 'locations', loadChildren: () => import('./content/locations/locations.module').then(m => m.LocationsModule) },
  { path: 'testimonials', loadChildren: () => import('./content/testimonials/testimonials.module').then(m => m.TestimonialsModule) },
  { path: 'faq', loadChildren: () => import('./content/faq/faq.module').then(m => m.FaqModule) },
  { path: 'notifications', loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },
],
},
 
{ path: 'coming-soon', loadChildren: () => import('./pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule) },
{ path: 'under-maintenance', loadChildren: () => import('./pages/under-maintenance/under-maintenance.module').then(m => m.UnderMaintenanceModule) },

  
 
 
  
 
  
  
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
