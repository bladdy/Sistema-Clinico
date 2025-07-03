import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntegrationsSettingsComponent } from './integrations-settings.component';

const routes: Routes = [{ path: '', component: IntegrationsSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationsSettingsRoutingModule { }
