import { Component, OnInit, OnChanges, DoCheck, EventEmitter, Output, Input } from '@angular/core';
import { ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { ViewEncapsulation, HostListener } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { CartDetailsService } from '../../services/cart-details.service';
import { MegaMenuComponent } from '../mega-menu/mega-menu.component';
import { RouterHeaderBindingService } from '../../services/router-header-binding.service';

import { getRouterLink } from '../../utils';

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
  }

  private cart: any; // Change type to CartInterface
  private wishlist: any; // Change type to WishlistInterface
  private queryInput: string;
  private showProtectionPopup:boolean = false;
  private tabsWidgetClass = "tabs-widget";
  private showBottomMenu: string = 'none';
  private isMegaMenuInitialized: boolean = false;
  private menuCategoriesData: any;
  private mobileSelectedCategory: any;

  private getRouterLink = getRouterLink;

  @Input() showMegaMenuCaret: boolean;

  constructor(private router: Router,
              private resolver: ComponentFactoryResolver,
              private cartDetailsService: CartDetailsService
              ) { }

  ngOnInit() {
    this.cartDetailsService.fetchCartDetails();
  };

  ngOnChanges() {
    RouterHeaderBindingService.getMegaMenuStatus().subscribe(
      (data) =>
       this.showMegaMenuCaret = data
     );
    RouterHeaderBindingService.getMegaMenuData().subscribe(
      (data) =>  {
        this.menuCategoriesData = data;
      }
    );
  }

  searchItems(){
    if(this.queryInput && this.queryInput != ''){
      this.router.navigate(['/category'], { queryParams: { query: this.queryInput }});
    }
    else {
      this.router.navigate(['/category']);
    }
  }

  ngDoCheck(){
    if(!this.isMegaMenuInitialized && this.router.navigated){
      if(this.router.routerState.snapshot.url !== '/'){
        let factory = this.resolver
                    .resolveComponentFactory(MegaMenuComponent);
        let cmpRef: any = this.contentContainer.createComponent(factory);
        cmpRef.instance.isNonHomePage = true;
        this.isMegaMenuInitialized = true;
      }
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

  private routeNavigateTo(href) {
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


}
