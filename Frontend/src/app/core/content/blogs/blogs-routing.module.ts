import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  { path: '',
    component: BlogsComponent,
    children:[
      { path: 'add-blog', loadChildren: () => import('./add-blog/add-blog.module').then(m => m.AddBlogModule) }, { path: 'blog', loadChildren: () => import('./blog-list/blog-list.module').then(m => m.BlogListModule) }, { path: 'blog-details', loadChildren: () => import('./blog-details/blog-details.module').then(m => m.BlogDetailsModule) }, { path: 'blog-category', loadChildren: () => import('./blog-category/blog-category.module').then(m => m.BlogCategoryModule) }, { path: 'blog-comments', loadChildren: () => import('./blog-comments/blog-comments.module').then(m => m.BlogCommentsModule) },
      { path: 'edit-blog', loadChildren: () => import('./edit-blog/edit-blog.module').then(m => m.EditBlogModule) }, 
    ]
   },
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
