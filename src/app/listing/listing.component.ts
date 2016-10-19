import { Component, OnInit } from '@angular/core';
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
  providers: [ListingService]
})
export class ListingComponent implements OnInit {
    listings: any;// Observable<Listing[]>;
    filters: any;
    productList: any;
    responseCategoryList;
    filter:any;



    constructor(private listingService: ListingService) {

    }



    ngOnInit(): void {
         let params={
    "categoryId": [
      10001,
      10016,
      10064,
      10004
    ],
    "filters": {
      "codProducts": "COD Available",
      // "color": [
      //   "Red",
      //   "Black",
      //   "White"
      // ],
      "discountedPrice": "Above 50%",
      "price": [
        {
          "max": "2000",
          "min": "1000"
        }
      ]
    },
    "pageId": 1,
    "perPage": 10,
    "sorts": {
      "discountedPriceOrder": "High to Low",
      "newestSort": "Newest",
      "priceOrder": "High to Low",
      "relevance": "Popular"
    }
  };


       let listingStream =  this.listingService.loadCategoryList(params).publish();

        listingStream.pluck('d').subscribe(
            data => {
                this.productList = data;
                console.log('productlist: ',this.productList);

            },
            (error) => console.error(error),
            () => console.log('completed')
        )

        listingStream.pluck('d', 'funnelOptions', 'filters').subscribe(
            data => {
                console.log('filters are ' ,data);
                this.filters = data;
                },
            (error) => console.error(error),
            () => console.log('completed')
        )


        listingStream.pluck('d', 'products').subscribe(
            data => {
                // refresh the list
                console.log('products', data);
                this.listings = data;
                // return true;
            },
            // data => responseCategoryList = JSON.stringify(data), // put the data returned from the server in our variable
            error => {
                console.error("Error not found!");
                return Observable.throw(error);
            }
        );


        listingStream.connect();



}

}




