import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  title = 'Address Risk Searcher';
  weather: string;

  constructor(private apiService: ApiService) { }

  city: string;
  currentWeather: any;

  ngOnInit(): void {
  }

  getWeather(){
    const cityName = (document.getElementById('city') as HTMLInputElement).value;

    this.apiService.getWeatherByCity(cityName).subscribe(
      (response) => {
        console.log(response);
        this.currentWeather = response;
      },
      
      (error) => console.log(error), 
    );;
  }
}
