import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RouterHeaderBindingService {

  private static _emitters: { [ID: string]: EventEmitter<any> } = {
    'caretStatus': new EventEmitter<boolean>(),
    'menuData': new EventEmitter<any>(),
    'searchQuery': new EventEmitter<any>(),
  };
  private static _emitter: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  static setMegaMenuStatus(caretStatus: boolean): void {
    this._emitters['caretStatus'].emit(caretStatus);
  }

  static getMegaMenuStatus(): EventEmitter<boolean> {
    return this._emitters['caretStatus'];
  }

  static setMegaMenuData(data): void {
    this._emitters['menuData'].emit(data);
  }

  static getMegaMenuData(): EventEmitter<any> {
    return this._emitters['menuData'];
  }

  static setSearchQuery(query): void {
    this._emitters['searchQuery'].emit(query);
  }

  static getSearchQuery(): EventEmitter<any> {
    return this._emitters['searchQuery'];
  }

}
