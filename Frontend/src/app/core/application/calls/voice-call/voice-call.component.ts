import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-voice-call',
  standalone: false,
  templateUrl: './voice-call.component.html',
  styleUrl: './voice-call.component.scss'
})
export class VoiceCallComponent {
routes=routes
}
