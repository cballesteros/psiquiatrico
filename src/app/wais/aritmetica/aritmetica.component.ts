import { Component, OnInit } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-aritmetica',
  templateUrl: './aritmetica.component.html',
  styleUrls: ['./aritmetica.component.css']
})
export class AritmeticaComponent implements OnInit {

  estado:String = 'seleccion';// Esta variable me dice en que estado
  respuestaDada:String; // Variable del input de respuesta

  estimulos:String[] = ["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"];
  respuestas:String[] = ['3','3','10','6','9','2','8','5','5','17','5','3','200','38','140','30 min ó 1/2 hora','186 min ó 3h 06 min','600','47','49 1/2','51','216','23100'];
  //                    [ej,1,2,3,4,5,6,7,8,9,10,11...]
  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  respuestasDadas:String[] = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
  consigna:String[] = ["Juan tiene 6 pelotas.Pierde 3 ¿Cuantas pelotas le quedan?",
                       "Cuente estas flores con el dedo en voz alta para que o pueda oirlo",
                       "Cuente estas manzanas con el dedo en voz alta para que o pueda oirlo",
                       "¿Cuantas raquetas y pelotas hay en total?",
                       "¿Cuantos pajaros y gatos hay en total?",
                       "¿Cuantas correas quedaran si cada perro lleva una?",
                       "Fernando tiene 4 mantas y compra otras 4.¿Cuantas mantas tiene Fernando en total?",
                       "Raul tiene 9 lapiceros y regala 4 a Marta.¿Cuantos lapiceros le quedan a Raul?",
                       "En una clase hay 4 niños y 20 juguetes. Si cada niño recibe el mismo numero de juguetes.¿Cuantos juguetes recibira cada niño?",
                       "Susana tiene 35 años:Roberto tiene 18 años.¿Cuantos años es Susana mayor que Roberto?",
                       "Juan tiene 28 libros. Si vende la mitad de ellos a una libreria y regala otros 9 a un amigo.¿Cuantos libros le quedan?",
                       "Jorge tiene 51 discos.Si regala 6 discos a cada uno de sus 8 amigos.¿Cuantos discos le quedan?",
                       "En cada paquete hay 25 chicles.¿Cuantos chicles hay en 8 paquetes?",
                       "Alberto da 4 tarjetas a cada uno de sus 8 amigos.Si todavia le quedan 6 tarjetas para mañana.¿Cuantas tarjetas tenia Alberto en total?",
                       "Un atleta corre 22 minutos cada dia de lunes a viernes.Si corre 30 minutos el sabado.¿Cuantos minutos corre en total por semana?",
                       "Beatriz espera en la cola del cine detras de 160 personas.Como no han llegado sus amigos ella dejar pasar a 20 personas. Si 6 personas llegan a la taquilla cada minutos.¿Cuanto tiempo tardaran Beatriz y sus amigos en llegar a la taquilla?",
                       "Un pastelero puede cocinar 2 pasteles en 31 minutos.¿Cuantos tiempo tardara en cocinar 12 pasteles?",
                       "Alejandro ha vendido los 2/3 del numero de periodicos que ha vendido Miguel.Alejandro ha vendido 400 periodicos.¿Cuantos periodicos a vendido Miguel?",
                       "Un obrero ha trabajado 188 horas en 4 semanas.Si trabaja el mismo numero de horas cada semana.¿Cuantas horas por semana ha trabajado?",
                       "David pesa el doble que Javier.Si David pesa 99 kilos.¿Cuantos kilos pesa Javier?",
                       "Un ciclista da, habitualmente, 60 vueltas alrededor de un circuito.Si hoy recorre un 15% menos.¿Cuantas vueltas ha dado hoy?",
                       "Si 18 maquinas pueden completar el trabajo en 6 dias.¿Cuantas maquinas se necesitarian para finalizar el trabajo en medio dia?",
                       "En una afocina de correos, se clasificaron 20000 cartas en octubre.En noviembre, el numero de cartas para clasificar se incremento un 10%.En diciembre, el numero de cartas para clasificar se incremento otro 5%.¿Cuantas cartas se clasificaron en diciembre, despues de los dos incrementos?",
                      ];

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
    this.indexInicial = num

    if(this.indexInicial < 5){
      this.estimuloInicial = this.estimulos[this.indexInicial];
    }else{
      this.estimuloInicial = this.estimulos[0];
    }

    this.indexActual = 0;
    this.estimuloActual = "assets/estimulos/aritmetica/" + this.estimulos[this.indexActual];

    this.consignaActual = this.consigna[this.indexActual];

    this.estado = 'ejemplo';
  }

  verificarSiguienteEstimulo(){
    if(this.terminacion < 3 && this.indexActual < 22){ // Verifica que no se haya cumplido la condicion de termino

      if(this.indexActual>0 && this.indexActual<5){ //Cambia el estado actual para no mostrar o mostrar la img cuando sea necesario
        this.estado = 'aplicacionImg';
        this.estimuloActual = "assets/estimulos/aritmetica/" + this.estimulos[this.indexActual];
      }else if(this.indexActual>=5){
        this.estado = 'aplicacion';
      }

      if(this.estado === 'ejemplo'){ //este es el indice del primer ejemplo        
        if(this.indexInicial === 6){
          this.estado = 'aplicacion';
        }else{
          this.estado = 'aplicacionImg';
          this.estimuloActual = "assets/estimulos/aritmetica/" + this.estimulos[this.indexActual];
        }        
        this.indexActual = this.indexInicial;
        this.consignaActual = this.consigna[this.indexActual];
      
      }else if(this.indexInicial===1){ // Si el indice inicial es 1 no se compara para verificar el retorno
        if(this.indexActual<5){
          this.estimuloActual = "assets/estimulos/aritmetica/" + this.estimulos[this.indexActual];
        }
        this.indexActual++;
        this.consignaActual = this.consigna[this.indexActual];
  
      }else if(this.indexInicial===6){ // Si el indice inicial es 6 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 6 || this.indexActual === 7) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 6;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 6 0 7 sigue aumentado a partir de ahí
          this.indexActual++;
          this.consignaActual = this.consigna[this.indexActual];
        }else{ //En caso de que halla fallado el item 6 o el 7 vuelve al item 5 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            if(this.indexActual<6){
              this.estado = 'aplicacionImg';
              this.estimuloActual = "assets/estimulos/aritmetica/" + this.estimulos[this.indexActual];
            }else{
              this.estado = 'aplicacion';
            }
            this.consignaActual = this.consigna[this.indexActual];
            
          }else{
            this.indexActual--;
            if(this.indexActual<6){
              this.estado = 'aplicacionImg';
              this.estimuloActual = "assets/estimulos/aritmetica/" + this.estimulos[this.indexActual-1];
            }
            this.consignaActual = this.consigna[this.indexActual];
          }
          
        }
      }

    }else{
      this.estado = 'terminado';
    }
  }

  verificarResultado(){
    this.respuestasDadas[this.indexActual] = this.respuestaDada;
    this.respuestaDada = null;
    if(this.respuestasDadas[this.indexActual] === this.respuestas[this.indexActual]){
      this.cambiarPuntuacion(1);
    }else{
      this.cambiarPuntuacion(0);
    }
  }

  cambiarPuntuacion(punt:number){
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
