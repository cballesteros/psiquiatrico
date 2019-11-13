import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vocabulario',
  templateUrl: './vocabulario.component.html',
  styleUrls: ['./vocabulario.component.css']
})
export class VocabularioComponent implements OnInit {

  estado:String = 'seleccion';// Esta variable me dice en que estado
  respuestaDada:String; // Variable del input de respuesta

  estimulos:String[] = ["01.jpg","02.jpg","03.jpg"];
  //                    [ej,1,2 ,3,4,5,6,7,8,9,10,11...]
  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  respuestasDadas:String[] = ['','','','','','','','','','','','','','','','','','','','','','',''];
  consigna:String[] = ["","","","Guante","Manzana", "Desayuno", "Cama",
                       "Espejo", "Silencioso","Generar","Compasión","Remordimiento","Meditar","Confiar","Esquivar", 
                      "Valiente","Fortaleza","Evolucionar","Distinción","Opaco","Peculiar","Contrastar","Plagiar", 
                    "Tangible","Reacio","Iniciativa","Audaz","Paliar","Solidario","Pragmatico"];

  consignaActual:String = null;

  estimuloInicial:String = null;
  estimuloActual:String = null;
  indexInicial:number = null;
  indexActual:number = null;

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente

  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno

  constructor() { }

  ngOnInit() {
  }

  imagenInit(num:number){
    this.indexInicial = num-1
    this.estimuloInicial = this.estimulos[this.indexInicial];

    if(this.indexInicial === 0){

      this.indexActual = this.indexInicial;
      this.estimuloActual = "assets/estimulos/vocabulario/" + this.estimulos[this.indexActual];
      this.consignaActual = this.consigna[this.indexActual];

      this.estado = "aplicacionImg"

    }else if(this.indexInicial === 4){

      this.indexActual = this.indexInicial;
      this.estimuloActual = "assets/estimulos/vocabulario/" + this.estimulos[this.indexActual];
      this.consignaActual = this.consigna[this.indexActual];

      this.estado = "aplicacion"

    }
  }

  verificarSiguienteEstimulo(){
    if(this.terminacion < 3 && this.indexActual < 22){ // Verifica que no se haya cumplido la condicion de termino

      if(this.indexActual>=0 && this.indexActual<2){ //Cambia el estado actual para no mostrar o mostrar la img cuando sea necesario
        this.estado = 'aplicacionImg';
      }else if(this.indexActual>=2){
        this.estado = 'aplicacion';
      }
      
      if(this.indexInicial===0){ // Si el indice inicial es 0 no se compara para verificar el retorno
        
        this.indexActual++;
        if(this.indexActual<3){
          this.estimuloActual = "assets/estimulos/vocabulario/" + this.estimulos[this.indexActual];
        }
        this.consignaActual = this.consigna[this.indexActual];
  
      }else if(this.indexInicial===4){ // Si el indice inicial es 4 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 4 || this.indexActual === 5) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 4;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 6 0 7 sigue aumentado a partir de ahí
          this.indexActual++;
          this.consignaActual = this.consigna[this.indexActual];
        }else{ //En caso de que halla fallado el item 6 o el 7 vuelve al item 5 y empieza a disminuir desde ahí
          
          if(this.countRe===3){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            if(this.indexActual<4){
              this.estimuloActual = "assets/estimulos/vocabulario/" + this.estimulos[this.indexActual];
            }
            this.consignaActual = this.consigna[this.indexActual];
            
          }else{
            this.indexActual--;
            if(this.indexActual<4){
              this.estimuloActual = "assets/estimulos/vocabulario/" + this.estimulos[this.indexActual];
            }
            this.consignaActual = this.consigna[this.indexActual];
          }
          
        }
      }

    }else{
      this.estado = 'terminado';
    }
  }

  guardarRespuesta(){
    var element = (<HTMLInputElement>document.getElementById("res"));
    var x = element.value;
    this.respuestasDadas[this.indexActual] = x;
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

    this.verificarSiguienteEstimulo()

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

  actualizarResultados(){
    
    for(let j = 1;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'terminado';
  }
}
