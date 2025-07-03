import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignaturesSettingsRoutingModule } from './signatures-settings-routing.module';
import { SignaturesSettingsComponent } from './signatures-settings.component';


@NgModule({
  declarations: [
    SignaturesSettingsComponent
  ],
  imports: [
    CommonModule,
    SignaturesSettingsRoutingModule
  ]
})
export class SignaturesSettingsModule { }
