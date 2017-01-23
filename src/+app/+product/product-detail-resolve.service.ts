import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { CacheService } from '../shared/cache.service';
import { ProductService } from './product.service';
import { Product } from './product';

@Injectable()
export class ProductDetailResolve implements Resolve<Product> {

  constructor(private ps: ProductService, private router: Router, private _cache: CacheService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any>|Promise<Product>|boolean {
    let id = +route.params['id'];
    let key = 'product-' + id;
    
    if (this._cache.has(key)) {
      return Observable.of(this._cache.get(key));
    }
    return this.ps.getProductDetail(id).then(product => {
      if (product) {
        this._cache.set(key, product.json());
        return product.json();
      } else { // id not found
        this.router.navigate(['/404']);
        return false;
      }
    });
  }
}
