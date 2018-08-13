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
    console.log(r);

    rBaseFinal=r%this.n.finalBase;
    resultado=String(rBaseFinal);
    num=r/this.n.finalBase;
    do{
      rBaseFinal=Math.trunc(num%this.n.finalBase);
      //console.log(rBaseFinal);
      resultado=String(rBaseFinal)+resultado;
      num=num/this.n.finalBase;
      //console.log(num);
      //console.log(resultado);
    }while(num>=this.n.finalBase);
    resultado=String(Math.trunc(num))+resultado;
    this.n.resultado=resultado;
  }


  ngOnInit() {
  }

}