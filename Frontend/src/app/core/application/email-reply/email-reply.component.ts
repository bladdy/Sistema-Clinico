import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
@Component({
  selector: 'app-email-reply',
  standalone: false,
  templateUrl: './email-reply.component.html',
  styleUrl: './email-reply.component.scss'
})
export class EmailReplyComponent {
routes=routes
show:boolean[]=[false];
toggleMenu(index:number):void{
    this.show[index]=!this.show[index]
}
  private lightGallery!: LightGallery;
  private needRefresh = false;
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { index, prevIndex } = detail;
  };
}
