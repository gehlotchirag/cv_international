import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';


import { Product } from './product';
import {PRODUCT_DETAIL_URL} from '../urls';

@Injectable()
export  class ProductService{

    private productUrl= PRODUCT_DETAIL_URL;

    constructor(private http: Http) {}

    getProducts(): Observable<Product[]>{
        return this.http
            .get(this.productUrl)
            .map((r:Response)=> r.json() as Product[]);
    }

}
