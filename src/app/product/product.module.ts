import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WidgetModule } from '../shared'
import { ProductComponent } from './product.component';
import { ProductAttributePipe } from './product-attribute.pipe';
import { NumberDecimalPipe } from './number-decimal.pipe';
import { SwiperModule } from '../swiper_module/swiper.module';
import { productRouting } from './product.routing'
import { ProductDetailResolve } from './product-detail-resolve.service';
import { ProductService } from './product.service';
import { HttpClientService } from '../shared/services/http-client.service'


  @NgModule({
    imports: [ BrowserModule,WidgetModule, SwiperModule, productRouting ],
    declarations: [ ProductComponent, ProductAttributePipe, NumberDecimalPipe ],
    providers: [ ProductDetailResolve, ProductService, HttpClientService ],
})
export class ProductModule { }

