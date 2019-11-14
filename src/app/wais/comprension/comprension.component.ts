import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprension',
  templateUrl: './comprension.component.html',
  styleUrls: ['./comprension.component.css']
})
export class ComprensionComponent implements OnInit {


  estado:string = 'inicio';
  
  itemNumber:number = 0;

  respuestaDada:string = '';

  fallo:number = 0;

  resultados:number[] = new Array(18).fill(0);

  respuestas:string[] = new Array(18).fill("");

  cambiarPrueba(key){
    if(this.estado==='test' && this.itemNumber<18){
      
      if(key===1 || key===0 || key===2){
        this.resultados[this.itemNumber]=key

        if(this.itemNumber+1===18)this.estado='resultados'
        else this.itemNumber++;
        
        if(key===0 ){
          this.fallo++;
          if(this.fallo===3)this.estado='resultados'
        }
        else if(key===1 || key===2)this.fallo=0;
      }

      this.respuestas[this.itemNumber]=this.respuestaDada

      this.respuestaDada=''

    }
    else if(this.itemNumber===18)this.estado='resultados'

  }

  constructor() { }


  ngOnInit() {
  }

  aRevisar(){
    this.estado = 'revision';
  }


  getResultado():number {
    var total = 0;
    for(var i=0;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    console.log(this.resultados)
    return total;
  }

  startTest(){
    this.estado='test'
  }

  imagenInit(item){
    
    if(item===2){
      this.resultados[0]=2
      this.resultados[1]=2

    }
    
    this.itemNumber=item
    this.estado='test'
  }

  regresarAct(){
    this.estado = 'resultados';
  }


  actualizarResultados(){
    
    for(let j = 1;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'resultados';
  }

}


