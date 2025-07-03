import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAndRegisterSettingsComponent } from './login-and-register-settings.component';

const routes: Routes = [{ path: '', component: LoginAndRegisterSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAndRegisterSettingsRoutingModule { }
