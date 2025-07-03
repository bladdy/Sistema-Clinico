import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseBackupSettingsRoutingModule } from './database-backup-settings-routing.module';
import { DatabaseBackupSettingsComponent } from './database-backup-settings.component';


@NgModule({
  declarations: [
    DatabaseBackupSettingsComponent
  ],
  imports: [
    CommonModule,
    DatabaseBackupSettingsRoutingModule
  ]
})
export class DatabaseBackupSettingsModule { }
