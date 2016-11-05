import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, OnChanges } from '@angular/core';
import { Response } from '@angular/http';

import { HttpClientService } from '../../services/http-client.service';

import { MegaMenuLinkComponent } from './mega-menu-link.component';

@Component({
  selector: 'cvi-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css'],
  exportAs: 'cvi-mega-menu',
  encapsulation: ViewEncapsulation.None
})
export class MegaMenuComponent implements OnInit {
  private menuCategoriesData: any;
  private activeCategoryData: any;

  public isNonHomePage: boolean = false;

  @Output() selectedCategory: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient: HttpClientService) { }

  ngOnInit() {
    let megaMenuUrl = 'api/megamenu/';
    this.httpClient
        .get(megaMenuUrl)
        .map((res: Response) => res.json())
        .subscribe(
           (data) => {
             this.menuCategoriesData = data['d'];
           },
           (error) => { console.error(error)}
        );
  }

  getSelectedCategory(categoryData){
    this.activeCategoryData = categoryData;
  }

  onMouseLeave(){
    this.activeCategoryData = null;
  }

}
