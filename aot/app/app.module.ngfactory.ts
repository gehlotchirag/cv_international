/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from '../../app/app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/router/src/router_module';
import * as import7 from '@angular/forms/src/directives';
import * as import8 from '@angular/forms/src/form_providers';
import * as import9 from '../../app/swiper_module/swiper.module';
import * as import10 from '../../app/shared/widgets/widget.module';
import * as import11 from '../../app/home/home.module';
import * as import12 from '../../app/listing/listing.module';
import * as import13 from '../../app/product/product.module';
import * as import14 from '../../app/statics/statics.module';
import * as import15 from '@angular/common/src/localization';
import * as import16 from '@angular/core/src/application_init';
import * as import17 from '@angular/core/src/testability/testability';
import * as import18 from '@angular/core/src/application_ref';
import * as import19 from '@angular/core/src/linker/compiler';
import * as import20 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import21 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import22 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import23 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import24 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import25 from '@angular/core/src/linker/view_utils';
import * as import26 from '@angular/platform-browser/src/browser/title';
import * as import27 from '@angular/http/src/backends/browser_xhr';
import * as import28 from '@angular/http/src/base_response_options';
import * as import29 from '@angular/http/src/backends/xhr_backend';
import * as import30 from '@angular/http/src/base_request_options';
import * as import31 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import32 from '../../app/shared/services/http-client.service';
import * as import33 from '../../app/listing/listing.service';
import * as import34 from '@angular/router/src/url_tree';
import * as import35 from '@angular/router/src/router_outlet_map';
import * as import36 from '@angular/common/src/location/location';
import * as import37 from '@angular/core/src/linker/system_js_ng_module_factory_loader';
import * as import38 from '../../app/listing/listing-resolve.service';
import * as import39 from '../../app/listing/filter-resolve.service';
import * as import40 from '../../app/product/product.service';
import * as import41 from '../../app/product/product-detail-resolve.service';
import * as import42 from '../../app/shared/services/router-header-binding.service';
import * as import43 from '../../app/shared/services/data-holding.service';
import * as import44 from '@angular/core/src/di/injector';
import * as import45 from './shared/widgets/mega-menu/mega-menu.component.ngfactory';
import * as import46 from './shared/widgets/mega-menu/mega-menu-link.component.ngfactory';
import * as import47 from './shared/widgets/announcement-widget/announcement-widget.component.ngfactory';
import * as import48 from './shared/widgets/category-widget/category-widget.component.ngfactory';
import * as import49 from './shared/widgets/extra-menu/extra-menu.component.ngfactory';
import * as import50 from './shared/widgets/hero-banner/hero-banner.component.ngfactory';
import * as import51 from './shared/widgets/portfolio-widget/portfolio-widget.component.ngfactory';
import * as import52 from './shared/widgets/storyline-widget/storyline-widget.component.ngfactory';
import * as import53 from './shared/widgets/product-slider/product-slider.component.ngfactory';
import * as import54 from './shared/widgets/testimonials-widget/testimonials-widget.component.ngfactory';
import * as import55 from './shared/widgets/pagination/pagination.component.ngfactory';
import * as import56 from './shared/widgets/product-card/product-card.component.ngfactory';
import * as import57 from './home/home.component.ngfactory';
import * as import58 from './listing/listing.component.ngfactory';
import * as import59 from './product/product.component.ngfactory';
import * as import60 from './statics/about-us/about-us.component.ngfactory';
import * as import61 from './statics/faqs/faqs.component.ngfactory';
import * as import62 from './statics/order-tracking/order-tracking.component.ngfactory';
import * as import63 from './statics/in-media/in-media.component.ngfactory';
import * as import64 from './statics/contact-us/contactus.component.ngfactory';
import * as import65 from './not_found_404/not-found.component.ngfactory';
import * as import66 from './app.component.ngfactory';
import * as import67 from '@angular/core/src/application_tokens';
import * as import68 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import69 from '@angular/platform-browser/src/dom/events/key_events';
import * as import70 from '@angular/core/src/zone/ng_zone';
import * as import71 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import72 from '../../app/home/home.component';
import * as import73 from '../../app/listing/listing.component';
import * as import74 from '../../app/product/product.component';
import * as import75 from '../../app/statics/about-us/about-us.component';
import * as import76 from '../../app/statics/faqs/faqs.component';
import * as import77 from '../../app/statics/order-tracking/order-tracking.component';
import * as import78 from '../../app/statics/in-media/in-media.component';
import * as import79 from '../../app/statics/contact-us/contactus.component';
import * as import80 from '../../app/not_found_404/not-found.component';
import * as import81 from '@angular/common/src/location/platform_location';
import * as import82 from '@angular/common/src/location/location_strategy';
import * as import83 from '@angular/router/src/router';
import * as import84 from '@angular/core/src/console';
import * as import85 from '@angular/core/src/i18n/tokens';
import * as import86 from '@angular/core/src/error_handler';
import * as import87 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import88 from '@angular/platform-browser/src/dom/animation_driver';
import * as import89 from '@angular/core/src/render/api';
import * as import90 from '@angular/core/src/security';
import * as import91 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import92 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import93 from '@angular/http/src/interfaces';
import * as import94 from '@angular/http/src/http';
import * as import95 from '@angular/router/src/router_config_loader';
import * as import96 from '@angular/core/src/linker/ng_module_factory_loader';
import * as import97 from '@angular/router/src/router_state';
import * as import98 from '@angular/core/src/i18n/tokens';
class AppModuleInjector extends import0.NgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _HttpModule_3:import5.HttpModule;
  _ROUTER_FORROOT_GUARD_4:any;
  _RouterModule_5:import6.RouterModule;
  _InternalFormsSharedModule_6:import7.InternalFormsSharedModule;
  _FormsModule_7:import8.FormsModule;
  _SwiperModule_8:import9.SwiperModule;
  _WidgetModule_9:import10.WidgetModule;
  _HomeModule_10:import11.HomeModule;
  _ListingModule_11:import12.ListingModule;
  _ProductModule_12:import13.ProductModule;
  _StaticsModule_13:import14.StaticsModule;
  _AppModule_14:import1.AppModule;
  __LOCALE_ID_15:any;
  __NgLocalization_16:import15.NgLocaleLocalization;
  _ErrorHandler_17:any;
  _ApplicationInitStatus_18:import16.ApplicationInitStatus;
  _Testability_19:import17.Testability;
  _ApplicationRef__20:import18.ApplicationRef_;
  __ApplicationRef_21:any;
  __Compiler_22:import19.Compiler;
  __APP_ID_23:any;
  __DOCUMENT_24:any;
  __HAMMER_GESTURE_CONFIG_25:import20.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_26:any[];
  __EventManager_27:import21.EventManager;
  __DomSharedStylesHost_28:import22.DomSharedStylesHost;
  __AnimationDriver_29:any;
  __DomRootRenderer_30:import23.DomRootRenderer_;
  __RootRenderer_31:any;
  __DomSanitizer_32:import24.DomSanitizerImpl;
  __Sanitizer_33:any;
  __ViewUtils_34:import25.ViewUtils;
  __IterableDiffers_35:any;
  __KeyValueDiffers_36:any;
  __SharedStylesHost_37:any;
  __Title_38:import26.Title;
  __BrowserXhr_39:import27.BrowserXhr;
  __ResponseOptions_40:import28.BaseResponseOptions;
  __XSRFStrategy_41:any;
  __XHRBackend_42:import29.XHRBackend;
  __RequestOptions_43:import30.BaseRequestOptions;
  __Http_44:any;
  __RadioControlRegistry_45:import31.RadioControlRegistry;
  __ROUTES_46:any[];
  __HttpClientService_47:import32.HttpClientService;
  __ListingService_48:import33.ListingService;
  __UrlSerializer_49:import34.DefaultUrlSerializer;
  __RouterOutletMap_50:import35.RouterOutletMap;
  __ROUTER_CONFIGURATION_51:any;
  __LocationStrategy_52:any;
  __Location_53:import36.Location;
  __NgModuleFactoryLoader_54:import37.SystemJsNgModuleLoader;
  __Router_55:any;
  __ListingResolveService_56:import38.ListingResolveService;
  __FilterResolveService_57:import39.FilterResolveService;
  __ProductService_58:import40.ProductService;
  __ProductDetailResolve_59:import41.ProductDetailResolve;
  __ActivatedRoute_60:any;
  __APP_BOOTSTRAP_LISTENER_61:any[];
  __RouterHeaderBindingService_62:import42.RouterHeaderBindingService;
  __DataHoldingService_63:import43.DataHoldingService;
  __TRANSLATIONS_FORMAT_64:any;
  constructor(parent:import44.Injector) {
    super(parent,[
      import45.MegaMenuComponentNgFactory,
      import46.MegaMenuLinkComponentNgFactory,
      import47.AnnouncementWidgetComponentNgFactory,
      import48.CategoryWidgetComponentNgFactory,
      import49.ExtraMenuComponentNgFactory,
      import50.HeroBannerComponentNgFactory,
      import51.PortfolioWidgetComponentNgFactory,
      import52.StorylineWidgetComponentNgFactory,
      import53.ProductSliderComponentNgFactory,
      import54.TestimonialsWidgetComponentNgFactory,
      import55.PaginationComponentNgFactory,
      import56.ProductCardComponentNgFactory,
      import57.HomeComponentNgFactory,
      import58.ListingComponentNgFactory,
      import58.ListingComponentNgFactory,
      import58.ListingComponentNgFactory,
      import59.ProductComponentNgFactory,
      import60.AboutUsComponentNgFactory,
      import61.FaqsComponentNgFactory,
      import62.OrderTrackingComponentNgFactory,
      import63.InMediaComponentNgFactory,
      import64.ContactUsComponentNgFactory,
      import65.NotFoundComponentNgFactory,
      import66.AppComponentNgFactory
    ]
    ,[import66.AppComponentNgFactory]);
  }
  get _LOCALE_ID_15():any {
    if ((this.__LOCALE_ID_15 == (null as any))) { (this.__LOCALE_ID_15 = 'en-US'); }
    return this.__LOCALE_ID_15;
  }
  get _NgLocalization_16():import15.NgLocaleLocalization {
    if ((this.__NgLocalization_16 == (null as any))) { (this.__NgLocalization_16 = new import15.NgLocaleLocalization(this._LOCALE_ID_15)); }
    return this.__NgLocalization_16;
  }
  get _ApplicationRef_21():any {
    if ((this.__ApplicationRef_21 == (null as any))) { (this.__ApplicationRef_21 = this._ApplicationRef__20); }
    return this.__ApplicationRef_21;
  }
  get _Compiler_22():import19.Compiler {
    if ((this.__Compiler_22 == (null as any))) { (this.__Compiler_22 = new import19.Compiler()); }
    return this.__Compiler_22;
  }
  get _APP_ID_23():any {
    if ((this.__APP_ID_23 == (null as any))) { (this.__APP_ID_23 = import67._appIdRandomProviderFactory()); }
    return this.__APP_ID_23;
  }
  get _DOCUMENT_24():any {
    if ((this.__DOCUMENT_24 == (null as any))) { (this.__DOCUMENT_24 = import4._document()); }
    return this.__DOCUMENT_24;
  }
  get _HAMMER_GESTURE_CONFIG_25():import20.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_25 == (null as any))) { (this.__HAMMER_GESTURE_CONFIG_25 = new import20.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_25;
  }
  get _EVENT_MANAGER_PLUGINS_26():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_26 == (null as any))) { (this.__EVENT_MANAGER_PLUGINS_26 = [
      new import68.DomEventsPlugin(),
      new import69.KeyEventsPlugin(),
      new import20.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_25)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_26;
  }
  get _EventManager_27():import21.EventManager {
    if ((this.__EventManager_27 == (null as any))) { (this.__EventManager_27 = new import21.EventManager(this._EVENT_MANAGER_PLUGINS_26,this.parent.get(import70.NgZone))); }
    return this.__EventManager_27;
  }
  get _DomSharedStylesHost_28():import22.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_28 == (null as any))) { (this.__DomSharedStylesHost_28 = new import22.DomSharedStylesHost(this._DOCUMENT_24)); }
    return this.__DomSharedStylesHost_28;
  }
  get _AnimationDriver_29():any {
    if ((this.__AnimationDriver_29 == (null as any))) { (this.__AnimationDriver_29 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_29;
  }
  get _DomRootRenderer_30():import23.DomRootRenderer_ {
    if ((this.__DomRootRenderer_30 == (null as any))) { (this.__DomRootRenderer_30 = new import23.DomRootRenderer_(this._DOCUMENT_24,this._EventManager_27,this._DomSharedStylesHost_28,this._AnimationDriver_29)); }
    return this.__DomRootRenderer_30;
  }
  get _RootRenderer_31():any {
    if ((this.__RootRenderer_31 == (null as any))) { (this.__RootRenderer_31 = import71._createConditionalRootRenderer(this._DomRootRenderer_30,this.parent.get(import71.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_31;
  }
  get _DomSanitizer_32():import24.DomSanitizerImpl {
    if ((this.__DomSanitizer_32 == (null as any))) { (this.__DomSanitizer_32 = new import24.DomSanitizerImpl()); }
    return this.__DomSanitizer_32;
  }
  get _Sanitizer_33():any {
    if ((this.__Sanitizer_33 == (null as any))) { (this.__Sanitizer_33 = this._DomSanitizer_32); }
    return this.__Sanitizer_33;
  }
  get _ViewUtils_34():import25.ViewUtils {
    if ((this.__ViewUtils_34 == (null as any))) { (this.__ViewUtils_34 = new import25.ViewUtils(this._RootRenderer_31,this._APP_ID_23,this._Sanitizer_33)); }
    return this.__ViewUtils_34;
  }
  get _IterableDiffers_35():any {
    if ((this.__IterableDiffers_35 == (null as any))) { (this.__IterableDiffers_35 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_35;
  }
  get _KeyValueDiffers_36():any {
    if ((this.__KeyValueDiffers_36 == (null as any))) { (this.__KeyValueDiffers_36 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_36;
  }
  get _SharedStylesHost_37():any {
    if ((this.__SharedStylesHost_37 == (null as any))) { (this.__SharedStylesHost_37 = this._DomSharedStylesHost_28); }
    return this.__SharedStylesHost_37;
  }
  get _Title_38():import26.Title {
    if ((this.__Title_38 == (null as any))) { (this.__Title_38 = new import26.Title()); }
    return this.__Title_38;
  }
  get _BrowserXhr_39():import27.BrowserXhr {
    if ((this.__BrowserXhr_39 == (null as any))) { (this.__BrowserXhr_39 = new import27.BrowserXhr()); }
    return this.__BrowserXhr_39;
  }
  get _ResponseOptions_40():import28.BaseResponseOptions {
    if ((this.__ResponseOptions_40 == (null as any))) { (this.__ResponseOptions_40 = new import28.BaseResponseOptions()); }
    return this.__ResponseOptions_40;
  }
  get _XSRFStrategy_41():any {
    if ((this.__XSRFStrategy_41 == (null as any))) { (this.__XSRFStrategy_41 = import5._createDefaultCookieXSRFStrategy()); }
    return this.__XSRFStrategy_41;
  }
  get _XHRBackend_42():import29.XHRBackend {
    if ((this.__XHRBackend_42 == (null as any))) { (this.__XHRBackend_42 = new import29.XHRBackend(this._BrowserXhr_39,this._ResponseOptions_40,this._XSRFStrategy_41)); }
    return this.__XHRBackend_42;
  }
  get _RequestOptions_43():import30.BaseRequestOptions {
    if ((this.__RequestOptions_43 == (null as any))) { (this.__RequestOptions_43 = new import30.BaseRequestOptions()); }
    return this.__RequestOptions_43;
  }
  get _Http_44():any {
    if ((this.__Http_44 == (null as any))) { (this.__Http_44 = import5.httpFactory(this._XHRBackend_42,this._RequestOptions_43)); }
    return this.__Http_44;
  }
  get _RadioControlRegistry_45():import31.RadioControlRegistry {
    if ((this.__RadioControlRegistry_45 == (null as any))) { (this.__RadioControlRegistry_45 = new import31.RadioControlRegistry()); }
    return this.__RadioControlRegistry_45;
  }
  get _ROUTES_46():any[] {
    if ((this.__ROUTES_46 == (null as any))) { (this.__ROUTES_46 = [
        [{
          path: '',
          component: import72.HomeComponent
        }
      ],
      [
        {
          path: 'category',
          component: import73.ListingComponent,
          resolve: {filters: import39.FilterResolveService}
        }
        ,
        {
          path: 'premium',
          component: import73.ListingComponent,
          resolve: {filters: import39.FilterResolveService}
        }
        ,
        {
          path: 'category/:id',
          component: import73.ListingComponent,
          resolve: {filters: import39.FilterResolveService}
        }

      ]
      ,
        [{
          path: 'product',
            children: [{
              path: ':id',
              component: import74.ProductComponent,
              pathMatch: 'full',
              resolve: {product: import41.ProductDetailResolve}
            }
          ]
        }
      ],
      [
        {
          path: 'about_us',
          component: import75.AboutUsComponent
        }
        ,
        {
          path: 'faqs',
          component: import76.FaqsComponent
        }
        ,
        {
          path: 'order_tracking',
          component: import77.OrderTrackingComponent
        }
        ,
        {
          path: 'craftsvilla_in_media',
          component: import78.InMediaComponent
        }
        ,
        {
          path: 'contactus',
          component: import79.ContactUsComponent
        }

      ]
      ,
      [
        {
          path: '404',
          component: import80.NotFoundComponent
        }
        ,
        {
          path: '**',
          redirectTo: '404'
        }

      ]

    ]
    ); }
    return this.__ROUTES_46;
  }
  get _HttpClientService_47():import32.HttpClientService {
    if ((this.__HttpClientService_47 == (null as any))) { (this.__HttpClientService_47 = new import32.HttpClientService(this._Http_44)); }
    return this.__HttpClientService_47;
  }
  get _ListingService_48():import33.ListingService {
    if ((this.__ListingService_48 == (null as any))) { (this.__ListingService_48 = new import33.ListingService(this._HttpClientService_47,this._Http_44)); }
    return this.__ListingService_48;
  }
  get _UrlSerializer_49():import34.DefaultUrlSerializer {
    if ((this.__UrlSerializer_49 == (null as any))) { (this.__UrlSerializer_49 = new import34.DefaultUrlSerializer()); }
    return this.__UrlSerializer_49;
  }
  get _RouterOutletMap_50():import35.RouterOutletMap {
    if ((this.__RouterOutletMap_50 == (null as any))) { (this.__RouterOutletMap_50 = new import35.RouterOutletMap()); }
    return this.__RouterOutletMap_50;
  }
  get _ROUTER_CONFIGURATION_51():any {
    if ((this.__ROUTER_CONFIGURATION_51 == (null as any))) { (this.__ROUTER_CONFIGURATION_51 = {}); }
    return this.__ROUTER_CONFIGURATION_51;
  }
  get _LocationStrategy_52():any {
    if ((this.__LocationStrategy_52 == (null as any))) { (this.__LocationStrategy_52 = import6.provideLocationStrategy(this.parent.get(import81.PlatformLocation),this.parent.get(import82.APP_BASE_HREF,(null as any)),this._ROUTER_CONFIGURATION_51)); }
    return this.__LocationStrategy_52;
  }
  get _Location_53():import36.Location {
    if ((this.__Location_53 == (null as any))) { (this.__Location_53 = new import36.Location(this._LocationStrategy_52)); }
    return this.__Location_53;
  }
  get _NgModuleFactoryLoader_54():import37.SystemJsNgModuleLoader {
    if ((this.__NgModuleFactoryLoader_54 == (null as any))) { (this.__NgModuleFactoryLoader_54 = new import37.SystemJsNgModuleLoader(this._Compiler_22,this.parent.get(import37.SystemJsNgModuleLoaderConfig,(null as any)))); }
    return this.__NgModuleFactoryLoader_54;
  }
  get _Router_55():any {
    if ((this.__Router_55 == (null as any))) { (this.__Router_55 = import6.setupRouter(this._ApplicationRef_21,this._UrlSerializer_49,this._RouterOutletMap_50,this._Location_53,this,this._NgModuleFactoryLoader_54,this._Compiler_22,this._ROUTES_46,this._ROUTER_CONFIGURATION_51)); }
    return this.__Router_55;
  }
  get _ListingResolveService_56():import38.ListingResolveService {
    if ((this.__ListingResolveService_56 == (null as any))) { (this.__ListingResolveService_56 = new import38.ListingResolveService(this._ListingService_48,this._Router_55)); }
    return this.__ListingResolveService_56;
  }
  get _FilterResolveService_57():import39.FilterResolveService {
    if ((this.__FilterResolveService_57 == (null as any))) { (this.__FilterResolveService_57 = new import39.FilterResolveService(this._ListingService_48,this._Router_55)); }
    return this.__FilterResolveService_57;
  }
  get _ProductService_58():import40.ProductService {
    if ((this.__ProductService_58 == (null as any))) { (this.__ProductService_58 = new import40.ProductService(this._HttpClientService_47,this._Http_44)); }
    return this.__ProductService_58;
  }
  get _ProductDetailResolve_59():import41.ProductDetailResolve {
    if ((this.__ProductDetailResolve_59 == (null as any))) { (this.__ProductDetailResolve_59 = new import41.ProductDetailResolve(this._ProductService_58,this._Router_55)); }
    return this.__ProductDetailResolve_59;
  }
  get _ActivatedRoute_60():any {
    if ((this.__ActivatedRoute_60 == (null as any))) { (this.__ActivatedRoute_60 = import6.rootRoute(this._Router_55)); }
    return this.__ActivatedRoute_60;
  }
  get _APP_BOOTSTRAP_LISTENER_61():any[] {
    if ((this.__APP_BOOTSTRAP_LISTENER_61 == (null as any))) { (this.__APP_BOOTSTRAP_LISTENER_61 = [import6.initialRouterNavigation(this._Router_55,this._ROUTER_CONFIGURATION_51)]); }
    return this.__APP_BOOTSTRAP_LISTENER_61;
  }
  get _RouterHeaderBindingService_62():import42.RouterHeaderBindingService {
    if ((this.__RouterHeaderBindingService_62 == (null as any))) { (this.__RouterHeaderBindingService_62 = new import42.RouterHeaderBindingService()); }
    return this.__RouterHeaderBindingService_62;
  }
  get _DataHoldingService_63():import43.DataHoldingService {
    if ((this.__DataHoldingService_63 == (null as any))) { (this.__DataHoldingService_63 = new import43.DataHoldingService()); }
    return this.__DataHoldingService_63;
  }
  get _TRANSLATIONS_FORMAT_64():any {
    if ((this.__TRANSLATIONS_FORMAT_64 == (null as any))) { (this.__TRANSLATIONS_FORMAT_64 = (null as any)); }
    return this.__TRANSLATIONS_FORMAT_64;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._HttpModule_3 = new import5.HttpModule();
    this._ROUTER_FORROOT_GUARD_4 = import6.provideForRootGuard(this.parent.get(import83.Router,(null as any)));
    this._RouterModule_5 = new import6.RouterModule(this._ROUTER_FORROOT_GUARD_4);
    this._InternalFormsSharedModule_6 = new import7.InternalFormsSharedModule();
    this._FormsModule_7 = new import8.FormsModule();
    this._SwiperModule_8 = new import9.SwiperModule();
    this._WidgetModule_9 = new import10.WidgetModule();
    this._HomeModule_10 = new import11.HomeModule();
    this._ListingModule_11 = new import12.ListingModule();
    this._ProductModule_12 = new import13.ProductModule();
    this._StaticsModule_13 = new import14.StaticsModule();
    this._AppModule_14 = new import1.AppModule();
    this._ErrorHandler_17 = import4.errorHandler();
    this._ApplicationInitStatus_18 = new import16.ApplicationInitStatus(this.parent.get(import16.APP_INITIALIZER,(null as any)));
    this._Testability_19 = new import17.Testability(this.parent.get(import70.NgZone));
    this._ApplicationRef__20 = new import18.ApplicationRef_(this.parent.get(import70.NgZone),this.parent.get(import84.Console),this,this._ErrorHandler_17,this,this._ApplicationInitStatus_18,this.parent.get(import17.TestabilityRegistry,(null as any)),this._Testability_19);
    return this._AppModule_14;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.HttpModule)) { return this._HttpModule_3; }
    if ((token === import6.ROUTER_FORROOT_GUARD)) { return this._ROUTER_FORROOT_GUARD_4; }
    if ((token === import6.RouterModule)) { return this._RouterModule_5; }
    if ((token === import7.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_6; }
    if ((token === import8.FormsModule)) { return this._FormsModule_7; }
    if ((token === import9.SwiperModule)) { return this._SwiperModule_8; }
    if ((token === import10.WidgetModule)) { return this._WidgetModule_9; }
    if ((token === import11.HomeModule)) { return this._HomeModule_10; }
    if ((token === import12.ListingModule)) { return this._ListingModule_11; }
    if ((token === import13.ProductModule)) { return this._ProductModule_12; }
    if ((token === import14.StaticsModule)) { return this._StaticsModule_13; }
    if ((token === import1.AppModule)) { return this._AppModule_14; }
    if ((token === import85.LOCALE_ID)) { return this._LOCALE_ID_15; }
    if ((token === import15.NgLocalization)) { return this._NgLocalization_16; }
    if ((token === import86.ErrorHandler)) { return this._ErrorHandler_17; }
    if ((token === import16.ApplicationInitStatus)) { return this._ApplicationInitStatus_18; }
    if ((token === import17.Testability)) { return this._Testability_19; }
    if ((token === import18.ApplicationRef_)) { return this._ApplicationRef__20; }
    if ((token === import18.ApplicationRef)) { return this._ApplicationRef_21; }
    if ((token === import19.Compiler)) { return this._Compiler_22; }
    if ((token === import67.APP_ID)) { return this._APP_ID_23; }
    if ((token === import87.DOCUMENT)) { return this._DOCUMENT_24; }
    if ((token === import20.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_25; }
    if ((token === import21.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_26; }
    if ((token === import21.EventManager)) { return this._EventManager_27; }
    if ((token === import22.DomSharedStylesHost)) { return this._DomSharedStylesHost_28; }
    if ((token === import88.AnimationDriver)) { return this._AnimationDriver_29; }
    if ((token === import23.DomRootRenderer)) { return this._DomRootRenderer_30; }
    if ((token === import89.RootRenderer)) { return this._RootRenderer_31; }
    if ((token === import24.DomSanitizer)) { return this._DomSanitizer_32; }
    if ((token === import90.Sanitizer)) { return this._Sanitizer_33; }
    if ((token === import25.ViewUtils)) { return this._ViewUtils_34; }
    if ((token === import91.IterableDiffers)) { return this._IterableDiffers_35; }
    if ((token === import92.KeyValueDiffers)) { return this._KeyValueDiffers_36; }
    if ((token === import22.SharedStylesHost)) { return this._SharedStylesHost_37; }
    if ((token === import26.Title)) { return this._Title_38; }
    if ((token === import27.BrowserXhr)) { return this._BrowserXhr_39; }
    if ((token === import28.ResponseOptions)) { return this._ResponseOptions_40; }
    if ((token === import93.XSRFStrategy)) { return this._XSRFStrategy_41; }
    if ((token === import29.XHRBackend)) { return this._XHRBackend_42; }
    if ((token === import30.RequestOptions)) { return this._RequestOptions_43; }
    if ((token === import94.Http)) { return this._Http_44; }
    if ((token === import31.RadioControlRegistry)) { return this._RadioControlRegistry_45; }
    if ((token === import95.ROUTES)) { return this._ROUTES_46; }
    if ((token === import32.HttpClientService)) { return this._HttpClientService_47; }
    if ((token === import33.ListingService)) { return this._ListingService_48; }
    if ((token === import34.UrlSerializer)) { return this._UrlSerializer_49; }
    if ((token === import35.RouterOutletMap)) { return this._RouterOutletMap_50; }
    if ((token === import6.ROUTER_CONFIGURATION)) { return this._ROUTER_CONFIGURATION_51; }
    if ((token === import82.LocationStrategy)) { return this._LocationStrategy_52; }
    if ((token === import36.Location)) { return this._Location_53; }
    if ((token === import96.NgModuleFactoryLoader)) { return this._NgModuleFactoryLoader_54; }
    if ((token === import83.Router)) { return this._Router_55; }
    if ((token === import38.ListingResolveService)) { return this._ListingResolveService_56; }
    if ((token === import39.FilterResolveService)) { return this._FilterResolveService_57; }
    if ((token === import40.ProductService)) { return this._ProductService_58; }
    if ((token === import41.ProductDetailResolve)) { return this._ProductDetailResolve_59; }
    if ((token === import97.ActivatedRoute)) { return this._ActivatedRoute_60; }
    if ((token === import67.APP_BOOTSTRAP_LISTENER)) { return this._APP_BOOTSTRAP_LISTENER_61; }
    if ((token === import42.RouterHeaderBindingService)) { return this._RouterHeaderBindingService_62; }
    if ((token === import43.DataHoldingService)) { return this._DataHoldingService_63; }
    if ((token === import98.TRANSLATIONS_FORMAT)) { return this._TRANSLATIONS_FORMAT_64; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__20.ngOnDestroy();
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory(AppModuleInjector,import1.AppModule);