import { Injectable } from '@angular/core';

import { AnnouncementWidgetComponent } from './announcement-widget/announcement-widget.component';
import { CategoryWidgetComponent } from './category-widget/category-widget.component';
import { ExtraMenuComponent } from './extra-menu/extra-menu.component';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { PortfolioWidgetComponent } from './portfolio-widget/portfolio-widget.component';
import { StorylineWidgetComponent } from './storyline-widget/storyline-widget.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { TestimonialsWidgetComponent } from './testimonials-widget/testimonials-widget.component';
import HomeWidget from './home-widget'

@Injectable()
export class WidgetFactoryService {

  constructor() { }

  getWidgetBaseClassName(type: string): any {
    switch(type){
      case 'HeroBanner':
        return HeroBannerComponent;

      case 'CategoryWidget':
        return CategoryWidgetComponent;

      case 'AnnouncementWidget':
        return AnnouncementWidgetComponent;

      case 'StoryLine':
        return StorylineWidgetComponent;

      case 'PortfolioWidget':
        return PortfolioWidgetComponent;

      case 'OfferMenu':
        return ExtraMenuComponent;

      case 'ProductSlider':
        return ProductSliderComponent;

      case 'TestimonialsWidget':
        return TestimonialsWidgetComponent;

      default:
        throw new TypeError('unregistered component')
    }
  }

}
