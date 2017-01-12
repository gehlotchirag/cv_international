import { Component, OnInit, OnChanges, DoCheck, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { HostListener, trigger, state, style, transition, animate } from '@angular/core';

import { Router } from '@angular/router';

import { CartDetailsService } from '../../services/cart-details.service';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';
import { RouterHeaderBindingService } from '../../services/router-header-binding.service';

import { getRouterLink } from '../../utils';

declare var _satellite: any;
declare var digitalData: any;

@Component({
  selector: 'cvi-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[ CartDetailsService ],
  entryComponents: [ MegaMenuComponent ],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        left: '0px'
      })),
      state('out', style({
        left: '-100%'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit , OnChanges, DoCheck {

  @Output() onSearchItems = new EventEmitter();

  @ViewChild('headerContent', { read: ViewContainerRef }) contentContainer: ViewContainerRef;

  @HostListener('window:scroll', ['$event'])
  hideMegaMenuOnScroll(event) {
    this.showBottomMenu = 'none';
    if (document.body.scrollTop > 20) {
      this.showTopMenu = false;
    }else{
      this.showTopMenu = true;
    }
  }

  private cart: any; // Change type to CartInterface
  private wishlist: any; // Change type to WishlistInterface
  public queryInput: string;
  public showTopMenu:boolean = true;
  public showProtectionPopup:boolean = false;
  private tabsWidgetClass = "tabs-widget";
  public showBottomMenu: string = 'none';
  private isMegaMenuInitialized: boolean = false;
  public menuCategoriesData: any;
  public selectedCategory: any;
  public selectedSubCategory: any;
  public menuState:string = 'out';
  private getRouterLink = getRouterLink;

  @Input() showMegaMenuCaret: boolean;

  constructor(private router: Router,
              private resolver: ComponentFactoryResolver,
              private cartDetailsService: CartDetailsService
              ) { }

  ngOnInit() {
    this.cartDetailsService.fetchCartDetails();
  };

  ngOnChanges(changes: SimpleChanges) {
    RouterHeaderBindingService.getMegaMenuStatus().subscribe(
      (data) =>{
        setTimeout(_ => this.showMegaMenuCaret = data);
      }
     );
    RouterHeaderBindingService.getMegaMenuData().subscribe(
      (data) =>  {
        setTimeout(_ => this.menuCategoriesData = data);
      }
    );
  }

  topCartTracker(){
    if(typeof _satellite != 'undefined') {
      digitalData.cartsrc ={
              cartsrc:"top nav",
          }
          _satellite.track('cartsrc');
    }
  }

  searchItems(){
    if(typeof _satellite != 'undefined') {
      digitalData.page={
        search:{
          searchTerm:this.queryInput,
        }  
      }
      _satellite.track("search-click");
    }
    if(this.queryInput && this.queryInput != ''){
      this.router.navigate(['/womens-clothing'], { queryParams: { query: this.queryInput }});
    }
    else {
      this.router.navigate(['/womens-clothing']);
    }
  }

  ngDoCheck(){
    if(!this.isMegaMenuInitialized && this.router.navigated){
      let factory = this.resolver
                  .resolveComponentFactory(MegaMenuComponent);
      let cmpRef: any = this.contentContainer.createComponent(factory);
      cmpRef.instance.isNonHomePage = true;
      this.isMegaMenuInitialized = true;
    }
  }

  displayMegaMenu(show: boolean, event?: any): void {
    if(show){
      this.showBottomMenu = 'block';
    }
    else{
      if(!event){
        this.showBottomMenu = 'none';
        return;
      }
      let elem = event.target;
      while(elem && !elem.classList.contains('js-header-menu-show')){
        elem = elem.parentElement;
      }
      if(elem && elem.classList.contains('js-header-menu-show')){
        this.showBottomMenu = 'block';
      }
      else{
        this.showBottomMenu = 'none';
      }
    }
  }

  selectCategory(data, type){
    if(type === 'category'){
      if(this.selectedCategory == data.name) {
        this.selectedCategory = null;
        this.selectedSubCategory = null;  
      }else{
        this.selectedCategory = data.name;
        this.selectedSubCategory = null;
      }
    }
    if(type === 'sub-category') {
      if(this.selectedSubCategory === data.name) {
        this.selectedSubCategory = null;  
      }else{
        this.selectedSubCategory = data.name;
      }
    }
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  private clearCookieAndDomestic(event){
    var nameEQ = "showInternational=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
       var c = ca[i];
       while (c.charAt(0)==' ') c = c.substring(1,c.length);
       if (c.indexOf(nameEQ) == 0) {
           var cookieKeyValArr = c.split("=");
           if(cookieKeyValArr.length > 1){
               if(cookieKeyValArr[1] == "true"){
                   document.cookie = 'showInternational' +"=" + 'true' + ";" + ";domain=.craftsvilla.com;path=/" +  ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
               }
           }
       }
    }
    window.location.href = "http://www.craftsvilla.com";
  }

}
