import { CarResponseModel } from './../../models/carResponseModel';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  apiUrl="https://localhost:44359/api/cars/getall"



  cars:Car[] =[]

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getCar()
  }
  getCar(){
    this.httpClient.get<CarResponseModel>(this.apiUrl).subscribe((response)=>{
      this.cars=response.data
    })
  }

}
