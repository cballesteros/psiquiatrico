import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-king',
  templateUrl: './king.component.html',
  styleUrls: ['./king.component.css']
})
export class KingComponent implements OnInit {
  
  constructor() { }

  minutes:number = 0;
  seconds:number = 0;
  copyType:string = "";
  observ:string = "";

  absentFig1:boolean = false;
  stateFig1:string = "correcta";
  locatedFig1:boolean = false;

  absentFig2:boolean = false;
  stateFig2:string = "correcta";
  locatedFig2:boolean = false;

  absentFig3:boolean = false;
  stateFig3:string = "correcta";
  locatedFig3:boolean = false;

  absentFig4:boolean = false;
  stateFig4:string = "correcta";
  locatedFig4:boolean = false;

  absentFig5:boolean = false;
  stateFig5:string = "correcta";
  locatedFig5:boolean = false;

  absentFig6:boolean = false;
  stateFig6:string = "correcta";
  locatedFig6:boolean = false;

  absentFig7:boolean = false;
  stateFig7:string = "correcta";
  locatedFig7:boolean = false;

  absentFig8:boolean = false;
  stateFig8:string = "correcta";
  locatedFig8:boolean = false;

  absentFig9:boolean = false;
  stateFig9:string = "correcta";
  locatedFig9:boolean = false;

  absentFig10:boolean = false;
  stateFig10:string = "correcta";
  locatedFig10:boolean = false;

  absentFig11:boolean = false;
  stateFig11:string = "correcta";
  locatedFig11:boolean = false;

  absentFig12:boolean = false;
  stateFig12:string = "correcta";
  locatedFig12:boolean = false;

  absentFig13:boolean = false;
  stateFig13:string = "correcta";
  locatedFig13:boolean = false;

  absentFig14:boolean = false;
  stateFig14:string = "correcta";
  locatedFig14:boolean = false;

  absentFig15:boolean = false;
  stateFig15:string = "correcta";
  locatedFig15:boolean = false;

  absentFig16:boolean = false;
  stateFig16:string = "correcta";
  locatedFig16:boolean = false;

  absentFig17:boolean = false;
  stateFig17:string = "correcta";
  locatedFig17:boolean = false;

  absentFig18:boolean = false;
  stateFig18:string = "correcta";
  locatedFig18:boolean = false;
  
  maxMinutes:number = 60;
  score:number = 0;
  time:number = 0;

  computeScores(absentV:boolean, stateV:string, locatedV:boolean){
    /* 
      Correcta: (=2)
        bien situada: 2 Puntos (-1)
        mal situada: 1 Puntos (*0.5)
      Incorrecta: (=1)
        bien situada: 1 Puntos (*1)
        mal situada: 0.5 Puntos (*0.5)
      Ausente: 0 Puntos (*0)
    
      Valor = State[2 ó 1] * Located[1 ó 0.5] * absent[1 ó 0]
    */
    var state, located, absent, score;
    if(stateV === "correcta"){ state = 2; }else{ state = 1; }    
    if(locatedV){ located = 1; }else{ located = 0.5; }
    if(absentV){ absent = 0; }else{ absent = 1; }
    score = state * located * absent;

    return score;
  }

  save(){
    if((this.minutes >= 0) || (this.minutes <= this.maxMinutes)){
      if((this.seconds >= 0) || (this.seconds < 60)){
        this.time = (this.minutes*60)+this.seconds;

        if(this.time > 0){
          this.score = this.computeScores(this.absentFig1,  this.stateFig1,  this.locatedFig1) +
                       this.computeScores(this.absentFig2,  this.stateFig2,  this.locatedFig2) +
                       this.computeScores(this.absentFig3,  this.stateFig3,  this.locatedFig3) +
                       this.computeScores(this.absentFig4,  this.stateFig4,  this.locatedFig4) +
                       this.computeScores(this.absentFig5,  this.stateFig5,  this.locatedFig5) +
                       this.computeScores(this.absentFig6,  this.stateFig6,  this.locatedFig6) +
                       this.computeScores(this.absentFig7,  this.stateFig7,  this.locatedFig7) +
                       this.computeScores(this.absentFig8,  this.stateFig8,  this.locatedFig8) +
                       this.computeScores(this.absentFig9,  this.stateFig9,  this.locatedFig9) +
                       this.computeScores(this.absentFig10, this.stateFig10, this.locatedFig10) +
                       this.computeScores(this.absentFig11, this.stateFig11, this.locatedFig11) +
                       this.computeScores(this.absentFig12, this.stateFig12, this.locatedFig12) +
                       this.computeScores(this.absentFig13, this.stateFig13, this.locatedFig13) +
                       this.computeScores(this.absentFig14, this.stateFig14, this.locatedFig14) +
                       this.computeScores(this.absentFig15, this.stateFig15, this.locatedFig15) +
                       this.computeScores(this.absentFig16, this.stateFig16, this.locatedFig16) +
                       this.computeScores(this.absentFig17, this.stateFig17, this.locatedFig17) +
                       this.computeScores(this.absentFig18, this.stateFig18, this.locatedFig18);
          console.log("Time: ", this.time, "Segundos  Score: ", this.score);
        }else{
          // MENSAJE DE TIEMPO INVÁLIDO
        }
      }else{
        // MENSAJE DE SEGUNDOS INVÁLIDOS
      }
    }else{
      // MENSAJE DE MINUTOS INVÁLIDOS
    }
  }

  ngOnInit() {
  }

}
//https://angular.io/guide/forms#add-powers-with-ngfor
