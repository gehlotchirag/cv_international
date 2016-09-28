import { Component, OnInit, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Product } from '../product/product';

import { HomeService } from './home.service';
import { WidgetFactoryService } from '../shared'

@Component({
  selector: 'cvi-home',
  providers: [HomeService, WidgetFactoryService],
  // providers: [HomeService],
  templateUrl: './home-dynamic.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('content', { read: ViewContainerRef }) contentContainer: ViewContainerRef;
  cmpRef: ComponentRef<any>;
  private isViewInitialized:boolean = false;

  children: Observable<any[]>;
  cartContents: Product[];

  constructor(private resolver: ComponentFactoryResolver,
              private homeService: HomeService,
              private widgetFactoryService: WidgetFactoryService
  )
  {
    this.children = this.homeService.getComponentsData();
    this.homeService.getCartContentsData().pluck('products').subscribe(
      (data: Product[]) => {
        this.cartContents = data
        let cart = document.getElementById('js-cart-count')
        cart.textContent = String(this.cartContents ? this.cartContents.length : '');
      }
    , (error) => console.error(error));
  }

  ngOnInit(){
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
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

    this.children.forEach( (component) => this.loadComponent(component));
  }

  loadComponent(component: any){
    if('widgets' in component){
      for(let widget of component['widgets']){
        try {
          let componentType = this.widgetFactoryService.getWidgetBaseClassName(widget.type);
          let factory = this.resolver
                      .resolveComponentFactory(componentType);
          // console.log(factory);
          let cmpRef = this.contentContainer.createComponent(factory);
          // cmpRef.instance['widgetData'] = component.data
        }
        catch(e){
          console.error(e);
        }
      }
    }
    else {
      return;
    }
  }

}
