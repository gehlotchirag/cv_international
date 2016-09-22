import { Component, OnInit, ViewContainerRef, ViewChild, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import { HomeService } from './home.service';
import { WidgetFactoryService } from '../shared'

@Component({
  selector: 'cvi-home',
  providers: [HomeService, WidgetFactoryService],
  templateUrl: './home-dynamic.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('content', { read: ViewContainerRef }) contentContainer: ViewContainerRef;
  cmpRef: ComponentRef<any>;
  private isViewInitialized:boolean = false;

  children: Observable<any[]>;

  constructor(private resolver: ComponentFactoryResolver,
              private homeService: HomeService
  ) {
    this.children = this.homeService.getComponentsData()
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
    try {
      let componentType = WidgetFactoryService.getWidgetBaseClassName(component.type);
      let factory = this.resolver
                  .resolveComponentFactory(componentType);
      let cmpRef = this.contentContainer.createComponent(factory);
      cmpRef.instance['widgetData'] = component.data
    }
    catch(e){
      console.error('Encountered Error while creating child component');
    }
  }

}
