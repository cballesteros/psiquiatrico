import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semejanzas',
  templateUrl: './semejanzas.component.html',
  styleUrls: ['./semejanzas.component.css']
})
export class SemejanzasComponent implements OnInit {

  estado:String = 'seleccion';// Esta variable me dice en que estado

  indexInicial:number = null;
  indexActual:number = null;
  itemActual:String[] = null;

  ejemplo:String[] = ["Dos","Siete"]

  items:String[][] = [["Tenedor","Cuchara"],["Brocoli","Espinaca"],["Caballo","Tigre"],
                      ["Piano","Tambor"],["Barco","Automóvil"],["Calcetines","Zapatos"],
                      ["Alegria","Miedo"],["Huevo","Semilla"],["Comida","Gasolina"],
                      ["Vapor","Niebla"],["Poema","Estatua"],["Ancla","Valla"],
                      ["Cudo","Cilindro"],["Música","Marea"],["Sedentario","Nómada"],
                      ["Amigo","Enemigo"],["Siempre","Nunca"],["Permitir","Prohibir"]];

  respuestas:String[] = ["","","","","","","","","","","","","","","","","",""];

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente
  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno

  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


  constructor() { }

  ngOnInit() {
  }

  selectInit(num:number){
    this.indexInicial = num-1;

    this.estado = 'ejemplos';
  }

  aplicar(){

    this.indexActual = this.indexInicial;
    this.itemActual = this.items[this.indexActual];

    this.estado = 'aplicacion';
  }

  guardarRespuesta(){
    var element = (<HTMLInputElement>document.getElementById("res"));
    var x = element.value;
    this.respuestas[this.indexActual] = x;
    element.value = "";
  }

  cambiarPuntuacion(punt:number){

    this.guardarRespuesta();

    if(punt === 0){

      this.resultados[this.indexActual] = punt;
      this.terminacion++
    
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

    this.verificarSiguienteItem()

  }

  verificarSiguienteItem(){
    if(this.terminacion < 3 && this.indexActual < 18){ // Verifica que no se haya cumplido la condicion de termino

      if(this.indexInicial===0){ // Si el indice inicial es 1 no se compara para verificar el retorno

        this.indexActual++;
        this.itemActual = this.items[this.indexActual];
  
      }else if(this.indexInicial===3){ // Si el indice inicial es 3 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 3 || this.indexActual === 4) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 3;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 5 0 6 sigue aumentado a partir de ahí
          this.indexActual++;
          this.itemActual = this.items[this.indexActual];
        }else{ //En caso de que halla fallado el item 5 o el 6 vuelve al item 4 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            this.itemActual = this.items[this.indexActual];
          }else{
            this.indexActual--;
            this.itemActual = this.items[this.indexActual];
          }
          
        }
      }

    }else{
      this.estado = 'terminado';
    }
  }


  getResultado():number {
    var total = 0;
    for(var i=0;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    return total;
  }

  aRevisar(){
    this.estado = 'revision';
  }

  regresarAct(){
    this.estado = 'terminado';
  }

  actualizarResultados(){
    
    for(let j = 0;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'terminado';
  }

}
