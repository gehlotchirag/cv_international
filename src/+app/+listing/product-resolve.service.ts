import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import Listing from './listing';

import { ListingService } from './listing.service';

@Injectable()
export class ProductResolveService implements Resolve<Listing> {

  constructor(private ls: ListingService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<any>|any {
    let queryParams = route.queryParams
    let _tempUrl = route['_routerState'].url.split('?')[0];
    let _urlArr = (_tempUrl.split('/')).filter((item) => item !== "");
    let url = _urlArr.join('/')

    let listingData = this.ls.getListingList(queryParams, url);

    if (listingData){
      return listingData.then(listing => {
          if(listing){
            return listing.json();
          }
          else {
            this.router.navigate(['/']);
            return false;
          }
      });      
    }else{
      this.router.navigate(['/']);
    }
  }
}
