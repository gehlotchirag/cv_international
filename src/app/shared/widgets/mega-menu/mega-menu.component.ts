import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JSONData } from './mega-menu.data';

import { MegaMenuLinkComponent } from './mega-menu-link.component';

@Component({
  selector: 'cvi-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css']
})
export class MegaMenuComponent implements OnInit {
  private menuCategoriesData: any;
  private activeCategoryData: any;

  @Output() selectedCategory: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.menuCategoriesData = JSONData;
  }

  getSelectedCategory(categoryData){
    this.activeCategoryData = categoryData;
  }

  onMouseLeave(){
    this.activeCategoryData = null;
  }

}
