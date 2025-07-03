import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageSettings3RoutingModule } from './language-settings-3-routing.module';
import { LanguageSettings3Component } from './language-settings-3.component';


@NgModule({
  declarations: [
    LanguageSettings3Component
  ],
  imports: [
    CommonModule,
    LanguageSettings3RoutingModule
  ]
})
export class LanguageSettings3Module { }
