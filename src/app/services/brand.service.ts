import { BrandResponseModel } from './../models/brandResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44359/api/brands/getall"
  constructor(private httpClient:HttpClient) { }


  getBrand():Observable<BrandResponseModel>{
    return this.httpClient.get<BrandResponseModel>(this.apiUrl);

  }
}
