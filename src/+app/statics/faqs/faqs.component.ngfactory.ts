/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './faqs.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './faqs.component.css.shim';
export class Wrapper_FaqsComponent {
  context:import0.FaqsComponent;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.FaqsComponent();
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
var renderType_FaqsComponent_Host:import2.RenderComponentType = (null as any);
class _View_FaqsComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _FaqsComponent_0_4:Wrapper_FaqsComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_FaqsComponent_Host0,renderType_FaqsComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import4.selectOrCreateRenderHostElement(this.renderer,'app-faqs',import4.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_FaqsComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._FaqsComponent_0_4 = new Wrapper_FaqsComponent();
    this._appEl_0.initComponent(this._FaqsComponent_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._FaqsComponent_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.FaqsComponent) && (0 === requestNodeIndex))) { return this._FaqsComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._FaqsComponent_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._FaqsComponent_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_FaqsComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_FaqsComponent_Host === (null as any))) { (renderType_FaqsComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_FaqsComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const FaqsComponentNgFactory:import9.ComponentFactory<import0.FaqsComponent> = new import9.ComponentFactory<import0.FaqsComponent>('app-faqs',viewFactory_FaqsComponent_Host0,import0.FaqsComponent);
const styles_FaqsComponent:any[] = [import10.styles];
var renderType_FaqsComponent:import2.RenderComponentType = (null as any);
class _View_FaqsComponent0 extends import1.AppView<import0.FaqsComponent> {
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
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _text_37:any;
  _el_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _el_42:any;
  _text_43:any;
  _el_44:any;
  _text_45:any;
  _text_46:any;
  _el_47:any;
  _text_48:any;
  _el_49:any;
  _text_50:any;
  _el_51:any;
  _text_52:any;
  _el_53:any;
  _text_54:any;
  _text_55:any;
  _el_56:any;
  _text_57:any;
  _el_58:any;
  _text_59:any;
  _el_60:any;
  _text_61:any;
  _el_62:any;
  _text_63:any;
  _text_64:any;
  _el_65:any;
  _text_66:any;
  _el_67:any;
  _text_68:any;
  _el_69:any;
  _text_70:any;
  _el_71:any;
  _text_72:any;
  _text_73:any;
  _el_74:any;
  _text_75:any;
  _el_76:any;
  _text_77:any;
  _el_78:any;
  _text_79:any;
  _el_80:any;
  _text_81:any;
  _text_82:any;
  _el_83:any;
  _text_84:any;
  _el_85:any;
  _text_86:any;
  _el_87:any;
  _text_88:any;
  _el_89:any;
  _text_90:any;
  _text_91:any;
  _el_92:any;
  _text_93:any;
  _el_94:any;
  _text_95:any;
  _el_96:any;
  _text_97:any;
  _el_98:any;
  _text_99:any;
  _text_100:any;
  _el_101:any;
  _text_102:any;
  _el_103:any;
  _text_104:any;
  _el_105:any;
  _text_106:any;
  _el_107:any;
  _text_108:any;
  _text_109:any;
  _el_110:any;
  _text_111:any;
  _text_112:any;
  _el_113:any;
  _text_114:any;
  _el_115:any;
  _text_116:any;
  _el_117:any;
  _text_118:any;
  _el_119:any;
  _text_120:any;
  _text_121:any;
  _el_122:any;
  _text_123:any;
  _el_124:any;
  _text_125:any;
  _el_126:any;
  _text_127:any;
  _el_128:any;
  _text_129:any;
  _text_130:any;
  _el_131:any;
  _text_132:any;
  _el_133:any;
  _text_134:any;
  _el_135:any;
  _text_136:any;
  _el_137:any;
  _text_138:any;
  _text_139:any;
  _el_140:any;
  _text_141:any;
  _el_142:any;
  _text_143:any;
  _el_144:any;
  _text_145:any;
  _el_146:any;
  _text_147:any;
  _text_148:any;
  _el_149:any;
  _text_150:any;
  _el_151:any;
  _text_152:any;
  _el_153:any;
  _text_154:any;
  _el_155:any;
  _text_156:any;
  _text_157:any;
  _el_158:any;
  _text_159:any;
  _el_160:any;
  _text_161:any;
  _el_162:any;
  _text_163:any;
  _el_164:any;
  _text_165:any;
  _text_166:any;
  _el_167:any;
  _text_168:any;
  _el_169:any;
  _text_170:any;
  _el_171:any;
  _text_172:any;
  _el_173:any;
  _text_174:any;
  _text_175:any;
  _el_176:any;
  _text_177:any;
  _el_178:any;
  _text_179:any;
  _text_180:any;
  _el_181:any;
  _text_182:any;
  _el_183:any;
  _text_184:any;
  _el_185:any;
  _text_186:any;
  _text_187:any;
  _el_188:any;
  _text_189:any;
  _text_190:any;
  _el_191:any;
  _text_192:any;
  _el_193:any;
  _text_194:any;
  _el_195:any;
  _text_196:any;
  _el_197:any;
  _text_198:any;
  _text_199:any;
  _el_200:any;
  _text_201:any;
  _text_202:any;
  _el_203:any;
  _text_204:any;
  _el_205:any;
  _text_206:any;
  _el_207:any;
  _text_208:any;
  _text_209:any;
  _text_210:any;
  _el_211:any;
  _text_212:any;
  _text_213:any;
  _text_214:any;
  _text_215:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_FaqsComponent0,renderType_FaqsComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
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
    this._text_7 = this.renderer.createText(this._el_6,'FAQs',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_10 = import4.createRenderElement(this.renderer,this._el_2,'div',new import4.InlineArray2(2,'class','page-content bg-white static-page-content'),(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_12 = import4.createRenderElement(this.renderer,this._el_10,'h3',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Return and Refund',(null as any));
    this._text_14 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_15 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_16 = this.renderer.createText(this._el_15,'What is Craftsvilla’s Return Policy?',(null as any));
    this._text_17 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_18 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_19 = this.renderer.createText(this._el_10,'\n		We have a very simple refund and return policy, and we accept returns in all of the following cases: \n		',(null as any));
    this._el_20 = import4.createRenderElement(this.renderer,this._el_10,'ol',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'\n            ',(null as any));
    this._el_22 = import4.createRenderElement(this.renderer,this._el_20,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_23 = this.renderer.createText(this._el_22,' Products are torn, broken, damaged or',(null as any));
    this._text_24 = this.renderer.createText(this._el_20,'\n            ',(null as any));
    this._el_25 = import4.createRenderElement(this.renderer,this._el_20,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_26 = this.renderer.createText(this._el_25,' Products are of a different size from that mentioned in the order or',(null as any));
    this._text_27 = this.renderer.createText(this._el_20,'\n            ',(null as any));
    this._el_28 = import4.createRenderElement(this.renderer,this._el_20,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_29 = this.renderer.createText(this._el_28,' Customer does not receive all parts of the product or',(null as any));
    this._text_30 = this.renderer.createText(this._el_20,'\n            ',(null as any));
    this._el_31 = import4.createRenderElement(this.renderer,this._el_20,'li',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_32 = this.renderer.createText(this._el_31,' Product color is completely different from that on the website',(null as any));
    this._text_33 = this.renderer.createText(this._el_20,'\n		',(null as any));
    this._text_34 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_35 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_36 = this.renderer.createText(this._el_35,'How to raise dispute for an order?',(null as any));
    this._text_37 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_38 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_39 = this.renderer.createText(this._el_10,'\n		Write to us on email id with your order no.  and problem. \n		',(null as any));
    this._el_40 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_41 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_42 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_43 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_44 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_45 = this.renderer.createText(this._el_44,'What happens after a dispute is raised?',(null as any));
    this._text_46 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_47 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_48 = this.renderer.createText(this._el_10,'\n		Our team will reach out to you. \n		',(null as any));
    this._el_49 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_50 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_51 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_52 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_53 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_54 = this.renderer.createText(this._el_53,'Who pays for the delivery charges for returning of products?',(null as any));
    this._text_55 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_56 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_57 = this.renderer.createText(this._el_10,'\n		Craftsvilla will pay for the delivery charges if our return policy is satisfied. \n		Incase you self-ship the product, Craftsvilla will reimburse the shipping charges upto a maximum of the shipping charges paid by you. The exact amount of reimbursement is subject to the case and at the sole discretion of Craftsvilla. \n		',(null as any));
    this._el_58 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_59 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_60 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_61 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_62 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_63 = this.renderer.createText(this._el_62,'When will I be refunded?',(null as any));
    this._text_64 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_65 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_66 = this.renderer.createText(this._el_10,'\n		Dear Customer,\n		Your refund should be processed within 7 days of Craftsvilla receiving the product back. Incase the product is not being returned, but only refund is being done, the refund should be processed within 5 business days of the resolution. \n		Can I return a part of my order?\n		Yes, as long as it satisfies the return policy.\n		What items are not returnable?\n		Intimate products, stitched products cannot be returned\n		',(null as any));
    this._el_67 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_68 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_69 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_70 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_71 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_72 = this.renderer.createText(this._el_71,'Shipping',(null as any));
    this._text_73 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_74 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_75 = this.renderer.createText(this._el_10,'\n		What are the shipping charges?\n		Shipping charges are courier costs associated with the shipping of each product. \n		What is the estimated delivery time?\n		Delivery times can vary from 10-15 days based on the country and location of your order. \n		',(null as any));
    this._el_76 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_77 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_78 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_79 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_80 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_81 = this.renderer.createText(this._el_80,'How can I track the delivery of my order?',(null as any));
    this._text_82 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_83 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_84 = this.renderer.createText(this._el_10,'\n		You must have received an order confirmation mail on your registered email ID. The email contains your order ID. Please click here and enter your order ID to know the current status of your order\n		',(null as any));
    this._el_85 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_86 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_87 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_88 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_89 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_90 = this.renderer.createText(this._el_89,'What does "Out of Stock" mean?',(null as any));
    this._text_91 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_92 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_93 = this.renderer.createText(this._el_10,'\n		“Out of stock” means that the seller has run out of stock for the given product. \n		',(null as any));
    this._el_94 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_95 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_96 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_97 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_98 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_99 = this.renderer.createText(this._el_98,'Who would be responsible for paying local taxes in countries outside of India?',(null as any));
    this._text_100 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_101 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_102 = this.renderer.createText(this._el_10,'\n		Dear Customer, as mentioned on our website before placing order, Craftsvilla as a policy does not pay the customs clearance charge and does not charge the same to the customer and hence the local taxes at the country of import is to be paid by the customer.   \n		',(null as any));
    this._el_103 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_104 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_105 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_106 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_107 = import4.createRenderElement(this.renderer,this._el_10,'h3',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_108 = this.renderer.createText(this._el_107,'Payment',(null as any));
    this._text_109 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_110 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_111 = this.renderer.createText(this._el_110,'How do I pay for a Craftsvilla purchase?',(null as any));
    this._text_112 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_113 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_114 = this.renderer.createText(this._el_10,'\n		All international orders can be paid for via Debit Cards, Credit Cards or Net Banking. If you are a paypal user, you can also alternatively pay via Paypal. \n		',(null as any));
    this._el_115 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_116 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_117 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_118 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_119 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_120 = this.renderer.createText(this._el_119,'Is there Cash on Delivery on international orders?',(null as any));
    this._text_121 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_122 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_123 = this.renderer.createText(this._el_10,'\n		There is no Cash On Delivery option for international orders. \n		How do I pay using a Credit/Debit card and is it safe?\n		Yes, it is super safe. \n		',(null as any));
    this._el_124 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_125 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_126 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_127 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_128 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_129 = this.renderer.createText(this._el_128,'What credit cards are supported?',(null as any));
    this._text_130 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_131 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_132 = this.renderer.createText(this._el_10,'\n		We support Visa, MasterCard, AmEx. \n		',(null as any));
    this._el_133 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_134 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_135 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_136 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_137 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_138 = this.renderer.createText(this._el_137,'Do you accept international credit cards on Craftsvilla?',(null as any));
    this._text_139 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_140 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_141 = this.renderer.createText(this._el_10,'\n		Yes, we do. \n		',(null as any));
    this._el_142 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_143 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_144 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_145 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_146 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_147 = this.renderer.createText(this._el_146,'Can I make a credit/debit card or Internet Banking payment through my mobile?',(null as any));
    this._text_148 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_149 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_150 = this.renderer.createText(this._el_10,'\n		Yes, you can. \n		',(null as any));
    this._el_151 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_152 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_153 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_154 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_155 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_156 = this.renderer.createText(this._el_155,'Is it safe to use my credit/debit card on Craftsvilla?',(null as any));
    this._text_157 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_158 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_159 = this.renderer.createText(this._el_10,'\n		Yes, it is. \n		',(null as any));
    this._el_160 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_161 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_162 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_163 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_164 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_165 = this.renderer.createText(this._el_164,'Does Craftsvilla store my credit card information?',(null as any));
    this._text_166 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_167 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_168 = this.renderer.createText(this._el_10,'\n		No, as a policy we do not store your credit card information. \n		',(null as any));
    this._el_169 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_170 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_171 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_172 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_173 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_174 = this.renderer.createText(this._el_173,'Can I place an order for an Indian location?',(null as any));
    this._text_175 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_176 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_177 = this.renderer.createText(this._el_10,'\n		No, to place an order for an Indian location, please visit ',(null as any));
    this._el_178 = import4.createRenderElement(this.renderer,this._el_10,'a',new import4.InlineArray2(2,'href','www.craftsvilla.com'),(null as any));
    this._text_179 = this.renderer.createText(this._el_178,'www.craftsvilla.com',(null as any));
    this._text_180 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_181 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_182 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_183 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_184 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_185 = import4.createRenderElement(this.renderer,this._el_10,'h3',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_186 = this.renderer.createText(this._el_185,'Order Status',(null as any));
    this._text_187 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_188 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_189 = this.renderer.createText(this._el_188,'How do I check the current status of my orders?',(null as any));
    this._text_190 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_191 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_192 = this.renderer.createText(this._el_10,'\n		You must have received an order confirmation mail on your registered email ID. The email contains your order ID. Please click here and enter your order ID to know the current status of your order. \n		',(null as any));
    this._el_193 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_194 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_195 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_196 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_197 = import4.createRenderElement(this.renderer,this._el_10,'h3',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_198 = this.renderer.createText(this._el_197,'Contact us',(null as any));
    this._text_199 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_200 = import4.createRenderElement(this.renderer,this._el_10,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_201 = this.renderer.createText(this._el_200,'Couldn\'t find the information you needed?',(null as any));
    this._text_202 = this.renderer.createText(this._el_10,' \n		',(null as any));
    this._el_203 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_204 = this.renderer.createText(this._el_10,'\n		Please Email us at \n		',(null as any));
    this._el_205 = import4.createRenderElement(this.renderer,this._el_10,'a',new import4.InlineArray2(2,'href','mailto:hello@craftsvilla.com'),(null as any));
    this._text_206 = this.renderer.createText(this._el_205,'\n			',(null as any));
    this._el_207 = import4.createRenderElement(this.renderer,this._el_205,'u',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_208 = this.renderer.createText(this._el_207,'hello@craftsvilla.com',(null as any));
    this._text_209 = this.renderer.createText(this._el_205,'\n		',(null as any));
    this._text_210 = this.renderer.createText(this._el_10,'\n		',(null as any));
    this._el_211 = import4.createRenderElement(this.renderer,this._el_10,'br',import4.EMPTY_INLINE_ARRAY,(null as any));
    this._text_212 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._text_213 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_214 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_215 = this.renderer.createText(parentRenderNode,'\n',(null as any));
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
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._text_37,
      this._el_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._el_44,
      this._text_45,
      this._text_46,
      this._el_47,
      this._text_48,
      this._el_49,
      this._text_50,
      this._el_51,
      this._text_52,
      this._el_53,
      this._text_54,
      this._text_55,
      this._el_56,
      this._text_57,
      this._el_58,
      this._text_59,
      this._el_60,
      this._text_61,
      this._el_62,
      this._text_63,
      this._text_64,
      this._el_65,
      this._text_66,
      this._el_67,
      this._text_68,
      this._el_69,
      this._text_70,
      this._el_71,
      this._text_72,
      this._text_73,
      this._el_74,
      this._text_75,
      this._el_76,
      this._text_77,
      this._el_78,
      this._text_79,
      this._el_80,
      this._text_81,
      this._text_82,
      this._el_83,
      this._text_84,
      this._el_85,
      this._text_86,
      this._el_87,
      this._text_88,
      this._el_89,
      this._text_90,
      this._text_91,
      this._el_92,
      this._text_93,
      this._el_94,
      this._text_95,
      this._el_96,
      this._text_97,
      this._el_98,
      this._text_99,
      this._text_100,
      this._el_101,
      this._text_102,
      this._el_103,
      this._text_104,
      this._el_105,
      this._text_106,
      this._el_107,
      this._text_108,
      this._text_109,
      this._el_110,
      this._text_111,
      this._text_112,
      this._el_113,
      this._text_114,
      this._el_115,
      this._text_116,
      this._el_117,
      this._text_118,
      this._el_119,
      this._text_120,
      this._text_121,
      this._el_122,
      this._text_123,
      this._el_124,
      this._text_125,
      this._el_126,
      this._text_127,
      this._el_128,
      this._text_129,
      this._text_130,
      this._el_131,
      this._text_132,
      this._el_133,
      this._text_134,
      this._el_135,
      this._text_136,
      this._el_137,
      this._text_138,
      this._text_139,
      this._el_140,
      this._text_141,
      this._el_142,
      this._text_143,
      this._el_144,
      this._text_145,
      this._el_146,
      this._text_147,
      this._text_148,
      this._el_149,
      this._text_150,
      this._el_151,
      this._text_152,
      this._el_153,
      this._text_154,
      this._el_155,
      this._text_156,
      this._text_157,
      this._el_158,
      this._text_159,
      this._el_160,
      this._text_161,
      this._el_162,
      this._text_163,
      this._el_164,
      this._text_165,
      this._text_166,
      this._el_167,
      this._text_168,
      this._el_169,
      this._text_170,
      this._el_171,
      this._text_172,
      this._el_173,
      this._text_174,
      this._text_175,
      this._el_176,
      this._text_177,
      this._el_178,
      this._text_179,
      this._text_180,
      this._el_181,
      this._text_182,
      this._el_183,
      this._text_184,
      this._el_185,
      this._text_186,
      this._text_187,
      this._el_188,
      this._text_189,
      this._text_190,
      this._el_191,
      this._text_192,
      this._el_193,
      this._text_194,
      this._el_195,
      this._text_196,
      this._el_197,
      this._text_198,
      this._text_199,
      this._el_200,
      this._text_201,
      this._text_202,
      this._el_203,
      this._text_204,
      this._el_205,
      this._text_206,
      this._el_207,
      this._text_208,
      this._text_209,
      this._text_210,
      this._el_211,
      this._text_212,
      this._text_213,
      this._text_214,
      this._text_215
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
export function viewFactory_FaqsComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.FaqsComponent> {
  if ((renderType_FaqsComponent === (null as any))) { (renderType_FaqsComponent = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_FaqsComponent,{})); }
  return new _View_FaqsComponent0(viewUtils,parentInjector,declarationEl);
}