import { BrandService } from './../../services/brand.service';
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
  dataLoaded=false


  brands:Brand[]=[]

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrand()
  }
  getBrand(){
    this.brandService.getBrand().subscribe((response)=>{
      this.brands=response.data
      this.dataLoaded=true
    })
  }

}
