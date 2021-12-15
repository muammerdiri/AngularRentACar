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

  currentBrand:Brand
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
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand
    }
  getCurrentBrandClass(brand:Brand){
    if (brand == this.currentBrand) {
      return "list-group-item list-group-item-action active"
    }else{
      return "list-group-item list-group-item-action "
    }
  }

}
