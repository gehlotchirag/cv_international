import { Injectable } from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import Listing from './listing';

import { ListingService } from './listing.service';

@Injectable()
export class ListingResolveService implements Resolve<Listing> {

  constructor(private ls: ListingService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot): Observable<Listing>|Promise<any>|any {
    let id = +route.params['id'];
    let query = route.queryParams['query'];
    let params = route.queryParams['params'];
    let page = +route.queryParams['page'];
    if(id){
      if(!params){
        params = {
          "categoryId": [id]
        }
      }
      else {
        params['categoryId'] = [id];
      }
    }

    return this.ls.getListingList({ query, params, page })
               .then(listing => {
                 if(listing){
                    return listing.json();
                 }
                 else {
                   this.router.navigate(['/404']);
                   return false;
                 }
               });
  }

}
