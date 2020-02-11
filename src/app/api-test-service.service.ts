import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTestServiceService {

  constructor(private http: HttpClient) { }

  getMockData(startDate, endDate) {
    return this.http.get<any>(`http://192.168.0.118:53470/api/Mock/CIP/GetCIPSummary?startDateTime=${startDate}&endDateTime=${endDate}`);
  }

}
