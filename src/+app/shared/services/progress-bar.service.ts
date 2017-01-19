import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class ProgressBarService {

    private static _progress:number = 0;
    private static _height:string = '2px';
    private static _color:string = 'firebrick';
    private static _visible:boolean = true;

    private static _intervalCounterId:any = 0;
    public static interval:number = 400; // in milliseconds

    private static _emitters: { [ID: string]: EventEmitter<any> } = {
        'visible': new EventEmitter<boolean>(),
        'progress': new EventEmitter<any>()
    };
    
    constructor() {}

    static set progress(value:number) {        
        if (value > 0 && !this.visible) {
            this.visible = true;
        }
        this._progress = value;
        this._emitters['progress'].emit(this._progress);
    }

    static get progress():number {
        return this._progress;
    }

    static set visible(value: boolean) {
        this._visible = value;
        this._emitters['visible'].emit(this._visible);
    }

    static get visible():boolean {
        return this._visible;
    }

    static getBarProgress(){
        return this._emitters['progress'];
    }

    static getBarVisibility(){
        return this._emitters['visible'];   
    }

    start(onCompleted:Function = null) {
        this.stop();
        ProgressBarService.visible = true;
        ProgressBarService._intervalCounterId = setInterval(() => {
            if(ProgressBarService.progress === 0) { 
                ProgressBarService.progress = 50;
            } else {
                ProgressBarService.progress++
            }
            // If the progress is 100% - call complete
            if (ProgressBarService.progress === 100) {
                this.complete();
            }
        }, ProgressBarService.interval);
    }

    stop() {
        if (ProgressBarService._intervalCounterId) {
            clearInterval(ProgressBarService._intervalCounterId);
            ProgressBarService._intervalCounterId = null;
        }
    }

    complete() {
        ProgressBarService.progress = 100;
        this.stop();
        setTimeout(() => {
            ProgressBarService.visible = false;
            setTimeout(() => {
                ProgressBarService.progress = 0;
            }, 250);
        }, 250);
    }


}
