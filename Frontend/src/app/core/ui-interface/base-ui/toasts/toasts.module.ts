import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastsRoutingModule } from './toasts-routing.module';
import { ToastsComponent } from './toasts.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ToastsComponent
  ],
  imports: [
    CommonModule,
    ToastsRoutingModule,
    ToastrModule.forRoot({
      timeOut:1000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates:true

    }),
    SharedModule
  ]
})
export class ToastsModule { }
