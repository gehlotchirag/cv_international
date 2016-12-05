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


@NgModule({
  imports: [
    StaticsRoutingModule,
    WidgetModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AboutUsComponent,
    FaqsComponent,
    InMediaComponent,
    OrderTrackingComponent,
    ContactUsComponent
  ]
})
export class StaticsModule { }
