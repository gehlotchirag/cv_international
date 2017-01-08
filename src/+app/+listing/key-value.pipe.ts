import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'keyvalue'
})

export class KeyValuesPipe implements PipeTransform {
  transform(value?, args?:string[]) : any {
    let keyvalues = [];
    for (let key in value) {
      keyvalues.push({key: key, value: value[key]});
    }
    return keyvalues;
  }
}