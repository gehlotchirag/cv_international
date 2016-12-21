/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './extra-menu.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '../../services/http-client.service';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './extra-menu.component.css.shim';
import * as import13 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '../../../+swiper/swiper.component.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/core/src/zone/ng_zone';
import * as import19 from '@angular/common/src/directives/ng_for';
import * as import20 from '../../../+swiper/swiper.component';
import * as import21 from '../../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import22 from '../../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import23 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import24 from '@angular/router/src/router';
import * as import25 from '@angular/router/src/router_state';
import * as import26 from '@angular/common/src/location/location_strategy';
import * as import27 from '@angular/router/src/directives/router_link';
import * as import28 from '@angular/common/src/directives/ng_class';
import * as import29 from '@angular/core/src/security';
export class Wrapper_ExtraMenuComponent {
  context:import0.ExtraMenuComponent;
  changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.ExtraMenuComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  check_dataItems(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.dataItems = currValue;
      this._expr_0 = currValue;
    }
  }
  check_header(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this.changed = true;
      this.context.header = currValue;
      this._expr_1 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_ExtraMenuComponent_Host:import4.RenderComponentType = (null as any);
class _View_ExtraMenuComponent_Host0 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _HttpClientService_0_4:import6.HttpClientService;
  _ExtraMenuComponent_0_5:Wrapper_ExtraMenuComponent;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_ExtraMenuComponent_Host0,renderType_ExtraMenuComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'cvi-extra-menu',import2.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ExtraMenuComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HttpClientService_0_4 = new import6.HttpClientService(this.parentInjector.get(import9.Http));
    this._ExtraMenuComponent_0_5 = new Wrapper_ExtraMenuComponent(this._HttpClientService_0_4);
    this._appEl_0.initComponent(this._ExtraMenuComponent_0_5.context,([] as any[]),compView_0);
    compView_0.create(this._ExtraMenuComponent_0_5.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import6.HttpClientService) && (0 === requestNodeIndex))) { return this._HttpClientService_0_4; }
    if (((token === import0.ExtraMenuComponent) && (0 === requestNodeIndex))) { return this._ExtraMenuComponent_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ExtraMenuComponent_0_5.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._ExtraMenuComponent_0_5.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ExtraMenuComponent_Host0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  if ((renderType_ExtraMenuComponent_Host === (null as any))) { (renderType_ExtraMenuComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ExtraMenuComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ExtraMenuComponentNgFactory:import11.ComponentFactory<import0.ExtraMenuComponent> = new import11.ComponentFactory<import0.ExtraMenuComponent>('cvi-extra-menu',viewFactory_ExtraMenuComponent_Host0,import0.ExtraMenuComponent);
const styles_ExtraMenuComponent:any[] = [import12.styles];
var renderType_ExtraMenuComponent:import4.RenderComponentType = (null as any);
class _View_ExtraMenuComponent0 extends import3.AppView<import0.ExtraMenuComponent> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import5.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import13.Wrapper_NgFor;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  /*private*/ _appEl_7:import5.AppElement;
  _SwiperComponent_7_4:import14.Wrapper_SwiperComponent;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _appEl_11:import5.AppElement;
  _TemplateRef_11_5:any;
  _NgFor_11_6:import13.Wrapper_NgFor;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_ExtraMenuComponent0,renderType_ExtraMenuComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import2.createRenderElement(this.renderer,parentRenderNode,'div',new import2.InlineArray2(2,'class','extra-menu pull-left bg-white extra-menu-web'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import5.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import15.TemplateRef_(this._appEl_2,viewFactory_ExtraMenuComponent1);
    this._NgFor_2_6 = new import13.Wrapper_NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parentInjector.get(import16.IterableDiffers),this.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_5 = import2.createRenderElement(this.renderer,parentRenderNode,'div',new import2.InlineArray2(2,'class','extra-menu responsive-swiper bg-white'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n	',(null as any));
    this._el_7 = import2.createRenderElement(this.renderer,this._el_5,'swiper',new import2.InlineArray2(2,'class','extra-menu-swiper'),(null as any));
    this._appEl_7 = new import5.AppElement(7,5,this,this._el_7);
    var compView_7:any = import14.viewFactory_SwiperComponent0(this.viewUtils,this.injector(7),this._appEl_7);
    this._SwiperComponent_7_4 = new import14.Wrapper_SwiperComponent(new import17.ElementRef(this._el_7),this.parentInjector.get(import18.NgZone));
    this._appEl_7.initComponent(this._SwiperComponent_7_4.context,([] as any[]),compView_7);
    this._text_8 = this.renderer.createText((null as any),'\n     	',(null as any));
    this._el_9 = import2.createRenderElement(this.renderer,(null as any),'div',new import2.InlineArray2(2,'class','swiper-wrapper extra-menu-wrapper'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_9,(null as any));
    this._appEl_11 = new import5.AppElement(11,9,this,this._anchor_11);
    this._TemplateRef_11_5 = new import15.TemplateRef_(this._appEl_11,viewFactory_ExtraMenuComponent2);
    this._NgFor_11_6 = new import13.Wrapper_NgFor(this._appEl_11.vcRef,this._TemplateRef_11_5,this.parentInjector.get(import16.IterableDiffers),this.ref);
    this._text_12 = this.renderer.createText(this._el_9,'\n      ',(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n',(null as any));
    this._text_14 = this.renderer.createText((null as any),'    ',(null as any));
      compView_7.create(this._SwiperComponent_7_4.context,[([] as any[]).concat([
        this._text_8,
        this._el_9,
        this._text_13,
        this._text_14
      ]
    )],(null as any));
    this._text_15 = this.renderer.createText(this._el_5,'\n',(null as any));
    this._text_16 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._anchor_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import19.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6.context; }
    if (((token === import15.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import19.NgFor) && (11 === requestNodeIndex))) { return this._NgFor_11_6.context; }
    if (((token === import20.SwiperComponent) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._SwiperComponent_7_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.dataItems;
    this._NgFor_2_6.check_ngForOf(currVal_2_0_0,throwOnChange,false);
    this._NgFor_2_6.detectChangesInInputProps(this,this._anchor_2,throwOnChange);
    const currVal_7_0_0:any = this.context.config;
    this._SwiperComponent_7_4.check_config(currVal_7_0_0,throwOnChange,false);
    this._SwiperComponent_7_4.detectChangesInInputProps(this,this._el_7,throwOnChange);
    const currVal_11_0_0:any = this.context.dataItems;
    this._NgFor_11_6.check_ngForOf(currVal_11_0_0,throwOnChange,false);
    this._NgFor_11_6.detectChangesInInputProps(this,this._anchor_11,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._SwiperComponent_7_4.detectChangesInHostProps(this,this._el_7,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._SwiperComponent_7_4.context.ngAfterViewInit(); }
      this._SwiperComponent_7_4.context.ngAfterViewChecked();
    }
  }
}
export function viewFactory_ExtraMenuComponent0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import3.AppView<import0.ExtraMenuComponent> {
  if ((renderType_ExtraMenuComponent === (null as any))) { (renderType_ExtraMenuComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.Emulated,styles_ExtraMenuComponent,{})); }
  return new _View_ExtraMenuComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_ExtraMenuComponent1 extends import3.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import21.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import22.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _map_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_ExtraMenuComponent1,renderType_ExtraMenuComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._map_9 = import2.pureProxy1((p0:any):{[key: string]:any} => {
      return {middle: p0};
    });
    this._expr_10 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'div',new import2.InlineArray2(2,'class','extra-menu-item pull-left'),(null as any));
    this._NgClass_0_3 = new import21.Wrapper_NgClass(this.parent.parentInjector.get(import16.IterableDiffers),this.parent.parentInjector.get(import23.KeyValueDiffers),new import17.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import22.Wrapper_RouterLinkWithHref(this.parent.parentInjector.get(import24.Router),this.parent.parentInjector.get(import25.ActivatedRoute),this.parent.parentInjector.get(import26.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._el_4 = import2.createRenderElement(this.renderer,this._el_2,'img',new import2.InlineArray2(2,'class','img-responsive'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import27.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import28.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'extra-menu-item pull-left';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_9((this.context.index == 2));
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.detectChangesInInputProps(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['qp'];
    this._RouterLinkWithHref_2_3.check_queryParams(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['rl'];
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_1,throwOnChange,false);
    this._RouterLinkWithHref_2_3.detectChangesInInputProps(this,this._el_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NgClass_0_3.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this._RouterLinkWithHref_2_3.detectChangesInHostProps(this,this._el_2,throwOnChange);
    const currVal_10:any = this.context.$implicit.imageUrl;
    if (import2.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import29.SecurityContext.URL,currVal_10));
      this._expr_10 = currVal_10;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.context.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_2_0:any = ((<any>this._RouterLinkWithHref_2_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_2_0);
  }
}
function viewFactory_ExtraMenuComponent1(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  return new _View_ExtraMenuComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_ExtraMenuComponent2 extends import3.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import21.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import22.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  _map_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_ExtraMenuComponent2,renderType_ExtraMenuComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._map_9 = import2.pureProxy1((p0:any):{[key: string]:any} => {
      return {middle: p0};
    });
    this._expr_10 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'div',new import2.InlineArray2(2,'class','swiper-slide extra-menu-item'),(null as any));
    this._NgClass_0_3 = new import21.Wrapper_NgClass(this.parent.parentInjector.get(import16.IterableDiffers),this.parent.parentInjector.get(import23.KeyValueDiffers),new import17.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        	',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import22.Wrapper_RouterLinkWithHref(this.parent.parentInjector.get(import24.Router),this.parent.parentInjector.get(import25.ActivatedRoute),this.parent.parentInjector.get(import26.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._el_4 = import2.createRenderElement(this.renderer,this._el_2,'img',new import2.InlineArray2(2,'class','img-responsive'),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n		      ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import27.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import28.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'swiper-slide extra-menu-item';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_9((this.context.index == 2));
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.detectChangesInInputProps(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['qp'];
    this._RouterLinkWithHref_2_3.check_queryParams(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['rl'];
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_1,throwOnChange,false);
    this._RouterLinkWithHref_2_3.detectChangesInInputProps(this,this._el_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NgClass_0_3.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this._RouterLinkWithHref_2_3.detectChangesInHostProps(this,this._el_2,throwOnChange);
    const currVal_10:any = this.context.$implicit.imageUrl;
    if (import2.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import29.SecurityContext.URL,currVal_10));
      this._expr_10 = currVal_10;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.context.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_2_0:any = ((<any>this._RouterLinkWithHref_2_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_2_0);
  }
}
function viewFactory_ExtraMenuComponent2(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  return new _View_ExtraMenuComponent2(viewUtils,parentInjector,declarationEl);
}