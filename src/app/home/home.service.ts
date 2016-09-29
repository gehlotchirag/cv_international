import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Product } from '../product/product';
import { HttpClientService } from '../shared/services/http-client.service';

@Injectable()
export class HomeService {

  private dashboardUrl = '4rohq'// HOME_DASHBOARD_URL;
  private cartContentsUrl = '4y2ik'// CART_CONTENTS_URL;

  constructor(private httpClient: HttpClientService){}

  getComponentsData(): Observable<any[]> {
    return  this.httpClient
                .get(this.dashboardUrl)
                .map((r: Response) => { console.log(r); return r.json() as any[]});
  }

 getCartContentsData(): Observable<Product[]> {
   return this.httpClient
              .get(this.cartContentsUrl)
              .map((r: Response) => { return r.json() as Product[] });
 }
}
