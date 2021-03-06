/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './about-us.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './about-us.component.css.shim';
export class Wrapper_AboutUsComponent {
  context:import0.AboutUsComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.AboutUsComponent();
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
var renderType_AboutUsComponent_Host:import2.RenderComponentType = (null as any);
class _View_AboutUsComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _AboutUsComponent_0_4:Wrapper_AboutUsComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AboutUsComponent_Host0,renderType_AboutUsComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'app-about-us',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AboutUsComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AboutUsComponent_0_4 = new Wrapper_AboutUsComponent();
    this._appEl_0.initComponent(this._AboutUsComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AboutUsComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AboutUsComponent) && (0 === requestNodeIndex))) { return this._AboutUsComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AboutUsComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._AboutUsComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AboutUsComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AboutUsComponent_Host === (null as any))) { (renderType_AboutUsComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AboutUsComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AboutUsComponentNgFactory:import9.ComponentFactory<import0.AboutUsComponent> = new import9.ComponentFactory<import0.AboutUsComponent>('app-about-us',viewFactory_AboutUsComponent_Host0,import0.AboutUsComponent);
const styles_AboutUsComponent:any[] = [import10.styles];
var renderType_AboutUsComponent:import2.RenderComponentType = (null as any);
class _View_AboutUsComponent0 extends import1.AppView<import0.AboutUsComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  _el_21:any;
  _text_22:any;
  _el_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _el_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _el_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AboutUsComponent0,renderType_AboutUsComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import4.createRenderElement(this.renderer,parentRenderNode,'div',new import4.InlineArray2(2,'class','content wishlist-page'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import4.createRenderElement(this.renderer,this._el_0,'div',new import4.InlineArray2(2,'class','contain'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import4.createRenderElement(this.renderer,this._el_2,'div',new import4.InlineArray2(2,'class','page-heading text-center static-page-heading'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import4.createRenderElement(this.renderer,this._el_4,'h1',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'About us',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_10 = import4.createRenderElement(this.renderer,this._el_2,'div',new import4.InlineArray2(2,'class','page-content bg-white static-page-content'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_12 = import4.createRenderElement(this.renderer,this._el_10,'p',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Craftsvilla.com is a marketplace to "Discover Unique Indian Products" including Handmade, Vintage, Ethnic, Organic and Natural products from India.',(null as any));
    this._el_14 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._el_15 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_16 = this.renderer.createText(this._el_12,' India is a beautiful assortment of diversity reflected in our Clothing, Food, Lifestyle,\n        Language, Music, Books etc. This diversity is so rich and diverse that an attempt to capture it on a single platform was never made. Craftsvilla.com is that sincere attempt by bunch of young insane guys and gals who think this is possible now\n        with the Internet.',(null as any));
    this._el_17 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._el_18 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_19 = this.renderer.createText(this._el_12,' Craftsvilla.com uses a marketplace model to capture the regional variations of India. We connect local artisans and designers directly to global customers and thereby increase their livelihood, remove middlemen, help\n        them create/promote their brand and thereby preserve our culture, traditions and values. We believe this journey will not only help artisans of India but also help customers discover and buy products which they otherwise are not able to do today.',(null as any));
    this._el_20 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._el_21 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_22 = this.renderer.createText(this._el_12,'        As they say starting Craftsvilla.com was fate, reaching out to artisans was a choice, but falling in love with the idea of India was beyond our control. Lets relive that old India together again.',(null as any));
    this._el_23 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._el_24 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_25 = this.renderer.createText(this._el_12,' Craftsvilla.com is funded by US based Investors:\n        Nexus Venture Partners and Lightspeed Venture Partners. Craftsvilla.com has also been hailed in the various media including Times of India, Hindu, Economic Times, WSJ etc as the "Hottest Young Company in Handicrafts in India" which is bringing\n        positive change in the livelihood of base level artisans and designers.',(null as any));
    this._el_26 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._el_27 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_28 = this.renderer.createText(this._el_12,' Customer delight is our motto. Please write to us directly if you have any feedback, questions, concerns or suggestions.\n        ',(null as any));
    this._el_29 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._el_30 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_31 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._el_32 = import4.createRenderElement(this.renderer,this._el_12,'i',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_33 = this.renderer.createText(this._el_32,'Yours Truly,',(null as any));
    this._el_34 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_35 = this.renderer.createText(this._el_12,' Craftsvilla Family',(null as any));
    this._el_36 = import4.createRenderElement(this.renderer,this._el_12,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_37 = this.renderer.createText(this._el_12,' Email:\n        ',(null as any));
    this._el_38 = import4.createRenderElement(this.renderer,this._el_12,'a',new import4.InlineArray2(2,'href','hello@craftsvilla.com'),(null as any));
    this._text_39 = this.renderer.createText(this._el_38,' ',(null as any));
    this._el_40 = import4.createRenderElement(this.renderer,this._el_38,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_41 = this.renderer.createText(this._el_40,'hello@craftsvilla.com',(null as any));
    this._text_42 = this.renderer.createText(this._el_12,'\n      ',(null as any));
    this._text_43 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_44 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_45 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_46 = this.renderer.createText(parentRenderNode,'\n',(null as any));
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
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._el_27,
      this._text_28,
      this._el_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._el_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._text_46
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_AboutUsComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AboutUsComponent> {
  if ((renderType_AboutUsComponent === (null as any))) { (renderType_AboutUsComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_AboutUsComponent,{})); }
  return new _View_AboutUsComponent0(viewUtils,parentInjector,declarationEl);
}