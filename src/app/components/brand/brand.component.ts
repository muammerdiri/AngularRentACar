import { HttpClient } from '@angular/common/http';
import { Brand } from './../../models/brand';
import { Component, OnInit } from '@angular/core';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  apiUrl="https://localhost:44359/api/brands/getall"


  brands:Brand[]=[]

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getBrand()
  }
  getBrand(){
    this.httpClient.get<BrandResponseModel>(this.apiUrl).subscribe((response)=>{
      this.brands=response.data
    })
  }

}
