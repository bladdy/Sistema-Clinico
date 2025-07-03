import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './locations.component';

const routes: Routes = [
  { path: '', 
    component: LocationsComponent,
    children:[
      { path: 'countries', loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule) }, { path: 'cities', loadChildren: () => import('./cities/cities.module').then(m => m.CitiesModule) }, { path: 'states', loadChildren: () => import('./states/states.module').then(m => m.StatesModule) }
    ]
   }, 
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
