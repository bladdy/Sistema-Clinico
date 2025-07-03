import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailTemplatesSettingsRoutingModule } from './email-templates-settings-routing.module';
import { EmailTemplatesSettingsComponent } from './email-templates-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [
    EmailTemplatesSettingsComponent
  ],
  imports: [
    CommonModule,
    EmailTemplatesSettingsRoutingModule,
    SharedModule,
    TagInputModule
  ]
})
export class EmailTemplatesSettingsModule { }
