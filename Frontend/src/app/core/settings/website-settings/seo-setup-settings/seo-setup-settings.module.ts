import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeoSetupSettingsRoutingModule } from './seo-setup-settings-routing.module';
import { SeoSetupSettingsComponent } from './seo-setup-settings.component';
import { TagInputModule } from 'ngx-chips';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SeoSetupSettingsComponent
  ],
  imports: [
    CommonModule,
    SeoSetupSettingsRoutingModule,
    SharedModule,
    TagInputModule
  ]
})
export class SeoSetupSettingsModule { }
