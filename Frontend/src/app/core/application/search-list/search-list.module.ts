import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchListRoutingModule } from './search-list-routing.module';
import { SearchListComponent } from './search-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SearchListComponent
  ],
  imports: [
    CommonModule,
    SearchListRoutingModule,
    SharedModule
  ]
})
export class SearchListModule { }
