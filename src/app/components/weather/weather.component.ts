import { Component, OnInit } from '@angular/core';
import { TitleCasePipe , DecimalPipe } from '@angular/common';
import { DealEngineApiService } from '../../services/dealEngine/deal-engine-api.service';
import { WeatherApiService } from '../../services/weather/weather-api.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [TitleCasePipe, DecimalPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  public DestAirportsList: any = [];
  public weatherApi: any = [];
  public dataList: any = [];
  public boardingData = {};
checkoutForm: any;

  constructor(private dealEngineApiService: DealEngineApiService, private weatherApiService: WeatherApiService) { }

  ngOnInit(): void {
    this.getDestAirportsList();
  }

  async getDestAirportsList() {
    try {
      let response = await this.dealEngineApiService.getDestAirportsList();
      let dataReturn = await response.json()
      this.DestAirportsList = dataReturn.data;
      for (let i = 0; i < this.DestAirportsList.length; i++) {
        const dataIn = {
          lat: this.DestAirportsList[i].destination_latitude,
          lon: this.DestAirportsList[i].destination_longitude
        };
        let res = await this.weatherApiService.getWeatherApi(dataIn);
        let dataWeather = await res.json()
        let weather = dataWeather.weather[0];
        weather.humidity = dataWeather.main.humidity;
        weather.pressure = dataWeather.main.pressure;
        weather.sea_level = dataWeather.main.sea_level;
        weather.temp = this.kelvinToCentigrade(dataWeather.main.temp);
        weather.temp_max = this.kelvinToCentigrade(dataWeather.main.temp_max);
        weather.temp_min = this.kelvinToCentigrade(dataWeather.main.temp_min);
        this.weatherApi = weather;
        this.weatherApi.imgUrl = `https://openweathermap.org/img/wn/${this.weatherApi.icon}@2x.png`;
        const list = {
          destAirports: this.DestAirportsList[i],
          weather: this.weatherApi 
        }  
        this.dataList.push(list);
      }
    } catch (e) {
      console.log('Error respose: ', e)
    }
  }

  async getFligthForBoardingId(boarding_Id: any) {
    try {
      let response = await this.dealEngineApiService.getFligthForBoardingId(boarding_Id);
      let dataReturn = await response.json()
      this.boardingData = dataReturn.data[0];
      console.log('this.boardingData:', this.boardingData);
    } catch (e) {
      console.log('Error respose: ', e)
    }
  }
  
  kelvinToCentigrade(temp: any) {
    const tempRes = +temp - 273.15
    return tempRes;
}

}
