/**
 * Created by rupali on 10/13/16.
 */

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {
        // transform(value: any, args: string[]): any {
        //     console.log("filtervalue " + value);
        //     let filter = args[0] ? args[0].toLocaleLowerCase() : '';
        //     return filter ? value.data(data=> data.toLocaleLowerCase().indexOf(filter) != -1) : value;
        // }


    // transform(value: any, args: string[]): any {
        //     let filter = args[0];
        //
        //     if (filter && Array.isArray(value)) {
        //         let filterKeys = Object.keys(filter);
        //         return value.filter(item =>
        //             filterKeys.reduce((memo, keyName) =>
        //             memo && item[keyName] === filter[keyName], true));
        //     } else {
        //         return value;
        //     }
        // }


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