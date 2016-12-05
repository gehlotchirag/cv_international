import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'liveFilter'
})
export class LiveFilterPipe implements PipeTransform {

  transform(value: any[], inputString: string): any {
    let filteredValues = [];

    if(value === null || value === undefined){
        filteredValues = [];
    }
    else{
      for(let val of value){
        if(val.name.toLowerCase().indexOf(inputString.toLowerCase()) != -1){
          filteredValues.push(val);
        }
      }
    }
    return filteredValues;
  }

}
