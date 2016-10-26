import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable }        from 'rxjs/Observable';

import { Listing  } from './listing';
import { ListingService } from './listing.service';
import {forEach} from "@angular/router/src/utils/collection";
import { CategoryFilterPipe } from './category-filter.pipe'

// import {PaginationService, IPaginationInstance} from "./pagination.service";

@Component({
  selector: 'cvi-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [ListingService],
})
export class ListingComponent implements OnInit {
    listing: Listing;
    filters: any;

    constructor(private listingService: ListingService,
                private router: Router,
                private route: ActivatedRoute) {}

    ngOnInit(): void {
      // this.loadCategoryList();
      this.route.data.forEach((data: { listing: Listing }) => {
        this.listing = data.listing;
      });
    }
}
