import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronjobSettingsRoutingModule } from './cronjob-settings-routing.module';
import { CronjobSettingsComponent } from './cronjob-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    CronjobSettingsComponent
  ],
  imports: [
    CommonModule,
    CronjobSettingsRoutingModule,
    SharedModule,
    TagInputModule
    
  ]
})
export class CronjobSettingsModule { }
