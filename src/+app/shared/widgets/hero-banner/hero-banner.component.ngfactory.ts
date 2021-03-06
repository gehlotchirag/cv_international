/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './hero-banner.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from './hero-banner.component.css.shim';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '@angular/core/src/security';
import * as import18 from '../../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import19 from '@angular/router/src/router';
import * as import20 from '@angular/router/src/router_state';
import * as import21 from '@angular/common/src/location/location_strategy';
import * as import22 from '@angular/router/src/directives/router_link';
export class Wrapper_HeroBannerComponent {
  context:import0.HeroBannerComponent;
  changed:boolean;
  changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.changes = {};
    this.context = new import0.HeroBannerComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  check_header(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.header = currValue;
      this.changes['header'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_dataItems(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this.changed = true;
      this.context.dataItems = currValue;
      this.changes['dataItems'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
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
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_HeroBannerComponent_Host:import4.RenderComponentType = (null as any);
class _View_HeroBannerComponent_Host0 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _HeroBannerComponent_0_4:Wrapper_HeroBannerComponent;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_HeroBannerComponent_Host0,renderType_HeroBannerComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'cvi-hero-banner',import2.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HeroBannerComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HeroBannerComponent_0_4 = new Wrapper_HeroBannerComponent(this.renderer,new import8.ElementRef(this._el_0));
    this._appEl_0.initComponent(this._HeroBannerComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._HeroBannerComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HeroBannerComponent) && (0 === requestNodeIndex))) { return this._HeroBannerComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HeroBannerComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._HeroBannerComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._HeroBannerComponent_0_4.context.ngOnDestroy();
  }
}
function viewFactory_HeroBannerComponent_Host0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  if ((renderType_HeroBannerComponent_Host === (null as any))) { (renderType_HeroBannerComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HeroBannerComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HeroBannerComponentNgFactory:import10.ComponentFactory<import0.HeroBannerComponent> = new import10.ComponentFactory<import0.HeroBannerComponent>('cvi-hero-banner',viewFactory_HeroBannerComponent_Host0,import0.HeroBannerComponent);
const styles_HeroBannerComponent:any[] = [import11.styles];
var renderType_HeroBannerComponent:import4.RenderComponentType = (null as any);
class _View_HeroBannerComponent0 extends import3.AppView<import0.HeroBannerComponent> {
  _viewQuery_heroCarousel_0:import12.QueryList<any>;
  _viewQuery_heroCarouselContainer_1:import12.QueryList<any>;
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _anchor_7:any;
  /*private*/ _appEl_7:import5.AppElement;
  _TemplateRef_7_5:any;
  _NgFor_7_6:import13.Wrapper_NgFor;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import5.AppElement;
  _TemplateRef_12_5:any;
  _NgFor_12_6:import13.Wrapper_NgFor;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  /*private*/ _expr_24:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_HeroBannerComponent0,renderType_HeroBannerComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_24 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_heroCarousel_0 = new import12.QueryList<any>();
    this._viewQuery_heroCarouselContainer_1 = new import12.QueryList<any>();
    this._el_0 = import2.createRenderElement(this.renderer,parentRenderNode,'div',new import2.InlineArray2(2,'class','hero-banner slider pull-left bg-white'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'div',new import2.InlineArray2(2,'class','hero-banner-carousel'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_4 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_5 = import2.createRenderElement(this.renderer,this._el_2,'ol',new import2.InlineArray2(2,'class','hero-carousel-indicator clearfix'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n      ',(null as any));
    this._anchor_7 = this.renderer.createTemplateAnchor(this._el_5,(null as any));
    this._appEl_7 = new import5.AppElement(7,5,this,this._anchor_7);
    this._TemplateRef_7_5 = new import14.TemplateRef_(this._appEl_7,viewFactory_HeroBannerComponent1);
    this._NgFor_7_6 = new import13.Wrapper_NgFor(this._appEl_7.vcRef,this._TemplateRef_7_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_8 = this.renderer.createText(this._el_5,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_10 = import2.createRenderElement(this.renderer,this._el_2,'ul',new import2.InlineArray2(2,'class','hero-carousel-body clearfix'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_10,(null as any));
    this._appEl_12 = new import5.AppElement(12,10,this,this._anchor_12);
    this._TemplateRef_12_5 = new import14.TemplateRef_(this._appEl_12,viewFactory_HeroBannerComponent2);
    this._NgFor_12_6 = new import13.Wrapper_NgFor(this._appEl_12.vcRef,this._TemplateRef_12_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_13 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_15 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._viewQuery_heroCarousel_0.reset([new import8.ElementRef(this._el_10)]);
    this.context.heroCarousel = this._viewQuery_heroCarousel_0.first;
    this._viewQuery_heroCarouselContainer_1.reset([new import8.ElementRef(this._el_2)]);
    this.context.carouselContainer = this._viewQuery_heroCarouselContainer_1.first;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._anchor_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._text_14,
      this._text_15
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (7 === requestNodeIndex))) { return this._TemplateRef_7_5; }
    if (((token === import16.NgFor) && (7 === requestNodeIndex))) { return this._NgFor_7_6.context; }
    if (((token === import14.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import16.NgFor) && (12 === requestNodeIndex))) { return this._NgFor_12_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:any = this.context.dataItems;
    this._NgFor_7_6.check_ngForOf(currVal_7_0_0,throwOnChange,false);
    this._NgFor_7_6.detectChangesInInputProps(this,this._anchor_7,throwOnChange);
    const currVal_12_0_0:any = this.context.dataItems;
    this._NgFor_12_6.check_ngForOf(currVal_12_0_0,throwOnChange,false);
    this._NgFor_12_6.detectChangesInInputProps(this,this._anchor_12,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_24:any = this.context.sliderWidth;
    if (import2.checkBinding(throwOnChange,this._expr_24,currVal_24)) {
      this.renderer.setElementStyle(this._el_10,'width',((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE,currVal_24) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE,currVal_24).toString()));
      this._expr_24 = currVal_24;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_HeroBannerComponent0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<import0.HeroBannerComponent> {
  if ((renderType_HeroBannerComponent === (null as any))) { (renderType_HeroBannerComponent = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.Emulated,styles_HeroBannerComponent,{})); }
  return new _View_HeroBannerComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_HeroBannerComponent1 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_HeroBannerComponent1,renderType_HeroBannerComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_1 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'li',new import2.InlineArray2(2,'class','pull-left'),(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],[disposable_0],([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = (this.context.index == this.parent.context.currentSlideIndex);
    if (import2.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'active',currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.parent.context.swipe(this.parent.context.currentSlideIndex,'swipeleft',this.context.index)) !== false);
    return (true && pd_0_0);
  }
}
function viewFactory_HeroBannerComponent1(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  return new _View_HeroBannerComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_HeroBannerComponent2 extends import3.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import18.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_HeroBannerComponent2,renderType_HeroBannerComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'li',new import2.InlineArray2(2,'class','item'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import18.Wrapper_RouterLinkWithHref(this.parent.parentInjector.get(import19.Router),this.parent.parentInjector.get(import20.ActivatedRoute),this.parent.parentInjector.get(import21.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'\n          ',(null as any));
    this._el_4 = import2.createRenderElement(this.renderer,this._el_2,'img',new import2.InlineArray4(4,'alt','Hero Banner','class','slider-img'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'swipeleft',this.eventHandler(this._handle_swipeleft_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'swiperight',this.eventHandler(this._handle_swiperight_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._RouterLinkWithHref_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['qp'];
    this._RouterLinkWithHref_2_3.check_queryParams(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['rl'];
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_1,throwOnChange,false);
    this._RouterLinkWithHref_2_3.detectChangesInInputProps(this,this._el_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_8:any = (this.context.index == this.parent.context.currentSlideIndex);
    if (import2.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_0,'active-slide',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this.parent.context.itemWidth;
    if (import2.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementStyle(this._el_0,'width',((this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE,currVal_9) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import17.SecurityContext.STYLE,currVal_9).toString()));
      this._expr_9 = currVal_9;
    }
    this._RouterLinkWithHref_2_3.detectChangesInHostProps(this,this._el_2,throwOnChange);
    const currVal_10:any = import2.interpolate(1,'',this.context.$implicit.imageUrl,'');
    if (import2.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import17.SecurityContext.URL,currVal_10));
      this._expr_10 = currVal_10;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.context.ngOnDestroy();
  }
  private _handle_swipeleft_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.parent.context.swipe(this.context.index,$event.type)) !== false);
    return (true && pd_0_0);
  }
  private _handle_swiperight_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0_0:any = ((<any>this.parent.context.swipe(this.context.index,$event.type)) !== false);
    return (true && pd_0_0);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_2_0:any = ((<any>this._RouterLinkWithHref_2_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_2_0);
  }
}
function viewFactory_HeroBannerComponent2(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  return new _View_HeroBannerComponent2(viewUtils,parentInjector,declarationEl);
}