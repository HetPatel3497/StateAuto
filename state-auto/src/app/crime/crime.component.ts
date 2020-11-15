import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service'

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.css']
})
export class CrimeComponent implements OnInit {

  title = 'Crime';
  zip = '';
  state = '';
  city = "";

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  getCrime(){
    const state = (document.getElementById('state') as HTMLInputElement).value;
    const zip = (document.getElementById('zip') as HTMLInputElement).value;
    const count = "count";
    
    const offenseTypeNames = ['aggravated-assault', 'motor-vehicle-theft', 'rape', 'robbery', 'arson'];
    const offenseType = {aggravatedAssault: 'aggravated-assault', burglary: 'burglary', larceny: 'larceny', motorVehicleTheft: 'motor-vehicle-theft', homicide: 'homicide', rape: 'rape', robbery: 'robbery', arson: 'arson', violentCrime: 'violent-crime', propertyCrime: 'property-crime'};
    const arr = [];

    for(var i = 0; i < offenseTypeNames.length; i++){
      this.weatherService.getCrimeByState(state, offenseTypeNames[i], count).subscribe(
        (response) => {
          arr.push(response);
        },
        
        (error) => console.log(error), 
      );;
    }
    console.log(arr)
  }

}
