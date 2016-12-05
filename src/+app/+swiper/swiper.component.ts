import { Component, Input, OnInit, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewChecked, AfterViewInit, NgZone } from '@angular/core';
import { DomAdapter, getDOM } from '@angular/platform-browser/src/dom/dom_adapter';

declare var Swiper: any;

@Component({
    selector: 'swiper',
    template: `<div class="swiper-container">
                    <ng-content></ng-content>
                </div>`,
    styles: [':host {display: block;}', '.swiper-container {width: auto;height: auto;}']
})
export class SwiperComponent implements AfterViewChecked, AfterViewInit {
    //add all the options as optional settings and use them to create an options object
    @Input() config: Object;
    @Input('initialize') set initialize(value: boolean) {            
            this.shouldInitialize = this.initialized ? false : value  ;
    };

    Swiper: any;

    private swiperWrapper: any;
    private slideCount: number = 0;        
    private initialized: boolean = false;    
    private shouldInitialize: boolean = true;    
    private _dom: DomAdapter = getDOM();


    constructor(private elementRef: ElementRef, private ngZone: NgZone) { }

    ngAfterViewInit() {
        if (this.shouldInitialize && (typeof window !== 'undefined')) {
            this.setup();
        }
    }

    setup() {
        if (!this.Swiper) {
            this.swiperWrapper = this._dom.query(`.swiper-wrapper`);
            this.slideCount = this.swiperWrapper.childElementCount;
            this.Swiper = new Swiper(this._dom.query(`.swiper-container`), this.config);
            this.shouldInitialize = false;
        }
    }

    ngAfterViewChecked() {
        if(this.shouldInitialize && (typeof window !== 'undefined')){
            this.setup();
        }

        if (this.swiperWrapper && this.slideCount !== this.swiperWrapper.childElementCount) {
            this.slideCount = this.swiperWrapper.childElementCount
            this.Swiper.update();
        }
    }
}