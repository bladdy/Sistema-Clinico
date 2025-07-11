import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: 'basic-inputs',
        loadChildren: () =>
          import('./basic-inputs/basic-inputs.module').then(
            (m) => m.BasicInputsModule
          ),
      },
      {
        path: 'horizontal-form',
        loadChildren: () =>
          import('./horizontal-form/horizontal-form.module').then((m) => m.HorizontalFormModule),
      },
      {
        path: 'vertical-form',
        loadChildren: () =>
          import('./vertical-form/vertical-form.module').then(
            (m) => m.VerticalFormModule
          ),
      },
      {
        path: 'form-mask',
        loadChildren: () =>
          import('./form-mask/form-mask.module').then((m) => m.FormMaskModule),
      },
      {
        path: 'form-validation',
        loadChildren: () =>
          import('./form-validation/form-validation.module').then(
            (m) => m.FormValidationModule
          ),
      },
      {
        path: 'input-groups',
        loadChildren: () =>
          import('./input-groups/input-groups.module').then(
            (m) => m.InputGroupsModule
          ),
      },
      {
        path: 'file-upload',
        loadChildren: () =>
          import('./form-fileupload/form-fileupload.module').then(
            (m) => m.FormFileuploadModule
          ),
      },
      { path: 'form-checkbox-radios', loadChildren: () => import('./form-checkbox-radios/form-checkbox-radios.module').then(m => m.FormCheckboxRadiosModule) },
      { path: 'form-grid-gutters', loadChildren: () => import('./form-grid-gutters/form-grid-gutters.module').then(m => m.FormGridGuttersModule) },
      {
        path: 'form-pickers',
        loadChildren: () =>
          import('./form-pickers/form-pickers.module').then(
            (m) => m.FormPickersModule
          ),
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsRoutingModule {}
