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

  city: string;
  currentWeather: any;

  ngOnInit(): void {
  }

  getWeather(){
    const cityName = (document.getElementById('city') as HTMLInputElement).value;

    this.weatherService.getWeatherByCity(cityName).subscribe(
      (response) => {
        console.log(response);
        this.currentWeather = response;
      },
      
      (error) => console.log(error), 
    );;
  }
}
