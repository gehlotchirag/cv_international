import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RouterHeaderBindingService {

  private static _emitters: { [ID: string]: EventEmitter<any> } = {};
  private static _emitter: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  static setMegaMenuStatus(caretStatus: boolean): void {
    this._emitter.emit(caretStatus); // = new EventEmitter<boolean>(caretStatus);
    // return this._emitter;
  }

  static getMegaMenuStatus(): EventEmitter<boolean> {
    return this._emitter;
  }

}
