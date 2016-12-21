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
import * as import6 from '../shared/widgets/widgets.module';
import * as import7 from '@angular/common/src/localization';
import * as import8 from './listing.service';
import * as import9 from './listing-resolve.service';
import * as import10 from './filter-resolve.service';
import * as import11 from '@angular/core/src/di/injector';
import * as import12 from './listing.component.ngfactory';
import * as import13 from '../shared/widgets/mega-menu/mega-menu.component.ngfactory';
import * as import14 from '../shared/widgets/mega-menu/mega-menu-link.component.ngfactory';
import * as import15 from '../shared/widgets/announcement-widget/announcement-widget.component.ngfactory';
import * as import16 from '../shared/widgets/category-widget/category-widget.component.ngfactory';
import * as import17 from '../shared/widgets/extra-menu/extra-menu.component.ngfactory';
import * as import18 from '../shared/widgets/hero-banner/hero-banner.component.ngfactory';
import * as import19 from '../shared/widgets/portfolio-widget/portfolio-widget.component.ngfactory';
import * as import20 from '../shared/widgets/storyline-widget/storyline-widget.component.ngfactory';
import * as import21 from '../shared/widgets/product-slider/product-slider.component.ngfactory';
import * as import22 from '../shared/widgets/testimonials-widget/testimonials-widget.component.ngfactory';
import * as import23 from '../shared/widgets/pagination/pagination.component.ngfactory';
import * as import24 from '../shared/widgets/product-card/product-card.component.ngfactory';
import * as import25 from './listing.component';
import * as import26 from '@angular/core/src/i18n/tokens';
import * as import27 from '../shared/services/http-client.service';
import * as import28 from '@angular/router/src/router';
import * as import29 from '@angular/router/src/router_config_loader';
class ListingModuleInjector extends import0.NgModuleInjector<import1.ListingModule> {
  _RouterModule_0:import2.RouterModule;
  _ListRoutingModule_1:import3.ListRoutingModule;
  _CommonModule_2:import4.CommonModule;
  _SwiperModule_3:import5.SwiperModule;
  _WidgetModule_4:import6.WidgetModule;
  _ListingModule_5:import1.ListingModule;
  __ROUTES_6:any[];
  __NgLocalization_7:import7.NgLocaleLocalization;
  __ListingService_8:import8.ListingService;
  __ListingResolveService_9:import9.ListingResolveService;
  __FilterResolveService_10:import10.FilterResolveService;
  constructor(parent:import11.Injector) {
    super(parent,[
      import12.ListingComponentNgFactory,
      import12.ListingComponentNgFactory,
      import12.ListingComponentNgFactory,
      import13.MegaMenuComponentNgFactory,
      import14.MegaMenuLinkComponentNgFactory,
      import15.AnnouncementWidgetComponentNgFactory,
      import16.CategoryWidgetComponentNgFactory,
      import17.ExtraMenuComponentNgFactory,
      import18.HeroBannerComponentNgFactory,
      import19.PortfolioWidgetComponentNgFactory,
      import20.StorylineWidgetComponentNgFactory,
      import21.ProductSliderComponentNgFactory,
      import22.TestimonialsWidgetComponentNgFactory,
      import23.PaginationComponentNgFactory,
      import24.ProductCardComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _ROUTES_6():any[] {
      if ((this.__ROUTES_6 == (null as any))) { (this.__ROUTES_6 = [[
        {
          path: 'category',
          component: import25.ListingComponent,
          resolve: {filters: import10.FilterResolveService}
        }
        ,
        {
          path: 'premium',
          component: import25.ListingComponent,
          resolve: {filters: import10.FilterResolveService}
        }
        ,
        {
          path: 'category/:id',
          component: import25.ListingComponent,
          resolve: {filters: import10.FilterResolveService}
        }

      ]
    ]); }
    return this.__ROUTES_6;
  }
  get _NgLocalization_7():import7.NgLocaleLocalization {
    if ((this.__NgLocalization_7 == (null as any))) { (this.__NgLocalization_7 = new import7.NgLocaleLocalization(this.parent.get(import26.LOCALE_ID))); }
    return this.__NgLocalization_7;
  }
  get _ListingService_8():import8.ListingService {
    if ((this.__ListingService_8 == (null as any))) { (this.__ListingService_8 = new import8.ListingService(this.parent.get(import27.HttpClientService))); }
    return this.__ListingService_8;
  }
  get _ListingResolveService_9():import9.ListingResolveService {
    if ((this.__ListingResolveService_9 == (null as any))) { (this.__ListingResolveService_9 = new import9.ListingResolveService(this._ListingService_8,this.parent.get(import28.Router))); }
    return this.__ListingResolveService_9;
  }
  get _FilterResolveService_10():import10.FilterResolveService {
    if ((this.__FilterResolveService_10 == (null as any))) { (this.__FilterResolveService_10 = new import10.FilterResolveService(this._ListingService_8,this.parent.get(import28.Router))); }
    return this.__FilterResolveService_10;
  }
  createInternal():import1.ListingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ROUTER_FORROOT_GUARD,(null as any)));
    this._ListRoutingModule_1 = new import3.ListRoutingModule();
    this._CommonModule_2 = new import4.CommonModule();
    this._SwiperModule_3 = new import5.SwiperModule();
    this._WidgetModule_4 = new import6.WidgetModule();
    this._ListingModule_5 = new import1.ListingModule();
    return this._ListingModule_5;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import3.ListRoutingModule)) { return this._ListRoutingModule_1; }
    if ((token === import4.CommonModule)) { return this._CommonModule_2; }
    if ((token === import5.SwiperModule)) { return this._SwiperModule_3; }
    if ((token === import6.WidgetModule)) { return this._WidgetModule_4; }
    if ((token === import1.ListingModule)) { return this._ListingModule_5; }
    if ((token === import29.ROUTES)) { return this._ROUTES_6; }
    if ((token === import7.NgLocalization)) { return this._NgLocalization_7; }
    if ((token === import8.ListingService)) { return this._ListingService_8; }
    if ((token === import9.ListingResolveService)) { return this._ListingResolveService_9; }
    if ((token === import10.FilterResolveService)) { return this._FilterResolveService_10; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ListingModuleNgFactory:import0.NgModuleFactory<import1.ListingModule> = new import0.NgModuleFactory(ListingModuleInjector,import1.ListingModule);