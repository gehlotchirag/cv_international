import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { HttpClientService } from '../shared/services/http-client.service'
import { Product } from './product';


@Injectable()
export  class ProductService{

    private productDetailUrl= '1/public/catalog/productDetail';

    constructor(private httpClient: HttpClientService) {}

    getProductDetail(searchObj: any): Observable<Product[]>{
        return this.httpClient
            .get(this.productDetailUrl, searchObj)
            .map((r:Response)=> r.json() as Product[]);
    }

}
