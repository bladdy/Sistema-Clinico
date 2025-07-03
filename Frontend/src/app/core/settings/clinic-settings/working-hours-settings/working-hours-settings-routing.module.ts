import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkingHoursSettingsComponent } from './working-hours-settings.component';

const routes: Routes = [{ path: '', component: WorkingHoursSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkingHoursSettingsRoutingModule { }
