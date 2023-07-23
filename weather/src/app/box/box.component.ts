import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  weather?: WeatherData;
  city: string = 'Bologna';

  constructor(private wSvc: WeatherService) { }

  ngOnInit(): void {
    this.getWeather(this.city);
  }

  getWeather(city:string){
    this.wSvc.getWeather(city).subscribe(weather =>{
      this.weather = weather;
      this.city = '';
    })
  }

  search() {
    this.getWeather(this.city);
    }
}
