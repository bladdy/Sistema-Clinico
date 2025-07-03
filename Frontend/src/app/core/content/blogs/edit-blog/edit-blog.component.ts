import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-edit-blog',
  standalone: false,
  templateUrl: './edit-blog.component.html',
  styleUrl: './edit-blog.component.scss'
})
export class EditBlogComponent {
routes=routes
tags=['Preventive Care'];
    editor!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'format_clear'],
    ['underline', 'strike'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
    ['link'],
  ];
ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
