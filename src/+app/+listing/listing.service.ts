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

  getListingList(paramObj: Object, url:string): any {
    let  query, params, page, premium;
    let categoryId = categoryFilterMap.categoriesMap[url] ? categoryFilterMap.categoriesMap[url].id : null;
    let appliedFilterObj = this.filtersMap[url.toLowerCase()] ? this.filtersMap[url.toLowerCase()] : null;
    let isPremiumUrl = this.premiumUrlArr.indexOf(url) > -1;
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

    let paramsObj = searchObj.params ? JSON.parse(searchObj.params) : {};

    if(appliedFilterObj) {
      let category = url.split('/')[0];
      let categoryUrl = 'womens-clothing/' + category;
      categoryId = appliedFilterObj.id;
      let filter = paramsObj.filters ? paramsObj.filters : {};
      filter[appliedFilterObj.type] ? filter[appliedFilterObj.type].push(appliedFilterObj.name) : filter[appliedFilterObj.type] = [appliedFilterObj.name];
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

  getFilterList() {
    this.filtersUrl = 'api/category/1/filters';
    return this.httpClient
               .get(this.filtersUrl)
               .toPromise();
  }

  getPremiumFilters(url): any{
    this.filtersUrl = 'api/' + url + '/filters';
    return this.httpClient
               .get(this.filtersUrl)
               .toPromise();
  }

}
