/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './product-card.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view_utils';
import * as import3 from '@angular/core/src/linker/view';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/linker/element';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './product-card.component.css.shim';
import * as import11 from '../../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '../../lazyload-image/lazyload-image.directive.ngfactory';
import * as import13 from '@angular/common/src/pipes/number_pipe';
import * as import14 from '@angular/router/src/router';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/common/src/location/location_strategy';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/core/src/i18n/tokens';
import * as import19 from '../../lazyload-image/lazyload-image.directive';
import * as import20 from '@angular/router/src/directives/router_link';
import * as import21 from '@angular/core/src/security';
export class Wrapper_ProductCardComponent {
  context:import0.ProductCardComponent;
  changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor() {
    this.changed = false;
    this.context = new import0.ProductCardComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
  }
  check_product(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.product = currValue;
      this._expr_0 = currValue;
    }
  }
  check_showSizeInfo(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this.changed = true;
      this.context.showSizeInfo = currValue;
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
var renderType_ProductCardComponent_Host:import4.RenderComponentType = (null as any);
class _View_ProductCardComponent_Host0 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _ProductCardComponent_0_4:Wrapper_ProductCardComponent;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_ProductCardComponent_Host0,renderType_ProductCardComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'cvi-product-card',import2.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ProductCardComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ProductCardComponent_0_4 = new Wrapper_ProductCardComponent();
    this._appEl_0.initComponent(this._ProductCardComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ProductCardComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ProductCardComponent) && (0 === requestNodeIndex))) { return this._ProductCardComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ProductCardComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._ProductCardComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ProductCardComponent_Host0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  if ((renderType_ProductCardComponent_Host === (null as any))) { (renderType_ProductCardComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ProductCardComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const ProductCardComponentNgFactory:import9.ComponentFactory<import0.ProductCardComponent> = new import9.ComponentFactory<import0.ProductCardComponent>('cvi-product-card',viewFactory_ProductCardComponent_Host0,import0.ProductCardComponent);
const styles_ProductCardComponent:any[] = [import10.styles];
var renderType_ProductCardComponent:import4.RenderComponentType = (null as any);
class _View_ProductCardComponent0 extends import3.AppView<import0.ProductCardComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  _RouterLinkWithHref_3_3:import11.Wrapper_RouterLinkWithHref;
  _text_4:any;
  _el_5:any;
  _LazyLoadImageDirective_5_3:import12.Wrapper_LazyLoadImageDirective;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  /*private*/ _expr_30:any;
  /*private*/ _expr_31:any;
  /*private*/ _expr_32:any;
  _pipe_currency_0:import13.CurrencyPipe;
  _pipe_currency_0_0:any;
  /*private*/ _expr_35:any;
  _pipe_currency_0_1:any;
  /*private*/ _expr_37:any;
  _pipe_number_1:import13.DecimalPipe;
  _pipe_number_1_0:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_ProductCardComponent0,renderType_ProductCardComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_30 = import1.UNINITIALIZED;
    this._expr_31 = import1.UNINITIALIZED;
    this._expr_32 = import1.UNINITIALIZED;
    this._expr_35 = import1.UNINITIALIZED;
    this._expr_37 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import2.createRenderElement(this.renderer,parentRenderNode,'div',new import2.InlineArray2(2,'class','product-listing'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._text_2 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_3 = import2.createRenderElement(this.renderer,this._el_0,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_3_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import14.Router),this.parentInjector.get(import15.ActivatedRoute),this.parentInjector.get(import16.LocationStrategy));
    this._text_4 = this.renderer.createText(this._el_3,'\n		',(null as any));
    this._el_5 = import2.createRenderElement(this.renderer,this._el_3,'img',new import2.InlineArray8(6,'alt','','class','img-responsive loading','lazyLoad',''),(null as any));
    this._LazyLoadImageDirective_5_3 = new import12.Wrapper_LazyLoadImageDirective(new import17.ElementRef(this._el_5),this.renderer);
    this._text_6 = this.renderer.createText(this._el_3,'\n		',(null as any));
    this._el_7 = import2.createRenderElement(this.renderer,this._el_3,'div',new import2.InlineArray2(2,'class','product-info'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'\n			',(null as any));
    this._el_9 = import2.createRenderElement(this.renderer,this._el_7,'div',new import2.InlineArray2(2,'class','product-name'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'',(null as any));
    this._text_11 = this.renderer.createText(this._el_7,'\n			',(null as any));
    this._el_12 = import2.createRenderElement(this.renderer,this._el_7,'div',new import2.InlineArray2(2,'class','product-price'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n				',(null as any));
    this._el_14 = import2.createRenderElement(this.renderer,this._el_12,'span',new import2.InlineArray2(2,'class','discounted-price'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'',(null as any));
    this._text_16 = this.renderer.createText(this._el_12,' \n				',(null as any));
    this._el_17 = import2.createRenderElement(this.renderer,this._el_12,'span',new import2.InlineArray2(2,'class','actual-price'),(null as any));
    this._el_18 = import2.createRenderElement(this.renderer,this._el_17,'s',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'',(null as any));
    this._text_20 = this.renderer.createText(this._el_12,' \n				',(null as any));
    this._el_21 = import2.createRenderElement(this.renderer,this._el_12,'span',new import2.InlineArray2(2,'class','discount'),(null as any));
    this._text_22 = this.renderer.createText(this._el_21,'',(null as any));
    this._text_23 = this.renderer.createText(this._el_12,'\n			',(null as any));
    this._text_24 = this.renderer.createText(this._el_7,'\n		',(null as any));
    this._text_25 = this.renderer.createText(this._el_3,'\n	',(null as any));
    this._text_26 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_27 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_3,'click',this.eventHandler(this._handle_click_3_0.bind(this)));
    this._pipe_currency_0 = new import13.CurrencyPipe(this.parentInjector.get(import18.LOCALE_ID));
    this._pipe_currency_0_0 = import2.pureProxy4(this._pipe_currency_0.transform.bind(this._pipe_currency_0));
    this._pipe_currency_0_1 = import2.pureProxy4(this._pipe_currency_0.transform.bind(this._pipe_currency_0));
    this._pipe_number_1 = new import13.DecimalPipe(this.parentInjector.get(import18.LOCALE_ID));
    this._pipe_number_1_0 = import2.pureProxy2(this._pipe_number_1.transform.bind(this._pipe_number_1));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._el_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._text_26,
      this._text_27
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.LazyLoadImageDirective) && (5 === requestNodeIndex))) { return this._LazyLoadImageDirective_5_3.context; }
    if (((token === import20.RouterLinkWithHref) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 25)))) { return this._RouterLinkWithHref_3_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const valUnwrapper:any = new import1.ValueUnwrapper();
    const currVal_3_0_0:any = import2.interpolate(2,'/shop/',this.context.product.slug,'/',this.context.product.productId,'');
    this._RouterLinkWithHref_3_3.check_routerLink(currVal_3_0_0,throwOnChange,false);
    this._RouterLinkWithHref_3_3.detectChangesInInputProps(this,this._el_3,throwOnChange);
    this._LazyLoadImageDirective_5_3.detectChangesInInputProps(this,this._el_5,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._RouterLinkWithHref_3_3.detectChangesInHostProps(this,this._el_3,throwOnChange);
    const currVal_30:any = import2.interpolate(1,'',this.context.product.imgUrl,'');
    if (import2.checkBinding(throwOnChange,this._expr_30,currVal_30)) {
      this.renderer.setElementProperty(this._el_5,'src',this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL,currVal_30));
      this._expr_30 = currVal_30;
    }
    this._LazyLoadImageDirective_5_3.detectChangesInHostProps(this,this._el_5,throwOnChange);
    const currVal_31:any = import2.interpolate(1,'',this.context.product.title,'');
    if (import2.checkBinding(throwOnChange,this._expr_31,currVal_31)) {
      this.renderer.setText(this._text_10,currVal_31);
      this._expr_31 = currVal_31;
    }
    valUnwrapper.reset();
    const currVal_32:any = import2.interpolate(1,'',valUnwrapper.unwrap(import2.castByValue(this._pipe_currency_0_0,this._pipe_currency_0.transform)(this.context.product.discountedPrice,'USD',true,'1.0-0')),'');
    if ((valUnwrapper.hasWrappedValue || import2.checkBinding(throwOnChange,this._expr_32,currVal_32))) {
      this.renderer.setText(this._text_15,currVal_32);
      this._expr_32 = currVal_32;
    }
    valUnwrapper.reset();
    const currVal_35:any = import2.interpolate(1,'',valUnwrapper.unwrap(import2.castByValue(this._pipe_currency_0_1,this._pipe_currency_0.transform)(this.context.product.regularPrice,'USD',true,'1.0-0')),'');
    if ((valUnwrapper.hasWrappedValue || import2.checkBinding(throwOnChange,this._expr_35,currVal_35))) {
      this.renderer.setText(this._text_19,currVal_35);
      this._expr_35 = currVal_35;
    }
    valUnwrapper.reset();
    const currVal_37:any = import2.interpolate(1,'',valUnwrapper.unwrap(import2.castByValue(this._pipe_number_1_0,this._pipe_number_1.transform)(this.context.product.discountPercentage,'3.1-5')),'');
    if ((valUnwrapper.hasWrappedValue || import2.checkBinding(throwOnChange,this._expr_37,currVal_37))) {
      this.renderer.setText(this._text_22,currVal_37);
      this._expr_37 = currVal_37;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_3_3.context.ngOnDestroy();
  }
  private _handle_click_3_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_3_0:any = ((<any>this._RouterLinkWithHref_3_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_3_0);
  }
}
export function viewFactory_ProductCardComponent0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<import0.ProductCardComponent> {
  if ((renderType_ProductCardComponent === (null as any))) { (renderType_ProductCardComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_ProductCardComponent,{})); }
  return new _View_ProductCardComponent0(viewUtils,parentInjector,declarationEl);
}