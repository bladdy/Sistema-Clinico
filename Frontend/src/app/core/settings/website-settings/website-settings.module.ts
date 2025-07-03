import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteSettingsRoutingModule } from './website-settings-routing.module';
import { WebsiteSettingsComponent } from './website-settings.component';


@NgModule({
  declarations: [
    WebsiteSettingsComponent
  ],
  imports: [
    CommonModule,
    WebsiteSettingsRoutingModule
  ]
})
export class WebsiteSettingsModule { }
