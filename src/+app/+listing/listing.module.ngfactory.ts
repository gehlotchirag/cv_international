/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './listing.module';
import * as import2 from '@angular/router/src/router_module';
import * as import3 from './list-routing.module';
import * as import4 from '@angular/common/src/common_module';
import * as import5 from '../+swiper/swiper.module';
import * as import6 from '../shared/lazyload-image/lazyload-image.module';
import * as import7 from '../shared/widgets/widgets.module';
import * as import8 from '@angular/common/src/localization';
import * as import9 from './listing.service';
import * as import10 from './filter-resolve.service';
import * as import11 from './product-resolve.service';
import * as import12 from '@angular/core/src/di/injector';
import * as import13 from './category.component.ngfactory';
import * as import14 from '../shared/widgets/mega-menu/mega-menu.component.ngfactory';
import * as import15 from '../shared/widgets/mega-menu/mega-menu-link.component.ngfactory';
import * as import16 from '../shared/widgets/announcement-widget/announcement-widget.component.ngfactory';
import * as import17 from '../shared/widgets/category-widget/category-widget.component.ngfactory';
import * as import18 from '../shared/widgets/extra-menu/extra-menu.component.ngfactory';
import * as import19 from '../shared/widgets/hero-banner/hero-banner.component.ngfactory';
import * as import20 from '../shared/widgets/portfolio-widget/portfolio-widget.component.ngfactory';
import * as import21 from '../shared/widgets/storyline-widget/storyline-widget.component.ngfactory';
import * as import22 from '../shared/widgets/product-slider/product-slider.component.ngfactory';
import * as import23 from '../shared/widgets/testimonials-widget/testimonials-widget.component.ngfactory';
import * as import24 from '../shared/widgets/pagination/pagination.component.ngfactory';
import * as import25 from '../shared/widgets/product-card/product-card.component.ngfactory';
import * as import26 from './category.component';
import * as import27 from '@angular/core/src/i18n/tokens';
import * as import28 from '../shared/services/http-client.service';
import * as import29 from '@angular/router/src/router';
import * as import30 from '../shared/cache.service';
import * as import31 from '@angular/router/src/router_config_loader';
class ListingModuleInjector extends import0.NgModuleInjector<import1.ListingModule> {
  _RouterModule_0:import2.RouterModule;
  _ListRoutingModule_1:import3.ListRoutingModule;
  _CommonModule_2:import4.CommonModule;
  _SwiperModule_3:import5.SwiperModule;
  _LazyLoadImageModule_4:import6.LazyLoadImageModule;
  _WidgetModule_5:import7.WidgetModule;
  _ListingModule_6:import1.ListingModule;
  __ROUTES_7:any[];
  __NgLocalization_8:import8.NgLocaleLocalization;
  __ListingService_9:import9.ListingService;
  __FilterResolveService_10:import10.FilterResolveService;
  __ProductResolveService_11:import11.ProductResolveService;
  constructor(parent:import12.Injector) {
    super(parent,[
      import13.CategoryComponentNgFactory,
      import13.CategoryComponentNgFactory,
      import13.CategoryComponentNgFactory,
      import14.MegaMenuComponentNgFactory,
      import15.MegaMenuLinkComponentNgFactory,
      import16.AnnouncementWidgetComponentNgFactory,
      import17.CategoryWidgetComponentNgFactory,
      import18.ExtraMenuComponentNgFactory,
      import19.HeroBannerComponentNgFactory,
      import20.PortfolioWidgetComponentNgFactory,
      import21.StorylineWidgetComponentNgFactory,
      import22.ProductSliderComponentNgFactory,
      import23.TestimonialsWidgetComponentNgFactory,
      import24.PaginationComponentNgFactory,
      import25.ProductCardComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _ROUTES_7():any[] {
      if ((this.__ROUTES_7 == (null as any))) { (this.__ROUTES_7 = [[
        {
          path: ':premium-category',
          component: import26.CategoryComponent,
          resolve: {
            filters: import10.FilterResolveService,
            products: import11.ProductResolveService
          }

        }
        ,
        {
          path: 'search',
          component: import26.CategoryComponent,
          resolve: {
            filters: import10.FilterResolveService,
            products: import11.ProductResolveService
          }

        }
        ,
        {
          path: ':category/:sub-category',
          component: import26.CategoryComponent,
          resolve: {
            filters: import10.FilterResolveService,
            products: import11.ProductResolveService
          }

        }

      ]
    ]); }
    return this.__ROUTES_7;
  }
  get _NgLocalization_8():import8.NgLocaleLocalization {
    if ((this.__NgLocalization_8 == (null as any))) { (this.__NgLocalization_8 = new import8.NgLocaleLocalization(this.parent.get(import27.LOCALE_ID))); }
    return this.__NgLocalization_8;
  }
  get _ListingService_9():import9.ListingService {
    if ((this.__ListingService_9 == (null as any))) { (this.__ListingService_9 = new import9.ListingService(this.parent.get(import28.HttpClientService))); }
    return this.__ListingService_9;
  }
  get _FilterResolveService_10():import10.FilterResolveService {
    if ((this.__FilterResolveService_10 == (null as any))) { (this.__FilterResolveService_10 = new import10.FilterResolveService(this._ListingService_9,this.parent.get(import29.Router),this.parent.get(import30.CacheService))); }
    return this.__FilterResolveService_10;
  }
  get _ProductResolveService_11():import11.ProductResolveService {
    if ((this.__ProductResolveService_11 == (null as any))) { (this.__ProductResolveService_11 = new import11.ProductResolveService(this._ListingService_9,this.parent.get(import29.Router),this.parent.get(import30.CacheService))); }
    return this.__ProductResolveService_11;
  }
  createInternal():import1.ListingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ROUTER_FORROOT_GUARD,(null as any)));
    this._ListRoutingModule_1 = new import3.ListRoutingModule();
    this._CommonModule_2 = new import4.CommonModule();
    this._SwiperModule_3 = new import5.SwiperModule();
    this._LazyLoadImageModule_4 = new import6.LazyLoadImageModule();
    this._WidgetModule_5 = new import7.WidgetModule();
    this._ListingModule_6 = new import1.ListingModule();
    return this._ListingModule_6;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import3.ListRoutingModule)) { return this._ListRoutingModule_1; }
    if ((token === import4.CommonModule)) { return this._CommonModule_2; }
    if ((token === import5.SwiperModule)) { return this._SwiperModule_3; }
    if ((token === import6.LazyLoadImageModule)) { return this._LazyLoadImageModule_4; }
    if ((token === import7.WidgetModule)) { return this._WidgetModule_5; }
    if ((token === import1.ListingModule)) { return this._ListingModule_6; }
    if ((token === import31.ROUTES)) { return this._ROUTES_7; }
    if ((token === import8.NgLocalization)) { return this._NgLocalization_8; }
    if ((token === import9.ListingService)) { return this._ListingService_9; }
    if ((token === import10.FilterResolveService)) { return this._FilterResolveService_10; }
    if ((token === import11.ProductResolveService)) { return this._ProductResolveService_11; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ListingModuleNgFactory:import0.NgModuleFactory<import1.ListingModule> = new import0.NgModuleFactory(ListingModuleInjector,import1.ListingModule);