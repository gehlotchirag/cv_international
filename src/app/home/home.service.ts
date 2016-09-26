import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { HOME_DASHBOARD_URL, CART_CONTENTS_URL } from '../urls';
import { Product } from '../product/product';

@Injectable()
export class HomeService {

  private dashboardUrl = HOME_DASHBOARD_URL;
  private cartContentsUrl = CART_CONTENTS_URL;

  constructor(private http: Http){}

  getComponentsData(): Observable<any[]> {
    return  this.http
                .get(this.dashboardUrl)
                .map((r: Response) => { console.log(r); return r.json() as any[]});
  }

 getCartContentsData(): Observable<Product[]> {
   return this.http
              .get(this.cartContentsUrl)
              .map((r: Response) => { return r.json() as Product[] });
 }
}
