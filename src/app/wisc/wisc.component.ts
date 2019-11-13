import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wisc',
  templateUrl: './wisc.component.html',
  styleUrls: ['./wisc.component.css']
})
export class WiscComponent implements OnInit {

  fechaNacimiento:any;
  edad:number;

  estado:String = "edad"

  CalcularEdad(){
    if(this.fechaNacimiento){
      const convertAge = new Date(this.fechaNacimiento);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      this.edad = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    }

    alert("La edad del paciente es: "+ this.edad)

    this.estado = "subpruebas";
  }

  constructor() { }

  ngOnInit() {
  }

}
