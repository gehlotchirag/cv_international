import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import { HttpClientService } from '../shared/services/http-client.service'
import { Product } from './product';


@Injectable()
export  class ProductService{



    private cardData={
        "customerId": "1650977",
        "productId": "3576388",
        "qty": 1
    };

    private productDetailUrl= '29638';


    constructor(private httpClient: HttpClientService,
                private http: Http
    ) {}

    getProductDetail(): Observable<Product[]>{
        return this.httpClient
            .get(this.productDetailUrl)
            .map((r:Response)=> r.json() as Product[]);
    }

    addToCart(cardData) {
        console.log('in add to cart');
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(options);
        let body = JSON.stringify(cardData);
        return this.http.post('https://appapi2.craftsvilla.com/1/personal/cart/addToMyCart', body, headers).map((res: Response) => res.json());
    }

}
