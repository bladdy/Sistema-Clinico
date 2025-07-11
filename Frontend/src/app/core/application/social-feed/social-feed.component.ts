import { Component } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { LightGallery } from 'lightgallery/lightgallery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-social-feed',
  standalone: false,
  templateUrl: './social-feed.component.html',
  styleUrl: './social-feed.component.scss'
})
export class SocialFeedComponent {
  routes=routes
  private lightGallery!: LightGallery;
  private needRefresh = false;
  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
  public notesSlider: OwlOptions = {
    loop: true,
    margin: 24,
    items:8,
    dots: false,
    nav: false,
    smartSpeed: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 8,
      },
      768: {
        items: 8,
      },
      1300: {
        items: 8,
      },
      1100: {
        items: 8,
      },
    },
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
