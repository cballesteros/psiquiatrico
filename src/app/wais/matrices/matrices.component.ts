import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.css']
})
export class MatricesComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    if(this.estado==='aplicacion'){
      if(event.keyCode == KEY_CODE.RIGHT_ARROW){
        this.verificarResultado(0);
      }else if(event.keyCode == KEY_CODE.ONE_UP){
        this.verificarResultado(+event.key);
      }else if(event.keyCode == KEY_CODE.TWO_UP){
        this.verificarResultado(+event.key);
      }else if(event.keyCode == KEY_CODE.THREE_UP){
        this.verificarResultado(+event.key);
      }else if(event.keyCode == KEY_CODE.FOUR_UP){
        this.verificarResultado(+event.key);
      }else if(event.keyCode == KEY_CODE.FIVE_UP){
        this.verificarResultado(+event.key);
      }
    }
    
  }

  estado:String = 'seleccion';// Esta variable me dice en que estado

  estimulos:String[] = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg",
                        "09.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg",
                        "19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg","25.jpg","26.jpg","27.jpg","28.jpg"];
  respuestas:number[] = [0,0,3,2,1,5,3,4,4,1,5,2,1,5,1,3,5,2,3,1,4,2,1,5,4,2,3,4];      
  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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
    this.estimuloActual = "assets/estimulos/matrices/" + this.estimulos[this.indexActual];

    this.estado = 'aplicacion';
  }

  verificarSiguienteEstimulo(){
    if(this.terminacion < 3 && this.indexActual < 27){ // Verifica que no se haya cumplido la condicion de termino

      if(this.indexActual === 0){ //este es el indice del primer ejemplo

        this.indexActual = this.indexActual + 1;
        this.estimuloActual = "assets/estimulos/matrices/" +  this.estimulos[this.indexActual];

      }else if(this.indexActual === 1){ // Este es el indice del segundo ejemplo por lo que luego de este se envia al estimulo inicial

        this.indexActual = this.indexInicial
        this.estimuloActual = "assets/estimulos/matrices/" + this.estimuloInicial

      }else if(this.indexInicial===2){ // Si el indice inicial es 2 no se compara para verificar el retorno

        this.indexActual++;
        this.estimuloActual = "assets/estimulos/matrices/" + this.estimulos[this.indexActual];
  
      }else if(this.indexInicial===5){ // Si el indice inicial es 5 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 5 || this.indexActual === 6) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 5;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 5 0 6 sigue aumentado a partir de ahí
          this.indexActual++;
          this.estimuloActual = "assets/estimulos/matrices/" + this.estimulos[this.indexActual];
        }else{ //En caso de que halla fallado el item 5 o el 6 vuelve al item 4 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            this.estimuloActual = "assets/estimulos/matrices/" + this.estimulos[this.indexActual];
          }else{
            this.indexActual--;
            this.estimuloActual = "assets/estimulos/matrices/" + this.estimulos[this.indexActual];
          }
          
        }
      }

    }else{
      this.estado = 'terminado';
    }
  }

  verificarResultado(respuestaDada:number){
    if(respuestaDada === this.respuestas[this.indexActual]){
      this.cambiarPuntuacion(1);
    }else{
      this.cambiarPuntuacion(0);
    }
  }

  cambiarPuntuacion(punt:number){

    if(punt === 0){

      if(this.indexActual === 0 || this.indexActual === 1){
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
        if(punt===1){
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

  getResultado():number {
    var total = 0;
    for(var i=2;i<this.resultados.length;i++){
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
    
    for(let j = 2;j<this.resultados.length;j++){
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
