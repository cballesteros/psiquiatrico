import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitos',
  templateUrl: './digitos.component.html',
  styleUrls: ['./digitos.component.css']
})
export class DigitosComponent implements OnInit {

  estado:String = "selectDirecto";

  indexActual:number = null;
  itemActual:number[] = null;

  terminacion:number = 0;

  estimulosDD:number[][] = [[9,7],[6,3],
                             [5,8,2],[6,9,4],
                             [7,2,8,6],[6,4,3,9],
                             [4,2,7,3,1],[7,5,8,3,6],
                             [3,9,2,4,8,7],[6,1,9,4,7,3],
                             [4,1,7,9,3,8,6],[6,9,1,7,4,2,8],
                             [3,8,2,9,6,1,7,4],[5,8,1,3,2,6,4,7],
                             [2,7,5,8,6,3,1,9,4],[7,1,3,9,4,2,5,6,8]];

  estimulosDI:number[][] = [[3,1],[2,4],
                             [4,6],[5,7],
                             [6,2,9],[4,7,5],
                             [8,2,7,9],[4,9,6,8],
                             [6,5,8,4,3],[1,5,4,8,6],
                             [5,3,7,4,1,8],[7,2,4,8,5,6],
                             [8,1,4,9,3,6,2],[4,7,3,9,6,2,8],
                             [9,4,3,7,6,2,1,8],[7,2,8,1,5,6,4,3]];

  estimulosDC:number[][] = [[1,2],[4,2],
                             [3,1,6],[0,9,4],
                             [8,7,9,2],[4,8,7,1],
                             [2,6,9,1,7],[3,8,3,5,8],
                             [2,1,7,4,3,6],[6,2,5,2,3,4],
                             [7,5,7,6,8,6,2],[4,8,2,5,4,3,5],
                             [5,8,7,2,7,5,4,5],[9,4,9,7,3,0,8,4],
                             [2,7,5,8,6,3,1,9,4],[2,7,1,4,8,4,2,9,6]];

  respuestasCorrectasDD:String[] = ["9,7","6,3",
                             "5,8,2","6,9,4",
                             "7,2,8,6","6,4,3,9",
                             "4,2,7,3,1","7,5,8,3,6",
                             "3,9,2,4,8,7","6,1,9,4,7,3",
                             "4,1,7,9,3,8,6","6,9,1,7,4,2,8",
                             "3,8,2,9,6,1,7,4","5,8,1,3,2,6,4,7",
                             "8,1,2,6,7,3,4,9","7,1,3,9,4,2,5,6,8"];

  respuestasCorrectasDI:String[] = ["1,3","4,2",
                             "6,4","7,5",
                             "9,2,6","5,7,4",
                             "9,7,2,8","8,6,9,4",
                             "3,4,8,5,6","6,8,4,5,1",
                             "8,1,4,7,3,5","6,5,8,4,2,7",
                             "2,6,3,9,4,1,8","8,2,6,9,3,7,4",
                             "8,1,2,6,7,3,4,9","3,4,6,5,1,8,2,7"];

  respuestasCorrectasDC:String[] = ["1,2","2,4",
                             "1,3,6","0,4,9",
                             "2,7,8,9","1,4,7,8",
                             "1,2,6,7,9","3,3,5,8,8",
                             "1,2,3,4,6,7","2,2,3,4,5,6",
                             "2,5,6,6,7,7,8","2,3,4,4,5,5,8",
                             "2,4,5,5,5,7,7,8","0,3,4,4,7,8,9,9",
                             "0,0,1,1,1,2,3,5,5","1,2,2,4,4,6,7,8,9"];

  respuestasDD:String[] = ["","","","","","","","","","","","","","","",""];
  respuestasDI:String[] = ["","","","","","","","","","","","","","","",""];
  respuestasDC:String[] = ["","","","","","","","","","","","","","","",""];

  resultadosDD:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  resultadosDI:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  resultadosDC:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  iniciar(){
    if(this.estado==="selectDirecto"){
      this.estado = "directo"

      this.indexActual = 0;
      this.itemActual = this.estimulosDD[this.indexActual];

    }else if(this.estado==="selectInverso"){
      this.estado = "inverso"

      this.indexActual = 0;
      this.itemActual = this.estimulosDI[this.indexActual];

    }else if(this.estado==="selectCreciente"){
      this.estado = "creciente"

      this.indexActual = 0;
      this.itemActual = this.estimulosDC[this.indexActual];
    }
  }

  guardarRespuesta(){
    var element = (<HTMLInputElement>document.getElementById("res"));
    var x = element.value;

    if(this.estado==="directo"){
      this.respuestasDD[this.indexActual] = x;
    }else if(this.estado==="inverso"){
      this.respuestasDI[this.indexActual] = x;
    }else if(this.estado==="creciente"){
      this.respuestasDC[this.indexActual] = x;
    }

    element.value = "";
  }

  verificarTermino(){
    if((this.indexActual%2) === 0){
      this.terminacion++;
    }else{
      if(this.terminacion === 1){
        this.terminacion++;
      }else{
        this.terminacion = 0;
      }
    }

    
  }

  cambiarpuntuacion(){

    this.guardarRespuesta();

    if(this.estado==="directo"){

      if(this.respuestasDD[this.indexActual] === this.respuestasCorrectasDD[this.indexActual]){
        this.resultadosDD[this.indexActual] = 1;
        this.terminacion = 0;
      }else{

        this.verificarTermino()
        this.resultadosDD[this.indexActual] = 0;
      }

    }else if(this.estado==="inverso"){

      if(this.respuestasDI[this.indexActual] === this.respuestasCorrectasDI[this.indexActual]){
        this.resultadosDI[this.indexActual] = 1;
        this.terminacion = 0;
      }else{

        this.verificarTermino()
        this.resultadosDI[this.indexActual] = 0;
      }

    }else if(this.estado==="creciente"){

      if(this.respuestasDC[this.indexActual] === this.respuestasCorrectasDC[this.indexActual]){
        this.resultadosDC[this.indexActual] = 1;
        this.terminacion = 0;
      }else{

        this.verificarTermino()
        this.resultadosDC[this.indexActual] = 0;
      }

    }

    this.verificarSiguienteItem()

  }

  verificarSiguienteItem(){
    if(this.indexActual < 15){

      if(this.terminacion <2){
        this.indexActual++;

        if(this.estado==="directo"){
          this.itemActual = this.estimulosDD[this.indexActual];
        }else if(this.estado==="inverso"){
          this.itemActual = this.estimulosDI[this.indexActual];
        }else if(this.estado==="creciente"){
          this.itemActual = this.estimulosDC[this.indexActual];
        }
      } else{

        this.terminacion= 0;

        if(this.estado==="directo"){
          this.estado = "selectInverso"
        }else if(this.estado==="inverso"){
          this.estado = "selectCreciente"
        }else if(this.estado==="creciente"){
          this.estado = "terminado"
        }

    }

  }
}

  getResultado(){
    var total = 0;
    for(var i=0;i<16;i++){
      total = total + this.resultadosDD[i];
      total = total + this.resultadosDI[i];
      total = total + this.resultadosDC[i];
    }
    return total;
  }

  aRevisar(){
    this.estado = 'revision';
  }

  regresarAct(){
    this.estado = 'terminado';
  }

  constructor() { }

  ngOnInit() {
  }

}
