import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WeatherComponent } from './weather/weather.component';

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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
