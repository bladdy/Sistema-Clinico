import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientPrescriptionDetailsComponent } from './patient-prescription-details.component';

const routes: Routes = [{ path: '', component: PatientPrescriptionDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientPrescriptionDetailsRoutingModule { }
