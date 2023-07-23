import { Weather, WeatherData } from './../models/weather';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherUrl ,{
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue)
      .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
      params: new HttpParams()
      .set('city', city)
    })
  }
}
