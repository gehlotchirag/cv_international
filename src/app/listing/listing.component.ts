import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable }        from 'rxjs/Observable';

import { ListingService } from './listing.service';
import { CategoryFilterPipe } from './category-filter.pipe';
import { ObjectKeysPipe } from '../shared/utils';
import { ProductCardComponent } from '../shared/widgets/product-card/product-card.component';
import { PaginationComponent } from "../shared/widgets/pagination/pagination.component";

import Listing from './listing';

/*
"filters": {
        "color": [
          "Red",
          "Black",
          "White"
        ],
        "codProducts": "COD Available",
        "price": [
          {
            "max": "2000",
            "min": "1000"
          }
        ],
        "discountedPrice": "Above 50%"
      }
*/

@Component({
  selector: 'cvi-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [ListingService],
})
export class ListingComponent implements OnInit {
    private listing: Listing;
    private filters: any;
    private appliedFilters: any = [];
    private selectedSort: any = {
      'key': 'relevance',
      'value': 'Popular',
      'name': 'Popularity'
    }

    constructor(private listingService: ListingService,
                private router: Router,
                private route: ActivatedRoute) {}

    ngOnInit(): void {
      // this.loadCategoryList();
      this.route.data.pluck('listing', 'd')
                .subscribe( (data : Listing) => {
                    this.listing = data;
                },
                (error) => console.error(error)
              )
    }

    getDataTarget(key): string {
      return key? `#${this.getToggle(key)}`: null;
    }

    getAriaControl(key): string {
        return key? this.getToggle(key): null;
    }

    private getToggle(key): string{
      if(key){
        let char0 = key.charAt(0).toUpperCase();
        let remKey = key.slice(1).toLowerCase();
        return `collapse${char0}${remKey}`;
      }
      else{
        return '';
      }
    }

    clearAllFilters(): void {
      // reset appliedFilters
      // make API call and re-write URL
    }

    applyFilters(): void {
      // applyFilters by making API call and re-writing URL
    }

    getAppliedFiltersString(): string {
      return Object.keys(this.appliedFilters).map((key) => String(this.appliedFilters[key])).join(' , ');
    }

    getStartListingCount(): number {
      if(this.listing && this.listing.current_page){
        return (this.listing.current_page -1)*10 + 1;
      }
      return 1
    }

    getEndListingCount(): number {
      if(this.listing && this.listing.current_page){
        return this.listing.current_page * 10;
      }
      return 10;
    }
}
