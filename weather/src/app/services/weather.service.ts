import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // getWeather(city_name: string){
  //   this.http.get(environment.weatherUrl {
  //     headers: new HttpHeaders()
  //     .set(environment.XRapidAPIHostName, environment.XRapidAPIHostValue)
  //     .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue),
  //     params: new HttpParams()
  //     .set()
  //   })
  // }
}
