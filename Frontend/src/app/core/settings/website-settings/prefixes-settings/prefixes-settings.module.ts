import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrefixesSettingsRoutingModule } from './prefixes-settings-routing.module';
import { PrefixesSettingsComponent } from './prefixes-settings.component';


@NgModule({
  declarations: [
    PrefixesSettingsComponent
  ],
  imports: [
    CommonModule,
    PrefixesSettingsRoutingModule
  ]
})
export class PrefixesSettingsModule { }
