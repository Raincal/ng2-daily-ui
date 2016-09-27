/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../app/app.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './app.component.css.shim';
import * as import11 from '@angular/core/src/animation/animation_style_util';
import * as import12 from '@angular/core/src/animation/animation_sequence_player';
import * as import13 from '@angular/core/src/animation/animation_styles';
import * as import14 from '@angular/core/src/animation/animation_keyframe';
import * as import15 from '@angular/core/src/animation/animation_player';
import * as import16 from '@angular/common/src/directives/ng_if';
import * as import17 from '@angular/forms/src/directives/default_value_accessor';
import * as import18 from '@angular/forms/src/directives/ng_model';
import * as import19 from '@angular/forms/src/directives/ng_control_status';
import * as import20 from '@angular/core/src/linker/template_ref';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from '@angular/forms/src/directives/control_value_accessor';
import * as import23 from '@angular/forms/src/directives/ng_control';
import * as import24 from '../../app/image-preview/image-preview.component';
import * as import25 from '../../app/checkout/checkout.component';
import * as import26 from './image-preview/image-preview.component.ngfactory';
import * as import27 from './checkout/checkout.component.ngfactory';
var renderType_AppComponent_Host:import0.RenderComponentType = (null as any);
class _View_AppComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _AppComponent_0_4:import3.AppComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AppComponent_Host0,renderType_AppComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-root',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AppComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AppComponent_0_4 = new import3.AppComponent();
    this._appEl_0.initComponent(this._AppComponent_0_4,[],compView_0);
    compView_0.create(this._AppComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.AppComponent) && (0 === requestNodeIndex))) { return this._AppComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._AppComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AppComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_AppComponent_Host === (null as any))) { (renderType_AppComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_AppComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const AppComponentNgFactory:import9.ComponentFactory<import3.AppComponent> = new import9.ComponentFactory<import3.AppComponent>('app-root',viewFactory_AppComponent_Host0,import3.AppComponent);
const styles_AppComponent:any[] = [import10.styles];
var AppComponent_overlay_states:any = {
  in: {opacity: 0.2},
  '*': {},
  void: {}
}
;
function AppComponent_overlay_factory(view:import1.AppView<any>,element:any,currentState:any,nextState:any):void {
  view.cancelActiveAnimation(element,'overlay',(nextState == 'void'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = AppComponent_overlay_states['*'];
  var startStateStyles:any = AppComponent_overlay_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = AppComponent_overlay_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  import11.renderStyles(element,view.renderer,import11.clearStyles(startStateStyles));
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {opacity: 0.01}
      ]
      )),import11.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import14.AnimationKeyframe(0,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[{}]))),
        new import14.AnimationKeyframe(1,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),300,0,(null as any))]);
    totalTime = 300;
  }
  if ((player == (null as any))) { (player = new import15.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    import11.renderStyles(element,view.renderer,import11.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  view.queueAnimation(element,'overlay',player,totalTime,currentState,nextState);
}
var AppComponent_container_states:any = {
  in: {opacity: 1},
  '*': {},
  void: {}
}
;
function AppComponent_container_factory(view:import1.AppView<any>,element:any,currentState:any,nextState:any):void {
  view.cancelActiveAnimation(element,'container',(nextState == 'void'));
  var collectedStyles:any = {};
  var player:any = (null as any);
  var totalTime:any = 0;
  var defaultStateStyles:any = AppComponent_container_states['*'];
  var startStateStyles:any = AppComponent_container_states[currentState];
  if ((startStateStyles == (null as any))) { (startStateStyles = defaultStateStyles); }
  var endStateStyles:any = AppComponent_container_states[nextState];
  if ((endStateStyles == (null as any))) { (endStateStyles = defaultStateStyles); }
  import11.renderStyles(element,view.renderer,import11.clearStyles(startStateStyles));
  if (((player == (null as any)) && ((currentState == 'void') && true))) {
      player = new import12.AnimationSequencePlayer([view.renderer.animate(element,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[
        startStateStyles,
        {opacity: 0.01}
      ]
      )),import11.balanceAnimationKeyframes(collectedStyles,endStateStyles,[
        new import14.AnimationKeyframe(0,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[{}]))),
        new import14.AnimationKeyframe(1,new import13.AnimationStyles(import11.collectAndResolveStyles(collectedStyles,[{}])))
      ]
    ),500,0,(null as any))]);
    totalTime = 500;
  }
  if ((player == (null as any))) { (player = new import15.NoOpAnimationPlayer()); }
  player.onDone(():void => {
    import11.renderStyles(element,view.renderer,import11.prepareFinalAnimationStyles(startStateStyles,endStateStyles));
  });
  view.queueAnimation(element,'container',player,totalTime,currentState,nextState);
}
var renderType_AppComponent:import0.RenderComponentType = (null as any);
class _View_AppComponent0 extends import1.AppView<import3.AppComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import16.NgIf;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _DefaultValueAccessor_8_3:import17.DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_8_4:any[];
  _NgModel_8_5:import18.NgModel;
  _NgControl_8_6:any;
  _NgControlStatus_8_7:import19.NgControlStatus;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AppComponent0,renderType_AppComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','App');
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'div',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','Overlay');
    this.renderer.setElementAttribute(this._el_2,'style','background-image: url(\'assets/overlay.jpg\')');
    this._text_3 = this.renderer.createText(this._el_0,'\n\n	',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._appEl_4 = new import2.AppElement(4,0,this,this._anchor_4);
    this._TemplateRef_4_5 = new import20.TemplateRef_(this._appEl_4,viewFactory_AppComponent1);
    this._NgIf_4_6 = new import16.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_0,'\n\n	',(null as any));
    this._el_6 = this.renderer.createElement(this._el_0,'header',(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n		',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'input',(null as any));
    this.renderer.setElementAttribute(this._el_8,'max','100');
    this.renderer.setElementAttribute(this._el_8,'min','1');
    this.renderer.setElementAttribute(this._el_8,'ngModel','');
    this.renderer.setElementAttribute(this._el_8,'step','1');
    this.renderer.setElementAttribute(this._el_8,'type','range');
    this._DefaultValueAccessor_8_3 = new import17.DefaultValueAccessor(this.renderer,new import21.ElementRef(this._el_8));
    this._NG_VALUE_ACCESSOR_8_4 = [this._DefaultValueAccessor_8_3];
    this._NgModel_8_5 = new import18.NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_8_4);
    this._NgControl_8_6 = this._NgModel_8_5;
    this._NgControlStatus_8_7 = new import19.NgControlStatus(this._NgControl_8_6);
    this._text_9 = this.renderer.createText(this._el_6,'\n	',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_11 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_8,'input',this.eventHandler(this._handle_input_8_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_8,'blur',this.eventHandler(this._handle_blur_8_1.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._text_11
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import20.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import16.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    if (((token === import17.DefaultValueAccessor) && (8 === requestNodeIndex))) { return this._DefaultValueAccessor_8_3; }
    if (((token === import22.NG_VALUE_ACCESSOR) && (8 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_8_4; }
    if (((token === import18.NgModel) && (8 === requestNodeIndex))) { return this._NgModel_8_5; }
    if (((token === import23.NgControl) && (8 === requestNodeIndex))) { return this._NgControl_8_6; }
    if (((token === import19.NgControlStatus) && (8 === requestNodeIndex))) { return this._NgControlStatus_8_7; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_0:any = (null as any);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      var oldRenderVar:any = this._expr_0;
      if ((oldRenderVar == import7.UNINITIALIZED)) { (oldRenderVar = 'void'); }
      var newRenderVar:any = currVal_0;
      if ((newRenderVar == import7.UNINITIALIZED)) { (newRenderVar = 'void'); }
      this.componentType.animations['overlay'](this,this._el_2,oldRenderVar,newRenderVar);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.state.active;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._NgIf_4_6.ngIf = currVal_1;
      this._expr_1 = currVal_1;
    }
    changes = (null as any);
    const currVal_4:any = '';
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgModel_8_5.model = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['model'] = new import7.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._NgModel_8_5.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_5:any = this._NgControlStatus_8_7.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_8,'ng-untouched',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatus_8_7.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_8,'ng-touched',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatus_8_7.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_8,'ng-pristine',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatus_8_7.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_8,'ng-dirty',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatus_8_7.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_8,'ng-valid',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this._NgControlStatus_8_7.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_8,'ng-invalid',currVal_10);
      this._expr_10 = currVal_10;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_8_5.ngOnDestroy();
  }
  detachInternal():void {
    this.componentType.animations['overlay'](this,this._el_2,this._expr_0,'void');
  }
  private _handle_input_8_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_8_3.onChange($event.target.value)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_8_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._DefaultValueAccessor_8_3.onTouched()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_AppComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.AppComponent> {
  if ((renderType_AppComponent === (null as any))) { (renderType_AppComponent = viewUtils.createRenderComponentType('/Users/raincal/ng2-daily-ui/002-checkout/src/app/app.component.html',0,import8.ViewEncapsulation.Emulated,styles_AppComponent,{
    overlay: AppComponent_overlay_factory,
    container: AppComponent_container_factory
  }
  )); }
  return new _View_AppComponent0(viewUtils,parentInjector,declarationEl);
}
class _View_AppComponent1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _ImagePreviewComponent_2_4:import24.ImagePreviewComponent;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _CheckoutComponent_4_4:import25.CheckoutComponent;
  _text_5:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_AppComponent1,renderType_AppComponent,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','Container');
    this._text_1 = this.renderer.createText(this._el_0,'\n		',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'app-image-preview',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','ImagePreview');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import26.viewFactory_ImagePreviewComponent0(this.viewUtils,this.injector(2),this._appEl_2);
    this._ImagePreviewComponent_2_4 = new import24.ImagePreviewComponent();
    this._appEl_2.initComponent(this._ImagePreviewComponent_2_4,[],compView_2);
    compView_2.create(this._ImagePreviewComponent_2_4,[],(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n\n		',(null as any));
    this._el_4 = this.renderer.createElement(this._el_0,'app-checkout',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','Checkout');
    this._appEl_4 = new import2.AppElement(4,0,this,this._el_4);
    var compView_4:any = import27.viewFactory_CheckoutComponent0(this.viewUtils,this.injector(4),this._appEl_4);
    this._CheckoutComponent_4_4 = new import25.CheckoutComponent();
    this._appEl_4.initComponent(this._CheckoutComponent_4_4,[],compView_4);
    compView_4.create(this._CheckoutComponent_4_4,[],(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.ImagePreviewComponent) && (2 === requestNodeIndex))) { return this._ImagePreviewComponent_2_4; }
    if (((token === import25.CheckoutComponent) && (4 === requestNodeIndex))) { return this._CheckoutComponent_4_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_0:any = (null as any);
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      var oldRenderVar:any = this._expr_0;
      if ((oldRenderVar == import7.UNINITIALIZED)) { (oldRenderVar = 'void'); }
      var newRenderVar:any = currVal_0;
      if ((newRenderVar == import7.UNINITIALIZED)) { (newRenderVar = 'void'); }
      this.componentType.animations['container'](this,this._el_0,oldRenderVar,newRenderVar);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.parent.context.state;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._ImagePreviewComponent_2_4.state = currVal_1;
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = 1;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._ImagePreviewComponent_2_4.duration = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._ImagePreviewComponent_2_4.ngOnInit(); }
    changes = (null as any);
    const currVal_3:any = this.parent.context.state;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._CheckoutComponent_4_4.state = currVal_3;
      if ((changes === (null as any))) { (changes = {}); }
      changes['state'] = new import7.SimpleChange(this._expr_3,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = (<_View_AppComponent0>this.parent)._NgModel_8_5.value;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._CheckoutComponent_4_4.duration = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['duration'] = new import7.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._CheckoutComponent_4_4.ngOnChanges(changes); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  detachInternal():void {
    this.componentType.animations['container'](this,this._el_0,this._expr_0,'void');
  }
}
function viewFactory_AppComponent1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_AppComponent1(viewUtils,parentInjector,declarationEl);
}