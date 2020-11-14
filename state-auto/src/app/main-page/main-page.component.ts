import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  title = 'Address Risk Searcher';
  weather: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getWeather(event: any){
    const zipCode = event.value;
    this.weather = this.weatherService.getWeatherByZipCode();
  }
}
