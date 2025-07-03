import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsSettingsRoutingModule } from './notifications-settings-routing.module';
import { NotificationsSettingsComponent } from './notifications-settings.component';


@NgModule({
  declarations: [
    NotificationsSettingsComponent
  ],
  imports: [
    CommonModule,
    NotificationsSettingsRoutingModule
  ]
})
export class NotificationsSettingsModule { }
