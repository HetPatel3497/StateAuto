import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WeatherComponent } from './weather/weather.component';
import { CrimeComponent } from './crime/crime.component';
import {CompareComponent} from './compare/compare.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: MainPageComponent,
},

{
  path: 'weather',
  component: WeatherComponent,
},

{
  path: 'crime',
  component: CrimeComponent,
},

{
  path: 'compare',
  component: CompareComponent,
},

{
  path: 'about',
  component: AboutComponent,
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
