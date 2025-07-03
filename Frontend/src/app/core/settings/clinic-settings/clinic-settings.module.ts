import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicSettingsRoutingModule } from './clinic-settings-routing.module';
import { ClinicSettingsComponent } from './clinic-settings.component';


@NgModule({
  declarations: [
    ClinicSettingsComponent
  ],
  imports: [
    CommonModule,
    ClinicSettingsRoutingModule
  ]
})
export class ClinicSettingsModule { }
