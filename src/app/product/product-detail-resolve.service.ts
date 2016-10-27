import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';

import { ProductService } from './product.service';
import { Product } from './product';

@Injectable()
export class ProductDetailResolve implements Resolve<Product> {

  constructor(private ps: ProductService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Product>|boolean {
    let id = +route.params['id'];
    return this.ps.getProductDetail(id).then(product => {
      if (product) {
        return product.json();
      } else { // id not found
        this.router.navigate(['/404']);
        return false;
      }
    });
  }
}
