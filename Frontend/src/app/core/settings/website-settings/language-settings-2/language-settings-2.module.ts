import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageSettings2RoutingModule } from './language-settings-2-routing.module';
import { LanguageSettings2Component } from './language-settings-2.component';


@NgModule({
  declarations: [
    LanguageSettings2Component
  ],
  imports: [
    CommonModule,
    LanguageSettings2RoutingModule
  ]
})
export class LanguageSettings2Module { }
