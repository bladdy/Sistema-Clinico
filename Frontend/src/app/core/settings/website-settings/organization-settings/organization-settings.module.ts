import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationSettingsRoutingModule } from './organization-settings-routing.module';
import { OrganizationSettingsComponent } from './organization-settings.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OrganizationSettingsComponent
  ],
  imports: [
    CommonModule,
    OrganizationSettingsRoutingModule,
    SharedModule
  ]
})
export class OrganizationSettingsModule { }
