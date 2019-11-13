import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda-simbolos',
  templateUrl: './busqueda-simbolos.component.html',
  styleUrls: ['./busqueda-simbolos.component.css']
})
export class BusquedaSimbolosComponent implements OnInit {

  estado:String = 'aplicacion';// Esta variable me dice en que estado

  pag1C:number = null;
  pag1I:number = null;

  pag2C:number = null;
  pag2I:number = null;

  pag3C:number = null;
  pag3I:number = null;

  pag4C:number = null;
  pag4I:number = null;

  pag5C:number = null;
  pag5I:number = null;

  pag6C:number = null;
  pag6I:number = null;

  pag7C:number = null;
  pag7I:number = null;

  resultado:number = null;

  constructor() { }

  ngOnInit() {
  }

  calcularResultado(){
    var correctas = this.pag1C + this.pag2C + this.pag3C + this.pag4C + this.pag5C + this.pag6C + this.pag7C
    var inCorrectas = this.pag1I + this.pag2I + this.pag3I + this.pag4I + this.pag5I + this.pag6I + this.pag7I
    
    this.resultado = correctas-inCorrectas

    if(this.resultado<0){
      this.resultado = 0
    }

    this.estado = "terminado"
  }

}
