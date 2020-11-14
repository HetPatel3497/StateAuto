import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment'

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
}