import { Color } from './../models/color';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44359/api/"
  constructor(private httpClient:HttpClient) { }


  getCar():Observable<CarResponseModel>{
    let newPath = this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<CarResponseModel>(newPath)
  }
  getCarByColor(colorId:Color):Observable<CarResponseModel>{
    let newPath=this.apiUrl+"cars/getbycolor?colorId="+colorId
    return this.httpClient.get<CarResponseModel>(newPath)
  }


}
