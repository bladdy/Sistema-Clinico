import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceModeSettingsComponent } from './maintenance-mode-settings.component';

const routes: Routes = [{ path: '', component: MaintenanceModeSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceModeSettingsRoutingModule { }
