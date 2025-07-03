import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencesSettingsRoutingModule } from './preferences-settings-routing.module';
import { PreferencesSettingsComponent } from './preferences-settings.component';


@NgModule({
  declarations: [
    PreferencesSettingsComponent
  ],
  imports: [
    CommonModule,
    PreferencesSettingsRoutingModule
  ]
})
export class PreferencesSettingsModule { }
