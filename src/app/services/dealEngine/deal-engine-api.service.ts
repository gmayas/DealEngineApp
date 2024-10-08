import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DealEngineApiService {
  
  private DealApiUrl = 'http://localhost:4000/api/flightboard'

  constructor() { }

  // 
  getDestAirportsList() {
    return fetch(`${this.DealApiUrl}/getDestAirportsList`)
  };

  // 
  getFligthForBoardingId(boarding_Id: string) {
    console.log('boarding_Id:', boarding_Id) 
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
