import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DealEngineApiService {
  
  //private DealApiUrl = 'http://localhost:4000/api/flightboard'
  private DealApiUrl = 'http://174.138.59.120:4000/api/flightboard'

  constructor() { }

  // 
  getDestAirportsList() {
    const options = {
      referrerPolicy: "unsafe-url" 
      };
    return fetch(`${this.DealApiUrl}/getDestAirportsList`)
  };

  // 
  getFligthForBoardingId(boarding_Id: string) {
     const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({boarding_Id}),
      
      };
    return fetch(`${this.DealApiUrl}/getBoardingId`, options)
  };
}
