import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { HttpClientService } from '../shared/services/http-client.service'
import { Product } from './product';


@Injectable()
export  class ProductService{

    private productDetailUrl= '29638';

    constructor(private httpClient: HttpClientService) {}

    getProductDetail(): Observable<Product[]>{
        return this.httpClient
            .get(this.productDetailUrl)
            .map((r:Response)=> r.json() as Product[]);
    }

}
