import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { HttpClientService } from '../shared/services/http-client.service'
import { Product } from './product';


@Injectable()
export  class ProductService{
    private cartData={
        "productId": "5280331",
        "qty": 1
    };


       //private productDetailUrl= '1/public/catalog/productDetail?productId=4582436';
       private similarProductsUrl='1/public/catalog/similarProducts?productId=4948258';
       private productDetailUrl=('http://52.44.221.18:8000/1/public/catalog/productDetail?productId=1');
    constructor(private httpClient: HttpClientService,
                private http: Http
    ) {}

    getProductDetail(): Observable<Product[]>{
    //     return this.httpClient
    //         .get(this.productDetailUrl, {})
    //         .map((r:Response)=> r.json() as Product[]);
    // }

           return this.http
            .get(this.productDetailUrl, {})
            .map((r:Response)=> r.json() as Product[]);
    }


    // getSimilarProducts(productId: string ): Observable<Product[]>{
    //         return this.httpClient
    //         .get(this.similarProductsUrl, {})
    //         .map((r:Response)=> r.json() as Product[]);
    // }


}
