import { Component, ElementRef, HostListener, Input, Renderer} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { getRouterLink } from '../../utils/'

@Component({
  selector: 'cv-menu-link',
  template: `
  <li (mouseover)="onMouseEnter()">
    <a
      [routerLink]="getRouterLink(categoryData.href)['rl']"
      [queryParams]="getRouterLink(categoryData.href)['qp']">
      {{ categoryData.name }}
    </a>
  </li>
  `

})
export class MegaMenuLinkComponent {

  private getRouterLink = getRouterLink;

  constructor( private el: ElementRef){}

  @Input() categoryData: any;
  @Output() selectedCategory: EventEmitter<any> = new EventEmitter();

  onMouseEnter() {
    this.selectedCategory.emit(this.categoryData);
  }

}
