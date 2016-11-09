import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { staticsRouting } from './statics.routing';

import { WidgetModule } from '../shared/widgets/widget.module';

import { AboutUsComponent } from './about-us/about-us.component';
import { FaqsComponent } from './faqs/faqs.component';
import { InMediaComponent } from './in-media/in-media.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';

@NgModule({
  imports: [
    staticsRouting,
    WidgetModule,
    BrowserModule
  ],
  declarations: [
    AboutUsComponent,
    FaqsComponent,
    InMediaComponent,
    OrderTrackingComponent
  ]
})
export class StaticsModule { }
