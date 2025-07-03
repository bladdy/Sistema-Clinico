import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrationsSettingsRoutingModule } from './integrations-settings-routing.module';
import { IntegrationsSettingsComponent } from './integrations-settings.component';


@NgModule({
  declarations: [
    IntegrationsSettingsComponent
  ],
  imports: [
    CommonModule,
    IntegrationsSettingsRoutingModule
  ]
})
export class IntegrationsSettingsModule { }
