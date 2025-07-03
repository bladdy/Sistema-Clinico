import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  { path: '', 
    component: DoctorComponent,
    children:[
      { path: 'doctor-grid', loadChildren: () => import('./doctor-grid/doctor-grid.module').then(m => m.DoctorGridModule) },
      { path: 'doctor-list', loadChildren: () => import('./doctor-list/doctor-list.module').then(m => m.DoctorListModule) },
      { path: 'doctor-details', loadChildren: () => import('./doctor-details/doctor-details.module').then(m => m.DoctorDetailsModule) },
      { path: 'add-doctor', loadChildren: () => import('./add-doctor/add-doctor.module').then(m => m.AddDoctorModule) },
      { path: 'doctor-schedule', loadChildren: () => import('./doctor-schedule/doctor-schedule.module').then(m => m.DoctorScheduleModule) }, 
      { path: 'edit-doctor', loadChildren: () => import('./edit-doctor/edit-doctor.module').then(m => m.EditDoctorModule) },
    ]
   },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
