import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  title = 'Air';
  lat = '';
  long = '';

  constructor(private weatherService: WeatherService) {   }

  ngOnInit(): void {
  }


  getAirQuality(){
    const lat = (document.getElementById('lat') as HTMLInputElement).value;
    const long = (document.getElementById('long') as HTMLInputElement).value;
    const arr = [];
    this.weatherService.getAirQuality(lat, long).subscribe(
      (response) => {
        arr.push(response);
        console.log("het");
        console.log(response);
      },
      (error) => console.log(error), 
    );;
    console.log(arr)
  }
  
  }

