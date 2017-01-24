import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';

import { WidgetModule } from '../shared/widgets/widgets.module';


import { SwiperModule } from '../+swiper/swiper.module';

import { ProductComponent } from './product.component';

import { ProductRoutingModule } from './product.routing';

import { ProductDetailResolve } from './product-detail-resolve.service';
import { ProductService } from './product.service';

  @NgModule({
    imports: [      
      SwiperModule,
      RouterModule,
      ProductRoutingModule,
      WidgetModule,
      CommonModule
    ],
    declarations: [
      ProductComponent,
    ],
    providers: [
      ProductDetailResolve,
      ProductService
    ]
})
export class ProductModule { }
