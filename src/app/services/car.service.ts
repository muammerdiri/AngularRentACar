import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44359/api/cars/getcardetails"
  constructor(private httpClient:HttpClient) { }


  getCar():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl)
  }


}
