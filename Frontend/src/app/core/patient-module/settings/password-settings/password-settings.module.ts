import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordSettingsRoutingModule } from './password-settings-routing.module';
import { PasswordSettingsComponent } from './password-settings.component';


@NgModule({
  declarations: [
    PasswordSettingsComponent
  ],
  imports: [
    CommonModule,
    PasswordSettingsRoutingModule
  ]
})
export class PasswordSettingsModule { }
