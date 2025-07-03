import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogCommentsRoutingModule } from './blog-comments-routing.module';
import { BlogCommentsComponent } from './blog-comments.component';


@NgModule({
  declarations: [
    BlogCommentsComponent
  ],
  imports: [
    CommonModule,
    BlogCommentsRoutingModule
  ]
})
export class BlogCommentsModule { }
