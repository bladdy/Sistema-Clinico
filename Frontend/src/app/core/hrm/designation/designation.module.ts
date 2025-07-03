import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationRoutingModule } from './designation-routing.module';
import { DesignationComponent } from './designation.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    DesignationComponent
  ],
  imports: [
    CommonModule,
    DesignationRoutingModule,
    SharedModule,
    MultiSelectModule
  ]
})
export class DesignationModule { }
