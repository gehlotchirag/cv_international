
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'NumberDecimalPipe'
})
export class NumberDecimalPipe implements PipeTransform {

  pi: number = 123453.141592;
  e: number = 123420.718281828459045;

  transform(){

  }

}




