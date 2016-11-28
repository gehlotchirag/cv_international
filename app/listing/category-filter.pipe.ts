/**
 * Created by rupali on 10/13/16.
 */

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
  
    transform(value: any, args: string[]): any {
       if(value.length===0){
           return value;
       }
       let resultArray=[];
        for(let item of value)
        {
            if(item.match( args[0]))
            {
                resultArray.push(item);
            }
        }
        return resultArray;
    }


}
