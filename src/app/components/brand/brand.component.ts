import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {


  brand={
    id:1,
    name:"Mercedes"
  }
  brand2={
    id:2,
    name:"Nissan"
  }
  brand3={
    id:3,
    name:"Ford"
  }
  brand4={
    id:4,
    name:"Lamborgihini"
  }

  brands=[this.brand,this.brand2,this.brand3,this.brand4]

  constructor() { }

  ngOnInit(): void {
  }

}
