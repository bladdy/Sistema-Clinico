import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatioRoutingModule } from './ratio-routing.module';
import { RatioComponent } from './ratio.component';


@NgModule({
  declarations: [
    RatioComponent
  ],
  imports: [
    CommonModule,
    RatioRoutingModule
  ]
})
export class RatioModule { }
