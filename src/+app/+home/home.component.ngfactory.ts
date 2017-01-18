/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './home.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from './home.service';
import * as import5 from '../shared/widgets/widgets-factory.service';
import * as import6 from '../shared/services/cart-details.service';
import * as import7 from '../shared/services/common-shared.service';
import * as import8 from '../+product/product.service';
import * as import9 from '@angular/core/src/linker/view_utils';
import * as import10 from '@angular/core/src/di/injector';
import * as import11 from '@angular/core/src/linker/view_type';
import * as import12 from '@angular/core/src/change_detection/change_detection';
import * as import13 from '../shared/services/http-client.service';
import * as import14 from '@angular/core/src/linker/component_factory_resolver';
import * as import15 from '@angular/core/src/metadata/view';
import * as import16 from '@angular/core/src/linker/component_factory';
import * as import17 from './home.component.css.shim';
import * as import18 from '@angular/core/src/linker/query_list';
import * as import19 from '../shared/widgets/mega-menu/mega-menu.component.ngfactory';
import * as import20 from '../shared/widgets/hero-banner/hero-banner.component.ngfactory';
import * as import21 from '../shared/widgets/extra-menu/extra-menu.component.ngfactory';
import * as import22 from '../shared/widgets/announcement-widget/announcement-widget.component.ngfactory';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from '@angular/router/src/router';
import * as import25 from '@angular/http/src/http';
import * as import26 from '../shared/widgets/mega-menu/mega-menu.component';
import * as import27 from '../shared/widgets/hero-banner/hero-banner.component';
import * as import28 from '../shared/widgets/extra-menu/extra-menu.component';
import * as import29 from '../shared/widgets/announcement-widget/announcement-widget.component';
export class Wrapper_HomeComponent {
  context:import0.HomeComponent;
  changed:boolean;
  changes:{[key: string]:any};
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any) {
    this.changed = false;
    this.changes = {};
    this.context = new import0.HomeComponent(p0,p1,p2,p3,p4);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) {
      if (changed) {
        this.context.ngOnChanges(this.changes);
        this.changes = {};
      }
      if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); }
    }
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_HomeComponent_Host:import2.RenderComponentType = (null as any);
class _View_HomeComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _HomeService_0_4:import4.HomeService;
  _WidgetFactoryService_0_5:import5.WidgetFactoryService;
  _CartDetailsService_0_6:import6.CartDetailsService;
  _CommonSharedService_0_7:import7.CommonSharedService;
  _HomeComponent_0_8:Wrapper_HomeComponent;
  __ProductService_0_9:import8.ProductService;
  constructor(viewUtils:import9.ViewUtils,parentInjector:import10.Injector,declarationEl:import3.AppElement) {
    super(_View_HomeComponent_Host0,renderType_HomeComponent_Host,import11.ViewType.HOST,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  get _ProductService_0_9():import8.ProductService {
    if ((this.__ProductService_0_9 == (null as any))) { (this.__ProductService_0_9 = new import8.ProductService(this.parentInjector.get(import13.HttpClientService))); }
    return this.__ProductService_0_9;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import9.selectOrCreateRenderHostElement(this.renderer,'cvi-home',import9.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomeComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HomeService_0_4 = new import4.HomeService(this.parentInjector.get(import13.HttpClientService));
    this._WidgetFactoryService_0_5 = new import5.WidgetFactoryService();
    this._CartDetailsService_0_6 = new import6.CartDetailsService(this.parentInjector.get(import13.HttpClientService));
    this._CommonSharedService_0_7 = new import7.CommonSharedService();
    this._HomeComponent_0_8 = new Wrapper_HomeComponent(this.parentInjector.get(import14.ComponentFactoryResolver),this._HomeService_0_4,this._WidgetFactoryService_0_5,this._CartDetailsService_0_6,this._CommonSharedService_0_7);
    this._appEl_0.initComponent(this._HomeComponent_0_8.context,([] as any[]),compView_0);
    compView_0.create(this._HomeComponent_0_8.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import4.HomeService) && (0 === requestNodeIndex))) { return this._HomeService_0_4; }
    if (((token === import5.WidgetFactoryService) && (0 === requestNodeIndex))) { return this._WidgetFactoryService_0_5; }
    if (((token === import6.CartDetailsService) && (0 === requestNodeIndex))) { return this._CartDetailsService_0_6; }
    if (((token === import7.CommonSharedService) && (0 === requestNodeIndex))) { return this._CommonSharedService_0_7; }
    if (((token === import0.HomeComponent) && (0 === requestNodeIndex))) { return this._HomeComponent_0_8.context; }
    if (((token === import8.ProductService) && (0 === requestNodeIndex))) { return this._ProductService_0_9; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HomeComponent_0_8.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._HomeComponent_0_8.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._HomeComponent_0_8.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._HomeComponent_0_8.context.ngOnDestroy();
  }
}
function viewFactory_HomeComponent_Host0(viewUtils:import9.ViewUtils,parentInjector:import10.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_HomeComponent_Host === (null as any))) { (renderType_HomeComponent_Host = viewUtils.createRenderComponentType('',0,import15.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HomeComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomeComponentNgFactory:import16.ComponentFactory<import0.HomeComponent> = new import16.ComponentFactory<import0.HomeComponent>('cvi-home',viewFactory_HomeComponent_Host0,import0.HomeComponent);
const styles_HomeComponent:any[] = [import17.styles];
var renderType_HomeComponent:import2.RenderComponentType = (null as any);
class _View_HomeComponent0 extends import1.AppView<import0.HomeComponent> {
  _viewQuery_content_0:import18.QueryList<any>;
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import3.AppElement;
  _MegaMenuComponent_6_4:import19.Wrapper_MegaMenuComponent;
  _text_7:any;
  _el_8:any;
  /*private*/ _appEl_8:import3.AppElement;
  _HeroBannerComponent_8_4:import20.Wrapper_HeroBannerComponent;
  _text_9:any;
  _el_10:any;
  /*private*/ _appEl_10:import3.AppElement;
  _HttpClientService_10_4:import13.HttpClientService;
  _ExtraMenuComponent_10_5:import21.Wrapper_ExtraMenuComponent;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _el_26:any;
  /*private*/ _appEl_26:import3.AppElement;
  _HttpClientService_26_4:import13.HttpClientService;
  _AnnouncementWidgetComponent_26_5:import22.Wrapper_AnnouncementWidgetComponent;
  _text_27:any;
  _el_28:any;
  /*private*/ _appEl_28:import3.AppElement;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _el_36:any;
  _el_37:any;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _el_43:any;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _text_47:any;
  _el_48:any;
  _text_49:any;
  _text_50:any;
  _text_51:any;
  _text_52:any;
  _text_53:any;
  _text_54:any;
  _text_55:any;
  constructor(viewUtils:import9.ViewUtils,parentInjector:import10.Injector,declarationEl:import3.AppElement) {
    super(_View_HomeComponent0,renderType_HomeComponent,import11.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import12.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_content_0 = new import18.QueryList<any>();
    this._el_0 = import9.createRenderElement(this.renderer,parentRenderNode,'div',new import9.InlineArray2(2,'class','content'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import9.createRenderElement(this.renderer,this._el_0,'div',new import9.InlineArray2(2,'class','menu-slider-container occupy clearfix'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import9.createRenderElement(this.renderer,this._el_2,'div',new import9.InlineArray2(2,'class','contain'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import9.createRenderElement(this.renderer,this._el_4,'cvi-mega-menu',import9.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_6 = new import3.AppElement(6,4,this,this._el_6);
    var compView_6:any = import19.viewFactory_MegaMenuComponent0(this.viewUtils,this.injector(6),this._appEl_6);
    this._MegaMenuComponent_6_4 = new import19.Wrapper_MegaMenuComponent(this.parentInjector.get(import13.HttpClientService),new import23.ElementRef(this._el_6),this.parentInjector.get(import24.Router),this.renderer);
    this._appEl_6.initComponent(this._MegaMenuComponent_6_4.context,([] as any[]),compView_6);
    compView_6.create(this._MegaMenuComponent_6_4.context,([] as any[]),(null as any));
    this._text_7 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_8 = import9.createRenderElement(this.renderer,this._el_4,'cvi-hero-banner',new import9.InlineArray2(2,'class','home-carousel'),(null as any));
    this._appEl_8 = new import3.AppElement(8,4,this,this._el_8);
    var compView_8:any = import20.viewFactory_HeroBannerComponent0(this.viewUtils,this.injector(8),this._appEl_8);
    this._HeroBannerComponent_8_4 = new import20.Wrapper_HeroBannerComponent(this.renderer,new import23.ElementRef(this._el_8));
    this._appEl_8.initComponent(this._HeroBannerComponent_8_4.context,([] as any[]),compView_8);
    compView_8.create(this._HeroBannerComponent_8_4.context,([] as any[]),(null as any));
    this._text_9 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_10 = import9.createRenderElement(this.renderer,this._el_4,'cvi-extra-menu',import9.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_10 = new import3.AppElement(10,4,this,this._el_10);
    var compView_10:any = import21.viewFactory_ExtraMenuComponent0(this.viewUtils,this.injector(10),this._appEl_10);
    this._HttpClientService_10_4 = new import13.HttpClientService(this.parentInjector.get(import25.Http));
    this._ExtraMenuComponent_10_5 = new import21.Wrapper_ExtraMenuComponent(this._HttpClientService_10_4);
    this._appEl_10.initComponent(this._ExtraMenuComponent_10_5.context,([] as any[]),compView_10);
    compView_10.create(this._ExtraMenuComponent_10_5.context,([] as any[]),(null as any));
    this._text_11 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_12 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_14 = import9.createRenderElement(this.renderer,this._el_0,'div',new import9.InlineArray2(2,'class','occupy mob-section text-center mob-bg-white trust-section hide-lg'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'\n		',(null as any));
    this._el_16 = import9.createRenderElement(this.renderer,this._el_14,'img',new import9.InlineArray2(2,'src','http://assetsintl.craftsvilla.com/cvintlfe/assets/images/shield_icon.png'),(null as any));
    this._text_17 = this.renderer.createText(this._el_14,'\n		',(null as any));
    this._el_18 = import9.createRenderElement(this.renderer,this._el_14,'span',import9.EMPTY_INLINE_ARRAY,(null as any));
    this._el_19 = import9.createRenderElement(this.renderer,this._el_18,'strong',import9.EMPTY_INLINE_ARRAY,(null as any));
    this._text_20 = this.renderer.createText(this._el_19,'100% Buyer Protection',(null as any));
    this._text_21 = this.renderer.createText(this._el_18,' ',(null as any));
    this._el_22 = import9.createRenderElement(this.renderer,this._el_18,'span',new import9.InlineArray2(2,'class','dark-link'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'Learn more',(null as any));
    this._text_24 = this.renderer.createText(this._el_14,'\n	',(null as any));
    this._text_25 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_26 = import9.createRenderElement(this.renderer,this._el_0,'cvi-announcement-widget',import9.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_26 = new import3.AppElement(26,0,this,this._el_26);
    var compView_26:any = import22.viewFactory_AnnouncementWidgetComponent0(this.viewUtils,this.injector(26),this._appEl_26);
    this._HttpClientService_26_4 = new import13.HttpClientService(this.parentInjector.get(import25.Http));
    this._AnnouncementWidgetComponent_26_5 = new import22.Wrapper_AnnouncementWidgetComponent(this._HttpClientService_26_4);
    this._appEl_26.initComponent(this._AnnouncementWidgetComponent_26_5.context,([] as any[]),compView_26);
    compView_26.create(this._AnnouncementWidgetComponent_26_5.context,([] as any[]),(null as any));
    this._text_27 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_28 = import9.createRenderElement(this.renderer,this._el_0,'div',import9.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_28 = new import3.AppElement(28,0,this,this._el_28);
    this._text_29 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_30 = import9.createRenderElement(this.renderer,this._el_0,'div',new import9.InlineArray2(2,'class','occupy mob-section'),(null as any));
    this._text_31 = this.renderer.createText(this._el_30,'\n		',(null as any));
    this._el_32 = import9.createRenderElement(this.renderer,this._el_30,'div',new import9.InlineArray2(2,'class','contain bg-white mob-bg-white home-section clearfix'),(null as any));
    this._text_33 = this.renderer.createText(this._el_32,'\n			',(null as any));
    this._el_34 = import9.createRenderElement(this.renderer,this._el_32,'div',new import9.InlineArray2(2,'class','section-header mob-section-heading'),(null as any));
    this._text_35 = this.renderer.createText(this._el_34,'\n				',(null as any));
    this._el_36 = import9.createRenderElement(this.renderer,this._el_34,'span',new import9.InlineArray2(2,'class','heading pull-left'),(null as any));
    this._el_37 = import9.createRenderElement(this.renderer,this._el_36,'img',new import9.InlineArray2(2,'src','http://assetsintl.craftsvilla.com/cvintlfe/assets/images/ethnic-1.png'),(null as any));
    this._text_38 = this.renderer.createText(this._el_36,' Craftsvilla - An Ethnic Destination',(null as any));
    this._text_39 = this.renderer.createText(this._el_34,'\n			',(null as any));
    this._text_40 = this.renderer.createText(this._el_32,'\n			',(null as any));
    this._el_41 = import9.createRenderElement(this.renderer,this._el_32,'div',new import9.InlineArray2(2,'class','section-body mob-section-body'),(null as any));
    this._text_42 = this.renderer.createText(this._el_41,'\n				',(null as any));
    this._el_43 = import9.createRenderElement(this.renderer,this._el_41,'div',import9.EMPTY_INLINE_ARRAY,(null as any));
    this._text_44 = this.renderer.createText(this._el_43,'\n          			',(null as any));
    this._el_45 = import9.createRenderElement(this.renderer,this._el_43,'p',import9.EMPTY_INLINE_ARRAY,(null as any));
    this._text_46 = this.renderer.createText(this._el_45,'Craftsvilla celebrates everything ethnic and is designed to capture the essence of India by connecting local artisans and designers directly to global customers. We believe in catering to the diverse preferences of our customers and ensuring a great online shopping experience. Craftsvilla.com helps customers discover and buy products that are not easily available to them today. We, at Craftsvilla — the largest online ethnic store, take pride in our roots. So, if you are looking for anything Indian that is top quality, yet affordable, Craftsvilla.com is the best online marketplace for you to shop from. We cater to the masses with an enviable collection of ethnic products including Sarees, Lehengas, Salwar Suits, Men’s Kurtas, Kurtis, Jewellery and Accessories.',(null as any));
    this._text_47 = this.renderer.createText(this._el_43,'\n          			',(null as any));
    this._el_48 = import9.createRenderElement(this.renderer,this._el_43,'p',import9.EMPTY_INLINE_ARRAY,(null as any));
    this._text_49 = this.renderer.createText(this._el_48,'Staying true to our commitment of taking Indian ethnic fashion to every corner of the world, we have launched the Craftsvilla shopping app for those who love to shop on the go! Craftsvilla.com is not just about a memorable shopping experience, it also offers customer-friendly services so that you can enjoy the best deals and awesome discounts on all products. Customer satisfaction is something we swear by and that is why we offer free shipping and CoD facilities on most of our products. We also ensure 100% security on payment gateways. We make online shopping a dream with multiple payment options, timely delivery and a prompt customer care service. We also offer reverse pick-up services and easy refund policies. So, hangout on Craftsvilla.com, your one-stop destination for ethnic shopping in India.',(null as any));
    this._text_50 = this.renderer.createText(this._el_43,'\n        		',(null as any));
    this._text_51 = this.renderer.createText(this._el_41,'\n			',(null as any));
    this._text_52 = this.renderer.createText(this._el_32,'\n		',(null as any));
    this._text_53 = this.renderer.createText(this._el_30,'\n	',(null as any));
    this._text_54 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_55 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._viewQuery_content_0.reset([this._appEl_28.vcRef]);
    this.context.contentContainer = this._viewQuery_content_0.first;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._el_36,
      this._el_37,
      this._text_38,
      this._text_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._el_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._text_50,
      this._text_51,
      this._text_52,
      this._text_53,
      this._text_54,
      this._text_55
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import26.MegaMenuComponent) && (6 === requestNodeIndex))) { return this._MegaMenuComponent_6_4.context; }
    if (((token === import27.HeroBannerComponent) && (8 === requestNodeIndex))) { return this._HeroBannerComponent_8_4.context; }
    if (((token === import13.HttpClientService) && (10 === requestNodeIndex))) { return this._HttpClientService_10_4; }
    if (((token === import28.ExtraMenuComponent) && (10 === requestNodeIndex))) { return this._ExtraMenuComponent_10_5.context; }
    if (((token === import13.HttpClientService) && (26 === requestNodeIndex))) { return this._HttpClientService_26_4; }
    if (((token === import29.AnnouncementWidgetComponent) && (26 === requestNodeIndex))) { return this._AnnouncementWidgetComponent_26_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MegaMenuComponent_6_4.detectChangesInInputProps(this,this._el_6,throwOnChange);
    const currVal_8_0_0:any = this.context.heroBannerData.title;
    this._HeroBannerComponent_8_4.check_header(currVal_8_0_0,throwOnChange,false);
    const currVal_8_0_1:any = this.context.heroBannerData.data;
    this._HeroBannerComponent_8_4.check_dataItems(currVal_8_0_1,throwOnChange,false);
    this._HeroBannerComponent_8_4.detectChangesInInputProps(this,this._el_8,throwOnChange);
    const currVal_10_0_0:any = ((this.context.extraMenuData.data == (null as any))? (null as any): this.context.extraMenuData.data.slice(0,3));
    this._ExtraMenuComponent_10_5.check_dataItems(currVal_10_0_0,throwOnChange,false);
    const currVal_10_0_1:any = this.context.extraMenuData.title;
    this._ExtraMenuComponent_10_5.check_header(currVal_10_0_1,throwOnChange,false);
    this._ExtraMenuComponent_10_5.detectChangesInInputProps(this,this._el_10,throwOnChange);
    const currVal_26_0_0:any = this.context.annoucementWidgetData.title;
    this._AnnouncementWidgetComponent_26_5.check_header(currVal_26_0_0,throwOnChange,false);
    const currVal_26_0_1:any = this.context.annoucementWidgetData.data;
    this._AnnouncementWidgetComponent_26_5.check_dataItems(currVal_26_0_1,throwOnChange,false);
    this._AnnouncementWidgetComponent_26_5.detectChangesInInputProps(this,this._el_26,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._MegaMenuComponent_6_4.detectChangesInHostProps(this,this._el_6,throwOnChange);
    this._HeroBannerComponent_8_4.detectChangesInHostProps(this,this._el_8,throwOnChange);
    this._ExtraMenuComponent_10_5.detectChangesInHostProps(this,this._el_10,throwOnChange);
    this._AnnouncementWidgetComponent_26_5.detectChangesInHostProps(this,this._el_26,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._HeroBannerComponent_8_4.context.ngOnDestroy();
  }
}
export function viewFactory_HomeComponent0(viewUtils:import9.ViewUtils,parentInjector:import10.Injector,declarationEl:import3.AppElement):import1.AppView<import0.HomeComponent> {
  if ((renderType_HomeComponent === (null as any))) { (renderType_HomeComponent = viewUtils.createRenderComponentType('',0,import15.ViewEncapsulation.Emulated,styles_HomeComponent,{})); }
  return new _View_HomeComponent0(viewUtils,parentInjector,declarationEl);
}