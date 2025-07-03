import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceModeSettingsRoutingModule } from './maintenance-mode-settings-routing.module';
import { MaintenanceModeSettingsComponent } from './maintenance-mode-settings.component';


@NgModule({
  declarations: [
    MaintenanceModeSettingsComponent
  ],
  imports: [
    CommonModule,
    MaintenanceModeSettingsRoutingModule
  ]
})
export class MaintenanceModeSettingsModule { }
