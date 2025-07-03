import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemBackupSettingsComponent } from './system-backup-settings.component';

const routes: Routes = [{ path: '', component: SystemBackupSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemBackupSettingsRoutingModule { }
