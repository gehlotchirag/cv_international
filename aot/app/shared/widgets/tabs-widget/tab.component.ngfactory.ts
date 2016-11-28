/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../../../app/shared/widgets/tabs-widget/tab.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_Tab_Host:import0.RenderComponentType = (null as any);
class _View_Tab_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Tab_0_4:import3.Tab;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Tab_Host0,renderType_Tab_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('tab',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Tab0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Tab_0_4 = new import3.Tab();
    this._appEl_0.initComponent(this._Tab_0_4,[],compView_0);
    compView_0.create(this._Tab_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.Tab) && (0 === requestNodeIndex))) { return this._Tab_0_4; }
    return notFoundResult;
  }
}
function viewFactory_Tab_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_Tab_Host === (null as any))) { (renderType_Tab_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_Tab_Host0(viewUtils,parentInjector,declarationEl);
}
export const TabNgFactory:import9.ComponentFactory<import3.Tab> = new import9.ComponentFactory<import3.Tab>('tab',viewFactory_Tab_Host0,import3.Tab);
const styles_Tab:any[] = ['.pane[_ngcontent-%COMP%]{\n      padding: 1em;\n    }'];
var renderType_Tab:import0.RenderComponentType = (null as any);
class _View_Tab0 extends import1.AppView<import3.Tab> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_Tab0,renderType_Tab,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','pane');
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this.renderer.projectNodes(this._el_1,import4.flattenNestedViewRenderNodes(this.projectableNodes[0]));
    this._text_3 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_4 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._text_3,
      this._text_4
    ]
    ,[],[]);
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:boolean = !this.context.active;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_1,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
export function viewFactory_Tab0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.Tab> {
  if ((renderType_Tab === (null as any))) { (renderType_Tab = viewUtils.createRenderComponentType('/home/craftsvilla/angular2-aot-webpack2-rollup/app/shared/widgets/tabs-widget/tab.component.ts class Tab - inline template',1,import8.ViewEncapsulation.Emulated,styles_Tab,{})); }
  return new _View_Tab0(viewUtils,parentInjector,declarationEl);
}