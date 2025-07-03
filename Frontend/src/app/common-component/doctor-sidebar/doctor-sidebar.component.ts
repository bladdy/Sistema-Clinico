import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataService } from 'src/app/shared/data/data.service';
import { MenuItem, SideBarData } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
import { SettingsService } from 'src/app/shared/settings/settings.service';
import { SideBarService } from 'src/app/shared/side-bar/side-bar.service';
interface url{
  url:string
}
@Component({
  selector: 'app-doctor-sidebar',
  templateUrl: './doctor-sidebar.component.html',
  styleUrl: './doctor-sidebar.component.scss',
  standalone:false
})
export class DoctorSidebarComponent {
   url: string;
  base = '';
  page = '';
  last = '';
  currentUrl = '';
  sidebartop = false;
  sidebarfooter=false;
   openSubmenuOneItem: any = null;
  togglesidebartop():void{
    this.sidebartop=!this.sidebartop
  }
    public toggleSidebarmini(): void {
    this.sideBar.switchSideMenuPosition();
  }
    footerClose(){
    this.sidebarfooter=true;
  }
public toggleSidebar(): void {
  const wrapper = document.getElementsByClassName('main-wrapper')[0];
  const overlay = document.getElementsByClassName('sidebar-overlay')[0];

  if (wrapper) {
    wrapper.classList.remove('slide-nav');
  }

  if (overlay) {
    overlay.classList.remove('opened');
  }
}
  public multilevel: Array<boolean> = [false, false, false];

  public routes = routes;
  public sidebarData: Array<SideBarData> = [];

  constructor(
    private data: DataService,
    private router: Router,
    private sideBar: SideBarService,
    public settings:SettingsService
  ) {
this.url = this.router.url;
        router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
    this.getRoutes(this.router);
          this.data.getSideBar2Data.subscribe((res:SideBarData[]) => {
        this.sidebarData = res;
    });
  }

  public expandSubMenus(menu: MenuItem): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.sidebarData.map((mainMenus: SideBarData) => {
      mainMenus.menu.map((resMenu: MenuItem) => {
        if (resMenu.menuValue == menu.menuValue) {
          menu.showSubRoute = !menu.showSubRoute;
        } else {
          resMenu.showSubRoute = false;
        }
      });
    });
  }
    private getRoutes(route: url): void {
    const splitVal = route.url.split('/');
    this.currentUrl = route.url;
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];
  }
  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sideBar.expandSideBar.next("true");
    } else {
      this.sideBar.expandSideBar.next("false");
    }
  }
  openSubmenuOne(subMenus: any): void {
    if (this.openSubmenuOneItem === subMenus) {
      this.openSubmenuOneItem = null;
    } else {
      this.openSubmenuOneItem = subMenus;
    }
  }
  dataLayoutHidden = false;

ngOnInit(): void {
  const html = document.documentElement;
  const dataLayout = html.getAttribute('data-layout');
  this.dataLayoutHidden = dataLayout === 'hidden';
  console.log(this.dataLayoutHidden)
}
}
