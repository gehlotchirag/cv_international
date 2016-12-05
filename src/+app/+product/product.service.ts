import { Injectable } from '@angular/core';

import 'rxjs/Rx';

import { HttpClientService } from '../shared/services/http-client.service'
import { Product } from './product';


@Injectable()
export  class ProductService{

    private productDetailUrl= '1/public/catalog/productDetail';

    constructor(private httpClient: HttpClientService) {}

    getProductDetail(productId) {
      return this.httpClient
                  .get(this.productDetailUrl, { 'productId': String(productId) })
                  .toPromise()
    }

}
