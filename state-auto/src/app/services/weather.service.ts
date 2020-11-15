import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { stringify } from '@angular/compiler/src/util';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(private http: HttpClient){}
   

    getWeatherByCity(city: string){
        const params = new HttpParams()
        .set("q", city)
        .set("key", environment.weatherApiKey);
        return this.http.get(environment.weatherApiUrl + '/current.json', {
            params
          });
    }
    getCrimeByState(state: string, offense: string, count: string){
        const params = new HttpParams()
        .set("q", state)
        .set("o", offense)
        .set("v", count)
        .set("key", environment.crimeApiKey);

        return this.http.get(environment.crimeApiUrl + `/${offense}/offender/states/${state}/${count}?API_KEY=${environment.crimeApiKey}`);
          
    }
    getAirQuality(lat: string, long: string){
        const params = new HttpParams()
        .set("lat", lat)
        .set("long", long)
        .set("key", environment.weatherApiKey);
        console.log(`/current-conditions?lat=${lat}&lon=${long}&key=${environment.airApiKey}`);
        return this.http.get(environment.airApiUrl + `/current-conditions?lat=${lat}&lon=${long}&key=${environment.airApiKey}`); 
    }
    
}