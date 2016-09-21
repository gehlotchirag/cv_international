import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Product } from './product';

@Injectable()
export  class ProductService{

    private productUrl="https://api.myjson.com/bins/3o0y2";

    constructor(private http: Http) {}

    getProducts(): Observable<Product[]>{
        return this.http
            .get(this.productUrl)
            .map((r:Response)=> r.json() as Product[]);
    }
}
