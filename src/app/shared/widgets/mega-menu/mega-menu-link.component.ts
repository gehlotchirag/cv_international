import { Component, ElementRef, HostListener, Input, Renderer, OnChanges} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { getRouterLink } from '../../utils/'

@Component({
  selector: 'cv-menu-link',
  template: `
  <li (mouseover)="onMouseEnter()" (mouseleave)="onMouseLeave()">
    <a
      [routerLink]="getRouterLink(categoryData.href)['rl']"
      [queryParams]="getRouterLink(categoryData.href)['qp']">
      {{ categoryData.name }}
    </a>
  </li>
  `

})
export class MegaMenuLinkComponent implements OnChanges {

  private getRouterLink = getRouterLink;

  constructor( 
    private el: ElementRef, 
    private renderer: Renderer
  ){}

  @Input() categoryData: any;
  @Input() prevElem : any;
  @Input() categorySelected: any;
  @Output() selectedCategory: EventEmitter<any> = new EventEmitter();
  @Output() previousElement: EventEmitter<any> = new EventEmitter();

  onMouseEnter() {
    this.removeExtraStyle()
    let selectedSubElem = this.el.nativeElement.children[0].children[0]
    this.renderer.setElementAttribute(selectedSubElem, 'style', 'color: #fff !important; background: #c74444');
    this.selectedCategory.emit(this.categoryData);
  }

  onMouseLeave(){
    let previousElement = this.el.nativeElement.children[0].children[0];
    this.previousElement.emit(previousElement);
  }

  ngOnChanges(){
    if(this.categorySelected === null && this.prevElem){
      this.renderer.setElementAttribute(this.prevElem, 'style', 'color: #333333 !important; background: transparent');
      this.prevElem = null;
    }
  }
  
  removeExtraStyle(){
    if(this.prevElem){
      if(this.categoryData && this.categorySelected){
        if(this.categoryData.name !== this.categorySelected.name){
          this.renderer.setElementAttribute(this.prevElem, 'style', 'color: #333333 !important; background: transparent');
        }
      }
    }
  }

}
