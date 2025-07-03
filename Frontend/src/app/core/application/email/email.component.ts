import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.scss'],
    standalone: false
})
export class EmailComponent  {
    routes=routes
show=false;
toggleMenu():void{
    this.show=!this.show
}
}
