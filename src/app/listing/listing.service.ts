import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { Listing } from './listing';
import { HttpClientService } from '../shared/services/http-client.service'


@Injectable()
export class ListingService {

  private categorytList={
    "categoryId": [
      10001,
      10015,
      10064,
      10004
    ],
    "filters": {
      "codProducts": "COD Available",
      "color": [
        "Red",
        "Black",
        "White"
      ],
      "discountedPrice": "Above 50%",
      "price": [
        {
          "max": "2000",
          "min": "1000"
        }
      ]
    },
    "pageId": 1,
    "perPage": 10,
    "sorts": {
      "discountedPriceOrder": "High to Low",
      "newestSort": "Newest",
      "priceOrder": "High to Low",
      "relevance": "Popular"
    }
  };

  private listingsUrl = 'wkp6';

  constructor(
      private httpClient: HttpClientService,
      private http: Http
  ){}



  loadCategoryList():  Observable<Listing[]> {
    this.httpClient.setHeader('x-version-code', '23');
    // let headers = new Headers({
    //   'x-version-code': 23,
    // });
    // let options = new RequestOptions({ headers: headers });
    let body = this.categorytList;
    return this.httpClient.post('1/public/catalog/categoryProductList', this.categorytList, {}).map((res: Response) => res.json());
  }



}


// post(url: string, body: any, headersObj?: Object)
// get(url: string, searchObj?: Object) {
// setHeader
