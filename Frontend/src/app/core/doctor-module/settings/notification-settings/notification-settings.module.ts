import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationSettingsRoutingModule } from './notification-settings-routing.module';
import { NotificationSettingsComponent } from './notification-settings.component';


@NgModule({
  declarations: [
    NotificationSettingsComponent
  ],
  imports: [
    CommonModule,
    NotificationSettingsRoutingModule
  ]
})
export class NotificationSettingsModule { }
