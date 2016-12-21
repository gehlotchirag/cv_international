/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './pagination.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './pagination.component.css.shim';
import * as import11 from '../../../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import12 from '../../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import14 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from '@angular/core/src/linker/template_ref';
import * as import17 from '@angular/common/src/directives/ng_class';
import * as import18 from '@angular/common/src/directives/ng_for';
export class Wrapper_PaginationComponent {
  context:import0.PaginationComponent;
  changed:boolean;
  changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor() {
    this.changed = false;
    this.changes = {};
    this.context = new import0.PaginationComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  check_totalPages(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.totalPages = currValue;
      this.changes['totalPages'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_currentPage(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this.changed = true;
      this.context.currentPage = currValue;
      this.changes['currentPage'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_maxSize(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this.changed = true;
      this.context.maxSize = currValue;
      this.changes['maxSize'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
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
var renderType_PaginationComponent_Host:import4.RenderComponentType = (null as any);
class _View_PaginationComponent_Host0 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _PaginationComponent_0_4:Wrapper_PaginationComponent;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_PaginationComponent_Host0,renderType_PaginationComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'cvi-pagination',import2.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PaginationComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PaginationComponent_0_4 = new Wrapper_PaginationComponent();
    this._appEl_0.initComponent(this._PaginationComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._PaginationComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PaginationComponent) && (0 === requestNodeIndex))) { return this._PaginationComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PaginationComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._PaginationComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PaginationComponent_Host0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  if ((renderType_PaginationComponent_Host === (null as any))) { (renderType_PaginationComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_PaginationComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const PaginationComponentNgFactory:import9.ComponentFactory<import0.PaginationComponent> = new import9.ComponentFactory<import0.PaginationComponent>('cvi-pagination',viewFactory_PaginationComponent_Host0,import0.PaginationComponent);
const styles_PaginationComponent:any[] = [import10.styles];
var renderType_PaginationComponent:import4.RenderComponentType = (null as any);
class _View_PaginationComponent0 extends import3.AppView<import0.PaginationComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _NgClass_4_3:import11.Wrapper_NgClass;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _appEl_10:import5.AppElement;
  _TemplateRef_10_5:any;
  _NgFor_10_6:import12.Wrapper_NgFor;
  _text_11:any;
  _el_12:any;
  _NgClass_12_3:import11.Wrapper_NgClass;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _map_25:any;
  /*private*/ _expr_26:any;
  _map_27:any;
  /*private*/ _expr_28:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_PaginationComponent0,renderType_PaginationComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._map_25 = import2.pureProxy1((p0:any):{[key: string]:any} => {
      return {disabled: p0};
    });
    this._expr_26 = import1.UNINITIALIZED;
    this._map_27 = import2.pureProxy1((p0:any):{[key: string]:any} => {
      return {disabled: p0};
    });
    this._expr_28 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import2.createRenderElement(this.renderer,parentRenderNode,'nav',new import2.InlineArray4(4,'aria-label','cvi-pagination','class','text-center inline listing-pagination'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'ul',new import2.InlineArray2(2,'class','pagination'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import2.createRenderElement(this.renderer,this._el_2,'li',new import2.InlineArray2(2,'class','pagination-prev'),(null as any));
    this._NgClass_4_3 = new import11.Wrapper_NgClass(this.parentInjector.get(import13.IterableDiffers),this.parentInjector.get(import14.KeyValueDiffers),new import15.ElementRef(this._el_4),this.renderer);
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import2.createRenderElement(this.renderer,this._el_4,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'<<',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._appEl_10 = new import5.AppElement(10,2,this,this._anchor_10);
    this._TemplateRef_10_5 = new import16.TemplateRef_(this._appEl_10,viewFactory_PaginationComponent1);
    this._NgFor_10_6 = new import12.Wrapper_NgFor(this._appEl_10.vcRef,this._TemplateRef_10_5,this.parentInjector.get(import13.IterableDiffers),this.ref);
    this._text_11 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_12 = import2.createRenderElement(this.renderer,this._el_2,'li',new import2.InlineArray2(2,'class','pagination-next'),(null as any));
    this._NgClass_12_3 = new import11.Wrapper_NgClass(this.parentInjector.get(import13.IterableDiffers),this.parentInjector.get(import14.KeyValueDiffers),new import15.ElementRef(this._el_12),this.renderer);
    this._text_13 = this.renderer.createText(this._el_12,'\n      ',(null as any));
    this._el_14 = import2.createRenderElement(this.renderer,this._el_12,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'>>',(null as any));
    this._text_16 = this.renderer.createText(this._el_12,'\n    ',(null as any));
    this._text_17 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_18 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_19 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_6,'click',this.eventHandler(this._handle_click_6_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_14,'click',this.eventHandler(this._handle_click_14_0.bind(this)));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._anchor_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._text_17,
      this._text_18,
      this._text_19
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.NgClass) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._NgClass_4_3.context; }
    if (((token === import16.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import18.NgFor) && (10 === requestNodeIndex))) { return this._NgFor_10_6.context; }
    if (((token === import17.NgClass) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._NgClass_12_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4_0_0:any = 'pagination-prev';
    this._NgClass_4_3.check_klass(currVal_4_0_0,throwOnChange,false);
    const currVal_4_0_1:any = this._map_25(this.context.noPrevious());
    this._NgClass_4_3.check_ngClass(currVal_4_0_1,throwOnChange,false);
    this._NgClass_4_3.detectChangesInInputProps(this,this._el_4,throwOnChange);
    const currVal_10_0_0:any = this.context.pages;
    this._NgFor_10_6.check_ngForOf(currVal_10_0_0,throwOnChange,false);
    this._NgFor_10_6.detectChangesInInputProps(this,this._anchor_10,throwOnChange);
    const currVal_12_0_0:any = 'pagination-next';
    this._NgClass_12_3.check_klass(currVal_12_0_0,throwOnChange,false);
    const currVal_12_0_1:any = this._map_27(this.context.noNext());
    this._NgClass_12_3.check_ngClass(currVal_12_0_1,throwOnChange,false);
    this._NgClass_12_3.detectChangesInInputProps(this,this._el_12,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NgClass_4_3.detectChangesInHostProps(this,this._el_4,throwOnChange);
    const currVal_26:any = this.context.noPrevious();
    if (import2.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setElementAttribute(this._el_6,'disabled',((currVal_26 == (null as any))? (null as any): currVal_26.toString()));
      this._expr_26 = currVal_26;
    }
    this._NgClass_12_3.detectChangesInHostProps(this,this._el_12,throwOnChange);
    const currVal_28:any = this.context.noNext();
    if (import2.checkBinding(throwOnChange,this._expr_28,currVal_28)) {
      this.renderer.setElementAttribute(this._el_14,'disabled',((currVal_28 == (null as any))? (null as any): currVal_28.toString()));
      this._expr_28 = currVal_28;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_6_0:any = ((<any>this.context.selectPage((this.context.currentPage - 1),$event)) !== false);
    return (true && pd_6_0);
  }
  private _handle_click_14_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_14_0:any = ((<any>this.context.selectPage((this.context.currentPage + 1),$event)) !== false);
    return (true && pd_14_0);
  }
}
export function viewFactory_PaginationComponent0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<import0.PaginationComponent> {
  if ((renderType_PaginationComponent === (null as any))) { (renderType_PaginationComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_PaginationComponent,{})); }
  return new _View_PaginationComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_PaginationComponent1 extends import3.AppView<any> {
  _el_0:any;
  _NgClass_0_3:import11.Wrapper_NgClass;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _map_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_PaginationComponent1,renderType_PaginationComponent,import7.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._map_6 = import2.pureProxy1((p0:any):{[key: string]:any} => {
      return {active: p0};
    });
    this._expr_7 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.createRenderElement(this.renderer,(null as any),'li',new import2.InlineArray2(2,'class','pagination-page'),(null as any));
    this._NgClass_0_3 = new import11.Wrapper_NgClass(this.parent.parentInjector.get(import13.IterableDiffers),this.parent.parentInjector.get(import14.KeyValueDiffers),new import15.ElementRef(this._el_0),this.renderer);
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = import2.createRenderElement(this.renderer,this._el_0,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.NgClass) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._NgClass_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = 'pagination-page';
    this._NgClass_0_3.check_klass(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this._map_6(this.context.$implicit.active);
    this._NgClass_0_3.check_ngClass(currVal_0_0_1,throwOnChange,false);
    this._NgClass_0_3.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._NgClass_0_3.detectChangesInHostProps(this,this._el_0,throwOnChange);
    const currVal_7:any = import2.interpolate(1,'',this.context.$implicit.text,'');
    if (import2.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setText(this._text_3,currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_2_0:any = ((<any>this.parent.context.selectPage(this.context.$implicit.number,$event)) !== false);
    return (true && pd_2_0);
  }
}
function viewFactory_PaginationComponent1(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  return new _View_PaginationComponent1(viewUtils,parentInjector,declarationEl);
}