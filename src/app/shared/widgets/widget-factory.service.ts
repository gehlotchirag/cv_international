import { Injectable } from '@angular/core';
import { SingleRowComponent, TwoColumnComponent } from './'

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
