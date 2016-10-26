import { Injectable } from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';

import { Listing } from './listing'
import { ListingService } from './listing.service';

@Injectable()
export class ListingResolve implements Resolve<Listing> {

  constructor(private ls: ListingService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot): Promise<Listing>|boolean {
    let id = +route.params['id'];
    return this.ls.getListingList(id).then(listing => {
      if (listing) {
        return listing;
      } else { // id not found
        this.router.navigate(['/404']);
        return false;
      }
    });
  }

}
