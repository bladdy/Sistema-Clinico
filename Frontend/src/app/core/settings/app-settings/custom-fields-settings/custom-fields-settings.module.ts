import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFieldsSettingsRoutingModule } from './custom-fields-settings-routing.module';
import { CustomFieldsSettingsComponent } from './custom-fields-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomFieldsSettingsComponent
  ],
  imports: [
    CommonModule,
    CustomFieldsSettingsRoutingModule,
    SharedModule
  ]
})
export class CustomFieldsSettingsModule { }
