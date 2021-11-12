import { ColorResponseModel } from './../../models/colorResponseModel';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  apiUrl="https://localhost:44359/api/colors/getall"

  colors:Color[] = []
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getColor()
  }
  getColor(){
    this.httpClient.get<ColorResponseModel>(this.apiUrl).subscribe((response)=>{
      this.colors = response.data
    })
  }

}
