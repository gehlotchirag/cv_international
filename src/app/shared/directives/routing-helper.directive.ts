import { Component, Directive, Attribute, ElementRef, ViewContainerRef, Output, EventEmitter,
         ComponentFactoryResolver, Injector, ResolvedReflectiveProvider, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data, RouterOutlet, RouterOutletMap } from '@angular/router';

import { RouterHeaderBindingService } from '../services/router-header-binding.service';

@Directive({
  selector: 'routing-helper'
})

export class RoutingHelperDirective extends RouterOutlet {

  private parentRouter: Router;

  @Output() showMegaMenu: EventEmitter<any> = new EventEmitter();

  constructor(parentOutletMap: RouterOutletMap,
              location: ViewContainerRef,
              resolver: ComponentFactoryResolver,
              @Attribute('name') name: string,
              parentRouter: Router
  ) {
    super(parentOutletMap, location, resolver, name);
    this.parentRouter = parentRouter;
  }

  activate(activatedRoute: ActivatedRoute,
           loadedResolver: ComponentFactoryResolver,
           loadedInjector: Injector,
           providers: ResolvedReflectiveProvider[],
           outletMap: RouterOutletMap,
           ): void {

     activatedRoute.url.subscribe(
       (data) => {
         if(data && data[0] && data[0].path != ''){
           RouterHeaderBindingService.setMegaMenuStatus(true);
         }
         else{
           RouterHeaderBindingService.setMegaMenuStatus(false);
         }
         super.activate(activatedRoute, loadedResolver, loadedInjector, providers, outletMap);
       },
       (error) => console.error(error)
     )
  }

}
