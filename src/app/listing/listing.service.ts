import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import Listing from './listing';
import { HttpClientService } from '../shared/services/http-client.service'
import { isDefined , isEmpty} from '../shared/utils';

@Injectable()
export class ListingService {
  private listingsUrl = 'api/products/';
  private filtersUrl = 'api/filters';

  constructor(
      private httpClient: HttpClientService,
      private http: Http
  ){}

  loadCategoryList(params:Object):  Observable<Listing[]> {
      return this.httpClient
        .get(this.listingsUrl, params)
        .map((res: Response) => res.json() as Listing[])
        .catch((err)=>{
          console.error(err)
          return Observable.of<Listing[]>([]);
        });
  }

  getListingList(paramObj: Object): any {
    let  query, params, page, premium;
    if(paramObj){
      query = paramObj['query'];
      params = paramObj['params'];
      page = paramObj['page'];
      premium = paramObj['premium']
    }
    let searchObj = {
      query: query ? query : '',
      params: isDefined(params) && !isEmpty(params) ? params : {},
      page: page && !isNaN(page) ? page : 1,
      premium
    }

    if(premium === 1){
      searchObj.premium = premium;
    }
   
    return this.httpClient
                .get(this.listingsUrl, searchObj)
                .toPromise()
  }

  getFilterList(paramObj: Object): any {
    this.filtersUrl = 'api/filters';
    return this.httpClient
               .get(this.filtersUrl, paramObj)
               .toPromise();
  }

  getPremiumFilters(): any{
    this.filtersUrl = 'api/premium/filters';
    return this.httpClient
               .get(this.filtersUrl)
               .toPromise();
  }

}
