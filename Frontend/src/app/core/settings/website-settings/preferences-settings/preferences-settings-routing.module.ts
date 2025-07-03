import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreferencesSettingsComponent } from './preferences-settings.component';

const routes: Routes = [{ path: '', component: PreferencesSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferencesSettingsRoutingModule { }
