import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CitiesComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
  SharedModule  ]
})
export class CitiesModule { }
