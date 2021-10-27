import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category={
    id:1,
    name:"Otomobil"
  }
  category2={
    id:2,
    name:"Minivan"
  }
  category3={
    id:3,
    name:"Kamyonet"
  }
  category4={
    id:4,
    name:"Elektrikli Araç"
  }

  categories=[this.category,this.category2,this.category3,this.category4]
  constructor() { }

  ngOnInit(): void {
  }

}
