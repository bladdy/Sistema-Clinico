import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancellationReasonSettingsRoutingModule } from './cancellation-reason-settings-routing.module';
import { CancellationReasonSettingsComponent } from './cancellation-reason-settings.component';


@NgModule({
  declarations: [
    CancellationReasonSettingsComponent
  ],
  imports: [
    CommonModule,
    CancellationReasonSettingsRoutingModule
  ]
})
export class CancellationReasonSettingsModule { }
