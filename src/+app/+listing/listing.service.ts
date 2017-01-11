import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response , Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import Listing from './listing';
import { HttpClientService } from '../shared/services/http-client.service'
import { isDefined , isEmpty} from '../shared/utils';
import categoryFilterMap = require('./category-filter-map');

@Injectable()
export class ListingService {
  private listingsUrl = 'api/products/';
  private filtersUrl = 'api/category/1/filters';
  public filtersMap = categoryFilterMap.filtersMap;

  constructor(
      private httpClient: HttpClientService, 
      private router: Router
  ){}

  loadCategoryList(params:Object): any {
      return this.httpClient
        .get(this.listingsUrl, params)
        .map((res: Response) => res.json() as Listing[])
        .catch((err)=>{
          console.error(err)
          return Observable.of<Listing[]>([]);
        });
  }

  getParamsObj(paramObj){
    let  query, params, page, premium;
    if(paramObj){
      query = paramObj['query'];
      params = paramObj['params'];
      page = paramObj['page'];
      premium = paramObj['premium']
    }

    let searchObj = {
      query: query ? query : '',
      params: params ? params : null,
      page: page && !isNaN(page) ? page : 1,
      premium
    }

    return searchObj;
  }

  getListingList(paramObj: Object, url:string): any {
    
    let categoryId = categoryFilterMap.categoriesMap[url] ? categoryFilterMap.categoriesMap[url].id : null;
    let appliedFilterObj = this.filtersMap[url.toLowerCase()] ? this.filtersMap[url.toLowerCase()] : null;
    let isPremiumUrl = url.indexOf('premium') > -1 ? true : false;
    let searchObj = this.getParamsObj(paramObj);

    let paramsObj = searchObj.params ? JSON.parse(searchObj.params) : {};

    if(appliedFilterObj) {
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
        searchObj.premium = 1;
      }
     
      return this.httpClient
                  .get(this.listingsUrl, searchObj)
                  .toPromise()
    } else {
      return null;
    }
  }

  getFilterList(paramObj: Object, url:string) {
    this.filtersUrl = 'api/filters';
    let categoryId = categoryFilterMap.categoriesMap[url] ? categoryFilterMap.categoriesMap[url].id : null;
    let appliedFilterObj = this.filtersMap[url.toLowerCase()] ? this.filtersMap[url.toLowerCase()] : null;
    let searchObj = this.getParamsObj(paramObj);
    let paramsObj = searchObj.params ? JSON.parse(searchObj.params) : {};
    
    if(appliedFilterObj) {
      categoryId = appliedFilterObj.id;
      let filter = paramsObj.filters ? paramsObj.filters : {};
      filter[appliedFilterObj.type] ? filter[appliedFilterObj.type].push(appliedFilterObj.name) : filter[appliedFilterObj.type] = [appliedFilterObj.name];
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

  getPremiumFilters(): any{
    this.filtersUrl = 'api/premium/filters';
    return this.httpClient
               .get(this.filtersUrl)
               .toPromise();
  }

}
