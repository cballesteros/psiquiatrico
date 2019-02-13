import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stroop',
  templateUrl: './stroop.component.html',
  styleUrls: ['./stroop.component.css']
})
export class StroopComponent implements OnInit {

  colors:string[] = ["AZUL", "VERDE", "ROJO", "PINK"];

  constructor() { }

  ngOnInit() {
  }

}
