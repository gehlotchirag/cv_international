/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './announcement-widget.component';
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
import * as import12 from './announcement-widget.component.css.shim';
import * as import13 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '../../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import18 from '../../lazyload-image/lazyload-image.directive.ngfactory';
import * as import19 from '@angular/router/src/router';
import * as import20 from '@angular/router/src/router_state';
import * as import21 from '@angular/common/src/location/location_strategy';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from '@angular/core/src/zone/ng_zone';
import * as import24 from '../../lazyload-image/lazyload-image.directive';
import * as import25 from '@angular/router/src/directives/router_link';
export class Wrapper_AnnouncementWidgetComponent {
  context:import0.AnnouncementWidgetComponent;
  changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.AnnouncementWidgetComponent(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  check_header(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.header = currValue;
      this._expr_0 = currValue;
    }
  }
  check_dataItems(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this.changed = true;
      this.context.dataItems = currValue;
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
var renderType_AnnouncementWidgetComponent_Host:import4.RenderComponentType = (null as any);
class _View_AnnouncementWidgetComponent_Host0 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _HttpClientService_0_4:import6.HttpClientService;
  _AnnouncementWidgetComponent_0_5:Wrapper_AnnouncementWidgetComponent;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_AnnouncementWidgetComponent_Host0,renderType_AnnouncementWidgetComponent_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'cvi-announcement-widget',import2.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AnnouncementWidgetComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HttpClientService_0_4 = new import6.HttpClientService(this.parentInjector.get(import9.Http));
    this._AnnouncementWidgetComponent_0_5 = new Wrapper_AnnouncementWidgetComponent(this._HttpClientService_0_4);
    this._appEl_0.initComponent(this._AnnouncementWidgetComponent_0_5.context,([] as any[]),compView_0);
    compView_0.create(this._AnnouncementWidgetComponent_0_5.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import6.HttpClientService) && (0 === requestNodeIndex))) { return this._HttpClientService_0_4; }
    if (((token === import0.AnnouncementWidgetComponent) && (0 === requestNodeIndex))) { return this._AnnouncementWidgetComponent_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AnnouncementWidgetComponent_0_5.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._AnnouncementWidgetComponent_0_5.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AnnouncementWidgetComponent_Host0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  if ((renderType_AnnouncementWidgetComponent_Host === (null as any))) { (renderType_AnnouncementWidgetComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AnnouncementWidgetComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AnnouncementWidgetComponentNgFactory:import11.ComponentFactory<import0.AnnouncementWidgetComponent> = new import11.ComponentFactory<import0.AnnouncementWidgetComponent>('cvi-announcement-widget',viewFactory_AnnouncementWidgetComponent_Host0,import0.AnnouncementWidgetComponent);
const styles_AnnouncementWidgetComponent:any[] = [import12.styles];
var renderType_AnnouncementWidgetComponent:import4.RenderComponentType = (null as any);
class _View_AnnouncementWidgetComponent0 extends import3.AppView<import0.AnnouncementWidgetComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _el_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _appEl_14:import5.AppElement;
  _TemplateRef_14_5:any;
  _NgFor_14_6:import13.Wrapper_NgFor;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  /*private*/ _expr_22:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_AnnouncementWidgetComponent0,renderType_AnnouncementWidgetComponent,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_22 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import2.createRenderElement(this.renderer,parentRenderNode,'div',new import2.InlineArray2(2,'class','occupy mob-section'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'div',new import2.InlineArray2(2,'class','contain bg-white mob-bg-white home-section clearfix'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import2.createRenderElement(this.renderer,this._el_2,'div',new import2.InlineArray2(2,'class','section-header mob-section-heading'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import2.createRenderElement(this.renderer,this._el_4,'span',new import2.InlineArray2(2,'class','heading pull-left'),(null as any));
    this._el_7 = import2.createRenderElement(this.renderer,this._el_6,'img',new import2.InlineArray2(2,'src','http://assetsintl.craftsvilla.com/cvintlfe/assets/images/ethnic-1.png'),(null as any));
    this._text_8 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._text_10 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_11 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_12 = import2.createRenderElement(this.renderer,this._el_2,'div',new import2.InlineArray2(2,'class','section-body mob-section-body'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n      ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12,(null as any));
    this._appEl_14 = new import5.AppElement(14,12,this,this._anchor_14);
    this._TemplateRef_14_5 = new import14.TemplateRef_(this._appEl_14,viewFactory_AnnouncementWidgetComponent1);
    this._NgFor_14_6 = new import13.Wrapper_NgFor(this._appEl_14.vcRef,this._TemplateRef_14_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_15 = this.renderer.createText(this._el_12,'\n    ',(null as any));
    this._text_16 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_17 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_18 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._anchor_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import16.NgFor) && (14 === requestNodeIndex))) { return this._NgFor_14_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_14_0_0:any = this.context.dataItems;
    this._NgFor_14_6.check_ngForOf(currVal_14_0_0,throwOnChange,false);
    this._NgFor_14_6.detectChangesInInputProps(this,this._anchor_14,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_22:any = import2.interpolate(1,'\n        ',this.context.header,'\n      ');
    if (import2.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this.renderer.setText(this._text_8,currVal_22);
      this._expr_22 = currVal_22;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_AnnouncementWidgetComponent0(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import3.AppView<import0.AnnouncementWidgetComponent> {
  if ((renderType_AnnouncementWidgetComponent === (null as any))) { (renderType_AnnouncementWidgetComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.Emulated,styles_AnnouncementWidgetComponent,{})); }
  return new _View_AnnouncementWidgetComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_AnnouncementWidgetComponent1 extends import3.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import17.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _el_4:any;
  _LazyLoadImageDirective_4_3:import18.Wrapper_LazyLoadImageDirective;
  _text_5:any;
  _el_6:any;
  _LazyLoadImageDirective_6_3:import18.Wrapper_LazyLoadImageDirective;
  _text_7:any;
  _text_8:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement) {
    super(_View_AnnouncementWidgetComponent1,renderType_AnnouncementWidgetComponent,import8.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'div',new import2.InlineArray2(2,'class','box box-3'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import17.Wrapper_RouterLinkWithHref(this.parent.parentInjector.get(import19.Router),this.parent.parentInjector.get(import20.ActivatedRoute),this.parent.parentInjector.get(import21.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'\n          ',(null as any));
    this._el_4 = import2.createRenderElement(this.renderer,this._el_2,'img',new import2.InlineArray4(4,'alt','','class','img-responsive annoucement-web-image loading'),(null as any));
    this._LazyLoadImageDirective_4_3 = new import18.Wrapper_LazyLoadImageDirective(new import22.ElementRef(this._el_4),this.parent.parentInjector.get(import23.NgZone));
    this._text_5 = this.renderer.createText(this._el_2,'\n          ',(null as any));
    this._el_6 = import2.createRenderElement(this.renderer,this._el_2,'img',new import2.InlineArray4(4,'alt','','class','img-responsive annoucement-mobile-image loading'),(null as any));
    this._LazyLoadImageDirective_6_3 = new import18.Wrapper_LazyLoadImageDirective(new import22.ElementRef(this._el_6),this.parent.parentInjector.get(import23.NgZone));
    this._text_7 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_8 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.LazyLoadImageDirective) && (4 === requestNodeIndex))) { return this._LazyLoadImageDirective_4_3.context; }
    if (((token === import24.LazyLoadImageDirective) && (6 === requestNodeIndex))) { return this._LazyLoadImageDirective_6_3.context; }
    if (((token === import25.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._RouterLinkWithHref_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['qp'];
    this._RouterLinkWithHref_2_3.check_queryParams(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['rl'];
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_1,throwOnChange,false);
    this._RouterLinkWithHref_2_3.detectChangesInInputProps(this,this._el_2,throwOnChange);
    const currVal_4_0_0:any = this.context.$implicit.imageUrl;
    this._LazyLoadImageDirective_4_3.check_lazyImage(currVal_4_0_0,throwOnChange,false);
    this._LazyLoadImageDirective_4_3.detectChangesInInputProps(this,this._el_4,throwOnChange);
    const currVal_6_0_0:any = this.context.$implicit.mobile_imageUrl;
    this._LazyLoadImageDirective_6_3.check_lazyImage(currVal_6_0_0,throwOnChange,false);
    this._LazyLoadImageDirective_6_3.detectChangesInInputProps(this,this._el_6,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._LazyLoadImageDirective_4_3.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._LazyLoadImageDirective_6_3.context.ngAfterContentInit(); }
    }
    this._RouterLinkWithHref_2_3.detectChangesInHostProps(this,this._el_2,throwOnChange);
    this._LazyLoadImageDirective_4_3.detectChangesInHostProps(this,this._el_4,throwOnChange);
    this._LazyLoadImageDirective_6_3.detectChangesInHostProps(this,this._el_6,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._LazyLoadImageDirective_4_3.context.ngOnDestroy();
    this._LazyLoadImageDirective_6_3.context.ngOnDestroy();
    this._RouterLinkWithHref_2_3.context.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_2_0:any = ((<any>this._RouterLinkWithHref_2_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_2_0);
  }
}
function viewFactory_AnnouncementWidgetComponent1(viewUtils:import2.ViewUtils,parentInjector:import7.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  return new _View_AnnouncementWidgetComponent1(viewUtils,parentInjector,declarationEl);
}