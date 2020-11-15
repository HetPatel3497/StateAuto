import { JSDocCommentStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import * as CanvasJS from '../canvasjs.min';

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

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getCrime(){
    const state = (document.getElementById('state') as HTMLInputElement).value;
    const zip = (document.getElementById('zip') as HTMLInputElement).value;
    const count = "count";
    
    const offenseTypeNames = ['aggravated-assault', 'motor-vehicle-theft', 'rape', 'robbery', 'arson'];
    var results = [];

    for(var i = 0; i < offenseTypeNames.length; i++){
      this.apiService.getCrimeByState(state, offenseTypeNames[i], count).subscribe(
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
    this.getPoliceDep();

  }

  renderChart (series){
    let chart = new CanvasJS.Chart("chartContainer", {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Performance Demo - 10000 DataPoints"
      },
      subtitles:[{
        text: "Try Zooming and Panning"
      }],
      data: [
      {
        type: "line",                
        dataPoints: series
      }]
    });
      
    chart.render();
  }

  proceessOffenseResponse(response){
    var table = [];
    for(var i = 0; i < response.results.length; i++){
      table[i] = {x: response.results[i].data_year, y: response.results[i].count}
    }
  }

  getPoliceDep(){
    this.apiService.getPoliceStations().subscribe(
      (response) => {
        console.log("response", response);
        var arr = [];
        for(var rsp in response){
          // console.log(response[rsp])
           for(var item in response[rsp]){
               console.log(response[rsp][item].agency_name)
           }
       
       }
      },
      
      (error) => console.log(error), 
    )
  }
  

}
