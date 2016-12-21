import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListingComponent } from './listing.component';

import { ListingResolveService } from './listing-resolve.service';
import { FilterResolveService } from './filter-resolve.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'category', component: ListingComponent, 
        resolve: {
          filters: FilterResolveService
        }
      },
      {
        path: 'premium',
        component: ListingComponent,
        resolve: {
          filters: FilterResolveService 
        }
      },
      {
        path: 'category/:id',
        component: ListingComponent,
        resolve: {
           filters: FilterResolveService
        }
      },
    ])
  ]
})
export class ListRoutingModule { }
