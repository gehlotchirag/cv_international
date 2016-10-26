import { Component, ElementRef, HostListener, Input, Renderer} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cv-menu-link',
  template: `
  <li (mouseover)="onMouseEnter()">
    {{ categoryData.name }}
  </li>
  `

})
export class MegaMenuLinkComponent {

  constructor( private el: ElementRef){}

  @Input() categoryData: any;
  @Output() selectedCategory: EventEmitter<any> = new EventEmitter();

  onMouseEnter() {
    this.selectedCategory.emit(this.categoryData);
  }

}
