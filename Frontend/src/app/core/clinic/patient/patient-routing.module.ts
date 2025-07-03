import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './patient.component';

const routes: Routes = [
  { path: '', 
    component: PatientComponent,
    children:[
      { path: 'patient-grid', loadChildren: () => import('./patient-grid/patient-grid.module').then(m => m.PatientGridModule) },
      { path: 'patient-list', loadChildren: () => import('./patient-list/patient-list.module').then(m => m.PatientListModule) },
      { path: 'patient-details', loadChildren: () => import('./patient-details/patient-details.module').then(m => m.PatientDetailsModule) },
      { path: 'create-patient', loadChildren: () => import('./create-patient/create-patient.module').then(m => m.CreatePatientModule) },
      { path: 'edit-patient', loadChildren: () => import('./edit-patient/edit-patient.module').then(m => m.EditPatientModule) },
    ]
  },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
