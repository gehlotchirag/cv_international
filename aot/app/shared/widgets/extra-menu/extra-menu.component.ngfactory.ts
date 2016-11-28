/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../../app/shared/services/http-client.service';
import * as import4 from '../../../../../app/shared/widgets/extra-menu/extra-menu.component';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './extra-menu.component.css.shim';
import * as import13 from '@angular/common/src/directives/ng_for';
import * as import14 from '../../../../../app/swiper_module/swiper.component';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '../../../swiper_module/swiper.component.ngfactory';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from '@angular/core/src/zone/ng_zone';
import * as import20 from '@angular/common/src/directives/ng_class';
import * as import21 from '@angular/router/src/directives/router_link';
import * as import22 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import23 from '@angular/router/src/router';
import * as import24 from '@angular/router/src/router_state';
import * as import25 from '@angular/common/src/location/location_strategy';
import * as import26 from '@angular/core/src/security';
var renderType_ExtraMenuComponent_Host:import0.RenderComponentType = (null as any);
class _View_ExtraMenuComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HttpClientService_0_4:import3.HttpClientService;
  _ExtraMenuComponent_0_5:import4.ExtraMenuComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_ExtraMenuComponent_Host0,renderType_ExtraMenuComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('cvi-extra-menu',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ExtraMenuComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HttpClientService_0_4 = new import3.HttpClientService(this.parentInjector.get(import9.Http));
    this._ExtraMenuComponent_0_5 = new import4.ExtraMenuComponent(this._HttpClientService_0_4);
    this._appEl_0.initComponent(this._ExtraMenuComponent_0_5,[],compView_0);
    compView_0.create(this._ExtraMenuComponent_0_5,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.HttpClientService) && (0 === requestNodeIndex))) { return this._HttpClientService_0_4; }
    if (((token === import4.ExtraMenuComponent) && (0 === requestNodeIndex))) { return this._ExtraMenuComponent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ExtraMenuComponent_0_5.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ExtraMenuComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ExtraMenuComponent_Host === (null as any))) { (renderType_ExtraMenuComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,[],{})); }
  return new _View_ExtraMenuComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ExtraMenuComponentNgFactory:import11.ComponentFactory<import4.ExtraMenuComponent> = new import11.ComponentFactory<import4.ExtraMenuComponent>('cvi-extra-menu',viewFactory_ExtraMenuComponent_Host0,import4.ExtraMenuComponent);
