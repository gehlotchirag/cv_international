import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductDetailResolve } from './product-detail-resolve.service';

@NgModule({
  	imports: [
	    RouterModule.forChild([{
			path: 'product', 
			children: [{ 
				path: ':id',
				component: ProductComponent,
				pathMatch: 'full',
				resolve: {
					product: ProductDetailResolve
				}
			}]
		}])
  	]
})
export class ProductRoutingModule { }
