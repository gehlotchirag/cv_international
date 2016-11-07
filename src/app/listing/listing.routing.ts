import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingComponent } from './listing.component';

import { ListingResolveService } from './listing-resolve.service';
import { FilterResolveService } from './filter-resolve.service';

const listingRoutes: Routes = [
	{
		path: 'listing',
    children: [
      { path: ':id',
        component: ListingComponent,
        resolve: {
	         listing: ListingResolveService,
           filters: FilterResolveService
	       }
      },
      {
        path: '',
        pathMatch: 'full',
        component: ListingComponent,
        resolve: {
	         listing: ListingResolveService,
           filters: FilterResolveService
	       }
      }
    ]


  	},
];

export const listRouting: ModuleWithProviders = RouterModule.forChild(listingRoutes);
