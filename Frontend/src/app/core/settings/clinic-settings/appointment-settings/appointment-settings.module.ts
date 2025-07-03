import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentSettingsRoutingModule } from './appointment-settings-routing.module';
import { AppointmentSettingsComponent } from './appointment-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AppointmentSettingsComponent
  ],
  imports: [
    CommonModule,
    AppointmentSettingsRoutingModule,
    SharedModule
  ]
})
export class AppointmentSettingsModule { }
