import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Product } from '../product/product';
import { HttpClientService } from '../shared/services/http-client.service';

@Injectable()
export class HomeService {

  private dashboardUrl = 'homepagedata'// HOME_DASHBOARD_URL;
  private cartContentsUrl = '4y2ik'// CART_CONTENTS_URL;

  constructor(private httpClient: HttpClientService){}

  getComponentsData() {
    return  this.httpClient
                .get(this.dashboardUrl)
                .flatMap((r: Response) => {
                  let payload = JSON.parse(r['_body']);
                  return payload.d;
                });
  }

 getCartContentsData(): Observable<Product[]> {
   return this.httpClient
              .get(this.cartContentsUrl)
              .map((r: Response) => { return r.json() as Product[] });
 }
}
