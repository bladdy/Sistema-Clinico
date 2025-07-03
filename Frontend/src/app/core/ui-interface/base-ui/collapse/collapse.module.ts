import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseRoutingModule } from './collapse-routing.module';
import { CollapseComponent } from './collapse.component';


@NgModule({
  declarations: [
    CollapseComponent
  ],
  imports: [
    CommonModule,
    CollapseRoutingModule
  ]
})
export class CollapseModule { }
