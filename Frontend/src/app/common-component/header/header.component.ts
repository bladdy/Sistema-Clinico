import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { SettingsService } from 'src/app/shared/settings/settings.service';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {
  public routes = routes;
  public openBox = false;
  public miniSidebar  = false;
  public addClass = false;
 
 themeColor: 'light' | 'dark' = 'light';
  mobileSidebar=false;
  constructor(public router: Router,public sideBar: SideBarService,public settings:SettingsService) {
    this.sideBar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
  }

  openBoxFunc() {
    this.openBox = !this.openBox;
    /* eslint no-var: off */
    var mainWrapper = document.getElementsByClassName('main-wrapper')[0];
    if (this.openBox) {
      mainWrapper.classList.add('open-msg-box');
    } else {
      mainWrapper.classList.remove('open-msg-box');
    }
  }
  public toggleMobileIcon(): void {
    this.sideBar.switchMobileSideBarPosition();
    this.mobileSidebar=!this.mobileSidebar;
  }
  public toggleSideBar(): void {
    this.sideBar.switchSideMenuPosition();
  }
  public toggleMobileSideBar(): void {
    this.sideBar.switchMobileSideBarPosition();
    
      this.addClass = !this.addClass;
      /* eslint no-var: off */
      var root = document.getElementsByTagName( 'html' )[0];
      /* eslint no-var: off */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var sidebar:any = document.getElementById('sidebar')
  
      if (this.addClass) {
        root.classList.add('menu-opened');
        sidebar.classList.add('opened');
      }
      else {
        root.classList.remove('menu-opened');
        sidebar.classList.remove('opened');
      }
    }
    ngOnInit(): void {
    const savedTheme = localStorage.getItem('themeColor') as 'light' | 'dark' | null;
    this.themeColor = savedTheme || 'light';
    this.sideBar.changeThemeColor(this.themeColor);
  }

  toggleTheme(): void {
    this.themeColor = this.themeColor === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeColor', this.themeColor);
    this.sideBar.changeThemeColor(this.themeColor);
  }

  }
