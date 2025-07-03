import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GdprCookiesSettingsComponent } from './gdpr-cookies-settings.component';

const routes: Routes = [{ path: '', component: GdprCookiesSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GdprCookiesSettingsRoutingModule { }
