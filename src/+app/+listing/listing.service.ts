import { Injectable } from '@angular/core';

import Listing from './listing';

import { HttpClientService } from '../shared/services/http-client.service'

import categoryFilterMap = require('./category-filter-map');

@Injectable()
export class ListingService {
  private listingsUrl = 'api/products/';
  private filtersUrl = 'api/category/1/filters';
  public filtersMap = categoryFilterMap.filtersMap;
  public premiumUrlArr = categoryFilterMap.premiumUrlArr;

  constructor(
      private httpClient: HttpClientService
  ){}


  getParamsObj(paramObj){
    let  query, params, page;
    
    if(paramObj){
      query = paramObj['query'];
      params = paramObj['params'];
      page = paramObj['page'];
    }

    let searchObj = {
      query: query ? query : '',
      params: params ? params : null,
      page: page && !isNaN(page) ? page : 1
    }

    return searchObj;
  }

  getListingList(paramObj: Object, url:string): any {
    
    let categoryId = categoryFilterMap.categoriesMap[url] ? categoryFilterMap.categoriesMap[url].id : null;
    let appliedFilterObj = this.filtersMap[url.toLowerCase()] ? this.filtersMap[url.toLowerCase()] : null;
    let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;
    let searchObj = this.getParamsObj(paramObj);

    let paramsObj = searchObj.params ? JSON.parse(searchObj.params) : {};

    if(appliedFilterObj) {
      categoryId = appliedFilterObj.id;
      let filter = paramsObj.filters ? paramsObj.filters : {};
      filter[appliedFilterObj.type] ? filter[appliedFilterObj.type].push(appliedFilterObj.value.name) : filter[appliedFilterObj.type] = [appliedFilterObj.value.name];
      paramsObj.filters = filter;
    }
    if(categoryId || isPremiumUrl){

      if(categoryId && categoryId !== 1) {
        paramsObj.categoryId = [categoryId];
      }
      if(!paramsObj.sort){
        paramsObj.sort = {
          "relevance": "Popular"
        }
      }
      searchObj.params = JSON.stringify(paramsObj);

      if(isPremiumUrl){
        searchObj[url] = 1;
      }
     
      return this.httpClient
                  .get(this.listingsUrl, searchObj)
                  .toPromise()
    } else {
      return null;
    }
  }

  getFilterList(paramObj: Object, url:string) {
    this.filtersUrl = 'api/ufilters';
    let categoryId = categoryFilterMap.categoriesMap[url] ? categoryFilterMap.categoriesMap[url].id : null;
    let appliedFilterObj = this.filtersMap[url.toLowerCase()] ? this.filtersMap[url.toLowerCase()] : null;
    let searchObj = this.getParamsObj(paramObj);
    let paramsObj = searchObj.params ? JSON.parse(searchObj.params) : {};
    
    if(appliedFilterObj) {
      categoryId = appliedFilterObj.id;
      let filter = paramsObj.filters ? paramsObj.filters : {};
      filter[appliedFilterObj.type] ? filter[appliedFilterObj.type].push(appliedFilterObj.value.name) : filter[appliedFilterObj.type] = [appliedFilterObj.value.name];
      paramsObj.filters = filter;
    }
    
    if(categoryId){
      paramsObj.categoryId = [categoryId];
      searchObj.params = JSON.stringify(paramsObj);
    }

    return this.httpClient
               .get(this.filtersUrl, searchObj)
               .toPromise();
  }

  getPremiumFilters(url): any{
    this.filtersUrl = 'api/' + url + '/filters';
    return this.httpClient
               .get(this.filtersUrl)
               .toPromise();
  }

}
