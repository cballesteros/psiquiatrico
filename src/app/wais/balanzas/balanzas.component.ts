import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-balanzas',
  templateUrl: './balanzas.component.html',
  styleUrls: ['./balanzas.component.css']
})
export class BalanzasComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    if(this.estado==='test'){
      if(event.keyCode == KEY_CODE.ZERO_UP ||
         event.keyCode == KEY_CODE.ONE_UP  ||
         event.keyCode == KEY_CODE.TWO_UP  ||
         event.keyCode == KEY_CODE.THREE_UP||
         event.keyCode == KEY_CODE.FOUR_UP ||
         event.keyCode == KEY_CODE.FIVE_UP){
        this.cambiarPrueba(+event.key);
      }
    }
    
  }

  estado:String = 'seleccion';// Esta variable me dice en que estado 

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente

  numberItem:number = 1

  resultados:number[] = new Array(30).fill(0);

  respuestas:number[] = [5,1,2,3,4,1,4,4,5,1,2,5,3,1,4,1,3,3,2,2,2,5,3,5,1,2,4]

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
        if(this.respuestas[this.numberItem-1]===key){
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
        if(this.respuestas[this.numberItem-1]===key){
          this.resultados[this.numberItem-1]=1 
        }
        else{

       
          if((this.numberItem===4 || this.numberItem===5) && this.retornoHecho){
            this.retorno=true;
            this.flagRe=this.numberItem;
            this.numberItem=4;
          }
          else this.terminacion++;

          if(this.terminacion===3)this.estado='resultados';
        }
        
      }

      if(this.retorno)this.numberItem--;
      else this.numberItem++;

      console.log(this.flagRe)
      console.log(this.numberItem)
      
      if(this.numberItem===7 || this.numberItem===0)this.estado='resultados'
      else{
        if(this.numberItem<=12)this.startTimer(20000);
        else this.startTimer(40000);
      } 

    }
  }

  imagenInit(item){
    if(item===4){
      this.resultados[0]=1
      this.resultados[1]=1
      this.resultados[2]=1
    }

    this.numberItem=item
    this.estado='a'
  }

  getResultado():number {
    var total = 0;
    for(var i=0;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    console.log(this.resultados)
    return total;
  }

  next(){
    switch (this.estado) {
      case 'a':
        this.estado='b'
        break;
    
      case 'b':
        this.estado='ejemplo'
        break;
      case 'ejemplo':
        this.estado='test'
        if(this.numberItem<=12)this.startTimer(20000);
        else this.startTimer(40000);
        break;
    }
  }


  //Timer: En caso de que la imagen pase por que se acabo el tiempo se dará una calificación de 0 al item
  startTimer(time:number) {
    this.interval = setInterval(() => {
      this.cambiarPrueba(0)
    },time)
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
