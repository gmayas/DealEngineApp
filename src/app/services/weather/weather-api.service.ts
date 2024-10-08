import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

   private weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?';
   
   private apiKey = 'd27f2ec81fa47d9b117f0ac832ac1647';
   

  constructor() { }

   // 
   getWeatherApi( dataIn: any) {
    const {lat, lon } = dataIn;
    return fetch(`${this.weatherApiUrl}lat=${lat}&lon=${lon}&appid=${this.apiKey}`)
  };

}
