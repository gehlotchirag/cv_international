import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { HttpClientService } from '../shared/services/http-client.service'
import { Product } from './product';


@Injectable()
export  class ProductService{
    private cartData={
        "productId": "4170101",
        "qty": 1
    };

        private productDetailUrl= '1/public/catalog/productDetail?productId=4563463';
        private similarProductsUrl='1/public/catalog/similarProducts?productId=4170101';

    constructor(private httpClient: HttpClientService,
                private http: Http
    ) {}

    getProductDetail(searchObj: any): Observable<Product[]>{
        return this.httpClient
            .get(this.productDetailUrl, {})
            .map((r:Response)=> r.json() as Product[]);
    }

    getSimilarProducts(productId: string ): Observable<Product[]>{
            return this.httpClient
            .get(this.similarProductsUrl, {})
            .map((r:Response)=> r.json() as Product[]);
    }


}
