import { Injectable } from '@angular/core';
import { SingleRowComponent } from './single-row/single-row.component';
import { TwoColumnComponent } from './two-column/two-column.component';

@Injectable()
export class WidgetFactoryService {

  constructor() { }

  getWidgetBaseClassName(type: string) {
    switch(type){
      case 'single-row':
        return SingleRowComponent;

      case 'two-column':
        return TwoColumnComponent;

      default:
        throw new TypeError('unregistered component')
    }
  }

}
