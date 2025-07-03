import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageSettings2Component } from './language-settings-2.component';

const routes: Routes = [{ path: '', component: LanguageSettings2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageSettings2RoutingModule { }
