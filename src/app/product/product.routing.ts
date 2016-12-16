import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductDetailResolve } from './product-detail-resolve.service';

const productRoutes: Routes = [
	{
		path: 'product/:id', 
		component: ProductComponent,
		pathMatch: 'full',
		resolve: {
		  product: ProductDetailResolve
		}
	},
	{
		path: 'shop/:slug/:id', 
		component: ProductComponent,
		pathMatch: 'full',
		resolve: {
		  product: ProductDetailResolve
		}
	},
];

export const productRouting: ModuleWithProviders = RouterModule.forChild(productRoutes);
