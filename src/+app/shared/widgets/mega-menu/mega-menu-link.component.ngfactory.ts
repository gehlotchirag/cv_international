/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './mega-menu-link.component';
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
import * as import11 from '../../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/common/src/location/location_strategy';
import * as import15 from '@angular/router/src/directives/router_link';
export class Wrapper_MegaMenuLinkComponent {
  context:import0.MegaMenuLinkComponent;
  changed:boolean;
  changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.changes = {};
    this.context = new import0.MegaMenuLinkComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
  }
  check_categoryData(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this.changed = true;
      this.context.categoryData = currValue;
      this.changes['categoryData'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_prevElem(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this.changed = true;
      this.context.prevElem = currValue;
      this.changes['prevElem'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_categorySelected(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import2.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this.changed = true;
      this.context.categorySelected = currValue;
      this.changes['categorySelected'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  detectChangesInInputProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this.changes);
      this.changes = {};
    } }
    return changed;
  }
  detectChangesInHostProps(view:import3.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_MegaMenuLinkComponent_Host:import4.RenderComponentType = (null as any);
class _View_MegaMenuLinkComponent_Host0 extends import3.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import5.AppElement;
  _MegaMenuLinkComponent_0_4:Wrapper_MegaMenuLinkComponent;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_MegaMenuLinkComponent_Host0,renderType_MegaMenuLinkComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import5.AppElement {
    this._el_0 = import2.selectOrCreateRenderHostElement(this.renderer,'cv-menu-link',import2.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import5.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MegaMenuLinkComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MegaMenuLinkComponent_0_4 = new Wrapper_MegaMenuLinkComponent(new import8.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._MegaMenuLinkComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._MegaMenuLinkComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MegaMenuLinkComponent) && (0 === requestNodeIndex))) { return this._MegaMenuLinkComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MegaMenuLinkComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._MegaMenuLinkComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MegaMenuLinkComponent_Host0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<any> {
  if ((renderType_MegaMenuLinkComponent_Host === (null as any))) { (renderType_MegaMenuLinkComponent_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_MegaMenuLinkComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const MegaMenuLinkComponentNgFactory:import10.ComponentFactory<import0.MegaMenuLinkComponent> = new import10.ComponentFactory<import0.MegaMenuLinkComponent>('cv-menu-link',viewFactory_MegaMenuLinkComponent_Host0,import0.MegaMenuLinkComponent);
const styles_MegaMenuLinkComponent:any[] = ([] as any[]);
var renderType_MegaMenuLinkComponent:import4.RenderComponentType = (null as any);
class _View_MegaMenuLinkComponent0 extends import3.AppView<import0.MegaMenuLinkComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _RouterLinkWithHref_3_3:import11.Wrapper_RouterLinkWithHref;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement) {
    super(_View_MegaMenuLinkComponent0,renderType_MegaMenuLinkComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_8 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import5.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._el_1 = import2.createRenderElement(this.renderer,parentRenderNode,'li',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._el_3 = import2.createRenderElement(this.renderer,this._el_1,'a',import2.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_3_3 = new import11.Wrapper_RouterLinkWithHref(this.parentInjector.get(import12.Router),this.parentInjector.get(import13.ActivatedRoute),this.parentInjector.get(import14.LocationStrategy));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_1,'mouseover',this.eventHandler(this._handle_mouseover_1_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_1,'mouseleave',this.eventHandler(this._handle_mouseleave_1_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_3,'click',this.eventHandler(this._handle_click_3_0.bind(this)));
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
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
    if (((token === import15.RouterLinkWithHref) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._RouterLinkWithHref_3_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:any = this.context.getRouterLink(this.context.categoryData.href)['qp'];
    this._RouterLinkWithHref_3_3.check_queryParams(currVal_3_0_0,throwOnChange,false);
    const currVal_3_0_1:any = this.context.getRouterLink(this.context.categoryData.href)['rl'];
    this._RouterLinkWithHref_3_3.check_routerLink(currVal_3_0_1,throwOnChange,false);
    this._RouterLinkWithHref_3_3.detectChangesInInputProps(this,this._el_3,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._RouterLinkWithHref_3_3.detectChangesInHostProps(this,this._el_3,throwOnChange);
    const currVal_8:any = import2.interpolate(1,'\n      ',this.context.categoryData.name,'\n    ');
    if (import2.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setText(this._text_4,currVal_8);
      this._expr_8 = currVal_8;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_3_3.context.ngOnDestroy();
  }
  private _handle_mouseover_1_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_1_0:any = ((<any>this.context.onMouseEnter()) !== false);
    return (true && pd_1_0);
  }
  private _handle_mouseleave_1_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_1_0:any = ((<any>this.context.onMouseLeave()) !== false);
    return (true && pd_1_0);
  }
  private _handle_click_3_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_3_0:any = ((<any>this._RouterLinkWithHref_3_3.context.onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
    return (true && pd_3_0);
  }
}
export function viewFactory_MegaMenuLinkComponent0(viewUtils:import2.ViewUtils,parentInjector:import6.Injector,declarationEl:import5.AppElement):import3.AppView<import0.MegaMenuLinkComponent> {
  if ((renderType_MegaMenuLinkComponent === (null as any))) { (renderType_MegaMenuLinkComponent = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_MegaMenuLinkComponent,{})); }
  return new _View_MegaMenuLinkComponent0(viewUtils,parentInjector,declarationEl);
}