import { Component, OnInit, AfterViewInit, OnChanges, EventEmitter } from '@angular/core';
import { Input, Output, Renderer } from '@angular/core';

declare var _isMobile: any;

@Component({
  selector: 'cvi-range-slider',
  templateUrl: './range-slider.component.html',
  styleUrls: ['./range-slider.component.css']
})
export class RangeSliderComponent implements OnChanges  {

  private elems: { [ids: string]: HTMLElement} = {};
  private _from: number;
  private _to: number;
  private min: number;
  private max: number;
  private n: any = {};
  private pointerPrefix : string = _isMobile ? 'touch': 'mouse';

  private listenFromMoveFunc: Function;
  private listenToMoveFunc: Function;

  @Input() infoData: any;
  @Input() changeTriggerCount: any;
  @Output() rangeChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private renderer: Renderer) { }

  ngOnChanges() {
    this.rangeUpdate();
  }

  ngAfterViewInit(){
    this.rangeUpdate();
  }

  rangeUpdate(){
    try{
      this.n = this.infoData = this.infoData || {};
      this.min =  this.n.rangeMin || 0;
      this.max =  this.n.rangeMax || 100;
      this._from = this.n.priceMin || this.min;
      this._to = this.n.priceMax || this.max;
      if(!this.elems['from']) this.elems['from'] = this.renderer.selectRootElement('.slider .from');
      if(!this.elems['to']) this.elems['to'] = this.renderer.selectRootElement('.slider .to');
      if(!this.elems['range']) this.elems['range'] = this.renderer.selectRootElement('.slider .range');
      if(!this.elems['selected']) this.elems['selected'] = this.renderer.selectRootElement('.slider .range.selected');
      if(!this.elems['min']) this.elems['min'] = this.renderer.selectRootElement('.slider-label .min');
      if(!this.elems['max']) this.elems['max'] = this.renderer.selectRootElement('.slider-label .max');

      this.elems['min'].innerText = "$" + String(this._from);
      this.elems['from'].style.left = (this._from - this.min) / ((this.max - this.min) / this.elems['range'].offsetWidth) + "px";
      this.elems['max'].innerText =  "$" + String(this._to);
      this.elems['to'].style.left = (this._to - this.min) / ((this.max - this.min) / this.elems['range'].offsetWidth) + "px";
      this.update();
    }
    catch(err){
      console.error(err);
    }
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
    this.emitUpdate();
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
    this.emitUpdate();
  }

  from(pos?: number){
    if (pos === undefined)
      return this._from;
    this._from = pos;
    this.elems['from'].style.left = (pos - this.min) / ((this.max - this.min) / this.elems['range'].offsetWidth) + "px";
    this.update();
  }

  to(pos?: number){
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
    elems['min'].innerText = "$"+String(this.from());
    elems['max'].innerText = "$"+String(this.to());
  }

  reset() {
    this.elems['from'].style.left = "0";
    this.elems['to'].style.left = this.elems['range'].offsetWidth + "px";
    this._from = this.min;
    this._to = this.max;
    this.update()
  }

  handleFromDown(e: any){
    let el = this.elems['from'];
    let offsetLeft = el.offsetLeft;
    let offsetTop = el.offsetTop;
    let pageX = e.pageX;
    let pageY = e.pageY;

    this.listenFromMoveFunc = this.renderer.listen(el, `${this.pointerPrefix}move` , (event) => {
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
      this.handleFromMove();
    });

    let endEvent = _isMobile ? 'touchend': 'mouseup'

    this.renderer.listen(el, endEvent, (event) => {
      this.listenFromMoveFunc();
      this.emitUpdate();
    });

    this.renderer.listen(el, `${this.pointerPrefix}leave`, (event) => {
      this.listenFromMoveFunc();
      this.emitUpdate();
    });
  }

  handleToDown(e: any){
    let el = this.elems['to'];
    let offsetLeft = el.offsetLeft;
    let offsetTop = el.offsetTop;
    let pageX = e.pageX;
    let pageY = e.pageY;

    this.listenToMoveFunc = this.renderer.listen(el, `${this.pointerPrefix}move`, (event) => {
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
      this.handleToMove();
    });

    let endEvent = _isMobile ? 'touchend': 'mouseup';

    this.renderer.listen(el, endEvent, (event) => {
      this.listenToMoveFunc();
      this.emitUpdate();
    });
    this.renderer.listen(el, `${this.pointerPrefix}leave`, (event) => {
      this.listenToMoveFunc();
      this.emitUpdate();
    });
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
    r = Math.ceil(r / 100 * 100);
    // r = r >= 100 ? r - 1 : r;
    this._to = r;
    this.update();
  }

  private emitUpdate(){
    let changeObj = {
      'min': String(this._from),
      'max': String(this._to)
    }
    this.rangeChange.emit(changeObj);
  }

}
