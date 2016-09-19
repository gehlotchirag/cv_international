import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ListingComponent } from './listing';
import { ProductComponent } from './product';

const appRoutes: Routes = [
  {path: 'listing', component: ListingComponent},
  {path: 'product', component: ProductComponent},
  {path: '', component: HomeComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
