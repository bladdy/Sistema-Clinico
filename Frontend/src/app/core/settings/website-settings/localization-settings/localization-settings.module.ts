import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizationSettingsRoutingModule } from './localization-settings-routing.module';
import { LocalizationSettingsComponent } from './localization-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LocalizationSettingsComponent
  ],
  imports: [
    CommonModule,
    LocalizationSettingsRoutingModule,
    SharedModule
  ]
})
export class LocalizationSettingsModule { }
