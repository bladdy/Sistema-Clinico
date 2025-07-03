import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecializationsRoutingModule } from './specializations-routing.module';
import { SpecializationsComponent } from './specializations.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    SpecializationsComponent
  ],
  imports: [
    CommonModule,
    SpecializationsRoutingModule,
    SharedModule,
    MultiSelectModule
  ]
})
export class SpecializationsModule { }
