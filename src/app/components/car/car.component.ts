import { Brand } from './../../models/brand';
import { Color } from './../../models/color';
import { CarService } from './../../services/car.service';
import { CarResponseModel } from './../../models/carResponseModel';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  dataLoaded = false



  cars: Car[] = []

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['categoryId']) {
        this.getCarByColor(params['categoryId'])
      } else {
        this.getCar()
      }
    })

  }
  getCar() {
    this.carService.getCar().subscribe((response) => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }
  getCarByColor(colorId: Color) {
    this.carService.getCarByColor(colorId).subscribe((response) => {
      this.cars = response.data
      this.dataLoaded = true
    })
  }




}
