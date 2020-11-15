import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CrimeComponent } from './crime/crime.component';
import { AboutComponent } from './about/about.component';
import { CompareComponent } from './compare/compare.component';
import { WeatherComponent } from './weather/weather.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CrimeComponent,
    CompareComponent,
    AboutComponent,
    WeatherComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
