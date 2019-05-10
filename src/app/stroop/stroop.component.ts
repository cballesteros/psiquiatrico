import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-stroop',
  templateUrl: './stroop.component.html',
  styleUrls: ['./stroop.component.css']
})

export class StroopComponent implements OnInit {

  prueba:string = 'inicio';

  colores:String[] = ["Azul","Rojo","Verde","Azul","Verde","Rojo","Verde","Rojo","Azul","Rojo",
                      "Azul", "Verde","Rojo","Verde","Azul","Verde","Azul","Rojo","Verde","Azul",
                      "Rojo","Azul","Verde","Rojo","Verde","Azul","Verde","Rojo","Azul","Rojo",
                      "Azul","Verde","Azul","Verde","Rojo","Verde","Rojo","Azul","Rojo","Verde",
                      "Azul","Verde","Rojo","Azul","Rojo","Verde","Rojo","Azul","Verde", "Rojo",
                      "Verde","Azul","Rojo","Verde","Azul","Verde","Rojo","Azul","Verde","Azul",
                      "Verde","Rojo","Azul","Verde","Rojo","Azul","Verde","Rojo","Azul","Verde",
                      "Azul","Rojo","Azul","Rojo","Verde","Azul","Verde","Rojo","Azul","Rojo",
                      "Rojo","Azul","Verde","Rojo","Azul","Verde","Rojo","Azul","Verde","Azul",
                      "Verde","Rojo","Azul","Verde","Rojo","Azul","Rojo","Verde","Azul","Rojo"];

  palabras: String[] = ["Rojo", "Verde", "Azul", "Verde", "Rojo", "Azul", "Rojo", "Azul", "Verde", "Azul",
                        "Verde", "Rojo", "Verde", "Azul", "Rojo", "Azul", "Rojo", "Verde", "Rojo", "Verde",
                        "Azul", "Verde", "Rojo", "Azul", "Rojo", "Verde", "Azul", "Verde", "Rojo", "Verde",
                        "Rojo", "Azul", "Rojo", "Azul", "Verde", "Azul", "Verde", "Rojo", "Azul", "Rojo",
                        "Verde", "Rojo", "Azul", "Rojo", "Verde", "Azul", "Verde", "Rojo", "Azul", "Verde",
                        "Azul", "Rojo", "Azul", "Rojo", "Verde", "Rojo", "Azul", "Verde", "Rojo", "Verde",
                        "Rojo", "Azul", "Verde", "Rojo", "Azul", "Verde", "Azul", "Verde", "Rojo", "Azul",
                        "Rojo", "Verde", "Rojo", "Verde", "Azul", "Verde", "Rojo", "Azul", "Verde", "Azul",
                        "Azul", "Verde", "Rojo", "Azul", "Verde", "Rojo", "Verde", "Rojo", "Azul", "Verde",
                        "Rojo", "Azul", "Verde", "Rojo", "Azul", "Rojo", "Verde", "Azul", "Rojo", "Verde" ];
  
  
  constructor() {}

  ngOnInit() {
  }

  cambiarEstado(){
    
    switch(this.prueba){
      case 'inicio':
        this.prueba='palabras'
        break;
      case 'palabras':
        this.prueba='colores'
        break;
      case 'colores':
        this.prueba='mixto'
        break;
      case 'mixto':
        this.prueba='resultados'
        break;
    }

  }

}
