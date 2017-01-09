import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { ListingService } from './listing.service';
import Listing from './listing';

import categoryFilterMap = require('./category-filter-map');

@Component({
  selector: 'cvi-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ ListingService ],
})

export class CategoryComponent implements OnInit, OnDestroy{
  private subscription: Subscription;
  public recievedFilter: Object = {};
  public listingProducts: Listing;
  public filterData: Object = {};
  public appliedFilter: Array<any> = [];
  public pageBreadcrumbs: Array<any> = [];
  public showMobileSort: boolean = false;
  public showMobileFilter: boolean = false;
  public selectedFilterCategory: Object = {};
  public filterSubCategory:boolean = false;
  public resultCountObj: Object = {};
  public queryParams: Object = {};
  public filtersMap = categoryFilterMap.filtersMap;
  public sortType: Array<any> = [
   {
      'data': [
        {
          'name': 'Popularity',
          'mobName': 'Popularity',
          'key': 'relevance',
          'value': 'Popular'
        }
      ]
    },
    {
      'data': [
        {
          'name': 'Latest',
          'mobName': 'Latest',
          'value': 'Newest',
          'key': 'newestSort'
        }
      ]
    },
    {
      'name': 'Price:',
      'data': [
        {
          'name': 'Low',
          'mobName': 'Price: Low to High',
          'key': 'priceOrder',
          'value': 'Low to High'
        },
        {
          'name': 'High',
          'mobName': 'Price: High to Low',
          'key': 'priceOrder',
          'value': 'High to Low'
        }
      ]
    }
  ]
  public selectedSort = {
    'name': 'Popularity',
    'mobName': 'Popularity',
    'key': 'relevance',
    'value': 'Popular'
  }

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private listingService:ListingService
  ){
    this.route.data.pluck('filters').subscribe((data: any) => {
      this.recievedFilter = data;
      this.manageFilterData(data);
    });

    this.route.data.pluck('products', 'd').subscribe((data: any) => {
      this.listingProducts = data;
      this.setCountPerPage();
    });
  }

  ngOnInit(){
    this.setBreadcrumbs();
    this.subscription = this.route.queryParams.subscribe(
      (queryParams: any) => {
        let query, params, page, premium;
        if(queryParams){
          query = queryParams['query'];
          params = queryParams['params'];
          page = queryParams['page'];
          premium = queryParams['premium']
        }
        let paramObj = {
          query: query ? query : '',
          params: params ? params : "{}",
          page: page && !isNaN(page) ? page : 1,
          premium
        }
        if(!paramObj['premium']){
          delete paramObj['premium'];
        }
        this.queryParams = paramObj;
      });
    this.setCountPerPage();
    this.setUrlFilterSort();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  setBreadcrumbs(){
    let _urlArr = this.router.url.split('?')[0].split('/');
    for (var i = 0; i < _urlArr.length; ++i) {
      let breadcrumbObj:Object = {};
      if(i === 0) {
        breadcrumbObj["name"] = "Home";
        breadcrumbObj["link"] = "/";
        this.pageBreadcrumbs.push(breadcrumbObj);
      }else{
        breadcrumbObj["name"] = _urlArr[i].split('-').join(' ');
        breadcrumbObj["link"] = "/" + _urlArr[i - 1] + "/" + _urlArr[i];
        this.pageBreadcrumbs.push(breadcrumbObj);
      }
    }
  }

  setCountPerPage(){
    let perPageCount, currentPage, startCount, endCount;
    perPageCount = this.listingProducts.results.length;
    if(this.listingProducts.next_page) {
      currentPage = this.listingProducts.current_page ? this.listingProducts.current_page : 1;
      startCount = (perPageCount * currentPage) - (perPageCount - 1);
      endCount = (perPageCount * currentPage);
    }else{
      startCount = this.listingProducts.total_count - perPageCount + 1;
      endCount = this.listingProducts.total_count
    }
    this.resultCountObj['startCount'] = startCount;
    this.resultCountObj['endCount'] = endCount;
    this.resultCountObj['totalCount'] = this.listingProducts.total_count; 
  }

  setUrlFilterSort(){
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    if(Object.keys(params).length !== 0) {
      let self = this;
      if(Object.keys(params['filters']).length !== 0){
        Object.keys(params['filters']).forEach(function(key) {
          if(self.filterData[key]) {
            self.filterData[key]["applied"] = params['filters'][key];
            self.appliedFilter = self.appliedFilter.concat(params['filters'][key]);
            for (var i = 0; i < self.filterData[key]["applied"].length; ++i) {
              let tempFilter = self.filterData[key]["applied"][i]
              self.filterData[key]["available"] = self.filterData[key]["available"].filter(function (element) {
                return element !== tempFilter 
              })
            }
          }
        });
      }
      if(params['sort']){
        let sortValue = params['sort'][Object.keys(params['sort'])[0]];
        let self = this;
        this.sortType.forEach( function (sortData) {
          let data = sortData.data;
          data.forEach( function (data) {
            if(data['value'] === sortValue) {
              self.selectedSort = data;
            }
          })
        });
      }
    }
  }

  manageFilterData(filters: any, rearrangeFilter?: boolean){
    if(rearrangeFilter) {
      this.filterData[filters.key]["available"] = filters.value;
      for (var i = 0; i < this.filterData[filters.key]["applied"].length; ++i) {
        let tempFilter = this.filterData[filters.key]["applied"][i]
        this.filterData[filters.key]["available"] = this.filterData[filters.key]["available"].filter(function (element) {
          return element !== tempFilter 
        })
      }
    }else{
      Object.keys(filters).forEach((key) => {
        this.filterData[key] = {};
        this.filterData[key]["applied"] = [];
        this.filterData[key]["available"] = filters[key];
      }); 
    }
  }

  selectFilter(filters: any, appliedFilter: String){
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    let filterObj = params['filters'] ? params['filters'] : {};
    let filter = appliedFilter.charAt(0).toUpperCase() + appliedFilter.slice(1);
    let url = this.getPageUrl();
    let isFilterUrl = this.filtersMap[url] ? true : false;
    let isPremiumUrl = url.indexOf('premium') > -1 ? true : false;
    
    this.filterData[filters.key]["applied"].push(appliedFilter);
    this.queryParams['page'] = 1;
    if(this.appliedFilter.length === 0 && !isFilterUrl && !isPremiumUrl) {
      this.navigateToFilterUrl(appliedFilter);
    }else{
      this.appliedFilter.push(appliedFilter);
      filterObj[filters.key] ? filterObj[filters.key].push(filter) : filterObj[filters.key] = [filter];
      params['filters'] = filterObj;
      this.queryParams['params'] = JSON.stringify(params)
      this.manageFilterData(filters, true);
      this.fetchCategoryData();
    }
  }

  deselectFilter(filters: any, removedFilter: String){
    let valueIndex = this.filterData[filters.key]["applied"].indexOf(removedFilter);
    let appliedFilterIndex = this.appliedFilter.indexOf(removedFilter);
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    let filterArr = params['filters'][filters.key];
    let filter = removedFilter.charAt(0).toUpperCase() + removedFilter.slice(1);
    let paramFilterIndex = filterArr.indexOf(filter);
    let url = this.getPageUrl();
    let isFilterUrl = this.filtersMap[url] ? true : false;
    let isPremiumUrl = url.indexOf('premium') > -1 ? true : false;

    if (valueIndex > -1) this.filterData[filters.key]["applied"].splice(valueIndex, 1);
    if (appliedFilterIndex > -1) this.appliedFilter.splice(appliedFilterIndex, 1);
    filterArr.splice(paramFilterIndex, 1);
    if(filterArr.length === 0) {
      delete params['filters'][filters.key];
    }else{
      params['filters'][filters.key] = filterArr;
    }
    this.queryParams['params'] = JSON.stringify(params)
    this.queryParams['page'] = 1;
    if(this.appliedFilter.length === 0 && isFilterUrl && !isPremiumUrl) {
      this.navigateToCategoryUrl();
    }else{
      this.manageFilterData(filters, true);
      this.fetchCategoryData();
    }
  }


  selectFiltersMobile(filters: any, appliedFilter: String){
    this.filterData[filters.key]["applied"].push(appliedFilter);
    this.appliedFilter.push(appliedFilter);
    this.manageFilterData(filters, true);
  }

  deselectFiltersMobile(filters: any, removedFilter: String){
    let valueIndex = this.filterData[filters.key]["applied"].indexOf(removedFilter);
    let appliedFilterIndex = this.appliedFilter.indexOf(removedFilter);
    if (valueIndex > -1) this.filterData[filters.key]["applied"].splice(valueIndex, 1);
    if (appliedFilterIndex > -1) this.appliedFilter.splice(appliedFilterIndex, 1);
    this.manageFilterData(filters, true);
  }

  selectSort(data){
    this.selectedSort = data;
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    params['sort'] = { [data.key]: data.value };
    this.queryParams['params'] = JSON.stringify(params);
    this.fetchCategoryData();
  }

  selectFilterType(filterData){
    this.selectedFilterCategory = filterData; 
    this.filterSubCategory=true
  }

  changePageUrl(url){
    let isPremiumUrl = this.router.url.indexOf("/premium") > -1;
    let params = `query=${this.queryParams['query']}&params=${encodeURIComponent(this.queryParams['params'])}&page=${this.queryParams['page']}`;
    if(isPremiumUrl){
      params = `query=${this.queryParams['query']}&params=${encodeURIComponent(this.queryParams['params'])}&page=${this.queryParams['page']}&premium=${this.queryParams['premium']}`
    }
    this.location.replaceState(url, params);
  }

  fetchCategoryData(){
    let url = this.getPageUrl();

    if(this.router.url.indexOf("/premium") > -1){
      this.queryParams['premium'] = 1;
    }
    
    this.listingService.getListingList(this.queryParams, url).then((listing: Response) => {
      if (listing) {
        this.listingProducts = listing.json().d;
        this.setCountPerPage();
      }
    })

    this.changePageUrl(url);

  }

  applyMobileFilters(){
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    let filterObj = params['filters'] ? params['filters'] : {};
    let self = this;
    this.queryParams['page'] = 1;
    Object.keys(this.filterData).forEach((key) => {
      if(self.filterData[key]['applied'].length > 0){
        self.filterData[key]['applied'].forEach( function (data) {
          let filter = data.charAt(0).toUpperCase() + data.slice(1);
          filterObj[key] ? filterObj[key].push(filter) : filterObj[key] = [filter];
        })
      }
    })    
    params['filters'] = filterObj;
    this.queryParams['params'] = JSON.stringify(params)
    this.fetchCategoryData();
  }

  clearFilters(){
    this.appliedFilter = [];
    let url = this.getPageUrl();
    let isFilterUrl = this.filtersMap[url] ? true : false;
    this.queryParams['page'] = 1;
    this.manageFilterData(this.recievedFilter);
    if(this.queryParams['params']) {
      let params = JSON.parse(this.queryParams['params']);
      if(params['filters']) {
        delete params['filters'];
        this.queryParams['params'] = JSON.stringify(params);
      }
    }
    if(isFilterUrl){
      this.navigateToCategoryUrl();
    }else{
      this.fetchCategoryData();  
    }
  }

  navigateToCategoryUrl(){
    let _urlArr = this.router.url.split('?')[0].split('/');
    let category = _urlArr[1];
    let url = '/womens-clothing/' + category;
    this.pageBreadcrumbs.pop()
    this.router.navigate([url.toLowerCase()], { queryParams: this.queryParams });
  }

  navigateToFilterUrl(appliedFilter){
    let _urlArr = this.router.url.split('?')[0].split('/');
    let category = _urlArr[_urlArr.length - 1];
    let url = '/' + category + '/' + appliedFilter + '-' + category;
    let breadcrumbObj:Object = {};
    breadcrumbObj["name"] = appliedFilter + ' ' + category;;
    breadcrumbObj["link"] = "";
    this.pageBreadcrumbs.push(breadcrumbObj);

    this.router.navigate([url.split(" ").join("-").toLowerCase()], { queryParams: this.queryParams });
  }

  getPageUrl(){
    let _tempUrl = this.router.url.split('?')[0];
    let _urlArr = (_tempUrl.split('/')).filter((item) => item !== "");
    return _urlArr.join('/');
  }

  onPageChange(page) {
    this.queryParams['page'] = page;
    if(typeof window !== 'undefined') {
      window.scrollTo(0,0);
    }
    this.fetchCategoryData();
  }

  breadcrumbClick(index){
    for (var i = 1; i < index; ++i) {
      this.pageBreadcrumbs.pop();
    }
  }
}
