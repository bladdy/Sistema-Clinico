import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorizontalFormRoutingModule } from './horizontal-form-routing.module';
import { HorizontalFormComponent } from './horizontal-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HorizontalFormComponent
  ],
  imports: [
    CommonModule,
    HorizontalFormRoutingModule,
  SharedModule  
]
})
export class HorizontalFormModule { }
