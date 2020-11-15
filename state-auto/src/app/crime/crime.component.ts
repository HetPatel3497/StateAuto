import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service'
declare var JSC: any;

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
    var results = [];

    var aggravatedAssault = [];
    var motorVehicleTheft = [];
    var rape = [];
    var robbery = [];
    var arson = [];

    for(var i = 0; i < offenseTypeNames.length; i++){
      this.weatherService.getCrimeByState(state, offenseTypeNames[i], count).subscribe(
        (response) => {
          results.push(response);
          results[i] = this.proceessOffenseResponse(response);
        },
        
        (error) => console.log(error), 
      );;
    }
    console.log(results);

    var finalObj = [{name: 'Aggravated Assult', points: results[0]}, {name: 'Motor Vehicle Theft', points: results[1]}, {name: 'Rape', points: results[2]}, {name: 'Robbery', points: results[3]}, {name: 'Arson', points: results[4]}];
    console.log(finalObj);
    this.renderChart(finalObj);
  }

  proceessOffenseResponse(response){
    var table = [];
    for(var i = 0; i < response.results.length; i++){
      table[i] = {x: response.results[i].data_year, y: response.results[i].count}
    }
  }

  renderChart(series){
    JSC.Chart('chartDiv', {series: series});
  }
  

}
