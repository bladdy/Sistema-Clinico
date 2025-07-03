import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileManagerRoutingModule } from './file-manager-routing.module';
import { FileManagerComponent } from './file-manager.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FileManagerComponent
  ],
  imports: [
    CommonModule,
    FileManagerRoutingModule,
  SharedModule
  ]
})
export class FileManagerModule { }
