/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './in-media.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './in-media.component.css.shim';
export class Wrapper_InMediaComponent {
  context:import0.InMediaComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.InMediaComponent();
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
var renderType_InMediaComponent_Host:import2.RenderComponentType = (null as any);
class _View_InMediaComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _InMediaComponent_0_4:Wrapper_InMediaComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_InMediaComponent_Host0,renderType_InMediaComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'app-in-media',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_InMediaComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._InMediaComponent_0_4 = new Wrapper_InMediaComponent();
    this._appEl_0.initComponent(this._InMediaComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._InMediaComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.InMediaComponent) && (0 === requestNodeIndex))) { return this._InMediaComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._InMediaComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._InMediaComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_InMediaComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_InMediaComponent_Host === (null as any))) { (renderType_InMediaComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_InMediaComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const InMediaComponentNgFactory:import9.ComponentFactory<import0.InMediaComponent> = new import9.ComponentFactory<import0.InMediaComponent>('app-in-media',viewFactory_InMediaComponent_Host0,import0.InMediaComponent);
const styles_InMediaComponent:any[] = [import10.styles];
var renderType_InMediaComponent:import2.RenderComponentType = (null as any);
class _View_InMediaComponent0 extends import1.AppView<import0.InMediaComponent> {
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
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _text_42:any;
  _text_43:any;
  _el_44:any;
  _text_45:any;
  _el_46:any;
  _text_47:any;
  _text_48:any;
  _el_49:any;
  _text_50:any;
  _el_51:any;
  _text_52:any;
  _text_53:any;
  _el_54:any;
  _text_55:any;
  _text_56:any;
  _el_57:any;
  _text_58:any;
  _text_59:any;
  _el_60:any;
  _text_61:any;
  _text_62:any;
  _el_63:any;
  _text_64:any;
  _text_65:any;
  _text_66:any;
  _el_67:any;
  _text_68:any;
  _el_69:any;
  _text_70:any;
  _text_71:any;
  _el_72:any;
  _text_73:any;
  _el_74:any;
  _text_75:any;
  _text_76:any;
  _el_77:any;
  _text_78:any;
  _text_79:any;
  _text_80:any;
  _text_81:any;
  _text_82:any;
  _text_83:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_InMediaComponent0,renderType_InMediaComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
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
    this._text_7 = this.renderer.createText(this._el_6,'Craftsvilla in Media',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_10 = import4.createRenderElement(this.renderer,this._el_2,'div',new import4.InlineArray2(2,'class','page-content bg-white static-page-content'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_12 = import4.createRenderElement(this.renderer,this._el_10,'h4',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Print:',(null as any));
    this._text_14 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_15 = import4.createRenderElement(this.renderer,this._el_10,'ol',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_17 = import4.createRenderElement(this.renderer,this._el_15,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'The Hindu',(null as any));
    this._text_19 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_20 = import4.createRenderElement(this.renderer,this._el_15,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'LiveMint (Wall Street Journal)',(null as any));
    this._text_22 = this.renderer.createText(this._el_15,'\n        ',(null as any));
    this._el_23 = import4.createRenderElement(this.renderer,this._el_15,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_24 = this.renderer.createText(this._el_23,'Midday',(null as any));
    this._text_25 = this.renderer.createText(this._el_15,'\n      ',(null as any));
    this._text_26 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_27 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_28 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_29 = import4.createRenderElement(this.renderer,this._el_10,'h4',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_30 = this.renderer.createText(this._el_29,'Online:',(null as any));
    this._text_31 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_32 = import4.createRenderElement(this.renderer,this._el_10,'ol',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_33 = this.renderer.createText(this._el_32,'\n        ',(null as any));
    this._el_34 = import4.createRenderElement(this.renderer,this._el_32,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_35 = this.renderer.createText(this._el_34,' Startupbeat.com',(null as any));
    this._text_36 = this.renderer.createText(this._el_32,'\n        ',(null as any));
    this._el_37 = import4.createRenderElement(this.renderer,this._el_32,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_38 = this.renderer.createText(this._el_37,'Techcrunch.com',(null as any));
    this._text_39 = this.renderer.createText(this._el_32,'\n        ',(null as any));
    this._el_40 = import4.createRenderElement(this.renderer,this._el_32,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_41 = this.renderer.createText(this._el_40,'Moneycontrol.com',(null as any));
    this._text_42 = this.renderer.createText(this._el_32,'\n      ',(null as any));
    this._text_43 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_44 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_45 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_46 = import4.createRenderElement(this.renderer,this._el_10,'h4',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_47 = this.renderer.createText(this._el_46,'Blogs:',(null as any));
    this._text_48 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_49 = import4.createRenderElement(this.renderer,this._el_10,'ol',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_50 = this.renderer.createText(this._el_49,'\n        ',(null as any));
    this._el_51 = import4.createRenderElement(this.renderer,this._el_49,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_52 = this.renderer.createText(this._el_51,'Young Upstarts',(null as any));
    this._text_53 = this.renderer.createText(this._el_49,'\n        ',(null as any));
    this._el_54 = import4.createRenderElement(this.renderer,this._el_49,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_55 = this.renderer.createText(this._el_54,'Tanya Munshi',(null as any));
    this._text_56 = this.renderer.createText(this._el_49,'\n        ',(null as any));
    this._el_57 = import4.createRenderElement(this.renderer,this._el_49,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_58 = this.renderer.createText(this._el_57,'Think Change India',(null as any));
    this._text_59 = this.renderer.createText(this._el_49,'\n        ',(null as any));
    this._el_60 = import4.createRenderElement(this.renderer,this._el_49,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_61 = this.renderer.createText(this._el_60,'Indian Makeup Ways',(null as any));
    this._text_62 = this.renderer.createText(this._el_49,'\n        ',(null as any));
    this._el_63 = import4.createRenderElement(this.renderer,this._el_49,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_64 = this.renderer.createText(this._el_63,'Youth Talent Auzzar',(null as any));
    this._text_65 = this.renderer.createText(this._el_49,'\n      ',(null as any));
    this._text_66 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_67 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_68 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_69 = import4.createRenderElement(this.renderer,this._el_10,'h4',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_70 = this.renderer.createText(this._el_69,'TV/Videos:',(null as any));
    this._text_71 = this.renderer.createText(this._el_10,'\n      ',(null as any));
    this._el_72 = import4.createRenderElement(this.renderer,this._el_10,'ol',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_73 = this.renderer.createText(this._el_72,'\n        ',(null as any));
    this._el_74 = import4.createRenderElement(this.renderer,this._el_72,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_75 = this.renderer.createText(this._el_74,'CNBC Young Turks: Monica Gupta Interview on CNBC',(null as any));
    this._text_76 = this.renderer.createText(this._el_72,'\n        ',(null as any));
    this._el_77 = import4.createRenderElement(this.renderer,this._el_72,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_78 = this.renderer.createText(this._el_77,'ETNow Starting Up: Monica Gupta Interview on ETNow',(null as any));
    this._text_79 = this.renderer.createText(this._el_72,'\n      ',(null as any));
    this._text_80 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_81 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_82 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_83 = this.renderer.createText(parentRenderNode,'\n',(null as any));
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
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._text_42,
      this._text_43,
      this._el_44,
      this._text_45,
      this._el_46,
      this._text_47,
      this._text_48,
      this._el_49,
      this._text_50,
      this._el_51,
      this._text_52,
      this._text_53,
      this._el_54,
      this._text_55,
      this._text_56,
      this._el_57,
      this._text_58,
      this._text_59,
      this._el_60,
      this._text_61,
      this._text_62,
      this._el_63,
      this._text_64,
      this._text_65,
      this._text_66,
      this._el_67,
      this._text_68,
      this._el_69,
      this._text_70,
      this._text_71,
      this._el_72,
      this._text_73,
      this._el_74,
      this._text_75,
      this._text_76,
      this._el_77,
      this._text_78,
      this._text_79,
      this._text_80,
      this._text_81,
      this._text_82,
      this._text_83
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_InMediaComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.InMediaComponent> {
  if ((renderType_InMediaComponent === (null as any))) { (renderType_InMediaComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_InMediaComponent,{})); }
  return new _View_InMediaComponent0(viewUtils,parentInjector,declarationEl);
}