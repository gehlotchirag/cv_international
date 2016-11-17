import { Location } from '@angular/common';
import { Component, OnInit, AfterViewInit, Renderer, ViewChild, ViewChildren, DoCheck, EventEmitter } from '@angular/core';
import { HostListener, ContentChildren, QueryList } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { Response } from '@angular/http';
import { Observable }        from 'rxjs/Observable';

import { ProductCardComponent } from '../shared/widgets/product-card/product-card.component';

import { LiveFilterPipe } from './live-filter.pipe';
import { ListingService } from './listing.service';
import { CommonSharedService } from '../shared/services/common-shared.service';

import Listing from './listing';
import ListingProduct from './listing-product'

declare var _satellite: any;

@Component({
  selector: 'cvi-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [ ListingService, CommonSharedService ],
})
export class ListingComponent implements OnInit, DoCheck, AfterViewInit {

  private listing: Listing;
  private filters: any = {};
  private filterStringObj: any = {};
  private receivedFilters: EventEmitter<any> = new EventEmitter<any>();
  private appliedFilters: any = [];
  private tempMobileFilters: any = [];
  private showMobileFilters: boolean = false;
  private paramObj: any = {};
  private zoomedProduct: ListingProduct = null;
  private rangeInfoData = {
    'rangeMin': 0,
    'rangeMax': 500
  }
  private sortEntries: any = [
    {
      'key': 'relevance',
      'value': 'Popular',
      'name': 'Popularity'
    },
    {
      'key': 'newestSort',
      'value': 'Newest',
      'name': 'Latest'
    },
    {
      'key': 'priceOrder',
      'value': 'High to Low',
      'name': 'Price: High to Low'
    },
    {
      'key': 'priceOrder',
      'value': 'Low to High',
      'name': 'Price: Low to High'
    }
  ]
  private selectedSort: any = {
    'key': 'relevance',
    'value': 'Popular',
    'name': 'Popularity'
  }

  private currentUrl: string = "";

  private clearAllBlock: any = {
    'name': 'clear all',
    'key': 'clear all',
    'value': 'clear all',
    'id': 'clear all'
  };
  public digitalData: any = {
    page: null
  };

  constructor(private listingService: ListingService,
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer,
    private location: Location,
    private commonService: CommonSharedService
  ) {}

