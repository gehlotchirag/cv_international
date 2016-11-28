/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../app/shared/services/http-client.service';
import * as import4 from '../../app/app.component';
import * as import5 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/di/injector';
import * as import7 from '@angular/core/src/linker/view_type';
import * as import8 from '@angular/core/src/change_detection/change_detection';
import * as import9 from '@angular/http/src/http';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from './app.component.css.shim';
import * as import14 from '../../app/shared/services/cart-details.service';
import * as import15 from '../../app/shared/widgets/header/header.component';
import * as import16 from '@angular/router/src/directives/router_outlet';
import * as import17 from '../../app/shared/widgets/footer/footer.component';
import * as import18 from './shared/widgets/header/header.component.ngfactory';
import * as import19 from '@angular/core/src/linker/component_factory_resolver';
import * as import20 from './shared/widgets/mega-menu/mega-menu.component.ngfactory';
import * as import21 from '@angular/router/src/router_outlet_map';
import * as import22 from '@angular/core/src/linker/component_factory_resolver';
import * as import23 from './shared/widgets/footer/footer.component.ngfactory';
var renderType_AppComponent_Host:import0.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HttpClientService_0_4:import3.HttpClientService;
  _AppComponent_0_5:import4.AppComponent;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import7.ViewType.HOST,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('cvi-root',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HttpClientService_0_4 = new import3.HttpClientService(this.parentInjector.get(import9.Http));
    this._AppComponent_0_5 = new import4.AppComponent(this.parentInjector.get(import10.Router),this._HttpClientService_0_4);
    this._appEl_0.initComponent(this._AppComponent_0_5,[],compView_0);
    compView_0.create(this._AppComponent_0_5,this.projectableNodes,(null as any));
    var disposable_0:Function = this.renderer.listenGlobal('window','scroll',this.eventHandler(this._handle_scroll_0_0.bind(this)));
    this.init([].concat([this._el_0]),[this._el_0],[disposable_0],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.HttpClientService) && (0 === requestNodeIndex))) { return this._HttpClientService_0_4; }
    if (((token === import4.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_5; }
    return notFoundResult;
  }
  private _handle_scroll_0_0($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._AppComponent_0_5.showMegaMenu($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import12.ComponentFactory<import4.AppComponent> = new import12.ComponentFactory<import4.AppComponent>('cvi-root',viewFactory_AppComponent_Host0,import4.AppComponent);
const styles_AppComponent:any[] = [import13.styles];
var renderType_AppComponent:import0.RenderComponentType = (null as any);
class _View_AppComponent0 extends import1.AppView<import4.AppComponent> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ComponentFactoryResolver_0_4:any;
  _CartDetailsService_0_5:import14.CartDetailsService;
  _HeaderComponent_0_6:import15.HeaderComponent;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _RouterOutlet_4_5:import16.RouterOutlet;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  /*private*/ _appEl_7:import2.AppElement;
  _FooterComponent_7_4:import17.FooterComponent;
  _text_8:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import7.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import8.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'cvi-header',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import18.viewFactory_HeaderComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ComponentFactoryResolver_0_4 = new import19.CodegenComponentFactoryResolver([import20.MegaMenuComponentNgFactory],this.parentInjector.get(import19.ComponentFactoryResolver));
    this._CartDetailsService_0_5 = new import14.CartDetailsService(this.parentInjector.get(import3.HttpClientService));
    this._HeaderComponent_0_6 = new import15.HeaderComponent(this.parentInjector.get(import10.Router),this._ComponentFactoryResolver_0_4,this._CartDetailsService_0_5);
    this._appEl_0.initComponent(this._HeaderComponent_0_6,[],compView_0);
    compView_0.create(this._HeaderComponent_0_6,[],(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_2 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','cvi-outlet-body');
    this._text_3 = this.renderer.createText(this._el_2,'\n	',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'router-outlet',(null as any));
    this.renderer.setElementAttribute(this._el_4,'routing-helper','');
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    this._RouterOutlet_4_5 = new import16.RouterOutlet(this.parentInjector.get(import21.RouterOutletMap),this._appEl_4.vcRef,this.parentInjector.get(import22.ComponentFactoryResolver),(null as any));
    this._text_5 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_7 = this.renderer.createElement(parentRenderNode,'cvi-footer',(null as any));
    this._appEl_7 = new import2.AppElement(7,(null as any),this,this._el_7);
    var compView_7:any = import23.viewFactory_FooterComponent0(this.viewUtils,this.injector(7),this._appEl_7);
    this._FooterComponent_7_4 = new import17.FooterComponent();
    this._appEl_7.initComponent(this._FooterComponent_7_4,[],compView_7);
    compView_7.create(this._FooterComponent_7_4,[],(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listenGlobal('window','scroll',this.eventHandler(this._handle_scroll_0_0.bind(this)));
    this._expr_1 = import8.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import19.ComponentFactoryResolver) && (0 === requestNodeIndex))) { return this._ComponentFactoryResolver_0_4; }
    if (((token === import14.CartDetailsService) && (0 === requestNodeIndex))) { return this._CartDetailsService_0_5; }
    if (((token === import15.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_6; }
    if (((token === import16.RouterOutlet) && (4 === requestNodeIndex))) { return this._RouterOutlet_4_5; }
    if (((token === import17.FooterComponent) && (7 === requestNodeIndex))) { return this._FooterComponent_7_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import8.SimpleChange} = (null as any);
    changes = (null as any);
    const currVal_1:any = this.context.hasMegaMenu;
    if (import5.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._HeaderComponent_0_6.showMegaMenuCaret = currVal_1;
      if ((changes === (null as any))) { (changes = {}); }
      changes['showMegaMenuCaret'] = new import8.SimpleChange(this._expr_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    if ((changes !== (null as any))) { this._HeaderComponent_0_6.ngOnChanges(changes); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HeaderComponent_0_6.ngOnInit(); }
    if (!throwOnChange) { this._HeaderComponent_0_6.ngDoCheck(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._FooterComponent_7_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._RouterOutlet_4_5.ngOnDestroy();
  }
  private _handle_scroll_0_0($event:any):boolean {
    this._appEl_0.componentView.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._HeaderComponent_0_6.hideMegaMenuOnScroll($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_AppComponent0(viewUtils:import5.ViewUtils,parentInjector:import6.Injector,declarationEl:import2.AppElement):import1.AppView<import4.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('/home/craftsvilla/angular2-aot-webpack2-rollup/app/app.component.html',0,import11.ViewEncapsulation.Emulated,styles_AppComponent,{})); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}