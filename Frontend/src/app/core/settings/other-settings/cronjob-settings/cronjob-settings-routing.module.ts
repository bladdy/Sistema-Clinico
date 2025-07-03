import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CronjobSettingsComponent } from './cronjob-settings.component';

const routes: Routes = [{ path: '', component: CronjobSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CronjobSettingsRoutingModule { }
