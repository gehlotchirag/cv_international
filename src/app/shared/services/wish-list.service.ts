/**
 * Created by rupali on 10/3/16.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response, Headers } from '@angular/http';

import { HttpClientService } from './http-client.service';
import { Product } from '../../product/product';

@Injectable()
export class WishListService {

    constructor(private httpClient: HttpClientService,
                private http: Http
    ){}

    addToWishList(customerId: string, productId: string[]) {
        let body = {customerId, productId}
        let addToWishListUrl = '1/personal/users/addToWishlist'
        let headers = {
            'x-version-code': '23',
            // 'x-session': '12_57f20d48968117.11775943',
            'Authorization':'1696318_cb935a2694710b6a2b6eb56f3765104c_web'
        };
        this.httpClient
            .post(addToWishListUrl, body, headers)
            .subscribe(
                (res: Response) => {
                    console.log('wishlist servie')
                    return res.json() as Observable<any>;
                },
                (error) => console.error(error),
                () => console.log('completed')
            )
    }
}