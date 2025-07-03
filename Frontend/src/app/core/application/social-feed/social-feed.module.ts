import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialFeedRoutingModule } from './social-feed-routing.module';
import { SocialFeedComponent } from './social-feed.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SocialFeedComponent
  ],
  imports: [
    CommonModule,
    SocialFeedRoutingModule,
    SharedModule
  ]
})
export class SocialFeedModule { }
