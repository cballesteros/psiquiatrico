import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  estado:String = 'seleccion';// Esta variable me dice en que estado
  respuestaDada:String; // Variable del input de respuesta
  
  resultados:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  respuestasDadas:String[] = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'];
  consigna:String[] = ["* 1. ¿Qué día viene despues del lunes?",
                       "* 2. ¿Qué forma tienen la mayoría de las pelotas?",
                       "† 3. ¿Qué es un termómetro?",
                       "† 4. ¿Quién fue Salvador Dalí?",
                       "5. ¿En qué continente está el desierto del Sáhara?",
                       "6. ¿Quién escribio el Quijote?",
                       "7. ¿Cuál es la capital de japón?",
                       "8. ¿De que está compuesta el agua?",
                       "9. ¿En que condinete está egipto?",
                       "10. ¿Quién pintó la Capilla Sixtina?",
                       "11. ¿En que año se descubrió América?",
                       "12. ¿A qué temperatura hierve el agua en condiciones normales?",
                       "13. ¿Qué ciudad es considerada como la capital de la Unión Europea?",
                       "14. ¿Por qué es famoso Fleming?",
                       "15. ¿Quién fue Galileo?",
                       "16. ¿A qué nombre de persona se asocia normalmente la teoría de la relatividad?",
                       "17. ¿Qué idioma tiene más hablantes nativos?",
                       "18. ¿Quién es el autor del libro Cien años de soledad?",
                       "19. ¿Quién fue Mahatma Gandhi?",
                       "20. ¿Qué cordillera separa Asia de Europa?",
                       "* 21. Dígame el nombre de tres tipos de vasos sanguíneos del cuerpo humano",
                       "22. ¿Quien fue Catalina la Grande?",
                       "23. ¿Cuál es el órgano del cuerpo humano más grande?",
                       "* 24. ¿Cuántos minutos tarda la luz del Sol en alcanzar la Tierra?",
                       "25. ¿Quién escribió Alicia en el País de las Maravilla?",
                       "* 26. ¿Cuál es la circunferencia de la Tierra en el Ecuador?"];

  respuestaCorrecta:String[] = ["Martes",
                                "Redonda/Circular/Esférica\nComo una <<O>>\n[Gestos que indican una forma circular o redonda]",
                                "Instrumento (herramienta) para medir la temperatura (grados)\nPara saber el punto de ebullición (congelación)\nPara saber si algo está caliente o frio\nAparato para medir la fiebre",
                                "Pintor/Escultor/Arquitecto/Artista",
                                "África/Africano\nNorte (centro/sur) de África",
                                "Cervantes/Miguel de Cervantes/Miguel de Cervantes Saavedra",
                                "Tokio",
                                "H2O\nOxígeno e hidrógeno\nDos átomos de hidrógeno y uno de oxígeno",
                                "África/Africano\nNorte (centro/sur) de África",
                                "Miguel Ángel\nMichelangelo",
                                "1492",
                                "100 grados Celcius (centrígrados)/100 Celsius (centígrados)\n212 grados Fahrenheit/212 Fahrenheit\nAlrededor de 100 grados Celcius (centígrados)\nAlrededor de 299 grados Fahrenheit\n373 grados Kelvin/[Cualquier cifra entre 300 y 400 Kelvin]\n672 grados Rankine\[Cualquier cifra entre 600 y 700 Rankine]\n[Si no especifica la escala, preguntar en qué escala]",
                                "Bruselas",
                                "Descubrió la penicilina\nInventor de la penicilina",
                                "Astrónomo/Filósofo/Fisico/Matemático/Científico",
                                "Albert Einstein\nEinstein",
                                "Chino/Mandarín",
                                "Gabriel Garcia Márquez\nGabito\nGabo",
                                "Pacifista\nLíder indio promotor de la resistencia pacífica\nPacifista (activista/filósofo/revolucionario) indio\nLuchador por los derechos de la india\nLíder espiritual indio",
                                "Los Urales",
                                "Tres respuestas de las siguientes:\nArterias/Venas/Capilares/Arteriolas/Vénulas/Vasos linfáticos",
                                "Reina rusa del siglo XVIII/Reina rusa/Zarina rusa/Monarca rusa",
                                "La piel",
                                "8 minutos\n[Cualquier respuesta entre 7 y 9 minutos]\n480 segundos\n[Cualquier respuesta entre 420 y 540 segundos]",
                                "Lewis Carroll/Carroll\nCharles Dodgson/Charles Lutwidge Dodgson",
                                "40075 kilómetros\n[Cualquier respuesta entre 32060 y 48090 kilómetros]\n24901 millas\n[Cualquier respuesta entre 19921 y 29881 millas]"];

  respuestaErronea:String[] = ["Ayer/Hoy/Mañana (P)*\nNavidad/Mi cumpleaños [se refiere a una festividad o día especial](P)*\nEl 25 de octubre [responde con una fecha](P)\n[Nombra cualquier otro día de la semana]",
                               "[Describe la forma de una pelota de rugbi o de cualquier otra pelota no esférica](P)*\nPelota de fútbol (tenis) [nombra el tipo de bola]\n[Nombra cualquier otra forma]",
                               "Cuando estás enfermo/Gente enferma/Enfermedad(P)\nMedida de la presión atmosférica (nivel del agua)",
                               "Un escritor\nUn genio/Un vanguardista(P)",
                               "[Nombra otro continente distinto a África]",
                               "Un escritor (español) (P)\n[Nombra a otro autor]\nMiguel",
                               "[Nombra otra ciudad]\nJapón/China [Nombra un país]",
                               "Partículas\nElementos físicos\n[Nombra una composición errónea]",
                               "[Nombra otro continente distinto a África]",
                               "Un pintor italiano (P)\n[Nombra a otro pintor]",
                               "[Nombre otro año]\nCristóbal Colón",
                               "100 grados Fahrenheit [cifra correcta pero denominación de una escala incorrecta]\n[Cualquier otra cifra]",
                               "Bélgica (P)\n[Nombra otra ciudad]\nAlemania/Inglaterra [Nombra un país]",
                               "Científico(P)\nInventor del teléfono",
                               "Un italiano (P)\nEscultor [Cualquier otra profesión]",
                               "[Cualquier otro nombre]",
                               "[Nombra otro idioma]\nChina (P)",
                               "Escritor/Novelista (P)\nGabriel\nMacondo\n[Nombra otro autor]",
                               "Ganador del Premio Nobel de la Paz (P)\nLíder/Religioso (P)\nUn budista/Un filósofo\nPresidente de la India\nEra de la India (P)\nDejó de comer (P)",
                               "[Nombra otra cordillera]",
                               "Aorta, carótida y femoral [nombra un vaso específico](P)*\n[Nombra menos de tres tipos de vaos sanguíneos](P)**",
                               "La mujer de Alejandro el Grande\nReina española [nombra un país incorrecto]\nReina (monarca/emperatriz)/De la realeza (P)",
                               "[Nombra otro órgano]",
                               "Un año\n250000 a 320000 kilómetros por segundo [cualquier respuesta en referencia a la velocidad de la luz](P)*",
                               "Lewis/Charles (P)\nWalt Disney",
                               "[Cualquier respuesta entre 32060 y 48090](P)*\n[Cualquier respuesta entre 19921 y 29881](P)*\n2πr/πd/π/πr2/Pi(P)**"];

  comentario:String[] = ["* Si el sujeto dice <<Ayer>>,<<Hoy>> o <<Mañana>>, o da el nombre de una festividad a un día especial, se pregunta:<<¿Qué día es?>>",
                         "* Si el sujeto describe la forma de una pelota que no es redonda (p. ej., la de rugby), se pregunta: <<Qué forma tienen la mayoría de las pelotas?>>",
                         "† Si el sujeto no da una respuesta correcta, decir: <<Un termómetro es un instrumento que sirve para medir la temperatura>>",
                         "† Si el sujeto no da una respuesta correcta, decir: <<Salvador Dalí era un pintor y escultor>>",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "",
                         "* Si el sujeto da el nombre de un vaso sanguíneo específico (p. ej., <<Ahorta>>), decir: <<Sí, pero dígame el nombre de tras tipos de vasos sanguíneos humanos>>\n** Si el sujeto nombra menos de tres tipos de vasos sanguíneos, decir: <<Dígame el nombre de otro tipo de vaso sanguíneo>>",
                         "",
                         "",
                         "* Si el sujeto da una respuesta que se refiere a la velocidad de la luz, decir: <<Cuántos minutos tarda la luz del Sol en alcanzar la Tierra?>>",
                         "",
                         "* Si el sujeto da una respuesta numérica correcta pero no indica la unidad de medida, decir: <<Si, pero ¿en qué una unidad de medida?>>\n** Si el sujeto dice <<2πr>> o <<πd>>, decir: <<Sí, pero ¿cuál es la respuesta en kilómetros?>>"];

  consignaActual:String = null;
  respuestaCorrectaAct:String = null;
  respuestaErroneaAct:String = null;
  comentarioAct:String = null;
  
  indexInicial:number = null;
  indexActual:number = null;

  terminacion:number = 0; //Esta variable me dice cuantos ceros consecutivos tuvo el paciente

  retorno:boolean = false; // Esta variable me ayuda a controlar el uso de la regla del retorno
  countRe:number = 0; //Esta variable me dice cuando se puede salir de la condición de retorno
  flagRe:number = null;//Esta variable me ayuda a decir en que posicion quedo el paciente antes de entrar al retorno

  radioPunto:boolean = true;
  defRadioPunto0:boolean = false;
  //radioPunto1 = false;
  defRadioPunto1:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  testInit(num:number){
    this.indexInicial = num
    this.indexActual = 0;

    this.consignaActual = this.consigna[this.indexActual];
    this.respuestaCorrectaAct = this.respuestaCorrecta[this.indexActual];
    this.respuestaErroneaAct = this.respuestaErronea[this.indexActual];
    //this.respuestaErroneaAct = this.respuestaErroneaAct.replace(/\n/g, "<br />");
    var newline = String.fromCharCode(13, 10);
    //this.respuestaErroneaAct = this.respuestaErroneaAct.replace(/\\n/g, String.fromCharCode(13, 10) )
    this.comentarioAct = this.comentario[this.indexActual];

    this.radioPunto = true;
    //this.radioPunto1 = false;

    this.estado = 'aplicacion';
  }

  verificarSiguienteEstimulo(){
    if(this.terminacion < 3 && this.indexActual < 25){ // Verifica que no se haya cumplido la condicion de termino      

      if(this.indexInicial===0){ // Si el indice inicial es 0 no se compara para verificar el retorno
        this.indexActual++;
        this.consignaActual = this.consigna[this.indexActual];
        this.respuestaCorrectaAct = this.respuestaCorrecta[this.indexActual];
        this.respuestaErroneaAct = this.respuestaErronea[this.indexActual];
        this.comentarioAct = this.comentario[this.indexActual];
        console.log(this.respuestaCorrectaAct);

        this.radioPunto = true;
        //this.radioPunto1 = false;
  
      }else if(this.indexInicial===2){ // Si el indice inicial es 2 se compara para verificar el retorno
  
        //Este verificacion me dice si se cumple la condición para retornar y asi devolverse en caso de ser necesario
        if((this.indexActual === 2 || this.indexActual === 3) && this.resultados[this.indexActual]===0){
          this.retorno = true;
          this.flagRe = this.indexActual;
          this.indexActual = 2;
        }
  
        if(!this.retorno){ //En caso de no haber fallado los items 3 0 4 sigue aumentado a partir de ahí
          this.indexActual++;
          this.consignaActual = this.consigna[this.indexActual];
          this.respuestaCorrectaAct = this.respuestaCorrecta[this.indexActual];
          this.respuestaErroneaAct = this.respuestaErronea[this.indexActual];
          this.comentarioAct = this.comentario[this.indexActual];

          this.radioPunto = true;
          //this.radioPunto = false;

        }else{ //En caso de que halla fallado el item 3 o el 4 vuelve al item 2 y empieza a disminuir desde ahí
          
          if(this.countRe===2){
            this.retorno = false;
            this.indexActual = this.flagRe + 1;
            this.consignaActual = this.consigna[this.indexActual];
            this.respuestaCorrectaAct = this.respuestaCorrecta[this.indexActual];
            this.respuestaErroneaAct = this.respuestaErronea[this.indexActual];
            this.comentarioAct = this.comentario[this.indexActual];

            this.radioPunto = true;
            //this.radioPunto1 = false;
            
          }else{
            this.indexActual--;
            this.consignaActual = this.consigna[this.indexActual];
            this.respuestaCorrectaAct = this.respuestaCorrecta[this.indexActual];
            this.respuestaErroneaAct = this.respuestaErronea[this.indexActual];
            this.comentarioAct = this.comentario[this.indexActual];

            this.radioPunto = true;
            //this.radioPunto = false;
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
    //console.log("Respuesta: ", this.respuestasDadas[this.indexActual], " Punt", this.radioPunto);

    if(this.radioPunto){
      this.cambiarPuntuacion(1);
    }else{
      this.cambiarPuntuacion(0);
    }
  }

  cambiarPuntuacion(punt:number){
    if(punt === 0){
        this.resultados[this.indexActual] = punt;
        this.terminacion++;

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
    for(var i=0;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    return total;
  }

  //En caso de que el estado sea revision

  aRevisar(){
    this.estado = 'revision';
  }

  actualizarResultados(){
    
    for(let j = 0;j<this.resultados.length;j++){
      var x = (<HTMLInputElement>document.getElementById(""+j)).value;
      this.resultados[j] = +x;
    }
    
    this.estado = 'terminado';
  }

}
