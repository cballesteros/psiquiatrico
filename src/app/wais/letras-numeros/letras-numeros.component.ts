import { Component, OnInit, HostListener, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-letras-numeros',
  templateUrl: './letras-numeros.component.html',
  styleUrls: ['./letras-numeros.component.css']
})
export class LetrasNumerosComponent implements OnInit {

  @HostListener('window:keyup', ['$event'])

  keyEvent(event: KeyboardEvent) {
    if(this.estado==='test'){
      if(event.keyCode == KEY_CODE.ZERO_UP){
        this.cambiarPrueba(+event.key);
      }else if(event.keyCode == KEY_CODE.ONE_UP){
        this.cambiarPrueba(+event.key);
      }
    }
    
  }

  itemNumber:number = 0;

  intento:number = 0;

  fallo:number = 0;

  estado:string = 'inicio';

  items=[];

  respuesta=[];

  respuestas=[]

  resultados:number[] = new Array(30).fill(0);

  cambiarPrueba(key){
    if(this.estado==='test' && this.itemNumber<10){
      console.log(this.itemNumber*3+this.intento)
      if(key===1 || key===0){
        this.resultados[this.itemNumber*3+this.intento]=key

        if(this.intento===2){
          if(this.itemNumber+1===10)this.estado='resultados'
          else this.itemNumber++;
          this.intento=0;
        }
        else this.intento++;      
        
        if(key===0 ){
          this.fallo++;
          if(this.fallo===3)this.estado='resultados'
        }
        else if(key===1)this.fallo=0;
      }
    }
    else if(this.itemNumber===10)this.estado='resultados'
    this.cdRef.detectChanges();
  }



  constructor(private cdRef:ChangeDetectorRef) {
    
    this.items.push([['2','B'],['D','1'],['4','C']])

    this.items.push([['E','5'],['3','A'],['C','1']])
 
    this.items.push([['5','C','A'],['F','E','1'],['3','2','A']])

    this.items.push([['1','G','7'],['H','9','4'],['3','Q','7']])

    this.items.push([['Z','8','N'],['M','6','E'],['P','2','N']])

    this.items.push([['V','1','J','5'],['7','X','4','G'],['S','9','T','6']])

    this.items.push([['8','E','6','F','1'],['K','4','C','2','S'],['5','Q','3','H','6']])

    this.items.push([['M','4','P','7','R','2'],['6','N','9','J','2','S'],['E','6','H','5','F','3']])

    this.items.push([['R','7','V','4','T','8','F'],['9','X','2','J','3','N','7'],['M','1','Q','8','R','4','D']])

    this.items.push([['6','P','7','S','2','N','9','A'],['E','1','R','9','X','4','K','3'],['7','M','2','T','6','F','9','A']])
   
    this.respuesta.push([['2','B'],['D','1'],['4','C']])

    this.respuesta.push([['E','5'],['3','A'],['C','1']])
 
    this.respuesta.push([['5','C','A'],['F','E','1'],['3','2','A']])

    this.respuesta.push([['1','G','7'],['H','9','4'],['3','Q','7']])

    this.respuesta.push([['Z','8','N'],['M','6','E'],['P','2','N']])

    this.respuesta.push([['V','1','J','5'],['7','X','4','G'],['S','9','T','6']])

    this.respuesta.push([['8','E','6','F','1'],['K','4','C','2','S'],['5','Q','3','H','6']])

    this.respuesta.push([['M','4','P','7','R','2'],['6','N','9','J','2','S'],['E','6','H','5','F','3']])

    this.respuesta.push([['R','7','V','4','T','8','F'],['9','X','2','J','3','N','7'],['M','1','Q','8','R','4','D']])

    this.respuesta.push([['6','P','7','S','2','N','9','A'],['E','1','R','9','X','4','K','3'],['7','M','2','T','6','F','9','A']])

    this.respuestas.push([['2','B'],['D','1'],['4','C']])

    this.respuestas.push([['E','5'],['3','A'],['C','1']])
 
    this.respuestas.push([['A','C','5'],['E','F','1'],['A','2','3']])

    this.respuestas.push([['G','1','7'],['H','4','9'],['Q','3','7']])

    this.respuestas.push([['N','Z','8'],['E','M','6'],['N','P','2']])

    this.respuestas.push([['J','V','1','5'],['G','X','4','7'],['S','T','6','9']])

    this.respuestas.push([['E','F','1','6','8'],['C','K','S','2','4'],['H','Q','3','5','6']])

    this.respuestas.push([['M','P','R','2','4','7'],['J','N','S','2','6','9'],['E','F','H','3','5','6']])

    this.respuestas.push([['F','R','T','V','4','7','8'],['J','N','X','2','3','7','9'],['D','M','Q','R','1','4','8']])

    this.respuestas.push([['A','N','P','S','2','6','7','9'],['E','K','R','X','1','3','4','9'],['A','F','M','T','2','6','7','9']])
    

  }

  getResultado():number {
    var total = 0;
    for(var i=0;i<this.resultados.length;i++){
      total = total + this.resultados[i];
    }
    console.log(this.resultados)
    return total;
  }

  ngOnInit() {
  }

  startTest(){
    this.estado='test'
  }

  aRevisar(){
    this.estado = 'revision';
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
