import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    standalone: false
})
export class ChatComponent {
  routes=routes
  public chatSearch = false;
  public emoji = false;
  showChatSearch(){
    this.chatSearch = !this.chatSearch;
  }
  toggleemoji(){
    this.emoji=!this.emoji
  }
}
