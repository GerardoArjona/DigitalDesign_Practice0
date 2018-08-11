import { Component, OnInit } from '@angular/core';

import { Number } from 'number';


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
  	const converterDecimal={
  		"A":10,
  		"B":11,
  		"C":12,
  		"D":13,
  		"E":14,
  		"F":15
  	};
  	let letters:string[]
  	letters=["A","B","C", "D", "E","F"];
  	let l=0;
  	let initialB=new Array();
  	for(let i=0; i<this.n.initialBase; i++){
  		if(this.n.initialBase<10)
  			initialB.push(i)
  		else{
  			initialB=[0,1,2,3,4,5,6,7,8,9]
  			initialB.push(letters[l])
  			l+=1
  		}
  	}
  	console.log(initialB)
  	let r=0;
  	let index=this.n.number.length-1;
  	for(let n in this.n.number){
  		r=(this.n.number[n]*(this.n.initialBase**index))+r
  		index-=1
  	}
  	console.log(r)
  }


  ngOnInit() {
  }

}