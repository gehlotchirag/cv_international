import {Pipe} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string, args?: any) : string {
    let limit = parseInt(args);
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}