import { Component, OnInit, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { ComponentFactory } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Product } from '../product/product';

import { WidgetFactoryService } from '../shared/widgets/widget-factory.service';
import { HomeService } from './home.service';
import { ProductService } from '../product/product.service';
import { CartDetailsService } from '../shared/services/cart-details.service'

declare var _satellite: any;

@Component({
  selector: 'cvi-home',
  providers: [HomeService, WidgetFactoryService, CartDetailsService, ProductService],
  // providers: [HomeService],
  templateUrl: './home.component.html', //'./home-dynamic.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('content', { read: ViewContainerRef }) contentContainer: ViewContainerRef;
  cmpRef: ComponentRef<any>;
  private isViewInitialized:boolean = false;
  private componentsData: any;
  private heroBannerData: any = {};
  private extraMenuData: any = {};
  public digitalData: any = {
    page: null
  };

  children: Observable<any>;
  cartContents: Product[];

  constructor(private resolver: ComponentFactoryResolver,
              private homeService: HomeService,
              private widgetFactoryService: WidgetFactoryService,
              private cartService: CartDetailsService
  )
  {
    this.children = this.homeService.getComponentsData();
    // if(!this.cartService.isInitialized){
    //   this.cartService.fetchCartDetails();
    // }
  }

  ngOnInit(){
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();

   /** if (typeof _satellite != "undefined") {
      this.digitalData.page = {
        pageInfo: {
          pageName: "Home Page",
        },
        category: {
          pageType: "home",
          primaryCategory: "home",
        },
        device: {
          deviceType: "Web"
        }
      }
      
    
      _satellite.track("page-load");
    } */

  }

  ngOnDestroy() {
    if(this.cmpRef) {
      this.cmpRef.destroy();
    }
  }

  ngOnChanges(){
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
                (component: any) => component.widget_type == 'OfferMenu'
              ).subscribe((data) =>
                          this.extraMenuData = data,
                          (err) => console.error(err));

    _componentsData.filter(
                  (component: any) => !(component.widget_type == 'HeroBanner' || component.widget_type == 'OfferMenu')
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
      cmpRef.instance.header = component.title
    }
    catch(e){
      console.error(e, component.widget_type);
    }
  }
}
