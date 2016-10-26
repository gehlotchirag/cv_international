import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ListingComponent } from './listing';
import { ProductComponent } from './product';

import { ProductDetailResolve } from './product';

const appRoutes: Routes = [
{path: 'listing', component: ListingComponent},
{path: 'product', children: [
{ path: ':id',
component: ProductComponent,
pathMatch: 'full',
resolve: {
  product: ProductDetailResolve
}
}
]
},
{path: '', component: HomeComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
