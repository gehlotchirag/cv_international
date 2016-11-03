import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingComponent } from './listing.component';
import { ListingResolveService } from './listing-resolve.service';

const listingRoutes: Routes = [
	{ 
		path: 'listing',
	    component: ListingComponent,
	    resolve: {
	      listing: ListingResolveService
	    }
  	},
];

export const listRouting: ModuleWithProviders = RouterModule.forChild(listingRoutes);
