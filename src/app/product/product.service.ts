import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';


import { Product } from './product';

@Injectable()
export  class ProductService{

    private headers = new Headers({'Content-Type': 'application/json'});

    //private productUrl="https://api.myjson.com/bins/3o0y2";

    private productUrl="https://api.myjson.com/bins/29638";

    constructor(private http: Http) {}

    getProducts(): Observable<Product[]>{
        return this.http
            .get(this.productUrl)
            .map((r:Response)=> r.json() as Product[]);
    }


}
