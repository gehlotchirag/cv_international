import { Injectable } from '@angular/core';

@Injectable()
export class DataHoldingService {

  private static dataCache: {[key: string]: any} = {}
  private static hasLocalStorage: boolean = typeof window !== 'undefined' ? !!window.localStorage : false;

  static setItem(key: string, value: any) {
    // window.localStorage.removeItem(String[key]);
    // if(this.hasLocalStorage){
    //     window.localStorage.setItem(String(key), JSON.stringify(value));
    // }
    this.dataCache[String(key)] = value;
  }

  static getItem(key: string) {
    // window.localStorage.removeItem(String[key]);
    // let hasKey = false;
    // if(!this.dataCache[String(key)] && this.hasLocalStorage){
      // this.dataCache[String(key)] = JSON.parse(window.localStorage.getItem(String(key)));
    //   return JSON.parse(window.localStorage.getItem(String(key)));
    // }
    // else{
      return this.dataCache[String(key)];
    // }
  }

  static deleteItem(key: string){
    if(this.hasLocalStorage){
      window.localStorage.removeItem(String[key]);
    }
    delete this.dataCache[String(key)];
  }

}
