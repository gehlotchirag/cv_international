/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './product.routing';
import * as import2 from '@angular/router/src/router_module';
import * as import3 from '@angular/core/src/di/injector';
import * as import4 from './product.component.ngfactory';
import * as import5 from './product.component';
import * as import6 from './product-detail-resolve.service';
import * as import7 from '@angular/router/src/router_config_loader';
class ProductRoutingModuleInjector extends import0.NgModuleInjector<import1.ProductRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _ProductRoutingModule_1:import1.ProductRoutingModule;
  __ROUTES_2:any[];
  constructor(parent:import3.Injector) {
    super(parent,[
      import4.ProductComponentNgFactory,
      import4.ProductComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _ROUTES_2():any[] {
      if ((this.__ROUTES_2 == (null as any))) { (this.__ROUTES_2 = [[
        {
          path: 'product/:id',
          component: import5.ProductComponent,
          pathMatch: 'full',
          resolve: {product: import6.ProductDetailResolve}
        }
        ,
        {
          path: 'shop/:slug/:id',
          component: import5.ProductComponent,
          pathMatch: 'full',
          resolve: {product: import6.ProductDetailResolve}
        }

      ]
    ]); }
    return this.__ROUTES_2;
  }
  createInternal():import1.ProductRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ROUTER_FORROOT_GUARD,(null as any)));
    this._ProductRoutingModule_1 = new import1.ProductRoutingModule();
    return this._ProductRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.ProductRoutingModule)) { return this._ProductRoutingModule_1; }
    if ((token === import7.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const ProductRoutingModuleNgFactory:import0.NgModuleFactory<import1.ProductRoutingModule> = new import0.NgModuleFactory(ProductRoutingModuleInjector,import1.ProductRoutingModule);