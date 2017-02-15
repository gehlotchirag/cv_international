import { Directive, Attribute, ViewContainerRef, Output, EventEmitter,
         ComponentFactoryResolver, Injector, ResolvedReflectiveProvider, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data, RouterOutlet, RouterOutletMap } from '@angular/router';
import { Response } from '@angular/http';

import { HomeComponent } from '../../+home/home.component'

import { RouterHeaderBindingService } from '../services/router-header-binding.service';

import { HttpClientService } from '../services/http-client.service';

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

    let _urlArr = activatedRoute.snapshot.url;
    if(_urlArr.length > 0){
      RouterHeaderBindingService.setMegaMenuStatus(true);
    }
    // else if(_urlArr.length == 2){
    //   RouterHeaderBindingService.setMegaMenuStatus(false);
    // }
    else {
      RouterHeaderBindingService.setMegaMenuStatus(false);
    }
    super.activate(activatedRoute, loadedResolver, loadedInjector, providers, outletMap);
  }

}
