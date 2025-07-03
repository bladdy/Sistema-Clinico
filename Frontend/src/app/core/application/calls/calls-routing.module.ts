import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallsComponent } from './calls.component';

const routes: Routes = [
  {
    path: '',
    component: CallsComponent,
    children: [
      {
        path: 'voice-call',
        loadChildren: () =>
          import('./voice-call/voice-call.module').then(
            (m) => m.VoiceCallModule,
          ),
      },
      {
        path: 'video-call',
        loadChildren: () =>
          import('./video-call/video-call.module').then(
            (m) => m.VideoCallModule,
          ),
      },
      {
        path: 'outgoing-call',
        loadChildren: () =>
          import('./outgoing-call/outgoing-call.module').then(
            (m) => m.OutgoingCallModule,
          ),
      },
      {
        path: 'incoming-call',
        loadChildren: () =>
          import('./incoming-call/incoming-call.module').then(
            (m) => m.IncomingCallModule,
          ),
      },
      {
        path: 'call-history',
        loadChildren: () =>
          import('./call-history/call-history.module').then(
            (m) => m.CallHistoryModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallsRoutingModule {}
