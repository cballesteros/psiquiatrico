import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-king',
  templateUrl: './king.component.html',
  styleUrls: ['./king.component.css']
})
export class KingComponent implements OnInit {
  
  constructor() { }

  minutos:number = 0;
  segundos:number = 0;
  tipoCopia:string = "";
  observaciones:string = "";

  ngOnInit() {
  }

}
//https://angular.io/guide/forms#add-powers-with-ngfor
