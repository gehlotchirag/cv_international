import { Component, OnInit, Output, EventEmitter, OnChanges, ElementRef, Renderer } from '@angular/core';
import { Response } from '@angular/http';

import { Router } from '@angular/router';
import { HttpClientService } from '../../services/http-client.service';
import { RouterHeaderBindingService } from '../../services/router-header-binding.service';

import { MegaMenuLinkComponent } from './mega-menu-link.component';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';

import { MegaMenuService  } from './mega-menu.service';

import { getRouterLink } from '../../utils/index';

@Component({
  selector: 'cvi-mega-menu',
  templateUrl: './mega-menu.component.html',
  styleUrls: ['./mega-menu.component.css'],
  providers: [ MegaMenuService ],
  exportAs: 'cvi-mega-menu',
})
export class MegaMenuComponent implements OnInit {
  public menuCategoriesData: any;
  public activeCategoryData: any;

  private getRouterLink = getRouterLink;

  public isNonHomePage: boolean = false;

  private previousElement: any;

  @Output() selectedCategory: EventEmitter<any> = new EventEmitter();

  constructor(
    private httpClient: HttpClientService,
    private el: ElementRef, 
    private router: Router,
    private renderer: Renderer, 
    private megaMenuService: MegaMenuService
   ) {
    this.megaMenuService.getMegaMenuData().pluck('d').subscribe((data) => {
      this.menuCategoriesData = data;
      RouterHeaderBindingService.setMegaMenuData(data);
    })
   }

  ngOnInit() {
  }

  getSelectedCategory(categoryData){
    this.activeCategoryData = categoryData;
  }

  onMouseLeave(){
    this.activeCategoryData = null;
  }

  setPreviousElement(previousElem){
    this.previousElement = previousElem;
  }

  hideMegaMenu($event){
    let _url = this.router.url;
    if(_url !== '/'){
      this.el.nativeElement.parentElement.style.display = 'none';
      this.el.nativeElement.parentElement.parentElement.querySelector('.mega-menu-hamburger').classList.remove('hovered');
    }
  }
}
