import { Component } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-search-list',
  standalone: false,
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.scss'
})
export class SearchListComponent {
  routes=routes
  private lightGallery!: LightGallery;
  private needRefresh = false;
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
    ngAfterViewInit() {
      if (this.needRefresh) {
        this.lightGallery.refresh();
        this.needRefresh = false;
      }
    }
    onInit = (detail: { instance: LightGallery }): void => {
      this.lightGallery = detail.instance;
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { index, prevIndex } = detail;
    };
}
