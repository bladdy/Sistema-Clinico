import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkingHoursSettingsRoutingModule } from './working-hours-settings-routing.module';
import { WorkingHoursSettingsComponent } from './working-hours-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WorkingHoursSettingsComponent
  ],
  imports: [
    CommonModule,
    WorkingHoursSettingsRoutingModule,
    SharedModule
  ]
})
export class WorkingHoursSettingsModule { }
