import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { stringify } from '@angular/compiler/src/util';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

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
    
    getAirQuality(latitude: string, longitude: string){
        const params = new HttpParams()
        .set("lat", latitude)
        .set("long", longitude)
        .set("key", environment.weatherApiKey);
        console.log(`/current-conditions?lat=${latitude}&lon=${longitude}&key=${environment.airApiKey}`);   
        return this.http.get(environment.airApiUrl + `current-conditions?lat=${latitude}&lon=${longitude}&key=${environment.airApiKey}`); 
    }
    
    getLatLongByCityState(city: string, state: string){
        const params = new HttpParams()
        .set("city", city)
        .set("state", state)
        .set("key", environment.mapquestApiKey);
        return this.http.get(environment.mapquestApiUrl + `?key=${environment.mapquestApiKey}&location=${city},${state}`);
    }

    getPoliceStations(){
        return this.http.get('https://api.usa.gov/crime/fbi/sapi/api/agencies?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv');
    }

}