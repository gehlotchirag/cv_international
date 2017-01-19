import { Component, OnInit, OnDestroy } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { ListingService } from './listing.service';
import { CommonSharedService } from '../shared/services/common-shared.service';
import { ProgressBarService } from '../shared/services/progress-bar.service';

import Listing from './listing';

import categoryFilterMap = require('./category-filter-map');

declare var _satellite: any;
declare var digitalData: any;

@Component({
  selector: 'cvi-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ ListingService, CommonSharedService, ProgressBarService ],
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
  }

  ngOnInit(){
    this.subscription = this.route.queryParams.subscribe(
      (queryParams: any) => {
        let query, params, page;
        let url = this.getPageUrl();
        let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;
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

        this.queryParams = paramObj;
      });
    this.setCountPerPage();
    this.setUrlFilterSort();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
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
    this.resultCountObj['startCount'] = startCount;
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
            self.filterData[key]["applied"] = params['filters'][key];
            self.appliedFilter = self.appliedFilter.concat(params['filters'][key]);
            for (var i = 0; i < self.filterData[key]["applied"].length; ++i) {
              let tempFilter = self.filterData[key]["applied"][i]
              self.filterData[key]["available"] = self.filterData[key]["available"].filter(function (element) {
                return element !== tempFilter
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
        if(isPriceFilter) { 
          this.filterData[filters.key]["available"] = this.filterData[filters.key]["available"].filter(function (element) {
            return JSON.stringify(element) !== JSON.stringify(tempFilter)
          })
        } else {
           this.filterData[filters.key]["available"] = this.filterData[filters.key]["available"].filter(function (element) {
            return element !== tempFilter 
          }) 
        }
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
        this.appliedFilter.push(filterObj.name);
        this.filterData[filterObj.type]["applied"].push(filterObj.name);
        this.filterData[filterObj.type]["available"] = this.filterData[filterObj.type]["available"].filter(function (element) {
          return element !== filterObj.name 
        })
      }
    }
  }

  selectFilter(filters: any, appliedFilter){
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    let filterObj = params['filters'] ? params['filters'] : {};
    let isPriceFilter = (filters.key === 'price');
    let filter = appliedFilter;
    let url = this.getPageUrl();
    let isFilterUrl = this.filtersMap[url] ? true : false;
    let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;
    let filterString = isPriceFilter ? "" + filters.key + ":" + JSON.stringify(filter) : "" + filters.key + ":" + filter;
    this.filterData[filters.key]["applied"].push(appliedFilter);
    this.queryParams['page'] = 1;
    if(this.appliedFilter.length === 0 && !isFilterUrl && !isPremiumUrl && !isPriceFilter) {
      this.navigateToFilterUrl(appliedFilter);
    }else{
      isPriceFilter ? this.appliedFilter.push(JSON.stringify(appliedFilter.name)) : this.appliedFilter.push(appliedFilter);
      if(isPriceFilter) { 
        filterObj[filters.key] ? filterObj[filters.key].push(filter.value) : filterObj[filters.key] = [filter.value];
      } else {
        filterObj[filters.key] ? filterObj[filters.key].push(filter) : filterObj[filters.key] = [filter];
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

  deselectFilter(filters: any, removedFilter){
    let isPriceFilter = (filters.key === 'price');
    let filter = removedFilter;
    let valueIndex = this.filterData[filters.key]["applied"].indexOf(removedFilter);
    let appliedFilterIndex = !isPriceFilter ? this.appliedFilter.indexOf(removedFilter) : this.appliedFilter.indexOf(JSON.stringify(removedFilter.name))
    let params = this.queryParams['params'] ? JSON.parse(this.queryParams['params']) : {};
    let filterArr = params['filters'] ? params['filters'][filters.key] : [];
    let paramFilterIndex = filterArr ? filterArr.indexOf(filter) : -1;
    let url = this.getPageUrl();
    let isFilterUrl = this.filtersMap[url] ? true : false;
    let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;

    if (appliedFilterIndex > -1) this.appliedFilter.splice(appliedFilterIndex, 1);

    if(isPriceFilter) { 
      let tempFilter = removedFilter;
      this.filterData[filters.key]["applied"] = this.filterData[filters.key]["applied"].filter(function (element) {
        return JSON.stringify(element) !== JSON.stringify(tempFilter) 
      })
      for (var i = 0; i < filterArr.length; ++i) {
        let filterVal = JSON.stringify(filterArr[i]);
        if(filterVal === JSON.stringify(removedFilter.value)) { 
          filterArr.splice(i, 1);
        }
      }
    } else {
      if (valueIndex > -1) this.filterData[filters.key]["applied"].splice(valueIndex, 1);
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
    if(this.appliedFilter.length === 0 && isFilterUrl && !isPremiumUrl && !isPriceFilter) {
      this.navigateToCategoryUrl();
    }else{
      this.manageFilterData(filters, true);
      this.fetchCategoryData();
    }
  }


  selectFiltersMobile(filters: any, appliedFilter){
    let isPriceFilter = (filters.key === 'price');
    this.filterData[filters.key]["applied"].push(appliedFilter);
    isPriceFilter ? this.appliedFilter.push(JSON.stringify(appliedFilter.name)) : this.appliedFilter.push(appliedFilter);
    this.manageFilterData(filters, true);
  }

  deselectFiltersMobile(filters: any, removedFilter){
    let isPriceFilter = (filters.key === 'price');
    let valueIndex = this.filterData[filters.key]["applied"].indexOf(removedFilter);
    let appliedFilterIndex = !isPriceFilter ? this.appliedFilter.indexOf(removedFilter) : this.appliedFilter.indexOf(JSON.stringify(removedFilter.name));
    if (valueIndex > -1) this.filterData[filters.key]["applied"].splice(valueIndex, 1);
    if (appliedFilterIndex > -1) this.appliedFilter.splice(appliedFilterIndex, 1);
    if(isPriceFilter) { 
      let tempFilter = removedFilter;
      this.filterData[filters.key]["applied"] = this.filterData[filters.key]["applied"].filter(function (element) {
        return JSON.stringify(element) !== JSON.stringify(tempFilter) 
      })
    }
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
            filterObj[key] ? filterObj[key].push(filter) : filterObj[key] = [filter];
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
      filterString = "" + filterString + key + ":" + obj[key].toString() + "|";
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
