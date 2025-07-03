import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-email-templates-settings',
  standalone: false,
  templateUrl: './email-templates-settings.component.html',
  styleUrl: './email-templates-settings.component.scss'
})
export class EmailTemplatesSettingsComponent {
  tags=['{Company Name}', '{Customer Name}', '{Clinic Name}', '{User Email}', '{Invoice ID}', '{Date}', '{Support Email}', '{Phone Number}', '{Invoice Amount}', '{Shipping Address}', '{Billing Address}', '{Doctor Name}', '{Patient Name}'];
    editor!: Editor;
  editor1!: Editor;
  toolbar: Toolbar = [
    ['bold', 'italic', 'format_clear'],
    ['underline', 'strike'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['image'],
    ['link'],
  ];
  ngOnInit(): void {
    this.editor = new Editor();
    this.editor1 = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
    this.editor1.destroy();
  }
}
