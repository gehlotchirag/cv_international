import { Injectable } from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import Listing from './listing';

import { ListingService } from './listing.service';

@Injectable()
export class FilterResolveService implements Resolve<Listing> {

  constructor(private ls: ListingService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {

    if(route.url[0].path === "premium"){
      return this.ls.getPremiumFilters()
               .then(filter => {
                 if(filter){
                    return filter.json();
                 }
                 else {
                   return {};
                 }
               });      
    }

    return this.ls.getFilterList()
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
