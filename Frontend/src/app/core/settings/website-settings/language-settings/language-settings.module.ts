import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageSettingsRoutingModule } from './language-settings-routing.module';
import { LanguageSettingsComponent } from './language-settings.component';


@NgModule({
  declarations: [
    LanguageSettingsComponent
  ],
  imports: [
    CommonModule,
    LanguageSettingsRoutingModule
  ]
})
export class LanguageSettingsModule { }
