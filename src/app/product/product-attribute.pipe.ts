import { Pipe, PipeTransform } from '@angular/core';
import {concatAll} from '../shared/utils';

@Pipe({
  name: 'productAttributePipe'
})
export class ProductAttributePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let filteredAttributesArray = [];
    let filteredString = '';
    if(value === null || value === undefined){
        filteredString = '';
    }
    else{
      ( Array.isArray(args) && Array.prototype.forEach.call(args, (arg) => {
        if(value[arg]){
          filteredAttributesArray.push(value[arg]);
        }
      }) ) || (value[args] && filteredAttributesArray.push(value[args]));

      filteredString = concatAll(filteredAttributesArray).join(' ');
    }
    return filteredString;
  }

}
