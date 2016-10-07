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
    listings: any;// Observable<Listing[]>;
    filters: any;
    responseCategoryList;

    constructor(private listingService: ListingService) {
    }

    private categorytList ={
        "categoryId": [
            10001,
            10015,
            10064,
            10004
        ],
        "filters": {
            "codProducts": "COD Available",
            "color": [
                "Red",
                "Black",
                "White"
            ],
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

    ngOnInit(): void {
        this.loadCategoryList(this.categorytList);
    }

    loadCategoryList(categorytList) {
       let listingStream =  this.listingService.loadCategoryList().publish();

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

    getFilters(event: any): void {
        console.log(this.filters);
    }


}