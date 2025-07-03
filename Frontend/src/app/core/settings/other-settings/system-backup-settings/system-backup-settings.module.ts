import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemBackupSettingsRoutingModule } from './system-backup-settings-routing.module';
import { SystemBackupSettingsComponent } from './system-backup-settings.component';


@NgModule({
  declarations: [
    SystemBackupSettingsComponent
  ],
  imports: [
    CommonModule,
    SystemBackupSettingsRoutingModule
  ]
})
export class SystemBackupSettingsModule { }
