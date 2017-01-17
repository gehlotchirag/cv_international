import { Injectable } from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import Listing from './listing';

import { ListingService } from './listing.service';

import categoryFilterMap = require('./category-filter-map');

@Injectable()
export class FilterResolveService implements Resolve<Listing> {

  public premiumUrlArr = categoryFilterMap.premiumUrlArr;

  constructor(private ls: ListingService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {
    let queryParams = route.queryParams
    let _tempUrl = route['_routerState'].url.split('?')[0];
    let _urlArr = (_tempUrl.split('/')).filter((item) => item !== "");
    let url = _urlArr.join('/')
    let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;

    if(isPremiumUrl){
      return this.ls.getPremiumFilters(url)
               .then(filter => {
                 if(filter){
                    return filter.json();
                 }
                 else {
                   return {};
                 }
               });      
    }

    return this.ls.getFilterList(queryParams, url)
               .then(filter => {
                 if(filter){
                    return filter.json();
                 }
                 else {
                   return {};
                 }
               });
  }

}
