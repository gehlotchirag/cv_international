/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './testimonials-widget.component';
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
import * as import12 from './testimonials-widget.component.css.shim';
import * as import13 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import14 from '@angular/core/src/linker/template_ref';
import * as import15 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import16 from '@angular/common/src/directives/ng_for';
export class Wrapper_TestimonialsWidgetComponent {
  context:import0.TestimonialsWidgetComponent;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.TestimonialsWidgetComponent(p0);
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
var renderType_TestimonialsWidgetComponent_Host:import2.RenderComponentType = (null as any);
class _View_TestimonialsWidgetComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _HttpClientService_0_4:import4.HttpClientService;
  _TestimonialsWidgetComponent_0_5:Wrapper_TestimonialsWidgetComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_TestimonialsWidgetComponent_Host0,renderType_TestimonialsWidgetComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import5.selectOrCreateRenderHostElement(this.renderer,'cvi-testimonials-widget',import5.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_TestimonialsWidgetComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HttpClientService_0_4 = new import4.HttpClientService(this.parentInjector.get(import9.Http));
    this._TestimonialsWidgetComponent_0_5 = new Wrapper_TestimonialsWidgetComponent(this._HttpClientService_0_4);
    this._appEl_0.initComponent(this._TestimonialsWidgetComponent_0_5.context,([] as any[]),compView_0);
    compView_0.create(this._TestimonialsWidgetComponent_0_5.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import4.HttpClientService) && (0 === requestNodeIndex))) { return this._HttpClientService_0_4; }
    if (((token === import0.TestimonialsWidgetComponent) && (0 === requestNodeIndex))) { return this._TestimonialsWidgetComponent_0_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TestimonialsWidgetComponent_0_5.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._TestimonialsWidgetComponent_0_5.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TestimonialsWidgetComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_TestimonialsWidgetComponent_Host === (null as any))) { (renderType_TestimonialsWidgetComponent_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_TestimonialsWidgetComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const TestimonialsWidgetComponentNgFactory:import11.ComponentFactory<import0.TestimonialsWidgetComponent> = new import11.ComponentFactory<import0.TestimonialsWidgetComponent>('cvi-testimonials-widget',viewFactory_TestimonialsWidgetComponent_Host0,import0.TestimonialsWidgetComponent);
const styles_TestimonialsWidgetComponent:any[] = [import12.styles];
var renderType_TestimonialsWidgetComponent:import2.RenderComponentType = (null as any);
class _View_TestimonialsWidgetComponent0 extends import1.AppView<import0.TestimonialsWidgetComponent> {
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
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _anchor_27:any;
  /*private*/ _appEl_27:import3.AppElement;
  _TemplateRef_27_5:any;
  _NgFor_27_6:import13.Wrapper_NgFor;
  _text_28:any;
  _text_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _text_33:any;
  _anchor_34:any;
  /*private*/ _appEl_34:import3.AppElement;
  _TemplateRef_34_5:any;
  _NgFor_34_6:import13.Wrapper_NgFor;
  _text_35:any;
  _text_36:any;
  _text_37:any;
  _el_38:any;
  _el_39:any;
  _text_40:any;
  _el_41:any;
  _el_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _text_47:any;
  _text_48:any;
  _text_49:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_TestimonialsWidgetComponent0,renderType_TestimonialsWidgetComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import5.createRenderElement(this.renderer,parentRenderNode,'div',new import5.InlineArray2(2,'class','occupy mob-section testimonials'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import5.createRenderElement(this.renderer,this._el_0,'div',new import5.InlineArray2(2,'class','contain bg-white mob-bg-white home-section clearfix'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import5.createRenderElement(this.renderer,this._el_2,'div',new import5.InlineArray2(2,'class','section-header mob-section-heading'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import5.createRenderElement(this.renderer,this._el_4,'span',new import5.InlineArray2(2,'class','heading pull-left'),(null as any));
    this._el_7 = import5.createRenderElement(this.renderer,this._el_6,'img',new import5.InlineArray2(2,'src','http://assetsintl.craftsvilla.com/cvintlfe/assets/images/ethnic-1.png'),(null as any));
    this._text_8 = this.renderer.createText(this._el_6,' Testimonials',(null as any));
    this._text_9 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._text_10 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_11 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_12 = import5.createRenderElement(this.renderer,this._el_2,'br',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_14 = import5.createRenderElement(this.renderer,this._el_2,'br',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_16 = import5.createRenderElement(this.renderer,this._el_2,'div',new import5.InlineArray2(2,'class','section-body text-center mob-section-body'),(null as any));
    this._text_17 = this.renderer.createText(this._el_16,'\n      ',(null as any));
    this._el_18 = import5.createRenderElement(this.renderer,this._el_16,'div',new import5.InlineArray2(2,'class','row'),(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'\n        ',(null as any));
    this._el_20 = import5.createRenderElement(this.renderer,this._el_18,'div',new import5.InlineArray2(2,'class','col-md-offset-1 col-md-10'),(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'\n          ',(null as any));
    this._el_22 = import5.createRenderElement(this.renderer,this._el_20,'div',new import5.InlineArray8(6,'class','carousel slide','data-ride','carousel','id','quote-carousel'),(null as any));
    this._text_23 = this.renderer.createText(this._el_22,'\n            ',(null as any));
    this._text_24 = this.renderer.createText(this._el_22,'\n            ',(null as any));
    this._el_25 = import5.createRenderElement(this.renderer,this._el_22,'ol',new import5.InlineArray2(2,'class','carousel-indicators'),(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'\n              ',(null as any));
    this._anchor_27 = this.renderer.createTemplateAnchor(this._el_25,(null as any));
    this._appEl_27 = new import3.AppElement(27,25,this,this._anchor_27);
    this._TemplateRef_27_5 = new import14.TemplateRef_(this._appEl_27,viewFactory_TestimonialsWidgetComponent1);
    this._NgFor_27_6 = new import13.Wrapper_NgFor(this._appEl_27.vcRef,this._TemplateRef_27_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_28 = this.renderer.createText(this._el_25,'\n            ',(null as any));
    this._text_29 = this.renderer.createText(this._el_22,'\n\n            ',(null as any));
    this._text_30 = this.renderer.createText(this._el_22,'\n            ',(null as any));
    this._el_31 = import5.createRenderElement(this.renderer,this._el_22,'div',new import5.InlineArray2(2,'class','carousel-inner'),(null as any));
    this._text_32 = this.renderer.createText(this._el_31,'\n              ',(null as any));
    this._text_33 = this.renderer.createText(this._el_31,'\n              ',(null as any));
    this._anchor_34 = this.renderer.createTemplateAnchor(this._el_31,(null as any));
    this._appEl_34 = new import3.AppElement(34,31,this,this._anchor_34);
    this._TemplateRef_34_5 = new import14.TemplateRef_(this._appEl_34,viewFactory_TestimonialsWidgetComponent2);
    this._NgFor_34_6 = new import13.Wrapper_NgFor(this._appEl_34.vcRef,this._TemplateRef_34_5,this.parentInjector.get(import15.IterableDiffers),this.ref);
    this._text_35 = this.renderer.createText(this._el_31,'\n\n            ',(null as any));
    this._text_36 = this.renderer.createText(this._el_22,'\n            ',(null as any));
    this._text_37 = this.renderer.createText(this._el_22,'\n            ',(null as any));
    this._el_38 = import5.createRenderElement(this.renderer,this._el_22,'a',new import5.InlineArray8(6,'class','left carousel-control','data-slide','prev','href','#quote-carousel'),(null as any));
    this._el_39 = import5.createRenderElement(this.renderer,this._el_38,'i',new import5.InlineArray2(2,'class','fa fa-chevron-left'),(null as any));
    this._text_40 = this.renderer.createText(this._el_22,'\n            ',(null as any));
    this._el_41 = import5.createRenderElement(this.renderer,this._el_22,'a',new import5.InlineArray8(6,'class','right carousel-control','data-slide','next','href','#quote-carousel'),(null as any));
    this._el_42 = import5.createRenderElement(this.renderer,this._el_41,'i',new import5.InlineArray2(2,'class','fa fa-chevron-right'),(null as any));
    this._text_43 = this.renderer.createText(this._el_22,'\n          ',(null as any));
    this._text_44 = this.renderer.createText(this._el_20,'\n        ',(null as any));
    this._text_45 = this.renderer.createText(this._el_18,'\n      ',(null as any));
    this._text_46 = this.renderer.createText(this._el_16,'\n    ',(null as any));
    this._text_47 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_48 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_49 = this.renderer.createText(parentRenderNode,'\n',(null as any));
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
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._anchor_27,
      this._text_28,
      this._text_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._anchor_34,
      this._text_35,
      this._text_36,
      this._text_37,
      this._el_38,
      this._el_39,
      this._text_40,
      this._el_41,
      this._el_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._text_46,
      this._text_47,
      this._text_48,
      this._text_49
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.TemplateRef) && (27 === requestNodeIndex))) { return this._TemplateRef_27_5; }
    if (((token === import16.NgFor) && (27 === requestNodeIndex))) { return this._NgFor_27_6.context; }
    if (((token === import14.TemplateRef) && (34 === requestNodeIndex))) { return this._TemplateRef_34_5; }
    if (((token === import16.NgFor) && (34 === requestNodeIndex))) { return this._NgFor_34_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_27_0_0:any = this.context.dataItems;
    this._NgFor_27_6.check_ngForOf(currVal_27_0_0,throwOnChange,false);
    this._NgFor_27_6.detectChangesInInputProps(this,this._anchor_27,throwOnChange);
    const currVal_34_0_0:any = this.context.dataItems;
    this._NgFor_34_6.check_ngForOf(currVal_34_0_0,throwOnChange,false);
    this._NgFor_34_6.detectChangesInInputProps(this,this._anchor_34,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_TestimonialsWidgetComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<import0.TestimonialsWidgetComponent> {
  if ((renderType_TestimonialsWidgetComponent === (null as any))) { (renderType_TestimonialsWidgetComponent = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.Emulated,styles_TestimonialsWidgetComponent,{})); }
  return new _View_TestimonialsWidgetComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_TestimonialsWidgetComponent1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_TestimonialsWidgetComponent1,renderType_TestimonialsWidgetComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
    this._expr_1 = import8.UNINITIALIZED;
    this._expr_2 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import5.createRenderElement(this.renderer,(null as any),'li',new import5.InlineArray2(2,'data-target','#quote-carousel'),(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this.context.index;
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementAttribute(this._el_0,'data-slide-to',((currVal_1 == (null as any))? (null as any): currVal_1.toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = (this.context.index == 0);
    if (import5.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_0,'active',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TestimonialsWidgetComponent1(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_TestimonialsWidgetComponent1(viewUtils,parentInjector,declarationEl);
}
class _View_TestimonialsWidgetComponent2 extends import1.AppView<any> {
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
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  /*private*/ _expr_17:any;
  /*private*/ _expr_18:any;
  /*private*/ _expr_19:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement) {
    super(_View_TestimonialsWidgetComponent2,renderType_TestimonialsWidgetComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
    this._expr_17 = import8.UNINITIALIZED;
    this._expr_18 = import8.UNINITIALIZED;
    this._expr_19 = import8.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import5.createRenderElement(this.renderer,(null as any),'div',new import5.InlineArray2(2,'class','item'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n                ',(null as any));
    this._el_2 = import5.createRenderElement(this.renderer,this._el_0,'blockquote',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n                  ',(null as any));
    this._el_4 = import5.createRenderElement(this.renderer,this._el_2,'div',new import5.InlineArray2(2,'class','row'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n                    ',(null as any));
    this._el_6 = import5.createRenderElement(this.renderer,this._el_4,'div',new import5.InlineArray2(2,'class','col-sm-12'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n                      ',(null as any));
    this._el_8 = import5.createRenderElement(this.renderer,this._el_6,'p',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'',(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n                      ',(null as any));
    this._el_11 = import5.createRenderElement(this.renderer,this._el_6,'small',import5.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_6,'\n                    ',(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n                  ',(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n                ',(null as any));
    this._text_16 = this.renderer.createText(this._el_0,'\n              ',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
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
      this._el_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_17:any = (this.context.index == 0);
    if (import5.checkBinding(throwOnChange,this._expr_17,currVal_17)) {
      this.renderer.setElementClass(this._el_0,'active',currVal_17);
      this._expr_17 = currVal_17;
    }
    const currVal_18:any = import5.interpolate(1,'',this.context.$implicit.testimonial,'');
    if (import5.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setText(this._text_9,currVal_18);
      this._expr_18 = currVal_18;
    }
    const currVal_19:any = import5.interpolate(1,'',this.context.$implicit.userName,'');
    if (import5.checkBinding(throwOnChange,this._expr_19,currVal_19)) {
      this.renderer.setText(this._text_12,currVal_19);
      this._expr_19 = currVal_19;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TestimonialsWidgetComponent2(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_TestimonialsWidgetComponent2(viewUtils,parentInjector,declarationEl);
}