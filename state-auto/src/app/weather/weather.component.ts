import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  title = 'Air';
  latitude = '';
  longitude = '';

  constructor(private weatherService: WeatherService) {   }

  ngOnInit(): void {
  }


  getAirQuality(){
    const latitude = (document.getElementById('lat') as HTMLInputElement).value;
    const longitude = (document.getElementById('long') as HTMLInputElement).value;
    const arr = [];
    this.weatherService.getAirQuality(latitude, longitude).subscribe(
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

