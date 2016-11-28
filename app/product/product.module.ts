import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WidgetModule } from '../shared/widgets';


import { SwiperModule } from '../swiper_module/swiper.module';

import { ProductComponent } from './product.component';

import { ProductAttributePipe } from './product-attribute.pipe';
import { NumberDecimalPipe } from './number-decimal.pipe';

import { productRouting } from './product.routing';

import { ProductDetailResolve } from './product-detail-resolve.service';
import { ProductService } from './product.service';

  @NgModule({
    imports: [      
      SwiperModule,
      productRouting,
      WidgetModule,
      BrowserModule
    ],
    declarations: [
      ProductComponent,
      ProductAttributePipe,
      NumberDecimalPipe
    ],
    providers: [
      ProductDetailResolve,
      ProductService
    ]
})
export class ProductModule { }
