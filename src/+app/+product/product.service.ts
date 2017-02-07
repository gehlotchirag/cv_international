import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { HttpClientService } from '../shared/services/http-client.service'
import { Product } from './product';
import { CacheService  } from '../shared/cache.service';

@Injectable()
export  class ProductService{

    private productDetailUrl = '1/public/catalog/productDetail';
    private similarProductUrl = 'api/product/same_vendor';
    private sameVendorProductUrl = 'api/product/similar';

    constructor(private httpClient: HttpClientService, private _cache: CacheService) {}

    getProductDetail(productId) {
      	return this.httpClient
                  .get(this.productDetailUrl, { 'productId': String(productId) })
                  .toPromise()
    }

    getSimilarProducts(productId) {
    	let id = productId;
	    let key = 'similar-product-' + id;
	    
	    if (this._cache.has(key)) {
	      return Observable.of(this._cache.get(key));
	    }

    	return this.httpClient
					.get(this.similarProductUrl, { 'productId': String(productId) })
                	.map(res => res.json())
                	.do(data => {
                  		this._cache.set(key, data);
                	});
    }

    getSameVendorProducts(productId){
    	let id = productId;
	    let key = 'same-vendor-product-' + id;
	    
	    if (this._cache.has(key)) {
	      return Observable.of(this._cache.get(key));
	    }

    	return this.httpClient
    				.get(this.sameVendorProductUrl, { 'productId': String(productId) })
                	.map(res => res.json())
                	.do(data => {
                  		this._cache.set(key, data);
                	});
    }

}
