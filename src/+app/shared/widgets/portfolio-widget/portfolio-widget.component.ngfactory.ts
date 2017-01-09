/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './portfolio-widget.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '../../services/http-client.service';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from './portfolio-widget.component.css.shim';
import * as import13 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
import * as import17 from '../../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import18 from '../../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import19 from '../../lazyload-image/lazyload-image.directive.ngfactory';
import * as import20 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '@angular/router/src/router';
import * as import23 from '@angular/router/src/router_state';
import * as import24 from '@angular/common/src/location/location_strategy';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from '../../lazyload-image/lazyload-image.directive';
import * as import27 from '@angular/router/src/directives/router_link';
import * as import28 from '@angular/common/src/directives/ng_class';
export class Wrapper_PortfolioWidgetComponent {
  context:import0.PortfolioWidgetComponent;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.PortfolioWidgetComponent(p0);
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_PortfolioWidgetComponent_Host:import2.RenderComponentType = (null as any);
class _View_PortfolioWidgetComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _HttpClientService_0_4:import4.HttpClientService;
  _PortfolioWidgetComponent_0_5:Wrapper_PortfolioWidgetComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_PortfolioWidgetComponent_Host0,renderType_PortfolioWidgetComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'app-portfolio-widget',import5.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PortfolioWidgetComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HttpClientService_0_4 = new import4.HttpClientService(this.parentInjector.get(import9.Http));
    this._PortfolioWidgetComponent_0_5 = new Wrapper_PortfolioWidgetComponent(this._HttpClientService_0_4);
    this._appEl_0.initComponent(this._PortfolioWidgetComponent_0_5.context,([] as any[]),compView_0);
    compView_0.create(this._PortfolioWidgetComponent_0_5.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import4.HttpClientService) && (0 === requestNodeIndex))) { return this._HttpClientService_0_4; }
    if (((token === import0.PortfolioWidgetComponent) && (0 === requestNodeIndex))) { return this._PortfolioWidgetComponent_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PortfolioWidgetComponent_0_5.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._PortfolioWidgetComponent_0_5.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PortfolioWidgetComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_PortfolioWidgetComponent_Host === (null as any))) { (renderType_PortfolioWidgetComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_PortfolioWidgetComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const PortfolioWidgetComponentNgFactory:import11.ComponentFactory<import0.PortfolioWidgetComponent> = new import11.ComponentFactory<import0.PortfolioWidgetComponent>('app-portfolio-widget',viewFactory_PortfolioWidgetComponent_Host0,import0.PortfolioWidgetComponent);
const styles_PortfolioWidgetComponent:any[] = [import12.styles];
var renderType_PortfolioWidgetComponent:import2.RenderComponentType = (null as any);
class _View_PortfolioWidgetComponent0 extends import1.AppView<import0.PortfolioWidgetComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _anchor_15:any;
  /*private*/ _appEl_15:import3.AppElement;
  _TemplateRef_15_5:any;
  _NgFor_15_6:import13.Wrapper_NgFor;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  /*private*/ _expr_23:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_PortfolioWidgetComponent0,renderType_PortfolioWidgetComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
    this._expr_23 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import5.createRenderElement(this.renderer,parentRenderNode,'div',new import5.InlineArray2(2,'class','occupy mob-section'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import5.createRenderElement(this.renderer,this._el_0,'div',new import5.InlineArray2(2,'class','contain bg-white mob-bg-white home-section clearfix'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import5.createRenderElement(this.renderer,this._el_2,'div',new import5.InlineArray2(2,'class','section-header mob-section-heading'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import5.createRenderElement(this.renderer,this._el_4,'span',new import5.InlineArray2(2,'class','heading pull-left'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_8 = import5.createRenderElement(this.renderer,this._el_6,'img',new import5.InlineArray2(2,'src','http://assetsintl.craftsvilla.com/cvintlfe/assets/images/ethnic-1.png'),(null as any));
    this._text_9 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_10 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._text_11 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_12 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_13 = import5.createRenderElement(this.renderer,this._el_2,'div',new import5.InlineArray2(2,'class','section-body'),(null as any));
    this._text_14 = this.renderer.createText(this._el_13,'\n      ',(null as any));
    this._anchor_15 = this.renderer.createTemplateAnchor(this._el_13,(null as any));
    this._appEl_15 = new import3.AppElement(15,13,this,this._anchor_15);
    this._TemplateRef_15_5 = new import14.TemplateRef_(this._appEl_15,viewFactory_PortfolioWidgetComponent1);
    this._NgFor_15_6 = new import13.Wrapper_NgFor(this._appEl_15.vcRef,this._TemplateRef_15_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_16 = this.renderer.createText(this._el_13,'\n    ',(null as any));
    this._text_17 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_18 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_19 = this.renderer.createText(parentRenderNode,'\n',(null as any));
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
      this._text_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._anchor_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (15 === requestNodeIndex))) { return this._TemplateRef_15_5; }
    if (((token === import16.NgFor) && (15 === requestNodeIndex))) { return this._NgFor_15_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_15_0_0:any = this.context.dataItems;
    this._NgFor_15_6.check_ngForOf(currVal_15_0_0,throwOnChange,false);
    this._NgFor_15_6.detectChangesInInputProps(this,this._anchor_15,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_23:any = import5.interpolate(1,'\n        ',this.context.header,'\n      ');
    if (import5.checkBinding(throwOnChange,this._expr_23,currVal_23)) {
      this.renderer.setText(this._text_9,currVal_23);
      this._expr_23 = currVal_23;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_PortfolioWidgetComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<import0.PortfolioWidgetComponent> {
  if ((renderType_PortfolioWidgetComponent === (null as any))) { (renderType_PortfolioWidgetComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.Emulated,styles_PortfolioWidgetComponent,{})); }
  return new _View_PortfolioWidgetComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_PortfolioWidgetComponent1 extends import1.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import17.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  _RouterLinkWithHref_2_3:import18.Wrapper_RouterLinkWithHref;
  _text_3:any;
  _el_4:any;
  _LazyLoadImageDirective_4_3:import19.Wrapper_LazyLoadImageDirective;
  _text_5:any;
  _text_6:any;
  _map_10:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_PortfolioWidgetComponent1,renderType_PortfolioWidgetComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
    this._map_10 = import5.pureProxy1((p0:any):{[key: string]:any} => {
      return {last: p0};
    });
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import5.createRenderElement(this.renderer,(null as any),'div',new import5.InlineArray2(2,'class','box'),(null as any));
    this._NgClass_0_3 = new import17.Wrapper_NgClass(this.parent.parentInjector.get(import15.IterableDiffers),this.parent.parentInjector.get(import20.KeyValueDiffers),new import21.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import5.createRenderElement(this.renderer,this._el_0,'a',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_2_3 = new import18.Wrapper_RouterLinkWithHref(this.parent.parentInjector.get(import22.Router),this.parent.parentInjector.get(import23.ActivatedRoute),this.parent.parentInjector.get(import24.LocationStrategy));
    this._text_3 = this.renderer.createText(this._el_2,'\n          ',(null as any));
    this._el_4 = import5.createRenderElement(this.renderer,this._el_2,'img',new import5.InlineArray4(4,'alt','','class','img-responsive loading'),(null as any));
    this._LazyLoadImageDirective_4_3 = new import19.Wrapper_LazyLoadImageDirective(new import21.ElementRef(this._el_4),this.parent.parentInjector.get(import25.NgZone));
    this._text_5 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n      ',(null as any));
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
    if (((token === import26.LazyLoadImageDirective) && (4 === requestNodeIndex))) { return this._LazyLoadImageDirective_4_3.context; }
    if (((token === import27.RouterLinkWithHref) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._RouterLinkWithHref_2_3.context; }
    if (((token === import28.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'box';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_10(((this.context.index % 3) == 0));
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.detectChangesInInputProps(this,this._el_0,throwOnChange);
    const currVal_2_0_0:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['qp'];
    this._RouterLinkWithHref_2_3.check_queryParams(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parent.context.getRouterLink(this.context.$implicit.dataUrl)['rl'];
    this._RouterLinkWithHref_2_3.check_routerLink(currVal_2_0_1,throwOnChange,false);
    this._RouterLinkWithHref_2_3.detectChangesInInputProps(this,this._el_2,throwOnChange);
    const currVal_4_0_0:any = this.context.$implicit.imageUrl;
    this._LazyLoadImageDirective_4_3.check_lazyImage(currVal_4_0_0,throwOnChange,false);
    this._LazyLoadImageDirective_4_3.detectChangesInInputProps(this,this._el_4,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._LazyLoadImageDirective_4_3.context.ngAfterContentInit(); } }
    this._NgClass_0_3.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this._RouterLinkWithHref_2_3.detectChangesInHostProps(this,this._el_2,throwOnChange);
    this._LazyLoadImageDirective_4_3.detectChangesInHostProps(this,this._el_4,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._LazyLoadImageDirective_4_3.context.ngOnDestroy();
    this._RouterLinkWithHref_2_3.context.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_2_0:any = ((<any>this._RouterLinkWithHref_2_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_2_0);
  }
}
function viewFactory_PortfolioWidgetComponent1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_PortfolioWidgetComponent1(viewUtils,parentInjector,declarationEl);
}