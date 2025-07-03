import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-file-manager',
  standalone: false,
  templateUrl: './file-manager.component.html',
  styleUrl: './file-manager.component.scss'
})
export class FileManagerComponent {
	routes=routes
public folderCarousel:OwlOptions= {
  loop:true,
margin:15,
items:2,
nav:false,
dots: false,
navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
responsive:{
  0: {
  items: 1
},
768: {
  items: 2
},
1200: {
  items: 3
}
}
}
public fileCarousel:OwlOptions= {
      items: 3,
			loop:true,
			margin:15,
			nav:false,
			dots: false,
			smartSpeed: 1000,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
			responsive:{
				0: {
					items: 1
				},
				768: {
					items: 3
				},
				1200: {
					items: 3
				}
			}
}
}
