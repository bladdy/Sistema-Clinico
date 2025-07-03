import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorModuleRoutingModule } from './doctor-module-routing.module';
import { DoctorModuleComponent } from './doctor-module.component';


@NgModule({
  declarations: [
    DoctorModuleComponent
  ],
  imports: [
    CommonModule,
    DoctorModuleRoutingModule
  ]
})
export class DoctorModuleModule { }
