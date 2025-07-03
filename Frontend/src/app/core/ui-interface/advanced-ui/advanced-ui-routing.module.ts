import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedUiComponent } from './advanced-ui.component';

const routes: Routes = [{ path: '', component: AdvancedUiComponent,
  children: [

    {
      path: 'clipboards',
      loadChildren: () =>
        import('./clipboards/clipboards.module').then(
          (m) => m.ClipboardsModule
        ),
    },
    {
      path: 'drag-drop',
      loadChildren: () =>
        import('./drap-drop/drap-drop.module').then((m) => m.DrapDropModule),
    },
    {
      path: 'rating',
      loadChildren: () =>
        import('./rating/rating.module').then((m) => m.RatingModule),
    },
    {
      path: 'text-editor',
      loadChildren: () =>
        import('./text-editor/text-editor.module').then(
          (m) => m.TextEditorModule
        ),
    },
    {
      path: 'counter',
      loadChildren: () =>
        import('./counter/counter.module').then((m) => m.CounterModule),
    },
    {
      path: 'scrollbar',
      loadChildren: () =>
        import('./scrollbar/scrollbar.module').then((m) => m.ScrollbarModule),
    },
    {
      path: 'light-box',
      loadChildren: () =>
        import('./lightbox/lightbox.module').then((m) => m.LightboxModule),
    },
    {
      path: 'range-slider',
      loadChildren: () =>
        import('./rangeslider/rangeslider.module').then(
          (m) => m.RangesliderModule
        ),
      },
  ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedUiRoutingModule { }
