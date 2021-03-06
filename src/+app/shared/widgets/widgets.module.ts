import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnnouncementWidgetComponent } from './announcement-widget/announcement-widget.component';
import { CategoryWidgetComponent } from './category-widget/category-widget.component';
import { ExtraMenuComponent } from './extra-menu/extra-menu.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { MegaMenuLinkComponent } from './mega-menu/mega-menu-link.component';
import { PortfolioWidgetComponent } from './portfolio-widget/portfolio-widget.component';
import { StorylineWidgetComponent } from './storyline-widget/storyline-widget.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { TestimonialsWidgetComponent } from './testimonials-widget/testimonials-widget.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ObjectKeysPipe } from '../utils';
import { SwiperModule } from '../../+swiper/swiper.module';
import { LazyLoadImageModule } from '../lazyload-image/lazyload-image.module';
import { TruncatePipe } from '../filter-pipes/truncate.pipe';



  @NgModule({
    imports: [ 
      RouterModule, 
      CommonModule, 
      SwiperModule,
      LazyLoadImageModule 
    ],
    declarations: [
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
      ObjectKeysPipe,
      TruncatePipe
    ],

    exports: [
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
      ObjectKeysPipe
    ],

    entryComponents: [
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
      ProductCardComponent
    ]

})
export class WidgetModule { }
