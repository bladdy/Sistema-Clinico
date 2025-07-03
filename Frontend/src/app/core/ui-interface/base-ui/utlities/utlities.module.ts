import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtlitiesRoutingModule } from './utlities-routing.module';
import { UtlitiesComponent } from './utlities.component';


@NgModule({
  declarations: [
    UtlitiesComponent
  ],
  imports: [
    CommonModule,
    UtlitiesRoutingModule
  ]
})
export class UtlitiesModule { }
