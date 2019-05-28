import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import 'annyang';

declare var annyang: any;

@Component({
  selector: 'app-stroop',
  templateUrl: './stroop.component.html',
  styleUrls: ['./stroop.component.css']
})

export class StroopComponent implements OnInit {

  annyang: any = annyang;

  progressColors:number = 0;
  
  progressWords:number = 0;
  
  progressMix:number = 0;

  test:string = 'words';  

  colors:String[] = ["Azul","Rojo","Verde","Azul","Verde","Rojo","Verde","Rojo","Azul","Rojo",
                      "Azul", "Verde","Rojo","Verde","Azul","Verde","Azul","Rojo","Verde","Azul",
                      "Rojo","Azul","Verde","Rojo","Verde","Azul","Verde","Rojo","Azul","Rojo",
                      "Azul","Verde","Azul","Verde","Rojo","Verde","Rojo","Azul","Rojo","Verde",
                      "Azul","Verde","Rojo","Azul","Rojo","Verde","Rojo","Azul","Verde", "Rojo",
                      "Verde","Azul","Rojo","Verde","Azul","Verde","Rojo","Azul","Verde","Azul",
                      "Verde","Rojo","Azul","Verde","Rojo","Azul","Verde","Rojo","Azul","Verde",
                      "Azul","Rojo","Azul","Rojo","Verde","Azul","Verde","Rojo","Azul","Rojo",
                      "Rojo","Azul","Verde","Rojo","Azul","Verde","Rojo","Azul","Verde","Azul",
                      "Verde","Rojo","Azul","Verde","Rojo","Azul","Rojo","Verde","Azul","Rojo"];

  words: String[] = ["Rojo", "Verde", "Azul", "Verde", "Rojo", "Azul", "Rojo", "Azul", "Verde", "Azul",
                        "Verde", "Rojo", "Verde", "Azul", "Rojo", "Azul", "Rojo", "Verde", "Rojo", "Verde",
                        "Azul", "Verde", "Rojo", "Azul", "Rojo", "Verde", "Azul", "Verde", "Rojo", "Verde",
                        "Rojo", "Azul", "Rojo", "Azul", "Verde", "Azul", "Verde", "Rojo", "Azul", "Rojo",
                        "Verde", "Rojo", "Azul", "Rojo", "Verde", "Azul", "Verde", "Rojo", "Azul", "Verde",
                        "Azul", "Rojo", "Azul", "Rojo", "Verde", "Rojo", "Azul", "Verde", "Rojo", "Verde",
                        "Rojo", "Azul", "Verde", "Rojo", "Azul", "Verde", "Azul", "Verde", "Rojo", "Azul",
                        "Rojo", "Verde", "Rojo", "Verde", "Azul", "Verde", "Rojo", "Azul", "Verde", "Azul",
                        "Azul", "Verde", "Rojo", "Azul", "Verde", "Rojo", "Verde", "Rojo", "Azul", "Verde",
                        "Rojo", "Azul", "Verde", "Rojo", "Azul", "Rojo", "Verde", "Azul", "Rojo", "Verde" ];

  time: number = 45000;

  interval;

  check(col:string){
    switch(this.test){
      case 'test-words':
        if(this.words[this.progressWords]===col){
          this.progressWords++
          //console.log(this.progressWords)
        }
      break;
      case 'test-colors':
        if(this.colors[this.progressColors]===col){
          this.progressColors++
          //console.log(this.progressColors)
        }
      break;
      case 'test-mix':
        if(this.colors[this.progressMix]===col){
          this.progressMix++
          //console.log(this.progressMix)
        }
      break
    }
    this.cdr.detectChanges()    
  } 

  startRecognition(){
    var commands = {
      'rojo': ()=> {this.check("Rojo")},
      'verde': ()=> {this.check("Verde")},
      'azul': ()=> {this.check("Azul")}
    }

    if(annyang){
      this.annyang.addCommands(commands);
      this.annyang.setLanguage("es-CO")
      this.annyang.debug()
      annyang.start({ autoRestart: true, continuous: false });
    }else {
      alert(" El reconocimiento de voz no es compatible con este navegador " );
      this.test='words'
    }
  }
                       
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.changeTest();
      clearInterval(this.interval);
    },this.time)
  }


  changeTest(){
    
    switch(this.test){
      case 'words':
        this.test='test-words'
        this.startRecognition() 
        this.startTimer()
        break;
      case 'test-words':
        this.test='colors'
        this.annyang.pause();
        break;
      case 'colors':
        this.test='test-colors'
        this.annyang.resume()
        this.startTimer()
        break;
      case 'test-colors':
        this.test='mix'
        this.annyang.pause();
        break;
      case 'mix':
        this.test='test-mix'
        this.annyang.resume()
        this.startTimer()
        break;
      case 'test-mix':
        this.test='resultados'
        this.annyang.abort();
        break;
    }
    //console.log(this.test)
  }
}
