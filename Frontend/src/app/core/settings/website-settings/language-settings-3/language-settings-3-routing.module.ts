import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageSettings3Component } from './language-settings-3.component';

const routes: Routes = [{ path: '', component: LanguageSettings3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageSettings3RoutingModule { }
