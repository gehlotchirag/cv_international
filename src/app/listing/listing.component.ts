import { Location } from '@angular/common';
import { Component, OnInit, Renderer, ViewChild, ViewChildren} from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Response } from '@angular/http';
import { Observable }        from 'rxjs/Observable';

import { LiveFilterPipe } from './live-filter.pipe';
import { ListingService } from './listing.service';
import { CategoryFilterPipe } from './category-filter.pipe';
import { ObjectKeysPipe } from '../shared/utils';
import { ProductCardComponent } from '../shared/widgets/product-card/product-card.component';
import { PaginationComponent } from "../shared/widgets/pagination/pagination.component";
import Listing from './listing';

@Component({
  selector: 'cvi-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [ListingService],
})
export class ListingComponent implements OnInit {

    private listing: Listing;
    private filters: any = {};
    private filterStringObj: any = {};
    private appliedFilters: any = [];
    private showMobileFilters: boolean = false;
    private paramObj: any = {};
    private selectedSort: any = {
      'key': 'relevance',
      'value': 'Popular',
      'name': 'Popularity'
    }

    private clearAllBlock: any = {
      'name': 'clear all',
      'key': 'clear all',
      'value': 'clear all',
      'id': 'clear all'
    };

    constructor(private listingService: ListingService,
                private router: Router,
                private route: ActivatedRoute,
                private renderer: Renderer,
                private location: Location
              ) {
                }

    ngOnInit(): void {
      // this.loadCategoryList();
      let query , params, page;

      this.route.data.pluck('listing', 'd')
          .subscribe( (data : Listing) => {
              this.listing = data;
            },
          (error) => console.error(error))

      this.route.data.pluck('filters').subscribe((data: any) => {
          Object.keys(data).forEach( (key) => {
              let items = data[key];
              let tempItems = [];
              for(let item of items){
                tempItems.push({
                  'name': item,
                  'key': key,
                  'value': item,
                  'id': `checkbox-${key}_${item}`
                })
              }
              this.filters[key] = tempItems;
          });
      },
      (error) =>  console.error(error))

      this.router.events.subscribe(
        (event: Event) => {
          if(event instanceof NavigationStart){
            this.paramObj = {};
            if(event.url && event.url.indexOf('listing') != -1){
              let splitUrl = event.url.split('?').slice(1);
              for(let qParams of splitUrl){
                let keyVal = qParams.split('=');
                this.paramObj[keyVal[0]] = keyVal[1];
              }
              this.fetchData(this.paramObj);
            }
          }
        },
        (err) => console.error(err)
      )
    }

    fetchData(paramObj?: any){
      this.listingService
          .getListingList(paramObj)
          .then( (listing: Response) => {
            if(listing){
              this.listing = listing.json().d;
              this.changeListingUrl(paramObj);
            }
          })
    }

    private changeListingUrl(paramObj?: any): void{
      if(paramObj){
        let params = paramObj['params'] ? JSON.stringify(paramObj['params']) : JSON.stringify({});
        let page = paramObj['page'] ? paramObj['page'] : 1;
        let query = paramObj['query'] ? paramObj['query'] : '';
        this.location.go('/listing', `query=${query}&params=${params}&page=${page}`);
      }
      else {
        this.location.go('/listing');
      }
    }

    getDataTarget(key): string {
      return key && key['key'] ? `#${this.getToggle(key['key'])}`: null;
    }

    getAriaControl(key): string {
        return key && key['key'] ? this.getToggle(key['key']): null;
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
      this.appliedFilters = [];
      for(let filter in this.filters){
        for(let i in this.filters[filter]){
          if(this.filters[filter][i].checked) {
            (<HTMLInputElement>document.getElementById(this.filters[filter][i].id)).checked = false;
            this.filters[filter][i].checked = false;
          }
          else if(filter != 'color') break;
        }
      }
      if(this.paramObj['params'] && this.paramObj['params']['filters']){
        delete this.paramObj['params']['filters'];
      }
      this.fetchData(this.paramObj);
    }

    filterClick(event, data): void {
      this.markFilterEntryCheck(data, event.target.checked);
      if(event.target.checked){
          this.appliedFilters.push(data);
          if(data.key != 'color'){
            this.sortFilterData(data.key);
          }
          if(this.appliedFilters.length == 1){
            this.appliedFilters= [this.clearAllBlock,...this.appliedFilters];
          }
          let filterKey = data.key;
          if(!this.paramObj['params']){
            this.paramObj['params'] = {
              'filters': {
                [filterKey]: [data.value]
              }
            }
          }
          else if(!this.paramObj['params']['filters']){
            this.paramObj['params']['filters'] = {
              [filterKey]: [data.value]
            }
          }
          else if(!this.paramObj['params']['filters'][filterKey]){
            this.paramObj['params']['filters'][filterKey] = [data.value]
          }
          else{
            this.paramObj['params']['filters'][filterKey].push(data.value);
          }
          this.fetchData(this.paramObj);
      }
      else {
        this.removeFilterBlock(data, event);
      }
    }

    removeFilterBlock(appliedFilter, event): void {
      if(appliedFilter.name == 'clear all' || this.appliedFilters.length == 2){
        this.clearAllFilters();
        return;
      }
      let tempFilters = [];
      for(let filter of this.appliedFilters){
        if(filter.name == appliedFilter.name){
          let id = filter.id;
          (<HTMLInputElement>document.getElementById(id)).checked = false;
        }
        else {
          tempFilters.push(filter);
        }
      }
      this.appliedFilters = tempFilters;
      this.markFilterEntryCheck(appliedFilter, false);
      if(appliedFilter.key != 'color'){
          this.sortFilterData(appliedFilter.key);
      }
      let filteredKey = appliedFilter.key;
      if(this.paramObj['params']['filters'][filteredKey].length == 1){
        delete this.paramObj['params']['filters'][filteredKey];
      }
      else{
        let foundIndex = this.paramObj['params']['filters'][filteredKey].indexOf(appliedFilter.value);
        this.paramObj['params']['filters'][filteredKey].splice(foundIndex, foundIndex+1);
      }
      this.fetchData(this.paramObj);
    }

    private markFilterEntryCheck(data: any, checked: boolean): void {
      for(let i in this.filters[data.key]){
        if(this.filters[data.key][i]['name'] == data.name){
          this.filters[data.key][i]['checked'] = checked;
        }
      }
    }

    sortFilterData(key) : void {
      let filteredItems = this.filters[key].filter( (a) => a.checked);
      let nonFilteredItems = this.filters[key].filter( (a) => !a.checked);
      this.filters[key] = [...filteredItems, ...nonFilteredItems];
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

    getFilterString(key: string): string {
      if(this.filterStringObj[key]){
        return this.filterStringObj[key];
      }
      else{
        return '';
      }
    }

    filterString(key: string , value: string): string {
      this.filterStringObj[key] = value;
      return this.filterStringObj;
    }

    setSort(event: any ,key: string, value: string): void{
      this.selectedSort = {
        'key' : key,
        'value': value,
        'name': event.target.innerText
      }
      if(!this.paramObj['params']){
        this.paramObj['params'] = {};
      }
      this.paramObj['params']['sort'] = { [key]: value };
      this.fetchData(this.paramObj);
    }

    toggleMobileFiltersShow(show: boolean) {
        this.showMobileFilters = show;
    }

    onPageChange(page) : void{
      this.paramObj['page'] = page;
      this.fetchData(this.paramObj);
    }

}
