import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { InMediaComponent } from './in-media/in-media.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { ContactUsComponent } from './contact-us/contactus.component';
import { TermsConditionComponent } from './terms-and-condition/terms-condition.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { SitemapResolveService } from './sitemap/sitemap-resolve.service';
import { ShippingRefundComponent } from './shipping-refunds/shipping-refund.component';


@NgModule({
  imports: [
    RouterModule.forChild([
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
    	},
      {
        path: 'terms-and-conditions',
        component: TermsConditionComponent
      },
      {
        path: 'shipping-and-refunds',
        component: ShippingRefundComponent
      }
	    /* { 
  			path: 'online-shopping',
	  		component: SitemapComponent, 
        resolve: {
      		sitemap: SitemapResolveService
        }
    	} */
    ])
  ],
})
export class StaticsRoutingModule { }
