
import { Component, OnInit, HostListener } from '@angular/core';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-bloques',
  templateUrl: './bloques.component.html',
  styleUrls: ['./bloques.component.css']
})

export class BloquesComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    if(this.estado==='aplicacion'){
      if(event.keyCode == KEY_CODE.RIGHT_ARROW){
        this.cambiarPuntuacion(0);
      }else if(event.keyCode == KEY_CODE.ZERO_UP){
        this.cambiarPuntuacion(+event.key);
      }else if(event.keyCode == KEY_CODE.ONE_UP){
        this.cambiarPuntuacion(+event.key);
      }else if(event.keyCode == KEY_CODE.TWO_UP){
        this.cambiarPuntuacion(+event.key);
      }else if(event.keyCode == KEY_CODE.FOUR_UP){
        this.cambiarPuntuacion(+event.key);
      }else if(event.keyCode == KEY_CODE.FIVE_UP){
        this.cambiarPuntuacion(+event.key);
      }else if(event.keyCode == KEY_CODE.SIX_UP){
        this.cambiarPuntuacion(+event.key);
      }else if(event.keyCode == KEY_CODE.SEVEN_UP){
        this.cambiarPuntuacion(+event.key);
      }
    }
    
  }

  estado:String = 'seleccion';// Esta variable me dice en que estado 

  estimulos:String[] = ["01.png","02.png","03.png","04.png","05.png","06.png","07.png","08.png",
                        "09.png","10.png","11.png","12.png","13.png","14.png","15.png",];
  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  times:number[] = [0,30000,30000,30000,30000,60000,60000,60000,60000,60000,60000,120000,120000,120000,120000];//Tiempo especifico para cada prueba

  estimuloInicial:String = null;
  estimuloActual:String = null;
  indexInicial:number = null;
  indexActual:number = null;

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente

  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno 

  interval:any;

  constructor() { }

  ngOnInit() {
  }

  imagenInit(num:number){
    this.indexInicial = num
    this.estimuloInicial = this.estimulos[this.indexInicial];

    this.indexActual = 0;
    this.estimuloActual = "assets/estimulos/cubos/" + this.estimulos[this.indexActual];

    this.estado = 'aplicacion';
  }

  verificarSiguienteEstimulo(){
    if(this.terminacion < 2 && this.indexActual < 14){ // Verifica que no se haya cumplido la condicion de termino

      if(this.indexActual === 0){

        this.indexActual = this.indexInicial
        this.estimuloActual = "assets/estimulos/cubos/" + this.estimuloInicial

      }else if(this.indexInicial===1){ // Si el indice inicial es 1 no se compara para verificar el retorno

        this.indexActual++;
        this.estimuloActual = "assets/estimulos/cubos/" + this.estimulos[this.indexActual];
  
      }else if(this.indexInicial===5){ // Si el indice inicial es 5 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 5 || this.indexActual === 6) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 5;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 5 0 6 sigue aumentado a partir de ahí
          this.indexActual++;
          this.estimuloActual = "assets/estimulos/cubos/" + this.estimulos[this.indexActual];
        }else{ //En caso de que halla fallado el item 5 o el 6 vuelve al item 4 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            this.estimuloActual = "assets/estimulos/cubos/" + this.estimulos[this.indexActual];
          }else{
            this.indexActual--;
            this.estimuloActual = "assets/estimulos/cubos/" + this.estimulos[this.indexActual];
          }
          
        }
      }

      this.startTimer(this.times[this.indexActual]);

    }else{
      this.estado = 'terminado';
    }
  }

  cambiarPuntuacion(punt:number){
    clearInterval(this.interval);

    if(punt === 0){

      if(this.indexActual === 0){
        this.resultados[this.indexActual] = punt;
      }else{
        this.resultados[this.indexActual] = punt;
        this.terminacion++
      }

      if(this.countRe>0){
        this.countRe=0;
      }
     
    }else{

      if(this.retorno){
        if(punt===2){
          this.countRe++
        }else{
          if(this.countRe>0){
            this.countRe=0;
          }
        }
      }

      if(this.terminacion > 0){
        this.resultados[this.indexActual] = punt;
        this.terminacion = 0
      }else{
        this.resultados[this.indexActual] = punt;
      }
    }

    this.verificarSiguienteEstimulo()
  }

  //Timer: En caso de que la imagen pase por que se acabo el tiempo se dará una calificación de 0 al item
  startTimer(time:number) {
    this.interval = setInterval(() => {
      this.cambiarPuntuacion(0);
    },time)
  }

  getResultado():number {
    var total = 0;
    for(var i=1;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    return total;
  }

  //En caso de que el estado sea revision

  aRevisar(){
    this.estado = 'revision';
  }

  regresarAct(){
    this.estado = 'terminado';
  }

  actualizarResultados(){
    
    for(let j = 1;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'terminado';
  }

}// Fin export class BloquesComponent

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
