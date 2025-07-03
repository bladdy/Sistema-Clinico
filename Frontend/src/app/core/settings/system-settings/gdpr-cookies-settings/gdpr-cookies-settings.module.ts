import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GdprCookiesSettingsRoutingModule } from './gdpr-cookies-settings-routing.module';
import { GdprCookiesSettingsComponent } from './gdpr-cookies-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GdprCookiesSettingsComponent
  ],
  imports: [
    CommonModule,
    GdprCookiesSettingsRoutingModule,
    SharedModule
  ]
})
export class GdprCookiesSettingsModule { }
