import { Component, OnInit, OnChanges, DoCheck, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { ViewEncapsulation, HostListener } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

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
  entryComponents: [ MegaMenuComponent ]
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
  private menuCategoriesData: any;
  public mobileSelectedCategory: any;

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

  private resetNavView(event) {
    event.stopPropagation();
    event.preventDefault();
    this.mobileSelectedCategory = null;
  }

  public routeNavigateTo(href) {
    let routingParams = this.getRouterLink(href);
    let routingArray = routingParams['rl'].map((link) => `/${link}`);
    let queryParam = routingParams['qp'];
    if(routingArray.length  > 1){
      if(routingArray[0] == '/'){
        routingArray.splice(0,1);
      }
    }
    this.router.navigate(routingArray, { queryParams: queryParam, replaceUrl: true});
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
