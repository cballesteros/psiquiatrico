import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-comprension',
  templateUrl: './comprension.component.html',
  styleUrls: ['./comprension.component.css']
})
export class ComprensionComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    if(this.estado==='test'){
      if(event.keyCode == KEY_CODE.ZERO_UP
        || event.keyCode == KEY_CODE.ONE_UP
        || event.keyCode == KEY_CODE.TWO_UP){
        this.cambiarPrueba(+event.key);
      }
    }
  }


  estado:string = 'inicio';
  
  itemNumber:number = 0;

  fallo:number = 0;

  resultados:number[] = new Array(18).fill(0);

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

export enum KEY_CODE {
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  ONE_UP = 49,
  TWO_UP = 50, 
  THREE_UP = 51, 
  FOUR_UP = 52, 
  FIVE_UP = 53, 
  SIX_UP = 54, 
  SEVEN_UP = 55, 
  EIGHT_UP = 56, 
  NINE_UP = 57, 
  ZERO_UP = 48
}

