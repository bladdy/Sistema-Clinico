import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitemapSettingsComponent } from './sitemap-settings.component';

const routes: Routes = [{ path: '', component: SitemapSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitemapSettingsRoutingModule { }
