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

  children: Observable<any>;
  cartContents: Product[];

  constructor(private resolver: ComponentFactoryResolver,
              private homeService: HomeService,
              private widgetFactoryService: WidgetFactoryService,
              private cartService: CartDetailsService,
              private commonService: CommonSharedService,
  )
  {
    this.children = this.homeService.getComponentsData();
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

    let _componentsData = this.children.publish()

    _componentsData.filter(
                    (component: any) => component.widget_type == 'HeroBanner'
                  ).subscribe((data) => this.heroBannerData = data,
                              (err) => console.error(err))

    _componentsData.filter(
                    (component: any) => component.widget_type == 'AnnouncementWidget'
                  ).subscribe((data) => this.annoucementWidgetData = data,
                              (err) => console.error(err))

    _componentsData.filter(
                (component: any) => component.widget_type == 'OfferMenu'
              ).subscribe((data) =>
                          this.extraMenuData = data,
                          (err) => console.error(err));

    _componentsData.filter(
                  (component: any) => !(component.widget_type == 'HeroBanner' || component.widget_type == 'OfferMenu' || component.widget_type == 'AnnouncementWidget')
                ).subscribe( (data) => {this.componentsData = data, this.attachComponents(this.componentsData)},
                              (err) => console.error(err));
    _componentsData.connect();
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
