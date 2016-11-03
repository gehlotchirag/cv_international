import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Response } from '@angular/http';
import { Observable }        from 'rxjs/Observable';

import { ListingService } from './listing.service';
import Listing from './listing';

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
                private route: ActivatedRoute) {
                }

    fetchData(paramObj?: any){
      this.listingService
          .getListingList(paramObj)
          .then( (listing: Response) => {
            if(listing){
              this.listing = listing.json().d;
            }
          })
    }

    ngOnInit(): void {
      // this.loadCategoryList();
      let query , params, page;

      this.route
          .data
          .pluck('listing', 'd')
          .subscribe( (data : Listing) => {
              this.listing = data;
            },
              (error) => console.error(error))

      this.router.events.subscribe(
        (event: Event) => {
          if(event instanceof NavigationStart){
            let paramObj = {};
            if(event.url && event.url.indexOf('listing') != -1){
              let splitUrl = event.url.split('?').slice(1);
              for(let qParams of splitUrl){
                let keyVal = qParams.split('=');
                paramObj[keyVal[0]] = keyVal[1];
              }
              this.fetchData(paramObj);
            }
          }
          else if(event instanceof NavigationEnd && !this.route.data){

          }
        },
        (err) => console.error(err)
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
