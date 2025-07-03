import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemUpdateRoutingModule } from './system-update-routing.module';
import { SystemUpdateComponent } from './system-update.component';


@NgModule({
  declarations: [
    SystemUpdateComponent
  ],
  imports: [
    CommonModule,
    SystemUpdateRoutingModule
  ]
})
export class SystemUpdateModule { }