const styles_ExtraMenuComponent:any[] = [import12.styles];
var renderType_ExtraMenuComponent:import0.RenderComponentType = (null as any);
class _View_ExtraMenuComponent0 extends import1.AppView<import4.ExtraMenuComponent> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _TemplateRef_2_5:any;
  _NgFor_2_6:import13.NgFor;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _SwiperComponent_7_4:import14.SwiperComponent;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _anchor_11:any;
  /*private*/ _appEl_11:import2.AppElement;
  _TemplateRef_11_5:any;
  _NgFor_11_6:import13.NgFor;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_ExtraMenuComponent0,renderType_ExtraMenuComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','extra-menu pull-left bg-white extra-menu-web');
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import15.TemplateRef_(this._appEl_2,viewFactory_ExtraMenuComponent1);
    this._NgFor_2_6 = new import13.NgFor(this._appEl_2.vcRef,this._TemplateRef_2_5,this.parentInjector.get(import16.IterableDiffers),this.ref);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_5 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_5,'class','extra-menu responsive-swiper bg-white');
    this._text_6 = this.renderer.createText(this._el_5,'\n	',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'swiper',(null as any));
    this.renderer.setElementAttribute(this._el_7,'class','extra-menu-swiper');
    this._appEl_7 = new import2.AppElement(7,5,this,this._el_7);
    var compView_7:any = import17.viewFactory_SwiperComponent0(this.viewUtils,this.injector(7),this._appEl_7);
    this._SwiperComponent_7_4 = new import14.SwiperComponent(new import18.ElementRef(this._el_7),this.parentInjector.get(import19.NgZone));
    this._appEl_7.initComponent(this._SwiperComponent_7_4,[],compView_7);
    this._text_8 = this.renderer.createText((null as any),'\n     	',(null as any));
    this._el_9 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','swiper-wrapper extra-menu-wrapper');
    this._text_10 = this.renderer.createText(this._el_9,'\n        ',(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_9,(null as any));
    this._appEl_11 = new import2.AppElement(11,9,this,this._anchor_11);
    this._TemplateRef_11_5 = new import15.TemplateRef_(this._appEl_11,viewFactory_ExtraMenuComponent2);
    this._NgFor_11_6 = new import13.NgFor(this._appEl_11.vcRef,this._TemplateRef_11_5,this.parentInjector.get(import16.IterableDiffers),this.ref);
    this._text_12 = this.renderer.createText(this._el_9,'\n      ',(null as any));
    this._text_13 = this.renderer.createText((null as any),'\n',(null as any));
    this._text_14 = this.renderer.createText((null as any),'    ',(null as any));
      compView_7.create(this._SwiperComponent_7_4,[[].concat([
        this._text_8,
        this._el_9,
        this._text_13,
        this._text_14
      ]
    )],(null as any));
    this._text_15 = this.renderer.createText(this._el_5,'\n',(null as any));
    this._text_16 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import8.UNINITIALIZED;
    this._expr_1 = import8.UNINITIALIZED;
    this._expr_2 = import8.UNINITIALIZED;
    this.init([],[
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
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import13.NgFor) && (2 === requestNodeIndex))) { return this._NgFor_2_6; }
    if (((token === import15.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import13.NgFor) && (11 === requestNodeIndex))) { return this._NgFor_11_6; }
    if (((token === import14.SwiperComponent) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._SwiperComponent_7_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_0:any = this.context.dataItems;
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgFor_2_6.ngForOf = currVal_0;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import8.SimpleChange(this._expr_0,currVal_0);
      this._expr_0 = currVal_0;
    }
    if ((changes !== (null as any))) { this._NgFor_2_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_2_6.ngDoCheck(); }
    const currVal_1:any = this.context.config;
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._SwiperComponent_7_4.config = currVal_1;
      this._expr_1 = currVal_1;
    }
    changes = (null as any);
    const currVal_2:any = this.context.dataItems;
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._NgFor_11_6.ngForOf = currVal_2;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import8.SimpleChange(this._expr_2,currVal_2);
      this._expr_2 = currVal_2;
    }
    if ((changes !== (null as any))) { this._NgFor_11_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_11_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._SwiperComponent_7_4.ngAfterViewInit(); }
      this._SwiperComponent_7_4.ngAfterViewChecked();
    }
  }
}
export function viewFactory_ExtraMenuComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<import4.ExtraMenuComponent> {
  if ((renderType_ExtraMenuComponent === (null as any))) { (renderType_ExtraMenuComponent = viewUtils.createRenderComponentType('/home/craftsvilla/angular2-aot-webpack2-rollup/app/shared/widgets/extra-menu/extra-menu.component.html',0,import10.ViewEncapsulation.Emulated,styles_ExtraMenuComponent,{})); }
  return new _View_ExtraMenuComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_ExtraMenuComponent1 extends import1.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import20.NgClass;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import21.RouterLinkWithHref;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  /*private*/ _expr_0:any;
  _map_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_ExtraMenuComponent1,renderType_ExtraMenuComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','extra-menu-item pull-left');
    this._NgClass_0_3 = new import20.NgClass(this.parent.parentInjector.get(import16.IterableDiffers),this.parent.parentInjector.get(import22.KeyValueDiffers),new import18.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._RouterLinkWithHref_2_3 = new import21.RouterLinkWithHref(this.parent.parentInjector.get(import23.Router),this.parent.parentInjector.get(import24.ActivatedRoute),this.parent.parentInjector.get(import25.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'img',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','img-responsive');
    this._text_5 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._expr_0 = import8.UNINITIALIZED;
    this._map_0 = import5.pureProxy1((p0:any):{[key: string]:any} => {
      return {middle: p0};
    });
    this._expr_1 = import8.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._expr_3 = import8.UNINITIALIZED;
    this._expr_4 = import8.UNINITIALIZED;
    this._expr_5 = import8.UNINITIALIZED;
    this._expr_6 = import8.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._RouterLinkWithHref_2_3; }
    if (((token === import20.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._NgClass_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    const currVal_0:any = 'extra-menu-item pull-left';
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgClass_0_3.klass = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._map_0((this.context.index == 2));
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_0_3.ngClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (!throwOnChange) { this._NgClass_0_3.ngDoCheck(); }
    changes = (null as any);
    const currVal_3:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['qp'];
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._RouterLinkWithHref_2_3.queryParams = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['queryParams'] = new import8.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['rl'];
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._RouterLinkWithHref_2_3.routerLink = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_2_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_5:any = this._RouterLinkWithHref_2_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_2,'href',this.viewUtils.sanitizer.sanitize(import26.SecurityContext.URL,currVal_5));
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.$implicit.imageUrl;
    if (import5.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import26.SecurityContext.URL,currVal_6));
      this._expr_6 = currVal_6;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ExtraMenuComponent1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ExtraMenuComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_ExtraMenuComponent2 extends import1.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import20.NgClass;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import21.RouterLinkWithHref;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  /*private*/ _expr_0:any;
  _map_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_ExtraMenuComponent2,renderType_ExtraMenuComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','swiper-slide extra-menu-item');
    this._NgClass_0_3 = new import20.NgClass(this.parent.parentInjector.get(import16.IterableDiffers),this.parent.parentInjector.get(import22.KeyValueDiffers),new import18.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        	',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'a',(null as any));
    this._RouterLinkWithHref_2_3 = new import21.RouterLinkWithHref(this.parent.parentInjector.get(import23.Router),this.parent.parentInjector.get(import24.ActivatedRoute),this.parent.parentInjector.get(import25.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'\n            ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'img',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','img-responsive');
    this._text_5 = this.renderer.createText(this._el_2,'\n		      ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._expr_0 = import8.UNINITIALIZED;
    this._map_0 = import5.pureProxy1((p0:any):{[key: string]:any} => {
      return {middle: p0};
    });
    this._expr_1 = import8.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._expr_3 = import8.UNINITIALIZED;
    this._expr_4 = import8.UNINITIALIZED;
    this._expr_5 = import8.UNINITIALIZED;
    this._expr_6 = import8.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import21.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._RouterLinkWithHref_2_3; }
    if (((token === import20.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._NgClass_0_3; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    const currVal_0:any = 'swiper-slide extra-menu-item';
    if (import5.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._NgClass_0_3.klass = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._map_0((this.context.index == 2));
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgClass_0_3.ngClass = currVal_1;
      this._expr_1 = currVal_1;
    }
    if (!throwOnChange) { this._NgClass_0_3.ngDoCheck(); }
    changes = (null as any);
    const currVal_3:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['qp'];
    if (import5.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._RouterLinkWithHref_2_3.queryParams = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['queryParams'] = new import8.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['rl'];
    if (import5.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._RouterLinkWithHref_2_3.routerLink = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['routerLink'] = new import8.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._RouterLinkWithHref_2_3.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_5:any = this._RouterLinkWithHref_2_3.href;
    if (import5.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementProperty(this._el_2,'href',this.viewUtils.sanitizer.sanitize(import26.SecurityContext.URL,currVal_5));
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this.context.$implicit.imageUrl;
    if (import5.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import26.SecurityContext.URL,currVal_6));
      this._expr_6 = currVal_6;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_2_3.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._RouterLinkWithHref_2_3.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ExtraMenuComponent2(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ExtraMenuComponent2(viewUtils,parentInjector,declarationEl);
}