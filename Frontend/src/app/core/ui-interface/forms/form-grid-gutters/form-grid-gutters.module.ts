import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGridGuttersRoutingModule } from './form-grid-gutters-routing.module';
import { FormGridGuttersComponent } from './form-grid-gutters.component';


@NgModule({
  declarations: [
    FormGridGuttersComponent
  ],
  imports: [
    CommonModule,
    FormGridGuttersRoutingModule
  ]
})
export class FormGridGuttersModule { }
