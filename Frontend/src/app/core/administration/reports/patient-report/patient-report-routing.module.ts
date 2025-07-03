import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientReportComponent } from './patient-report.component';

const routes: Routes = [{ path: '', component: PatientReportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientReportRoutingModule { }
