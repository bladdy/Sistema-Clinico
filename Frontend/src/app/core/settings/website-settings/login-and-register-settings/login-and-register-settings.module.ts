import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAndRegisterSettingsRoutingModule } from './login-and-register-settings-routing.module';
import { LoginAndRegisterSettingsComponent } from './login-and-register-settings.component';


@NgModule({
  declarations: [
    LoginAndRegisterSettingsComponent
  ],
  imports: [
    CommonModule,
    LoginAndRegisterSettingsRoutingModule
  ]
})
export class LoginAndRegisterSettingsModule { }
