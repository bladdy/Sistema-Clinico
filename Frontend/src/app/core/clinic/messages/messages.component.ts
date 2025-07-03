import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
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