  ngOnInit(): void {
    // this.loadCategoryList();
    let query, params, page;
    this.receivedFilters.subscribe((data: any) => {
      for (let key in data) {
        let appliedValues = data[key];
        let allValues = this.filters[key];
        if (allValues) {
          for (let obj of allValues) {
            if (appliedValues[0].toLowerCase() == obj.name.toLowerCase()) {
              this.appliedFilters.push(obj);
              this.markFilterEntryCheck(obj, true);
            }
            this.sortFilterData(key);
          }
        }
      }
      if (this.appliedFilters.length != 0 && this.noClearInAppliedFilters()) {
        this.appliedFilters = [this.clearAllBlock, ...this.appliedFilters];
      }
      this.tempMobileFilters = this.appliedFilters.slice();
    })

    this.route.data.pluck('filters').subscribe((data: any) => {
      Object.keys(data).forEach((key) => {
        let items = data[key];
        let tempItems = [];
        for (let item of items) {
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
      (error) => console.error(error))
  }

  ngAfterViewInit() {
    if (typeof _satellite != "undefined") {
      this.digitalData.page = {
        pageInfo: {
          pageName: "Listing Page",
        },
        category: {
          pageType: "Listing",
          pageFilter: this.appliedFilters
        },
        device: {
          deviceType: this.commonService.deviceType()
        }
      }

      console.log(this.digitalData);
      _satellite.track("page-load");
    }
  }

  ngDoCheck() {
    let hostName = window.location.host;
    let href = window.location.href;
    let currentUrl =  href.slice(href.indexOf(hostName) + hostName.length);// this.router.routerState.snapshot.url;
    let categoryId = "";
    let rlString = "";
    let qpObj = {};
    if (this.currentUrl != currentUrl) {
      this.emptyAndUncheckFilters()
      let urlPathEntries;
      let useUrl = currentUrl;
      let queryStringIndex = currentUrl.indexOf('?');
      if (queryStringIndex != -1) {
        useUrl = currentUrl.substr(0, queryStringIndex);
      }
      if(useUrl.indexOf('/us/') == 0){
        useUrl = useUrl.slice(3);
      }
      urlPathEntries = (useUrl.split('/')).filter((item) => item !== "");
      if (urlPathEntries && urlPathEntries.length >= 2) {
        categoryId = urlPathEntries[urlPathEntries.length - 1];
      }
      let rlQpArr = currentUrl.split("?");
      let qpString = "";
      rlString = rlQpArr[0];
      if (rlQpArr.length > 1) {
        qpString = decodeURIComponent(rlQpArr[1]);
        let qpEntries = qpString.split("&");
        for (let entry of qpEntries) {
          let keyVal = entry.split("=");
          if (!qpObj[keyVal[0]]) {
            qpObj[keyVal[0]] = keyVal[1];
          }
          else {
            qpObj[keyVal[0]] = [...qpObj[keyVal[0]], keyVal[1]];
          }
        }
      }
      if (!qpObj['params'] || (qpObj['params'] && !(JSON.parse(qpObj['params'])['categoryId']))) {
        let tempJSON = qpObj['params'] ? JSON.parse(qpObj['params']) : {};
        if (categoryId) {
          tempJSON['categoryId'] = [categoryId];
        }
        qpObj['params'] = JSON.stringify(tempJSON);
      }
      if(qpObj['params'] && JSON.parse(qpObj['params'])['sort']) {
        let tempJSON = JSON.parse(qpObj['params']);
        this.selectedSort = this.getSortObject(tempJSON['sort']);
      }
      else if (qpObj['params'] && !JSON.parse(qpObj['params'])['sort']) {
        let tempJSON = JSON.parse(qpObj['params']);
        tempJSON['sort'] = { "relevance": "Popular" };
        this.selectedSort = this.sortEntries[0];
        qpObj['params'] = JSON.stringify(tempJSON);
      }
      this.paramObj = qpObj;
      let filters = this.paramObj['params'] ? JSON.parse(this.paramObj['params'])['filters'] : {};
      if (filters) {
        this.receivedFilters.emit(filters);
      }
      this.currentUrl = currentUrl;
      this.fetchData(this.paramObj);
    }
    try{
      let placeholderImage = this.renderer.selectRootElement('.js-image-lazy');
      if(placeholderImage){
        if(this.elementInViewport(placeholderImage)){
          this.loadImage(placeholderImage);
        };
      }
    }
    catch(err){}
  }

  elementInViewport(element: any){
    var rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  }

  loadImage(image: any){
    let img = new Image;
    let source = image.getAttribute("data-lazy-src");
    img.onload = function() {
      if(image.parentElement){
        image.parentElement.replaceChild(img, image);
        img.classList.add('img-responsive');
        img.classList.add('fadein')
      }
      else {
        image.src = source;
        image.classList.add('img-responsive');
        image.classList.add('fadein')
      }
    }
    if(null != source){
      img.src = source;
    }
    image.removeAttribute("data-src")
  }

  getSortObject(sortObj){
    for(let data of this.sortEntries){
      if(sortObj[data.key] != undefined && sortObj[data.key] != null){
        return data;
      }
    }
    return this.sortEntries[0];
  }

  fetchData(paramObj?: any) {
    this.listingService
      .getListingList(paramObj)
      .then((listing: Response) => {
        if (listing) {
          this.listing = listing.json().d;
        }
      })
  }

  private noClearInAppliedFilters(): boolean {
    let foundClear : boolean = true;
    for(let item of this.appliedFilters){
      if(item.id === this.clearAllBlock.id){
        foundClear = false;
        break;
      }
    }
    return foundClear;
  }

  private changeListingUrl(paramObj?: any): void {
    let pushStateString = '';
    if (paramObj) {
      let params = paramObj['params'] ? paramObj['params'] : {};
      let page = paramObj['page'] ? paramObj['page'] : 1;
      let query = paramObj['query'] ? paramObj['query'] : '';
      let categoryIdArr = JSON.parse(params)['categoryId'];
      categoryIdArr = categoryIdArr ?  categoryIdArr : [];
      if(!categoryIdArr || categoryIdArr.length > 1){
        pushStateString = `/category?query=${query}&params=${encodeURIComponent(params)}&page=${page}`
      }
      else {
        let categoryId = categoryIdArr[0];
        pushStateString = `/category/${categoryId}?query=${query}&params=${encodeURIComponent(params)}&page=${page}`
      }
    }
    else {
      pushStateString = '/category'
    }
    this.currentUrl = `${pushStateString}`;
    window.history.pushState(null, "Craftsvilla Listing", pushStateString);
  }

  getDataTarget(key): string {
    return key && key['key'] ? `#${this.getToggle(key['key'])}` : null;
  }

  getAriaControl(key): string {
    return key && key['key'] ? this.getToggle(key['key']) : null;
  }

  private getToggle(key): string {
    if (key) {
      let char0 = key.charAt(0).toUpperCase();
      let remKey = key.slice(1).toLowerCase();
      return `collapse${char0}${remKey}`;
    }
    else {
      return '';
    }
  }

  hideMobileFilters() {
    this.showMobileFilters = false;
    if (this.tempAndAppliedFiltersMismatch()) {
      let mappedAppliedFilters = this.appliedFilters.map((item) => item.id);
      let additionalTempEntries = this.tempMobileFilters.filter((item) => {
        return (mappedAppliedFilters.indexOf(item.id) == -1);
      });
      let keysToSort = {}
      additionalTempEntries.forEach((data) => {
        this.markFilterEntryCheck(data, false);
        (<HTMLInputElement>document.getElementById(data.id)).checked = false;
        keysToSort[data.key] = 'true';
      });
      Object.keys(keysToSort)
        .filter((key) => key != 'color')
        .forEach((key) => this.sortFilterData(key));
      this.tempMobileFilters = this.appliedFilters.slice();
    }
  }

  private tempAndAppliedFiltersMismatch() {
    if (!this.tempMobileFilters && !this.appliedFilters) {
      return false;
    }
    else if ((this.tempMobileFilters && !this.appliedFilters) || (this.appliedFilters && !this.tempMobileFilters)) {
      return true;
    }
    if (this.tempMobileFilters.length != this.appliedFilters.length)
      return true;
    let mappedTempFiltersString = this.tempMobileFilters.map((item) => item.id).sort().join(' ');
    let mappedAppliedFiltersString = this.appliedFilters.map((item) => item.id).sort().join(' ');
    if (mappedTempFiltersString === mappedAppliedFiltersString) {
      return false;
    }
    return true;
  }

  applyFilters(): void {
    this.showMobileFilters = false;
    this.appliedFilters = this.tempMobileFilters.slice();
    this.tempMobileFilters = [];
    let paramString = this.paramObj['params'];
    if (this.appliedFilters) {
      let tempJSON = paramString ? JSON.parse(paramString) : {};
      tempJSON['filters'] = {};
      for (let data of this.appliedFilters) {
        let filterKey = data.key;
        if (!tempJSON['filters'][filterKey]) {
          tempJSON['filters'][filterKey] = [data.value.charAt(0).toUpperCase() + data.value.slice(1)];
        }
        else {
          tempJSON['filters'][filterKey].push(data.value.charAt(0).toUpperCase() + data.value.slice(1));
        }
      }
      this.paramObj['params'] = JSON.stringify(tempJSON);
    }
    else {
      if (paramString && JSON.parse(paramString)['filters']) {
        let tempJSON = JSON.parse(paramString);
        delete tempJSON['filters'];
        this.paramObj['params'] = JSON.stringify(tempJSON);
      }
    }
    this.fetchData(this.paramObj);
    this.changeListingUrl(this.paramObj);
  }

  private emptyAndUncheckFilters(): void {
    this.appliedFilters = [];
    this.tempMobileFilters = [];
    for (let filter in this.filters) {
      for (let i in this.filters[filter]) {
        if (this.filters[filter][i].checked) {
          (<HTMLInputElement>document.getElementById(this.filters[filter][i].id)).checked = false;
          this.filters[filter][i].checked = false;
        }
        else if (filter != 'color') break;
      }
    }
  }

  clearAllFilters(): void {
    this.emptyAndUncheckFilters();
    if (this.paramObj['params']) {
      let params = JSON.parse(this.paramObj['params']);
      delete params['filters']
      this.paramObj['params'] = JSON.stringify(params);
    }
    this.paramObj['page'] = 1;
    this.fetchData(this.paramObj);
    this.changeListingUrl(this.paramObj);
    this.showMobileFilters = false;
  }

  filterClick(event, data): void {
    this.markFilterEntryCheck(data, event.target.checked);
    if (!this.showMobileFilters) { // not in mobile mode
      this.handleFilterClickDesktop(event, data);
    }
    else {
      this.handleFilterClickMobile(event, data);
    }
  }

  private filterBlockClick(event, appliedFilter){
    if(appliedFilter.name == this.clearAllBlock.name){
      this.clearAllFilters();
      return;
    }
    else {
      this.removeFilterBlock(appliedFilter, event);
      this.changeListingUrl(this.paramObj);
    }
  }

  private handleFilterClickDesktop(event, data) {
    if (event.target.checked) {
      this.appliedFilters.push(data);
      if (data.key != 'color') {
        this.sortFilterData(data.key);
      }
      if (this.appliedFilters.length == 1) {
        this.appliedFilters = [this.clearAllBlock, ...this.appliedFilters];
      }
      let filterKey = data.key;
      if (!this.paramObj['params']) {
        this.paramObj['params'] = JSON.stringify({
          'filters': {
            [filterKey]: [data.value.charAt(0).toUpperCase() + data.value.slice(1)]
          }
        });
      }
      else if (this.paramObj['params']) {
        let params = JSON.parse(this.paramObj['params']);
        if (!params['filters']) {
          params['filters'] = {
            [filterKey]: [data.value.charAt(0).toUpperCase() + data.value.slice(1)]
          }
        }
        else if (!params['filters'][filterKey]) {
          params['filters'][filterKey] = [data.value.charAt(0).toUpperCase() + data.value.slice(1)];
        }
        else {
          params['filters'][filterKey].push(data.value.charAt(0).toUpperCase() + data.value.slice(1));
        }
        this.paramObj['params'] = JSON.stringify(params);
      }
      this.paramObj['page'] = 1;
      this.fetchData(this.paramObj);
    }
    else {
      this.removeFilterBlock(data, event);
    }
    this.changeListingUrl(this.paramObj);
  }

  private handleFilterClickMobile(event, data) {
    if (event.target.checked) {
      this.tempMobileFilters.push(data);
      if (data.key != 'color') {
        this.sortFilterData(data.key);
      }
    }
    else {
      let tempFilters = [];
      for (let filter of this.tempMobileFilters) {
        if (filter.name.toLowerCase() == data.name.toLowerCase()) {
          let id = filter.id;
          (<HTMLInputElement>document.getElementById(id)).checked = false;
        }
        else {
          tempFilters.push(filter);
        }
      }
      this.tempMobileFilters = tempFilters;
      this.markFilterEntryCheck(data, false);
      if (data.key != 'color') {
        this.sortFilterData(data.key);
      }
    }
  }

  removeFilterBlock(appliedFilter, event): void {
    if (this.appliedFilters.length == 2) {
      this.clearAllFilters();
      return;
    }
    let tempFilters = [];
    for (let filter of this.appliedFilters) {
      if (filter.name == appliedFilter.name) {
        this.markFilterEntryCheck(filter, false);
      }
      else {
        tempFilters.push(filter);
      }
    }
    this.appliedFilters = tempFilters.slice();
    if (appliedFilter.key != 'color') {
      this.sortFilterData(appliedFilter.key);
    }
    let filteredKey = appliedFilter.key;
    let params = JSON.parse(this.paramObj['params'])
    if (params['filters'][filteredKey].length == 1) {
      delete params['filters'][filteredKey];
    }
    else {
      let foundIndex: number = -1;
      for(let pos =0; pos< params['filters'][filteredKey].length; pos++){
        if(params['filters'][filteredKey][pos].toLowerCase() == appliedFilter.value.toLowerCase()){
          foundIndex = pos;
        }
      }
      if(foundIndex != -1){
        params['filters'][filteredKey] = [...params['filters'][filteredKey].slice(0, foundIndex),...params['filters'][filteredKey].slice(foundIndex+1)];
      }
      // params['filters'][filteredKey].splice(foundIndex, foundIndex + 1);
    }
    this.paramObj['params'] = JSON.stringify(params);
    this.paramObj['page'] = 1;
    if (!this.showMobileFilters) {
      this.fetchData(this.paramObj);
    }
  }

  private markFilterEntryCheck(data: any, checked: boolean): void {
    for (let i in this.filters[data.key]) {
      if (this.filters[data.key][i]['name'].toLowerCase() == data.name.toLowerCase()) {
        this.filters[data.key][i]['checked'] = checked;
        let node = <HTMLInputElement>document.getElementById(this.filters[data.key][i].id)
        if(node){
          node.checked = checked;
        }
      }
    }
  }

  sortFilterData(key): void {
    let filteredItems = this.filters[key].filter((a) => a.checked);
    let nonFilteredItems = this.filters[key].filter((a) => !a.checked);
    this.filters[key] = [...filteredItems, ...nonFilteredItems];
  }

  getAppliedFiltersString(): string {
    let keyArray = [];
    this.appliedFilters
      .filter((filter) => filter.id != 'clear all')
      .forEach((filter) => {
        if (keyArray.indexOf(filter.key) == -1) {
          keyArray.push(filter.key);
        }
      });
    return keyArray.map((entry) => (entry.charAt(0).toUpperCase() + entry.slice(1))).join(' , ');
  }

  getStartListingCount(): number {
    if(this.listing && this.listing.current_page && this.listing.results){
      return (this.listing.current_page - 1) * 12 + 1 ;
    }
    else {
      return 0;
    }
  }

  getEndListingCount(): number {
    if (this.listing && this.listing.current_page) {
      let resultsCount = this.listing.results ? this.listing.results.length : 0;
      let computedCount = (this.listing.current_page - 1)*12 + resultsCount;
      let estimatedCount = this.listing.current_page*12;
      let endCount = computedCount < estimatedCount ? computedCount : estimatedCount;
      return endCount;
    }
    return 0;
  }

  displayZoomImage(product: ListingProduct) : void{
    this.zoomedProduct = product;
  }

  closeZoomedOverlay(event: any): void {
    this.zoomedProduct = null;
  }

  getFilterString(key: string): string {
    if (this.filterStringObj[key]) {
      return this.filterStringObj[key];
    }
    else {
      return '';
    }
  }

  filterString(key: string, value: string): string {
    this.filterStringObj[key] = value;
    return this.filterStringObj;
  }

  setSort(event: any, key: string, value: string): void {
    this.selectedSort = {
      'key': key,
      'value': value,
      'name': event.target.innerText
    }
    let params = this.paramObj['params'] ? JSON.parse(this.paramObj['params']) : {};
    params['sort'] = { [key]: value };
    this.paramObj['params'] = JSON.stringify(params);
    this.fetchData(this.paramObj);
    this.changeListingUrl(this.paramObj);
  }

  toggleMobileFiltersShow(show: boolean) {
    this.showMobileFilters = show;
  }

  onPageChange(page): void {
    this.paramObj['page'] = page;
    window.scrollTo(0,0);
    this.fetchData(this.paramObj);
    this.changeListingUrl(this.paramObj);
  }

  hideFilter(): void {
    document.getElementById("filter").style.display = 'none';
  }

  showFilter(): void {
    document.getElementById("filter").style.display = 'block';
  }

}
