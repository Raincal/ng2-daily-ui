/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from '../../../app/header/header.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from './header.component.css.shim';
import * as import11 from '../../../app/logo/logo.component';
import * as import12 from '../../../app/navigation/navigation.component';
import * as import13 from '@angular/forms/src/directives/ng_form';
import * as import14 from '@angular/forms/src/directives/ng_control_status';
import * as import15 from '../../../app/user-profile/user-profile.component';
import * as import16 from '../logo/logo.component.ngfactory';
import * as import17 from '../navigation/navigation.component.ngfactory';
import * as import18 from '../user-profile/user-profile.component.ngfactory';
import * as import19 from '@angular/forms/src/directives/control_container';
var renderType_HeaderComponent_Host:import0.RenderComponentType = (null as any);
class _View_HeaderComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _HeaderComponent_0_4:import3.HeaderComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HeaderComponent_Host0,renderType_HeaderComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-header',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HeaderComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HeaderComponent_0_4 = new import3.HeaderComponent();
    this._appEl_0.initComponent(this._HeaderComponent_0_4,[],compView_0);
    compView_0.create(this._HeaderComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._HeaderComponent_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HeaderComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_HeaderComponent_Host === (null as any))) { (renderType_HeaderComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_HeaderComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const HeaderComponentNgFactory:import9.ComponentFactory<import3.HeaderComponent> = new import9.ComponentFactory<import3.HeaderComponent>('app-header',viewFactory_HeaderComponent_Host0,import3.HeaderComponent);
const styles_HeaderComponent:any[] = [import10.styles];
var renderType_HeaderComponent:import0.RenderComponentType = (null as any);
class _View_HeaderComponent0 extends import1.AppView<import3.HeaderComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _LogoComponent_2_4:import11.LogoComponent;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _NavigationComponent_4_4:import12.NavigationComponent;
  _text_5:any;
  _el_6:any;
  _NgForm_6_3:import13.NgForm;
  _ControlContainer_6_4:any;
  _NgControlStatusGroup_6_5:import14.NgControlStatusGroup;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  /*private*/ _appEl_11:import2.AppElement;
  _UserProfileComponent_11_4:import15.UserProfileComponent;
  _text_12:any;
  _text_13:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_HeaderComponent0,renderType_HeaderComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'header',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','Header');
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'app-logo',(null as any));
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import16.viewFactory_LogoComponent0(this.viewUtils,this.injector(2),this._appEl_2);
    this._LogoComponent_2_4 = new import11.LogoComponent();
    this._appEl_2.initComponent(this._LogoComponent_2_4,[],compView_2);
    compView_2.create(this._LogoComponent_2_4,[],(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_4 = this.renderer.createElement(this._el_0,'app-navigation',(null as any));
    this._appEl_4 = new import2.AppElement(4,0,this,this._el_4);
    var compView_4:any = import17.viewFactory_NavigationComponent0(this.viewUtils,this.injector(4),this._appEl_4);
    this._NavigationComponent_4_4 = new import12.NavigationComponent();
    this._appEl_4.initComponent(this._NavigationComponent_4_4,[],compView_4);
    compView_4.create(this._NavigationComponent_4_4,[],(null as any));
    this._text_5 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_6 = this.renderer.createElement(this._el_0,'form',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','Search');
    this.renderer.setElementAttribute(this._el_6,'id','search');
    this._NgForm_6_3 = new import13.NgForm((null as any),(null as any));
    this._ControlContainer_6_4 = this._NgForm_6_3;
    this._NgControlStatusGroup_6_5 = new import14.NgControlStatusGroup(this._ControlContainer_6_4);
    this._text_7 = this.renderer.createText(this._el_6,'\n		',(null as any));
    this._el_8 = this.renderer.createElement(this._el_6,'input',(null as any));
    this.renderer.setElementAttribute(this._el_8,'placeholder','Search for a title...');
    this.renderer.setElementAttribute(this._el_8,'type','search');
    this._text_9 = this.renderer.createText(this._el_6,'\n	',(null as any));
    this._text_10 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_11 = this.renderer.createElement(this._el_0,'app-user-profile',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','UserProfile');
    this._appEl_11 = new import2.AppElement(11,0,this,this._el_11);
    var compView_11:any = import18.viewFactory_UserProfileComponent0(this.viewUtils,this.injector(11),this._appEl_11);
    this._UserProfileComponent_11_4 = new import15.UserProfileComponent();
    this._appEl_11.initComponent(this._UserProfileComponent_11_4,[],compView_11);
    compView_11.create(this._UserProfileComponent_11_4,[],(null as any));
    this._text_12 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_6,'ngSubmit',this.eventHandler(this._handle_ngSubmit_6_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_6,'submit',this.eventHandler(this._handle_submit_6_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_6,'reset',this.eventHandler(this._handle_reset_6_2.bind(this)));
    const subscription_0:any = this._NgForm_6_3.ngSubmit.subscribe(this.eventHandler(this._handle_ngSubmit_6_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.LogoComponent) && (2 === requestNodeIndex))) { return this._LogoComponent_2_4; }
    if (((token === import12.NavigationComponent) && (4 === requestNodeIndex))) { return this._NavigationComponent_4_4; }
    if (((token === import13.NgForm) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgForm_6_3; }
    if (((token === import19.ControlContainer) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._ControlContainer_6_4; }
    if (((token === import14.NgControlStatusGroup) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._NgControlStatusGroup_6_5; }
    if (((token === import15.UserProfileComponent) && (11 === requestNodeIndex))) { return this._UserProfileComponent_11_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._LogoComponent_2_4.ngOnInit(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._NavigationComponent_4_4.ngOnInit(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._UserProfileComponent_11_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = this._NgControlStatusGroup_6_5.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_6,'ng-untouched',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._NgControlStatusGroup_6_5.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_6,'ng-touched',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._NgControlStatusGroup_6_5.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_6,'ng-pristine',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._NgControlStatusGroup_6_5.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_6,'ng-dirty',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatusGroup_6_5.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_6,'ng-valid',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatusGroup_6_5.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_6,'ng-invalid',currVal_8);
      this._expr_8 = currVal_8;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_ngSubmit_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_submit_6_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NgForm_6_3.onSubmit()) !== false);
    return (true && pd_0);
  }
  private _handle_reset_6_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._NgForm_6_3.onReset()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_HeaderComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.HeaderComponent> {
  if ((renderType_HeaderComponent === (null as any))) { (renderType_HeaderComponent = viewUtils.createRenderComponentType('/Users/raincal/ng2-daily-ui/003-landing-page/src/app/header/header.component.html',0,import8.ViewEncapsulation.Emulated,styles_HeaderComponent,{})); }
  return new _View_HeaderComponent0(viewUtils,parentInjector,declarationEl);
}