import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsComponent } from './reports.component';

const routes: Routes = [
  { path: '',
    component: ReportsComponent,
    children:[
      { path: 'income-report', loadChildren: () => import('./income-report/income-report.module').then(m => m.IncomeReportModule) },
      { path: 'expense-report', loadChildren: () => import('./expense-report/expense-report.module').then(m => m.ExpenseReportModule) },
      { path: 'profit-and-loss', loadChildren: () => import('./profit-and-loss/profit-and-loss.module').then(m => m.ProfitAndLossModule) },
      { path: 'patient-report', loadChildren: () => import('./patient-report/patient-report.module').then(m => m.PatientReportModule) },
      { path: 'appointment-report', loadChildren: () => import('./appointment-report/appointment-report.module').then(m => m.AppointmentReportModule) }
    ]
   }, 
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
