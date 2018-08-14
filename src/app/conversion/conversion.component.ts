import { Component, OnInit } from '@angular/core';

import { Number } from './number';


@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})

export class ConversionComponent implements OnInit {

  constructor() { }

  converter={
    "A":10,
    "B":11,
    "C":12,
    "D":13,
    "E":14,
    "F":15
  };

  n: Number = {
  	number:null,
  	initialBase:null,
  	finalBase:null,
  	resultado:null,
  };

  checkInitialBase(){
    let initial = (<HTMLInputElement>document.getElementById("initial"));
    if(initial.valueAsNumber>16){
     initial.valueAsNumber=16;
    }else if(initial.valueAsNumber<=1){
      initial.valueAsNumber=2;
    }
  }

  checkFinalBase(){
    let final = (<HTMLInputElement>document.getElementById("final"));
    if(final.valueAsNumber>16){
      final.valueAsNumber=16;
    }else if(final.valueAsNumber<=1){
      final.valueAsNumber=2;
    }
  }

  calculateResult(){
    
    let rBaseFinal:number, r:number=0, nu:string, num:number;
    let resultado:string;
    let index=this.n.number.length-1;
		for(let n=0; n<this.n.number.length; n++){
      if(this.converter.hasOwnProperty(this.n.number[n])){
        nu=String(this.converter[this.n.number[n]]);
      }else{
        nu=this.n.number[n];
      }
      if(parseInt(nu)>=this.n.initialBase){
        this.n.resultado="Error: "+this.n.number[n]+" no pertenece al dominio de la base inicial "+String(this.n.initialBase);
        return 0;
      }
      r=(parseInt(nu)*(this.n.initialBase**index))+r
      index-=1
    }

    rBaseFinal=r%this.n.finalBase;
    resultado=String(rBaseFinal);
    num=r/this.n.finalBase;
    do{
      rBaseFinal=Math.trunc(num%this.n.finalBase);
      resultado=String(rBaseFinal)+resultado;
      num=num/this.n.finalBase;
    }while(num>=this.n.finalBase);
    resultado=String(Math.trunc(num))+resultado;
    this.n.resultado=resultado;
  }


  ngOnInit() {
  }

}