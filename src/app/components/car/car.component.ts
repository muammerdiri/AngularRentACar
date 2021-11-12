import { CarService } from './../../services/car.service';
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

  dataLoaded=false



  cars:Car[] =[]

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCar()
  }
  getCar(){
    this.carService.getCar().subscribe((response)=>{
      this.cars=response.data
      this.dataLoaded=true
    })
  }

}
