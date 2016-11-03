import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing,
  appRoutingProviders }  from './app.routing';
  import './rxjs-extensions'

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { ListingComponent } from './listing';
import { ProductComponent } from './product';
import { HeaderComponent } from './shared/widgets/header/header.component';
import { MegaMenuComponent } from './shared/widgets/mega-menu/mega-menu.component';
import { MegaMenuLinkComponent } from './shared/widgets/mega-menu/mega-menu-link.component';
import { AnnouncementWidgetComponent } from './shared/widgets/announcement-widget/announcement-widget.component';
import { CategoryWidgetComponent } from './shared/widgets/category-widget/category-widget.component';
import { ExtraMenuComponent } from './shared/widgets/extra-menu/extra-menu.component';
import { HeroBannerComponent } from './shared/widgets/hero-banner/hero-banner.component';
import { PortfolioWidgetComponent } from './shared/widgets/portfolio-widget/portfolio-widget.component';
import { StorylineWidgetComponent } from './shared/widgets/storyline-widget/storyline-widget.component';
import { ProductSliderComponent } from './shared/widgets/product-slider/product-slider.component';
import { TestimonialsWidgetComponent } from './shared/widgets/testimonials-widget/testimonials-widget.component';
import { ProductCardComponent } from './shared/widgets/product-card/product-card.component';
import { PaginationComponent } from './shared/widgets/pagination/pagination.component';

import { ProductAttributePipe } from './product/product-attribute.pipe';
import { CategoryFilterPipe } from './listing/category-filter.pipe';
import { CartDetailsService } from './shared/services/cart-details.service';
import { ListingResolveService } from './listing/listing-resolve.service';
import { FilterResolveService } from './listing/filter-resolve.service';
import { ListingService } from './listing/listing.service';
import { HttpClientService } from './shared/services/http-client.service';
import { ProductService, ProductDetailResolve } from './product';
import { ObjectKeysPipe } from './shared/utils/object-keys.pipe';
import { LiveFilterPipe } from './listing/live-filter.pipe';
import { SwiperModule } from 'angular2-useful-swiper/lib/swiper.module';

  @NgModule({
    imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SwiperModule,
    ],
    declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    ProductComponent,
    HeaderComponent,
    MegaMenuComponent,
    MegaMenuLinkComponent,
    AnnouncementWidgetComponent,
    CategoryWidgetComponent,
    ExtraMenuComponent,
    HeroBannerComponent,
    PortfolioWidgetComponent,
    StorylineWidgetComponent,
    ProductSliderComponent,
    TestimonialsWidgetComponent,
    PaginationComponent,
    ProductCardComponent,
    ProductAttributePipe,
    CategoryFilterPipe,
    ObjectKeysPipe,
    LiveFilterPipe
  ],
  entryComponents: [
    AnnouncementWidgetComponent,
    CategoryWidgetComponent,
    ExtraMenuComponent,
    HeroBannerComponent,
    PortfolioWidgetComponent,
    StorylineWidgetComponent,
    ProductSliderComponent,
    TestimonialsWidgetComponent
  ],

  providers: [appRoutingProviders, HttpClientService,
    ProductDetailResolve, ProductService,
    ListingResolveService, ListingService,
    FilterResolveService, CartDetailsService],

  bootstrap: [AppComponent]
})
export class AppModule { }
