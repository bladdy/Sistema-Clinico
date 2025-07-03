import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmsTemplatesSettingsRoutingModule } from './sms-templates-settings-routing.module';
import { SmsTemplatesSettingsComponent } from './sms-templates-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    SmsTemplatesSettingsComponent
  ],
  imports: [
    CommonModule,
    SmsTemplatesSettingsRoutingModule,
    SharedModule,
    TagInputModule
  ]
})
export class SmsTemplatesSettingsModule { }
