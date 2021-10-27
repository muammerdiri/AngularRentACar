import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color={
    id:1,
    name:"Kırmızı"
  }
  color2={
    id:2,
    name:"Siyah"
  }
  color3={
    id:3,
    name:"Sarı"
  }
  color4={
    id:4,
    name:"Bordo"
  }

  colors=[this.color,this.color2,this.color3,this.color4]
  constructor() { }

  ngOnInit(): void {
  }

}
