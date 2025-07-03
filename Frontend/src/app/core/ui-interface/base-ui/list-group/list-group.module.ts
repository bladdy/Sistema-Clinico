import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListGroupRoutingModule } from './list-group-routing.module';
import { ListGroupComponent } from './list-group.component';


@NgModule({
  declarations: [
    ListGroupComponent
  ],
  imports: [
    CommonModule,
    ListGroupRoutingModule
  ]
})
export class ListGroupModule { }
