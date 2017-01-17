import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';

import { ProductResolveService } from './product-resolve.service';
import { FilterResolveService } from './filter-resolve.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: ':premium-category',
        component: CategoryComponent,
        resolve: {
          filters: FilterResolveService,
          products: ProductResolveService
        }
      },
      { 
        path: ':category/:sub-category', 
        component: CategoryComponent, 
        resolve: {
          filters: FilterResolveService,
          products: ProductResolveService
        }
      },
      // { 
      //   path: ':category', 
      //   // component: CategoryComponent, 
      //   // resolve: {
      //   //   filters: FilterResolveService,
      //   //   products: ProductResolveService
      //   // }
      //   redirectTo: '/' 
      // }
    ])
  ]
})
export class ListRoutingModule { }
