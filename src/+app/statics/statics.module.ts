import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StaticsRoutingModule } from './statics-routing.module';

import { WidgetModule } from '../shared/widgets/widgets.module';

import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { InMediaComponent } from './in-media/in-media.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { ContactUsComponent } from './contact-us/contactus.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { TermsConditionComponent } from './terms-and-condition/terms-condition.component';
import { CookieInfoComponent } from './cookie-info/cookie-info.component';
import { ShippingRefundComponent } from './shipping-refunds/shipping-refund.component';

import { SitemapResolveService } from './sitemap/sitemap-resolve.service';
import { SitemapService } from './sitemap/sitemap.service';
import { TermsPageResolveService } from './terms-and-condition/terms-page-resolve.service';

@NgModule({
  imports: [
    StaticsRoutingModule,
    RouterModule,
    WidgetModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AboutUsComponent,
    FaqsComponent,
    InMediaComponent,
    SitemapComponent,
    OrderTrackingComponent,
    ContactUsComponent,
    TermsConditionComponent,
    ShippingRefundComponent,
    CookieInfoComponent
  ],
  providers:[ 
    SitemapService,
    TermsPageResolveService,
    SitemapResolveService
  ]
})
export class StaticsModule { }
