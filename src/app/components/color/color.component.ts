import { ColorService } from './../../services/color.service';
import { ColorResponseModel } from './../../models/colorResponseModel';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  dataLoaded=false
  colors:Color[] = []

  currentColor:Color;

  constructor(private colorService:ColorService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {


    this.getColor()
  }
  getColor(){
    this.colorService.getColor().subscribe((response)=>{
      this.colors = response.data
      this.dataLoaded=true
    })
  }
  setCurrentColor(color:Color){
  this.currentColor=color
  }

  getCurrentColorClass(color:Color){
    if (color == this.currentColor) {
      return "list-group-item list-group-item-action active"
    }else{
      return "list-group-item list-group-item-action "
    }
  }
}
