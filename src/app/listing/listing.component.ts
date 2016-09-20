import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';

import { Listing } from './listing';
import { ListingService } from './listing.service';

@Component({
  selector: 'cvi-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [ListingService]
})
export class ListingComponent implements OnInit {
  listings: Observable<Listing[]>;

  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.listings = this.listingService.getListings()
  }

}
