import { Pipe, PipeTransform } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Pipe({
  name: 'stage'
})
export class StagePipe implements PipeTransform {

  transform(value:string, attiva:boolean): string { 
     if(attiva){
       value=this.pipo.transform(value);
     }else{

     }
    return  value;
  }
  constructor (private pipo: UpperCasePipe){}
}

