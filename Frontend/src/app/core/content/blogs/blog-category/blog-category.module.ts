import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogCategoryRoutingModule } from './blog-category-routing.module';
import { BlogCategoryComponent } from './blog-category.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlogCategoryComponent
  ],
  imports: [
    CommonModule,
    BlogCategoryRoutingModule,
    SharedModule
  ]
})
export class BlogCategoryModule { }
