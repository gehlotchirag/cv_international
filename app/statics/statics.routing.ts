import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { InMediaComponent } from './in-media/in-media.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { ContactUsComponent } from './contact-us/contactus.component';


const staticsRoutes: Routes = [
	{
		path: 'about_us',
    component: AboutUsComponent
  },
  {
    path: 'faqs',
    component: FaqsComponent
	},
  {
    path: 'order_tracking',
    component: OrderTrackingComponent
  },
  {
    path: 'craftsvilla_in_media',
    component: InMediaComponent
  },
  {
    path: 'contactus',
    component: ContactUsComponent
  }
];

export const staticsRouting: ModuleWithProviders = RouterModule.forChild(staticsRoutes);
