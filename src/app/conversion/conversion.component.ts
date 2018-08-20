import { Component, OnInit } from '@angular/core';

import _ from 'lodash';
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
    
    let rBaseFinal:number, r:number=0, nu:string, num:number, b:string, v:number;
    let resultado:string;
    let flotante:string [], flotanteBaseInicial:number=0 , flotanteBaseFinal:number;
    let index=this.n.number.length-1;
    let negIndex=-1;
    if(this.n.number.indexOf('.')>-1){
      flotante=this.n.number.split('.');
      for(let i=0; i<flotante[1].length; i++){
        if(this.converter.hasOwnProperty(flotante[1][i])){
          nu=String(this.converter[flotante[1][i]]);
        }else{
          nu=flotante[1][i];
        }
        if(parseInt(nu)>=this.n.initialBase){
          this.n.resultado="Error: "+flotante[1][i]+" no pertenece al dominio de la base inicial "+String(this.n.initialBase);
          return 0;
        }
        flotanteBaseInicial=(parseFloat(nu)*(this.n.initialBase**negIndex))+flotanteBaseInicial;
        negIndex-=1
      }
    }else{
      flotanteBaseInicial=0;
    }
    
    

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
    if(_.findKey(this.converter,  _.partial(_.isEqual, rBaseFinal))){
      b=_.findKey(this.converter, _.partial(_.isEqual, rBaseFinal));
    }else{
      b=String(rBaseFinal);
    }
    if(this.converter.hasOwnProperty(b)){
      if(this.converter[b]>=this.n.finalBase){
        this.n.resultado="Error: "+rBaseFinal+" no pertenece al dominio de la base final "+String(this.n.finalBase);
        return 0;
      }
    }
    resultado=String(b);
    num=r/this.n.finalBase;
    do{
      rBaseFinal=Math.trunc(num%this.n.finalBase)
      if(_.findKey(this.converter,  _.partial(_.isEqual, rBaseFinal))){
        b=_.findKey(this.converter, _.partial(_.isEqual, rBaseFinal));
      }else{
        b=String(rBaseFinal);
      }
      if(this.converter.hasOwnProperty(b)){
        if(this.converter[b]>=this.n.finalBase){
          this.n.resultado="Error: "+rBaseFinal+" no pertenece al dominio de la base final "+String(this.n.finalBase);
          return 0;
        }
      }
      resultado=String(b)+resultado;
      num=num/this.n.finalBase;
    }while(num>=this.n.finalBase);
    num=Math.trunc(num);
    if(_.findKey(this.converter,  _.partial(_.isEqual, num))){
      b=_.findKey(this.converter, _.partial(_.isEqual, num));
    }else{
      b=String(num);
    }
    if(this.converter.hasOwnProperty(b)){
      if(this.converter[b]>=this.n.finalBase){
        this.n.resultado="Error: "+rBaseFinal+" no pertenece al dominio de la base final "+String(this.n.finalBase);
        return 0;
      }
    }
    resultado=String(b)+resultado;

    this.n.resultado=resultado;
  }


  ngOnInit() {
  }

}