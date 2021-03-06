import { Component, OnInit, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver, SimpleChanges } from '@angular/core';
import { ComponentFactory } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Product } from '../+product/product';

import { WidgetFactoryService } from '../shared/widgets/widgets-factory.service';
import { HomeService } from './home.service';
import { ProductService } from '../+product/product.service';
import { CartDetailsService } from '../shared/services/cart-details.service';
import { CommonSharedService } from '../shared/services/common-shared.service';

declare var _satellite: any;
declare var digitalData: any;
declare var __insp:any;

@Component({
  selector: 'cvi-home',
  providers: [HomeService, ProductService, CartDetailsService, CommonSharedService, WidgetFactoryService ],
  templateUrl: './home.component.html', //'./home-dynamic.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('content', { read: ViewContainerRef }) contentContainer: ViewContainerRef;
  cmpRef: ComponentRef<any>;
  private isViewInitialized:boolean = false;
  private componentsData: any;
  public annoucementWidgetData: any = {};
  public heroBannerData: any = {};
  public extraMenuData: any = {};

  children:any;
  cartContents: Product[];

  constructor(private resolver: ComponentFactoryResolver,
              private homeService: HomeService,
              private widgetFactoryService: WidgetFactoryService,
              private cartService: CartDetailsService,
              private commonService: CommonSharedService,
  )
  {
    this.homeService.getComponentsData()
                    .pluck('d')
                    .subscribe((data) =>{
                      this.children = data;
                      this.updateComponent();
                    });
  }

  ngOnInit(){
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();

    if (typeof _satellite != "undefined") {
       digitalData.page={
        pageInfo:{
          pageName:"home page",
        },
        currencycode: {
          currencyCode: "USD"
        },
        category: {
          pageType: "home",
          primaryCategory: "home",
        },
        device: {
          deviceType: this.commonService.deviceType()
        }
      }      
      _satellite.track("page-load");
    }
    if(typeof __insp !== 'undefined') {
      __insp.push(["virtualPage"]);
    }
  }

  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  ngOnChanges(changes: SimpleChanges){
    this.updateComponent();
  }

  private updateComponent(): void {
    if(!this.isViewInitialized){
      return;
    }

    if(this.cmpRef){
      this.cmpRef.destroy();
    }

    let _componentsData = this.children
    if(_componentsData) {
      _componentsData.forEach((component) => {
        if(component.widget_type == 'HeroBanner') {
          this.heroBannerData = component
        } else if(component.widget_type == 'AnnouncementWidget') {
          this.annoucementWidgetData = component
        } else if(component.widget_type == 'OfferMenu') {
          this.extraMenuData = component
        } else {
          this.componentsData = component; 
          this.attachComponents(this.componentsData)
        }
      })
    }
  }

  attachComponents(data: any){
    this.loadComponent(data);
  }

  loadComponent(component: any){
    try {
      let componentType = this.widgetFactoryService.getWidgetBaseClassName(component.widget_type);
      let factory = this.resolver
                  .resolveComponentFactory(componentType);
      let cmpRef: any = this.contentContainer.createComponent(factory);
      cmpRef.instance.dataItems = component.data;
      cmpRef.instance.header = component.title;
      cmpRef.instance.viewMoreUrl = component.dataUrl;
    }
    catch(e){
      console.error(e, component.widget_type);
    }
  }
}
