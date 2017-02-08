import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { ListingService } from './listing.service';
import { CommonSharedService } from '../shared/services/common-shared.service';
import { ProgressBarService } from '../shared/services/progress-bar.service';
import { RouterHeaderBindingService } from '../shared/services/router-header-binding.service';


import Listing from './listing';

import categoryFilterMap = require('./category-filter-map');

declare var _satellite: any;
declare var digitalData: any;
declare var __insp: any;

@Component({
  selector: 'cvi-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ ListingService, CommonSharedService, ProgressBarService, RouterHeaderBindingService ],
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
  public premiumUrlArr = categoryFilterMap.premiumUrlArr;
  public queryInput = "";
  public searchQuery = '';
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
  public priceFilter = {
    'key': 'price',
    'value': [
      {'name': 'Below $20', 'value': {'min': 1, 'max': 20}},
      {'name': '$20 - $50', 'value': {'min': 20, 'max': 50}},
      {'name': '$50 - $100', 'value': {'min': 50, 'max': 100}},
      {'name': '$100 - $200', 'value': {'min': 100, 'max': 200}},
      {'name': 'Above $200', 'value': {'min': 200, 'max': 1000}},
    ]}

  constructor(  private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private commonService: CommonSharedService,
    private listingService:ListingService,
    private progressBar: ProgressBarService
  ){
    this.route.data.pluck('filters').subscribe((data: any) => {
      this.recievedFilter = data;
      this.manageFilterData(data);
    });

    this.route.data.pluck('products', 'd').subscribe((data: any) => {
      this.listingProducts = data;
      this.trackPage();
      this.setCountPerPage();
      this.setBreadcrumbs();
    });

    this.router.events.subscribe((event) => {
      if(event.url.indexOf('search') > -1) {
        this.search();
      }
    })
  }

  ngOnInit(){
    this.subscription = this.route.queryParams.subscribe(
      (queryParams: any) => {
        let query, params, page;
        let url = this.getPageUrl();
        let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;
        let isSearchPage = url.indexOf('search') > -1;
        if(queryParams){
          query = queryParams['query'];
          params = queryParams['params'];
          page = queryParams['page'];
        }
        let paramObj = {
          query: query ? query : '',
          params: params ? params : "{}",
          page: page && !isNaN(page) ? page : 1
        }
        if(isPremiumUrl) { 
           paramObj[url] = 1;
        }

        if(isSearchPage) {
          this.searchQuery = paramObj['query'];
        }

        this.queryParams = paramObj;
      });
    this.setCountPerPage();
    this.setUrlFilterSort();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


  search(){
    RouterHeaderBindingService.getSearchQuery().subscribe((data) =>  {
      if(this.searchQuery !== data) {
        this.queryParams['query'] = data;
        this.fetchCategoryData();
      }
    });
  }

  trackPage(){
    if (typeof _satellite != "undefined") {
      let categoryName = this.listingProducts.category_name ? this.listingProducts.category_name : 'all';
      let url = this.getPageUrl();
      let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;
      digitalData.page={
        pageInfo:{
          pageName: isPremiumUrl ? "category:" + url : "category:" + categoryName,
        },
        category:{
          pageType:"category",
          subCategory0: categoryName,
          subCategory1: "",
        },
        device:{
          deviceType: this.commonService.deviceType()
        },
        currencycode: {
          currencyCode: "USD"
        }
      } 
      _satellite.track("page-load");
    }
    if(typeof __insp !== 'undefined') {
      __insp.push(["virtualPage"]);
    }

  }

  setBreadcrumbs(){
    this.pageBreadcrumbs = [];
    let url = this.router.url.split('?')[0];
    let _urlArr = url.split('/');
    let isFilterUrl = this.filtersMap[url.split('/').filter((s) => s !== '').join('/')] ? true : false;
    for (var i = 0; i < _urlArr.length; ++i) {
      let breadcrumbObj:Object = {};
      if(i === 0) {
        breadcrumbObj["name"] = "Home";
        breadcrumbObj["link"] = "/";
        this.pageBreadcrumbs.push(breadcrumbObj);
      }else if (i === 1){
        if(isFilterUrl){
          breadcrumbObj["name"] = "Womens Clothing";
          breadcrumbObj["link"] = "/womens-clothing";
          this.pageBreadcrumbs.push(breadcrumbObj);
        }
        breadcrumbObj = {};
        breadcrumbObj["name"] = _urlArr[i].split('-').join(' ');
        breadcrumbObj["link"] = this.pageBreadcrumbs[i] ? this.pageBreadcrumbs[i]["link"] + "/" + _urlArr[i] : "/" + _urlArr[i];
        this.pageBreadcrumbs.push(breadcrumbObj);
      }else {
        breadcrumbObj["name"] = _urlArr[i].split('-').join(' ');
        breadcrumbObj["link"] = this.pageBreadcrumbs[i - 1]["link"] + "/" + _urlArr[i];
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
    this.resultCountObj['startCount'] = perPageCount > 0 ? startCount : 0;
    this.resultCountObj['endCount'] = endCount;
    this.resultCountObj['totalCount'] = this.listingProducts.total_count; 
  }

  setUrlFilterSort(){
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    if(Object.keys(params).length !== 0) {
      let self = this;
      if(params['filters'] && Object.keys(params['filters']).length !== 0){
        Object.keys(params['filters']).forEach(function(key) {
          let isPriceFilter = (key === 'price');
          if(self.filterData[key] && !isPriceFilter) {
            let _paramArr = params['filters'][key];
            _paramArr.forEach(function (filter) {
              let appliedFilterObj = self.recievedFilter[key].filter(function ( obj ) {
                return obj.name ===  filter;
              })[0];
              self.filterData[key]["applied"] ? self.filterData[key]["applied"].push(appliedFilterObj) : [appliedFilterObj];
            })
            self.appliedFilter = self.appliedFilter.concat(params['filters'][key]['name']);
            for (var i = 0; i < self.filterData[key]["applied"].length; ++i) {
              let tempFilter = self.filterData[key]["applied"][i]
              self.filterData[key]["available"] = self.filterData[key]["available"].filter(function (element) {
                return tempFilter.name.toLowerCase().indexOf(element.name.toLowerCase()) === -1;
              })
            }
          } else if(isPriceFilter) { 
            params['filters'][key].forEach(function(filterObj) {
              let appliedFilter = {}
              if(filterObj.min === 1) { 
                appliedFilter['name'] = "Below $20";
                appliedFilter['value'] = filterObj;
              } else if(filterObj.min === 200) { 
                appliedFilter['name'] = "Above $200";
                appliedFilter['value'] = filterObj;
              } else {
                appliedFilter['name'] = '$' + filterObj.min + ' - ' + '$' + filterObj.max;
                appliedFilter['value'] = filterObj;
              }
              self.filterData[key]["applied"] ? self.filterData[key]["applied"].push(appliedFilter) : [appliedFilter] ;
              self.appliedFilter = self.appliedFilter.concat(JSON.stringify(appliedFilter['name']));
              for (var i = 0; i < self.filterData[key]["applied"].length; ++i) {
                let tempFilter = self.filterData[key]["applied"][i]
                self.filterData[key]["available"] = self.filterData[key]["available"].filter(function (element) {
                  return JSON.stringify(element) !== JSON.stringify(tempFilter)
                })
              }
            });
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
    let url = this.getPageUrl();
    let isFilterUrl = this.filtersMap[url] ? true : false;
    let isPriceFilter = (filters.key === 'price');
    if(rearrangeFilter) {
      this.filterData[filters.key]["available"] = filters.value;
      for (var i = 0; i < this.filterData[filters.key]["applied"].length; ++i) {
        let tempFilter = this.filterData[filters.key]["applied"][i]
        this.filterData[filters.key]["available"] = this.filterData[filters.key]["available"].filter(function (element) {
          return tempFilter.name.toLowerCase().indexOf(element.name.toLowerCase()) === -1;
        })
      }
    }else{
      this.appliedFilter = [];
      Object.keys(filters).forEach((key) => {
        this.filterData[key] = {};
        this.filterData[key]["applied"] = [];
        this.filterData[key]["available"] = filters[key];
      }); 
      this.filterData['price'] = {};
      this.filterData['price']["applied"] = [];
      this.filterData['price']["available"] = this.priceFilter['value'];
      if(isFilterUrl) { 
        let filterObj = this.filtersMap[url];
        this.appliedFilter.push(filterObj.value.name);
        if(this.filterData[filterObj.type]) {
          this.filterData[filterObj.type]["applied"].push(filterObj.value);
          this.filterData[filterObj.type]["available"] = this.filterData[filterObj.type]["available"].filter(function (element) {
            return filterObj.value.name.toLowerCase().indexOf(element.name.toLowerCase()) === -1;
          })
        }
      }
    }
  }

  selectFilter(event, filters: any, appliedFilter){
    event.preventDefault();
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    let filterObj = params['filters'] ? params['filters'] : {};
    let isPriceFilter = (filters.key === 'price');
    let filter = appliedFilter;
    let url = this.getPageUrl();
    let isFilterUrl = this.filtersMap[url] ? true : false;
    let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;
    let filterString = "" + filters.key + ":" + JSON.stringify(filter.name);
    this.filterData[filters.key]["applied"].push(appliedFilter);
    this.queryParams['page'] = 1;
    if(this.appliedFilter.length === 0 && !isFilterUrl && !isPremiumUrl && !isPriceFilter && appliedFilter.url !== '#') {
      this.navigateToFilterUrl(appliedFilter);
    }else{
      this.appliedFilter.push(appliedFilter.name);
      if(isPriceFilter) { 
        filterObj[filters.key] ? filterObj[filters.key].push(filter.value) : filterObj[filters.key] = [filter.value];
      } else {
        filterObj[filters.key] ? filterObj[filters.key].push(filter.name) : filterObj[filters.key] = [filter.name];
      }
      params['filters'] = filterObj;
      this.queryParams['params'] = JSON.stringify(params)
      this.manageFilterData(filters, true);
      if(typeof _satellite != 'undefined') {
        digitalData = {
          filter: filterString
        },
        _satellite.track("filter-used")
      }
      this.fetchCategoryData();
    }
  }

  deselectFilter(event, filters: any, removedFilter){
    event.preventDefault();
    let isPriceFilter = (filters.key === 'price');
    let filter = removedFilter;
    let appliedFilterIndex = this.appliedFilter.indexOf(removedFilter.name)
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    let filterArr = params['filters'] ? params['filters'][filters.key] : [];
    let paramFilterIndex = filterArr ? filterArr.indexOf(filter.name) : -1;
    let url = this.getPageUrl();
    let isFilterUrl = this.filtersMap[url] ? true : false;
    let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;

    if (appliedFilterIndex > -1) this.appliedFilter.splice(appliedFilterIndex, 1);
    this.filterData[filters.key]["applied"] = this.filterData[filters.key]["applied"].filter(function (element) {
      return removedFilter.name.toLowerCase().indexOf(element.name.toLowerCase()) === -1;
    })

    if(isPriceFilter) { 
      for (var i = 0; i < filterArr.length; ++i) {
        let filterVal = JSON.stringify(filterArr[i]);
        if(filterVal === JSON.stringify(removedFilter.value)) { 
          filterArr.splice(i, 1);
        }
      }
    } else {
      if(paramFilterIndex > -1)filterArr.splice(paramFilterIndex, 1);
    }

    if(params['filters'] && filterArr) { 
      if(filterArr.length === 0) {
        delete params['filters'][filters.key];
      }else{
        params['filters'][filters.key] = filterArr;
      }
    }
    this.queryParams['params'] = JSON.stringify(params)
    this.queryParams['page'] = 1;
    if(this.appliedFilter.length === 0 && isFilterUrl) {
      this.navigateToCategoryUrl();
    }else{
      this.manageFilterData(filters, true);
      this.fetchCategoryData();
    }
  }


  selectFiltersMobile(event, filters: any, appliedFilter){
    event.preventDefault();
    let isPriceFilter = (filters.key === 'price');
    this.filterData[filters.key]["applied"].push(appliedFilter);
    this.appliedFilter.push(JSON.stringify(appliedFilter.name));
    this.manageFilterData(filters, true);
  }

  deselectFiltersMobile(event, filters: any, removedFilter){
    event.preventDefault();
    let isPriceFilter = (filters.key === 'price');
    let appliedFilterIndex = this.appliedFilter.indexOf(JSON.stringify(removedFilter.name));
    if (appliedFilterIndex > -1) this.appliedFilter.splice(appliedFilterIndex, 1);
    this.filterData[filters.key]["applied"] = this.filterData[filters.key]["applied"].filter(function (element) {
      return removedFilter.name.toLowerCase().indexOf(element.name.toLowerCase()) === -1;
    })
    this.manageFilterData(filters, true);
  }

  selectSort(data){
    this.selectedSort = data;
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    params['sort'] = { [data.key]: data.value };
    this.queryParams['params'] = JSON.stringify(params);
    if(typeof _satellite != 'undefined') {
      digitalData.sortType = {
        sortType : this.selectedSort.value,
      }
      _satellite.track("sorting-used");
    }
    this.fetchCategoryData();
  }

  selectFilterType(filterData){
    this.selectedFilterCategory = filterData; 
    this.filterSubCategory=true
  }

  changePageUrl(url){
    let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;
    let params = `query=${this.queryParams['query']}&params=${encodeURIComponent(this.queryParams['params'])}&page=${this.queryParams['page']}`;
    if(isPremiumUrl){
      params = `query=${this.queryParams['query']}&params=${encodeURIComponent(this.queryParams['params'])}&page=${this.queryParams['page']}&${url}=${this.queryParams[url]}`
    }
    this.location.replaceState(url, params);
  }

  fetchCategoryData(){
    this.progressBar.start();
    if(typeof window !== 'undefined') {
      window.scroll(0,0);
    }
    let url = this.getPageUrl();
    let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;
    if(isPremiumUrl){
      this.queryParams[url] = 1;
    }
    
    this.listingService.getListingList(this.queryParams, url).then((listing: Response) => {
      if (listing) {
        this.listingProducts = listing.json().d;
        this.setCountPerPage();
        this.progressBar.complete();
      }
    })

    this.changePageUrl(url);

  }

  applyMobileFilters(){
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    let filterObj = {};
    let self = this;
    this.queryParams['page'] = 1;
    Object.keys(this.filterData).forEach((key) => {
      if(key === 'price') { 
        if(self.filterData[key]['applied'].length > 0){
          self.filterData[key]['applied'].forEach( function (data) {
            let filter = data;
            filterObj[key] ? filterObj[key].push(filter.value) : filterObj[key] = [filter.value];
          })
        }
      } else {
        if(self.filterData[key]['applied'].length > 0){
          self.filterData[key]['applied'].forEach( function (data) {
            let filter = data;
            filterObj[key] ? filterObj[key].push(filter.name) : filterObj[key] = [filter.name];
          })
        }
      }
    })    
    params['filters'] = filterObj;
    this.queryParams['params'] = JSON.stringify(params)
    this.mobileFilterTracking();
    this.fetchCategoryData();
  }

  mobileFilterTracking(){
    let obj =  JSON.parse(this.queryParams['params']).filters;
    let filterString = "";
    Object.keys(obj).forEach(function(key, index) {
      filterString = "" + filterString + key + ":" + obj[key]['name'] + "|";
    });
    if(typeof _satellite != 'undefined') {
      digitalData = {
        filter: filterString
      },
      _satellite.track("filter-used")
    }
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
    let url = '/' + category + '/' + appliedFilter.name + '-' + category;
    let breadcrumbObj:Object = {};
    breadcrumbObj["name"] = appliedFilter.name + ' ' + category;;
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
