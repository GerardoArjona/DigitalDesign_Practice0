import { Component, OnInit } from '@angular/core';

import { Number } from './number';


@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})

export class ConversionComponent implements OnInit {

  constructor() { }

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
  	
    let rBaseFinal:number;
    let resultado:string;
    let r:number=0;
    let num:number;
    let index=this.n.number.length-1;
		for(let n=0; n<this.n.number.length; n++){
      r=(parseInt(this.n.number[n])*(this.n.initialBase**index))+r
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