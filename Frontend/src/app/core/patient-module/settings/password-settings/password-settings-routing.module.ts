import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordSettingsComponent } from './password-settings.component';

const routes: Routes = [{ path: '', component: PasswordSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordSettingsRoutingModule { }
