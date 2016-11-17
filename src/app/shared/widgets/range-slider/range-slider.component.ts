import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Input, Renderer, ElementRef } from '@angular/core';

@Component({
  selector: 'cvi-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnInit, AfterViewInit, OnDestroy  {

  private elems: { [ids: string]: HTMLElement} = {};
  private elem: HTMLElement;
  private _from: number;
  private _to: number;
  private min: number;
  private max: number;
  private t: any = {};
  private n: any = {};

  private moveEvents: string[] = ['mousemove', 'touchmove', 'pointermove'];
  private endEvents: any[] = [{key: 'mouseup', target: 'mousemove'}, {key: 'touchend', target: 'touchstart'},{key: 'pointerup', target: 'pointerdown'}];
  // private listenFromMoveFunc: { [ID: string]: Function } = {};
  private listenFromMoveFunc: Function;
  // private listenToMoveFunc: { [ID: string]: Function } = {};
  private listenToMoveFunc: Function;

  private minPrice: number = 0;
  private maxPrice: number = 500

  @Input() infoData: any;

  constructor(private renderer: Renderer,
              private elementRef: ElementRef) { }

  ngOnInit() {
    this.n = this.infoData = this.infoData || {};
    this.elem = this.elementRef.nativeElement;
    this.min = this.t.min || this.n.rangeMin || 0;
    this.max = this.t.max || this.n.rangeMax || 100;
    // this.minPrice = this.t.minPrice || this.n.priceMin ||
  }

  ngAfterViewInit() {
    try {
      this.elems['from'] = this.renderer.selectRootElement('.slider .from');
      this.elems['to'] = this.renderer.selectRootElement('.slider .to');
      this.elems['range'] = this.renderer.selectRootElement('.slider .range');
      this.elems['selected'] = this.renderer.selectRootElement('.slider .range.selected');
      this.elems['min'] = this.renderer.selectRootElement('.slider-label .min');
      this.elems['max'] = this.renderer.selectRootElement('.slider-label .max');

      if(!this.infoData){
        this.reset();
      }

      this.elems['min'].innerText = String(this.min);
      this.elems['max'].innerText = String(this.max);

    }
    catch(err){}
  }

  rangeClick(event: any){
    let r = event.offsetX * ((this.max - this.min) / this.elems['range'].offsetWidth) + this.min;
    r = Math.floor(r / 100 * 100);
    r = r >= 100 ? r - 1 : r;
    if(event.offsetX <= this.elems['from'].offsetLeft){
      this.from(r)
    }
    else if(event.offsetX >= this.elems['to'].offsetLeft){
      this.to(r)
    }
  }

  rangeSelectedClick(event: any){
    let r = (this.elems['selected'].offsetLeft + event.offsetX) * ((this.max - this.min) / this.elems['range'].offsetWidth) + this.min;
    r = Math.floor(r / 100 * 100);
    r = r >= 100 ? r - 1 : r;
    if(event.offsetX <= this.elems['selected'].offsetWidth / 2){
      this.from(r);
    }
    else{
      this.to(r);
    }
  }

  from(pos: number){
    if (pos === undefined)
      return this._from;
    this._from = pos;
    this.elems['from'].style.left = (pos - this.min) / ((this.max - this.min) / this.elems['range'].offsetWidth) + "px";
    this.update();
  }

  to(pos: number){
    if(pos === undefined)
      return this._to;
      this._to = pos;
      this.elems['to'].style.left = (pos - this.min) / ((this.max - this.min) / this.elems['range'].offsetWidth) + "px";
      this.update();
  }

  update(){
    let elems = this.elems;
    elems['selected'].style.left = elems['from'].offsetLeft + "px";
    elems['selected'].style.width = (elems['to'].offsetLeft - elems['from'].offsetLeft) + "px";
  }

  reset() {
    this.elems['from'].style.left = "0";
    this.elems['to'].style.left = this.elems['range'].offsetWidth + "px";
    this._from = this.min;
    this._to = this.max;
    this.update()
  }

  handleFromMouseDown(e: any){
    let el = this.elems['from'];
    let offsetLeft = el.offsetLeft;
    let offsetTop = el.offsetTop;
    let pageX = e.pageX;
    let pageY = e.pageY;
    // for(let eventType of this.moveEvents){
      this.listenFromMoveFunc = this.renderer.listen(el, 'mousemove' , (event) => {
        let posObj = {
          left: offsetLeft + (event.pageX - pageX),
          top: offsetTop + (event.pageY - pageY)
        }
        let elemPos = ((pos) => {
          return {
            left: Math.min(Math.max(0, pos.left), this.elems['to'].offsetLeft - this.elems['to'].offsetWidth / 2)
          }
        })(posObj);
        el.style.left = elemPos.left + 'px';
        // el.style.top = elemPos.top + 'px';
        this.handleFromMove();
      });
    // }
    // for(let eventObj of this.endEvents){
      this.renderer.listen(el, 'mouseup', (event) => {
        this.listenFromMoveFunc();
      });
      this.renderer.listen(el, 'mouseout', (event) => {
        this.listenFromMoveFunc();
      });
      this.renderer.listen(el, 'mouseleave', (event) => {
        this.listenFromMoveFunc();
      });
    // }
  }

  handleToMouseDown(e: any){
    let el = this.elems['to'];
    let offsetLeft = el.offsetLeft;
    let offsetTop = el.offsetTop;
    let pageX = e.pageX;
    let pageY = e.pageY;
    // for( let eventType of this.moveEvents){
      this.listenToMoveFunc = this.renderer.listen(el, 'mousemove', (event) => {
        let posObj = {
          left: offsetLeft + (event.pageX - pageX),
          top: offsetTop + (event.pageY - pageY)
        }
        let elemPos = ((pos) => {
          return {
            left: Math.max(Math.min(this.elems['range'].offsetWidth, pos.left), this.elems['from'].offsetLeft + this.elems['from'].offsetWidth / 2)
          }
        })(posObj);
        el.style.left = elemPos.left + 'px';
        // el.style.top = elemPos.top + 'px';
        this.handleToMove();
      });
    // }
    // for(let eventObj of this.endEvents){
      this.renderer.listen(el, 'mouseup', (event) => {
        this.listenToMoveFunc();
      })
      this.renderer.listen(el, 'mousout', (event) => {
        this.listenToMoveFunc();
      })
      this.renderer.listen(el, 'mouseleave', (event) => {
        this.listenToMoveFunc();
      })
    // }
  }

  handleFromMove(){
    let fromElem = this.elems['from'];
    let rangeElem = this.elems['range'];
    let r = fromElem.offsetLeft * ((this.max - this.min) / rangeElem.offsetWidth) + this.min;
    r = Math.floor(r/100 * 100);
    r = r >= 100 ? r - 1 : r;
    this._from =r;
    this.update();
  }

  handleToMove(){
    let toElem = this.elems['to'];
    let rangeElem = this.elems['range'];
    let r = toElem.offsetLeft * ((this.max - this.min) / rangeElem.offsetWidth) + this.min;
    r = Math.ceil(r / 100) * 100;
    r = r >= 100 ? r - 1 : r;
    this._to = r;
    this.update();
  }


  ngOnDestroy() {

  }

}
