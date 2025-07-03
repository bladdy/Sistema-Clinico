import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewslettersRoutingModule } from './newsletters-routing.module';
import { NewslettersComponent } from './newsletters.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewslettersComponent
  ],
  imports: [
    CommonModule,
    NewslettersRoutingModule,
    SharedModule
  ]
})
export class NewslettersModule { }
