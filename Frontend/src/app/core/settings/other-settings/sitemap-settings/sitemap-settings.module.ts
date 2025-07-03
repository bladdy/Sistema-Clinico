import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitemapSettingsRoutingModule } from './sitemap-settings-routing.module';
import { SitemapSettingsComponent } from './sitemap-settings.component';


@NgModule({
  declarations: [
    SitemapSettingsComponent
  ],
  imports: [
    CommonModule,
    SitemapSettingsRoutingModule
  ]
})
export class SitemapSettingsModule { }
