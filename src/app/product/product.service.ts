import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { HttpClientService } from '../shared/services/http-client.service'
import { Product } from './product';


@Injectable()
export  class ProductService{



    private cartData={
        // "customerId": "1650977",
        "productId": "3576388",
        "qty": 1
    };

    private productDetailUrl= '1/public/catalog/productDetail?productId=4563463';


    constructor(private httpClient: HttpClientService,
                private http: Http
    ) {}

    getProductDetail(): Observable<Product[]>{
        return this.httpClient
            .get(this.productDetailUrl)
            .map((r:Response)=> r.json() as Product[]);
    }

    // addToCart(cartData) {
    //     let headers = {
    //         'content-type': 'application/json',
    //         'x-version-code': '23',
    //         'x-session': '12_57f20d48968117.11775943'
    //     };
    //     let body =this.cartData;
    //     return this.httpClient.post('1/personal/cart/addToMyCart', body, headers).map((res: Response) => res.json());
    // }

}
