import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClearCacheSettingsRoutingModule } from './clear-cache-settings-routing.module';
import { ClearCacheSettingsComponent } from './clear-cache-settings.component';


@NgModule({
  declarations: [
    ClearCacheSettingsComponent
  ],
  imports: [
    CommonModule,
    ClearCacheSettingsRoutingModule
  ]
})
export class ClearCacheSettingsModule { }
