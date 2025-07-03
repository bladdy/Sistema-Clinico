import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KanbanViewRoutingModule } from './kanban-view-routing.module';
import { KanbanViewComponent } from './kanban-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    KanbanViewComponent
  ],
  imports: [
    CommonModule,
    KanbanViewRoutingModule,
    SharedModule,
        DragDropModule
  ]
})
export class KanbanViewModule { }
