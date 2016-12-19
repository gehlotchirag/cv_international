import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeMetaService } from './home-meta.service';

const homeRoutes: Routes = [
	{
		path: '', 
		component: HomeComponent,
		resolve: {
	      metaTags: HomeMetaService 
	    }
	}
];

export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
