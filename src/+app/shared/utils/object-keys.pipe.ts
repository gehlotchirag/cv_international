import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class ObjectKeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let keys = [];
    let filteredString = '';
    if(value === null || value === undefined){
        keys = [];
    }
    else{
      for(let key in value){
        keys.push({key: key, value: value[key]});
      }
    }
    return keys;
  }

}
