import { Injectable } from '@angular/core';
import { Http, Response , Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { Listing } from './listing';
import { HttpClientService } from '../shared/services/http-client.service'


@Injectable()
export class ListingService {



  private listingsUrl = '1/public/catalog/categoryProductList';

  constructor(
      private httpClient: HttpClientService,
      private http: Http
  ){}



/*  loadCategoryList():  Observable<Listing[]> {
    this.httpClient.setHeader('x-version-code', '23');
    // let headers = new Headers({
    //   'x-version-code': 23,
    // });
    // let options = new RequestOptions({ headers: headers });
    let body = this.categorytList;
    return this.httpClient.post('1/public/catalog/categoryProductList', this.categorytList, {}).map((res: Response) => res.json());
      //return this.httpClient.get(this.listingsUrl,  {}).map((res: Response) => res.json() as Listing[]);
  }*/

  loadCategoryList(params:Object):  Observable<Listing[]> {
      return this.httpClient
        .get(this.listingsUrl, params)
        .map((res: Response) => res.json() as Listing[])
        .catch((err)=>{
          console.error(err)
          return Observable.of<Listing[]>([]);
        });

  }



}


// post(url: string, body: any, headersObj?: Object)
// get(url: string, searchObj?: Object) {
// setHeader
