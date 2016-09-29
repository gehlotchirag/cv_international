import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


import { Product } from './product';
import {PRODUCT_DETAIL_URL} from '../urls';

@Injectable()
export  class ProductService{

    private productUrl= PRODUCT_DETAIL_URL;
    private cardData={
        "customerId": "1650977",
        "productId": "3576388",
        "qty": 1
    };

    constructor(private http: Http) {}

    getProducts(): Observable<Product[]>{
        return this.http
            .get(this.productUrl)
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
