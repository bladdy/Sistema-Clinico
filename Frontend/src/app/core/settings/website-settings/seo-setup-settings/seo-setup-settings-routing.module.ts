import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeoSetupSettingsComponent } from './seo-setup-settings.component';

const routes: Routes = [{ path: '', component: SeoSetupSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeoSetupSettingsRoutingModule { }
