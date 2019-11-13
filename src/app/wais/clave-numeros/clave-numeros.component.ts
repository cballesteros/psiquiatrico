import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clave-numeros',
  templateUrl: './clave-numeros.component.html',
  styleUrls: ['./clave-numeros.component.css']
})
export class ClaveNumerosComponent implements OnInit {

  estado:String = 'aplicacion';// Esta variable me dice en que estado

  resultado:number = null;

  constructor() { }

  ngOnInit() {
  }

  MostrarResumen(){
    this.estado = "terminado"
  }


}
