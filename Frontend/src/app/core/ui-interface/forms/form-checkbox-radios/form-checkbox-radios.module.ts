import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCheckboxRadiosRoutingModule } from './form-checkbox-radios-routing.module';
import { FormCheckboxRadiosComponent } from './form-checkbox-radios.component';


@NgModule({
  declarations: [
    FormCheckboxRadiosComponent
  ],
  imports: [
    CommonModule,
    FormCheckboxRadiosRoutingModule
  ]
})
export class FormCheckboxRadiosModule { }
