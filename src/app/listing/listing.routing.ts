import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingComponent } from './listing.component';
import { CategoryComponent } from './category.component';
import { SubCategoryComponent } from './sub-category.component';
import { FilteredCategoryComponent } from './filtered-category.component';

import { ListingResolveService } from './listing-resolve.service';
import { FilterResolveService } from './filter-resolve.service';

const listingRoutes: Routes = [
	{
		path: 'category',
    component: ListingComponent,
    resolve: {
      //  listing: ListingResolveService,
       filters: FilterResolveService
    }
  },
  {
    path: ':category',
    component: CategoryComponent,
    // resolve: {
    //   //  listing: ListingResolveService,
    //    filters: FilterResolveService
    // }
  },
  {
    path: ':category/:sub-category-filter',
    component: SubCategoryComponent,
    // resolve: {
    //   //  listing: ListingResolveService,
    //    filters: FilterResolveService
    // }
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
      //  listing: ListingResolveService,
       filters: FilterResolveService
    }
	},
];

export const listRouting: ModuleWithProviders = RouterModule.forChild(listingRoutes);
