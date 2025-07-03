import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientInvoiceDetailsComponent } from './patient-invoice-details.component';

const routes: Routes = [{ path: '', component: PatientInvoiceDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientInvoiceDetailsRoutingModule { }
