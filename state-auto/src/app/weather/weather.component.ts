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
    const latitude = (document.getElementById('latitude') as HTMLInputElement).value;
    const longitude = (document.getElementById('longitude') as HTMLInputElement).value;
    const arr = [];
    this.weatherService.getAirQuality(latitude, longitude).subscribe(
      (response) => {
        arr.push(response);
        console.log(response);
      },
      (error) => console.log(error), 
    );;
    console.log(arr)
  }
  getLatLongByCityState(){
    const city = (document.getElementById('city') as HTMLInputElement).value;
    const state = (document.getElementById('state') as HTMLInputElement).value;

    
    var latitude;
    var x = [];
    var longitude;
    var cityResult;
    var stateResult;
    var countryResult;


    this.weatherService.getLatLongByCityState(city ,state).subscribe(
      (response) => {
        x.push(response);
        console.log(response);
        cityResult = x[0].results[0].locations[0].adminArea5;
        stateResult = x[0].results[0].locations[0].adminArea3;
        countryResult = x[0].results[0].locations[0].adminArea1;
        latitude = x[0].results[0].locations[0].latLng.lat;
        longitude = x[0].results[0].locations[0].latLng.lng;
        this.weatherService.getAirQuality(latitude, longitude).subscribe(
          (response) => {

        },(error) => console.log(error),);;
        
      },
      (error) => console.log(error),
    );;
    
      
  }
  
  }

