import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseBackupSettingsComponent } from './database-backup-settings.component';

const routes: Routes = [{ path: '', component: DatabaseBackupSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseBackupSettingsRoutingModule { }
