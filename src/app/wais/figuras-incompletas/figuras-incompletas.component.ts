import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-figuras-incompletas',
  templateUrl: './figuras-incompletas.component.html',
  styleUrls: ['./figuras-incompletas.component.css']
})
export class FigurasIncompletasComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    if(this.estado==='test'){
      if(event.keyCode == KEY_CODE.ZERO_UP ||
         event.keyCode == KEY_CODE.ONE_UP ){
        this.cambiarPrueba(+event.key);
      }
    }
    
  }

  estado:String = 'seleccion';// Esta variable me dice en que estado 

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente

  numberItem:number = 1

  resultados:number[] = new Array(24).fill(0);

  retornoHecho:boolean = true; // Esta variable me ayuda a controlar el uso de la regla del retorno
  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno 

  interval:any;

  constructor() { }

  ngOnInit() {
  }


  cambiarPrueba(key){
    if(this.estado==='test'){
      
      if(this.retorno){
        if(1===key){
          this.countRe++;
          if(this.countRe===2){
            this.retorno=false;
            this.retornoHecho=false;
            this.numberItem=this.flagRe
          }
        }
        else {
          this.countRe=0
          this.resultados[this.numberItem-1]=0
        }        
      }
      else{
        if(1===key){
          this.resultados[this.numberItem-1]=1 
          this.terminacion=0
        }
        else{

       
          if((this.numberItem===4 || this.numberItem===5) && this.retornoHecho){
            this.retorno=true;
            this.flagRe=this.numberItem;
            this.numberItem=4;
          }
          else this.terminacion++;

          if(this.terminacion===4)this.estado='resultados';
        }
        
      }

      if(this.retorno)this.numberItem--;
      else this.numberItem++;
      
      if(this.numberItem===25 || this.numberItem===0)this.estado='resultados'
      else{
        this.startTimer(20000);
        
      } 

    }
  }

  imagenInit(item){
    if(item===4){
      this.resultados[0]=1
      this.resultados[1]=1
      this.resultados[2]=1
    }
    else{
      this.retornoHecho=false
    }

    this.numberItem=item
    this.estado='ejemplo'
  }


  next(){
    switch (this.estado) {
      case 'ejemplo':
        this.estado='test'
        this.startTimer(20000);
        
        break;
      case 'resultados':
        this.estado='revision'
        break;
      case 'revision':
          this.estado='resultados'
          break;

    }
  }


  getResultado():number {
    var total = 0;
    for(var i=0;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    return total;
  }


  //Timer: En caso de que la imagen pase por que se acabo el tiempo se dará una calificación de 0 al item
  startTimer(time:number) {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.cambiarPrueba(0)
    },time)
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
