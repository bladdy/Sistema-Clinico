import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientModuleRoutingModule } from './patient-module-routing.module';
import { PatientModuleComponent } from './patient-module.component';


@NgModule({
  declarations: [
    PatientModuleComponent
  ],
  imports: [
    CommonModule,
    PatientModuleRoutingModule
  ]
})
export class PatientModuleModule { }
