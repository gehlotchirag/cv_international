import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not_found_404/not-found.component';

const appRoutes: Routes = [
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
