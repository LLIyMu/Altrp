(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{397:function(t,e,n){(t.exports=n(91)(!1)).push([t.i,"",""])},398:function(t,e,n){(t.exports=n(91)(!1)).push([t.i,"",""])},399:function(t,e,n){(t.exports=n(91)(!1)).push([t.i,"",""])},421:function(t,e,n){var r=n(397);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},s=n(92)(r,a);r.locals&&(t.exports=r.locals),t.hot.accept(397,(function(){var e=n(397);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)})),t.hot.dispose((function(){s()}))},422:function(t,e,n){var r=n(398);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},s=n(92)(r,a);r.locals&&(t.exports=r.locals),t.hot.accept(398,(function(){var e=n(398);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)})),t.hot.dispose((function(){s()}))},423:function(t,e,n){var r=n(399);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},s=n(92)(r,a);r.locals&&(t.exports=r.locals),t.hot.accept(399,(function(){var e=n(399);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)})),t.hot.dispose((function(){s()}))},433:function(t,e,n){"use strict";n.r(e);var r=n(10),a=n.n(r),s=n(4),c=n.n(s),o=n(5),i=n.n(o),l=n(2),u=n.n(l),f=n(6),m=n.n(f),p=n(7),d=n.n(p),h=n(3),v=n.n(h),g=(n(189),n(0)),y=n.n(g),b=n(11),E=function t(e){c()(this,t),this.modules=e},w=n(13);function O(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return S(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){o=!0,s=t},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw s}}}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var j,D=function(t){m()(n,t);var e=P(n);function n(){return c()(this,n),e.apply(this,arguments)}return i()(n,[{key:"parseData",value:function(t,e){var n=[],r=window.elementsManager,a=new(r.getElementClass(t.name));if(t.children&&t.children.length){var s,c=O(t.children);try{for(c.s();!(s=c.n()).done;){var o=s.value;r.checkElementExists(o.name)&&n.push(this.parseData(o,a))}}catch(t){c.e(t)}finally{c.f()}}a.id=t.id,a.children=n;var i=0===t.settings.length?{}:t.settings;return a.setSettings(i),t.dynamicContentSettings&&(a.dynamicContentSettings=0===t.dynamicContentSettings.length?{}:t.dynamicContentSettings),e&&(a.parent=e),a.update(),a}},{key:"duplicateElement",value:function(t,e){var n=this._duplicateElement(t);e.insertNewChildAfter(t.getId(),n);var r=Object(w.c)().modules.templateDataStorage;return r.elementsIds=_.union(r.elementsIds,n.getIds()),n}},{key:"_duplicateElement",value:function(t){var e=this,n=new(elementsManager.getElementClass(t.getName())),r=[];return t.children.map((function(t){var a=e._duplicateElement(t);a.setParent(n),r.push(a)})),n.setChildren(r),n.settings=_.cloneDeep(t.settings),t.dynamicContentSettings&&(n.dynamicContentSettings=_.cloneDeep(t.dynamicContentSettings)),n.children=r,n}}]),n}(E),k=n(29),N=n(70),R=n(19),T=n(45);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var C=function(t){m()(n,t);var e=A(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).resource=new k.a({route:"/admin/ajax/templates"}),r}return i()(n,[{key:"load",value:function(){var t=this;if(this.template_id=Object(w.f)(),R.a.dispatch(Object(T.b)(w.a.TEMPLATE_SAVING)),this.template_id)this.resource.get(this.template_id).then((function(e){var n,r;n=e.title,r=document.title,j||(j=r.innerHTML),n||(n=j),document.title!==n&&(document.title=n);var a=JSON.parse(e.data),s=t.modules.elementsFactory.parseData(a),c=Object(w.c)().modules.templateDataStorage;c.replaceAll(s),c.setTitle(e.title),c.setName(e.name),Object(w.c)().endLoading(),R.a.dispatch(Object(T.b)(w.a.TEMPLATE_UPDATED))})).catch((function(t){console.error(t),R.a.dispatch(Object(T.b)(w.a.TEMPLATE_UPDATED))}))}},{key:"saveTemplate",value:function(){R.a.dispatch(Object(T.b)(w.a.TEMPLATE_SAVING));var t=Object(w.c)().modules.templateDataStorage.getTemplateDataForSave();this.resource.put(this.template_id,t).then((function(t){R.a.dispatch(Object(T.b)(w.a.TEMPLATE_UPDATED))})).catch((function(t){console.error(t),R.a.dispatch(Object(T.b)(w.a.TEMPLATE_UPDATED))}))}}]),n}(E),x=function t(){c()(this,t)},I=function t(){c()(this,t)},M=n(95),L=n(18),B=n(88),U=n(50);function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var H=function(t){m()(n,t);var e=W(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).elementsIds=[],r}return i()(n,[{key:"replaceAll",value:function(t){if(!t instanceof N.a)throw"Expect Root Element as root element;)";this.rootElement=t,this.elementsIds=t.getIds(),this.setCurrentRootElement()}},{key:"getTemplateData",value:function(){return this.rootElement.toObject()}},{key:"getTemplateDataForSave",value:function(){var t={};return t.data=this.getTemplateData(),t.title=this.title||"testtitle",t.name=this.name||"testname",t}},{key:"setTitle",value:function(t){this.title=t}},{key:"setName",value:function(t){this.name=t}},{key:"setCurrentRootElement",value:function(){return this.currentElement=this.rootElement,R.a.dispatch(Object(M.b)(this.currentElement)),this.currentElement}},{key:"setCurrentElement",value:function(t){if(!t instanceof L.a)throw"Only Base Element Can Be Set as Default";this.currentElement=t,R.a.dispatch(Object(M.b)(t))}},{key:"getCurrentElement",value:function(){return this.currentElement?this.currentElement:this.setCurrentRootElement()}},{key:"getRootElement",value:function(){return this.rootElement}},{key:"addWidgetInSection",value:function(t){var e=new B.a;this.elementsIds.push(e.getId());var n=new U.a;this.elementsIds.push(n.getId());var r=new(window.elementsManager.getElementClass(t));this.elementsIds.push(r.getId()),n.appendWidget(r),e.appendColumn(n),this.rootElement.appendNewSection(e),this.setCurrentElement(r),R.a.dispatch(Object(T.b)(w.a.TEMPLATE_NEED_UPDATE)),Object(w.c)().showSettingsPanel()}}]),n}(E),F=function(){function t(e){c()(this,t),this.elementsFactory=new D(this),this.saveImportModule=new C(this),this.settingsChangeModule=new x(this),this.templateSettingsChangeModule=new I(this),this.templateDataStorage=new H(this)}return i()(t,[{key:"loaded",value:function(){this.saveImportModule.load()}}]),t}(),G=n(37);function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var V=function(t){m()(n,t);var e=J(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={element:r.props.element},r.onDragStart=r.onDragStart.bind(u()(r)),r}return i()(n,[{key:"onDragStart",value:function(t){R.a.dispatch(Object(G.c)(null)),t.dataTransfer.effectAllowed="copy",t.dataTransfer.setData("text/plain",this.state.element.getName())}},{key:"render",value:function(){if(!this.state.element instanceof L.a)throw"Widget Component must has Element in props";return y.a.createElement("div",{className:"widget-icon",draggable:"true",onDragStart:this.onDragStart},y.a.createElement(this.state.element.getIconComponent(),{height:35}),y.a.createElement("div",{className:"widget-icon__title"},this.state.element.getTitle()))}}]),n}(g.Component);function $(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var q=function(t){m()(n,t);var e=$(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={widgets:window.elementsManager.getWidgetsList()},r}return i()(n,[{key:"render",value:function(){return y.a.createElement("div",{className:"widget-panel"},this.state.widgets.map((function(t){return y.a.createElement(V,{element:t,key:t.getName()})})))}}]),n}(g.Component),z=n(39),K=n(143),Q=n(134),X=n(1),Y=n(130),Z=n(118);n(71);function tt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?tt(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):tt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function nt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var rt=function(t){m()(n,t);var e=nt(n);function n(t){var r;c()(this,n),(r=e.call(this,t)).state={open:t.open,active:t.open},r.toggle=r.toggle.bind(u()(r));t.open;return r}return i()(n,[{key:"componentDidMount",value:function(){document.getElementById("settingsSection0").classList.add("open")}},{key:"toggle",value:function(t){this.setState({open:!this.state.open,active:t.currentTarget.dataset.key})}},{key:"render",value:function(){var t=document.getElementById("settingsControllers");if(document.getElementById("settingsSection"+this.props.active))if(!1===document.getElementById("settingsSection"+this.props.active).classList.contains("open")){for(var e=0;e<t.children.length;e++)document.getElementById("settingsSection"+e)&&document.getElementById("settingsSection"+e).classList.remove("open");document.getElementById("settingsSection"+this.props.active).classList.add("open")}else document.getElementById("settingsSection"+this.props.active).classList.remove("open");var n=this.props.controls||[];return y.a.createElement("div",{className:"settings-section",id:"settingsSection"+this.props.active},y.a.createElement("div",{className:"settings-section"},y.a.createElement("div",{className:"settings-section__title d-flex ","data-open":!0,"data-key":this.props.active,onClick:this.toggle},y.a.createElement("div",{className:"settings-section__icon d-flex "},y.a.createElement(Y.a,null)),y.a.createElement("div",{className:"settings-section__label"},this.props.label)),y.a.createElement("div",{className:"controllers-wrapper"},n.map((function(t){var e=window.controllersManager.getController(t.type);return y.a.createElement(e,et(et({},t),{},{key:t.controlId,controller:new Z.a(t)}))})))))}}]),n}(g.Component),at=n(404),st=n(15),ct=n.n(st),ot=n(21),it=n.n(ot),lt=(n(421),n(422),n(46));function ut(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ut(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function mt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var pt=function(t){m()(r,t);var e,n=mt(r);function r(t){var e;return c()(this,r),(e=n.call(this,t)).state={models:[]},e.select=e.select.bind(u()(e)),e.resource=new k.a({route:"/admin/ajax/models_with_fields_options"}),e}return i()(r,[{key:"componentDidMount",value:(e=it()(ct.a.mark((function t(){var e;return ct.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.resource.getAll();case 2:e=t.sent,this.setState((function(t){return ft(ft({},t),{},{models:e})}));case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"select",value:function(t){t.stopPropagation();var e={};e.modelName=t.target.dataset.modelname,e.modelTitle=t.target.dataset.modeltitle,e.fieldName=t.target.dataset.fieldname,e.fieldTitle=t.target.dataset.fieldtitle,e.settingName=this.props.params.settingName,e.dynamic=!0,this.props.params.onSelect(e),R.a.dispatch(Object(lt.d)()),Object(R.b)().setModelsSettings(e)}},{key:"getPositionProps",value:function(){var t=this.props.element;return t?{top:t.offsetTop+t.offsetHeight+2,left:7}:{top:0,left:7}}},{key:"render",value:function(){var t=this,e=["altrp-dynamic-content"];return this.props.show&&e.push("altrp-dynamic-content_show"),y.a.createElement("div",{className:e.join(" "),style:this.getPositionProps()},y.a.createElement("div",{className:"altrp-menu"},this.state.models.map((function(e){return y.a.createElement("div",{className:"altrp-menu-group",key:e.modelName},y.a.createElement("div",{className:"altrp-menu__title",key:e.modelName},e.title),e.fields.map((function(n){return y.a.createElement("div",{className:"altrp-menu__item","data-fieldname":n.fieldName,"data-fieldtitle":n.title,"data-modelname":e.modelName,"data-modeltitle":e.title,onClick:t.select,key:n.fieldName},n.title)})))}))))}}]),r}(g.Component);var dt=Object(b.b)((function(t){return ft({},t.dynamicContentState)}))(pt);function ht(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function vt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ht(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ht(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function gt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var yt=function(t){m()(n,t);var e=gt(n);function n(){return c()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){var t=0,e=this.props.sections||[];return y.a.createElement("div",{className:"settings-controllers"},y.a.createElement(at.Scrollbars,{autoHide:!0,autoHideTimeout:500,autoHideDuration:200},y.a.createElement("div",{id:"settingsControllers"},e.map((function(e,n){return y.a.createElement(rt,vt(vt({},e),{},{key:e.sectionId,active:t++,open:0===n}))})),y.a.createElement(dt,null))))}}]),n}(g.Component);function bt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Et(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?bt(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):bt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function wt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var Ot=function(t){m()(n,t);var e=wt(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={activeTab:"content"},r}return i()(n,[{key:"setActiveTab",value:function(t){this.setState(Et(Et({},this.state),{},{activeTab:t}))}},{key:"render",value:function(){var t=this,e=window.controllersManager,n=[];this.props.currentElement.getName&&(n=e.getControls(this.props.currentElement.getName())[this.state.activeTab]||[]);var r="panel-tab d-flex "+(this.state.activeTab===X.w?"active":""),a="panel-tab d-flex "+(this.state.activeTab===X.x?"active":""),s="panel-tab d-flex "+(this.state.activeTab===X.v?"active":"");return y.a.createElement("div",{className:"panel settings-panel d-flex"},y.a.createElement("div",{className:"panel-tabs d-flex"},y.a.createElement("button",{className:r,onClick:function(){return t.setActiveTab(X.w)}},y.a.createElement("span",{className:"panel-tab__icon"},y.a.createElement(z.a,null)),y.a.createElement("span",{className:"panel-tab__text"},"Content")),y.a.createElement("button",{className:a,onClick:function(){return t.setActiveTab(X.x)}},y.a.createElement("span",{className:"panel-tab__icon"},y.a.createElement(K.a,null)),y.a.createElement("span",{className:"panel-tab__text"},"Style")),y.a.createElement("button",{className:s,onClick:function(){return t.setActiveTab(X.v)}},y.a.createElement("span",{className:"panel-tab__icon"},y.a.createElement(Q.a,null)),y.a.createElement("span",{className:"panel-tab__text"},"Advanced"))),y.a.createElement(yt,{sections:n}))}}]),n}(g.Component);var St=Object(b.b)((function(t){return{currentElement:t.currentElement.currentElement}}))(Ot);function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var jt=function(t){m()(n,t);var e=Pt(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={},r}return i()(n,[{key:"render",value:function(){return y.a.createElement("div",{className:"editor-window",id:"editorWindow"},y.a.createElement("iframe",{src:"/admin/editor-content",width:"100%"}))}}]),n}(g.Component);function Dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}g.Component;function kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var Nt=function(t){m()(n,t);var e=kt(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).saveTemplate=r.saveTemplate.bind(u()(r)),r}return i()(n,[{key:"saveTemplate",value:function(t){Object(w.c)().modules.saveImportModule.saveTemplate()}},{key:"render",value:function(){var t="btn font_montserrat font_500 btn_grey";switch(this.props.templateStatus){case w.a.TEMPLATE_UPDATED:t+=" btn_disabled ";break;case w.a.TEMPLATE_NEED_UPDATE:t+=" btn_active "}return y.a.createElement("div",{className:"control-group d-flex"},y.a.createElement("button",{className:t,onClick:this.saveTemplate},"UPDATE"),y.a.createElement("button",{className:"btn btn_grey"},y.a.createElement(Y.a,{className:"icon"})))}}]),n}(g.Component);var _t=Object(b.b)((function(t){return{templateStatus:t.templateStatus.status}}))(Nt),Rt=n(119),Tt=n(56);n(423);function At(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?At(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):At(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function xt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}var It=function(t){m()(r,t);var e,n=xt(r);function r(){var t;return c()(this,r),(t=n.call(this)).tabClick=t.tabClick.bind(u()(t)),t.toggleBrowser=t.toggleBrowser.bind(u()(t)),t.selectAsset=t.selectAsset.bind(u()(t)),t.chooseAsset=t.chooseAsset.bind(u()(t)),t.state={activeTab:"media",tabs:[{name:"icons",title:"Icons Library"},{name:"media",title:"Media Library"}],assets:t.getAssets("media"),selectedAsset:null,mediaAssets:[]},t.mediaResource=new k.a({route:"/admin/ajax/media"}),t}return i()(r,[{key:"componentDidMount",value:(e=it()(ct.a.mark((function t(){var e;return ct.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.mediaResource.getAll();case 3:e=t.sent,this.setState((function(t){return"media"===(t=Ct(Ct({},t),{},{mediaAssets:e})).activeTab&&(t.assets=e),t})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])}))),function(){return e.apply(this,arguments)})},{key:"getAssets",value:function(t){switch(t||(t=this.state.activeTab),t){case"icons":return Object(w.h)().getIconsList();case"media":return this.state?this.state.mediaAssets:[]}return[]}},{key:"selectAsset",value:function(t){var e=t.currentTarget.dataset.assetname;this.setState((function(t){return Ct(Ct({},t),{},{selectedAsset:e})}))}},{key:"tabClick",value:function(t){this.setActiveTab(t.target.dataset.tab)}},{key:"setActiveTab",value:function(t){var e=this;this.setState((function(n){return Ct(Ct({},n),{},{activeTab:t,assets:e.getAssets(t)})}))}},{key:"toggleBrowser",value:function(){this.setState((function(t){return Ct(Ct({},t),{},{selectedAsset:null})})),this.props.dispatch(Object(Tt.d)())}},{key:"chooseAsset",value:function(){var t,e=this;if(this.state.assets.forEach((function(n){n.name===e.state.selectedAsset&&(t=n)})),!t)throw"Asset with name ".concat(this.state.selectedAsset," not found in Assets Browser (").concat(this.state.activeTab,")!");this.props.onChoose(t),this.setState((function(t){return Ct(Ct({},t),{},{selectedAsset:null})})),this.props.dispatch(Object(Tt.d)())}},{key:"render",value:function(){var t=this,e="assets-browser";this.props.active&&(e+=" assets-browser_active");var n="btn";return this.state.selectedAsset?n+=" btn_success":n+=" btn_disabled",y.a.createElement("div",{className:e},y.a.createElement("div",{className:"assets-browser__bg",onClick:this.toggleBrowser}),y.a.createElement("div",{className:"assets-browser-content"},y.a.createElement("div",{className:"assets-browser-top"},y.a.createElement("div",{className:"caption"},"Append Media"),y.a.createElement("button",{className:"btn btn_bare assets-browser__close",onClick:this.toggleBrowser},y.a.createElement(Rt.a,{className:"icon"})),y.a.createElement("div",{className:"assets-browser-nav"},this.state.tabs.map((function(e){var n="assets-browser__tab";return t.state.activeTab===e.name&&(n+=" assets-browser__tab_active"),y.a.createElement("button",{className:n,onClick:t.tabClick,key:e.name,"data-tab":e.name},e.title)})))),this.state.assets.length?y.a.createElement("div",{className:"assets-browser-choose-frame"},this.state.assets.map((function(e){var n,r="asset-choose",a={className:"asset-choose__content"};return"icons"===t.state.activeTab&&(n=e.iconComponent,r+=" asset-choose_icon",a.width="20",a.height="20"),"media"===t.state.activeTab&&(n="img",a.src=e.url,r+=" asset-choose_media",e.name=e.filename,e.assetType="media"),t.state.selectedAsset===e.name&&(r+=" asset-choose_selected"),y.a.createElement("div",{className:r,"data-assetname":e.name,key:e.name,onClick:t.selectAsset},y.a.createElement(n,a))}))):"",y.a.createElement("div",{className:"assets-browser-bottom"},y.a.createElement("button",{className:n,onClick:this.chooseAsset},"Choose"))))}}]),r}(g.Component);var Mt,Lt=Object(b.b)((function(t){return Ct({},t.assetsManagerSettings)}))(It),Bt=n(135),Ut=n(139),Wt=n(140),Ht=n(51),Ft=n(142),Gt=n(75),Jt=n(136),Vt=n(138),$t=n(93);n(74);function qt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function zt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?qt(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d()(this,n)}}Mt=function(t){m()(n,t);var e=Kt(n);function n(t){var r;return c()(this,n),r=e.call(this,t),window.altrpEditor=u()(r),r.state={activePanel:"settings",templateStatus:w.a.TEMPLATE_UPDATED},r.openPageSettings=r.openPageSettings.bind(u()(r)),r.showSettingsPanel=r.showSettingsPanel.bind(u()(r)),r.showWidgetsPanel=r.showWidgetsPanel.bind(u()(r)),r.onDragEnd=r.onDragEnd.bind(u()(r)),r.onClick=r.onClick.bind(u()(r)),R.a.subscribe(r.templateStatus.bind(u()(r))),r}return i()(n,[{key:"templateStatus",value:function(){var t=R.a.getState().templateStatus.status;t!==this.state.templateStatus&&this.setState(zt(zt({},this.state),{},{templateStatus:t}))}},{key:"initModules",value:function(){this.modules=new F(this),this.modules.loaded()}},{key:"showWidgetsPanel",value:function(){this.setState(zt(zt({},this.state),{},{activePanel:"widgets"}))}},{key:"showSettingsPanel",value:function(){this.setState(zt(zt({},this.state),{},{activePanel:"settings"}))}},{key:"onClick",value:function(){$t.contextMenu.hideAll(),R.a.dispatch(Object(lt.d)())}},{key:"onDragEnd",value:function(){var t=R.a.getState().elementDrag.element;t&&t.stopDrag&&t.stopDrag(),R.a.dispatch(Object(G.d)())}},{key:"endLoading",value:function(){console.log("editor loaded")}},{key:"componentDidMount",value:function(){this.initModules()}},{key:"openPageSettings",value:function(){this.modules.templateDataStorage.setCurrentRootElement(),this.showSettingsPanel()}},{key:"render",value:function(){var t="",e="editor ";return this.state.templateStatus===w.a.TEMPLATE_SAVING&&(e+=" editor_saving"),R.a.getState().currentElement.currentElement.getType&&"root-element"===R.a.getState().currentElement.currentElement.getType()&&"settings"===this.state.activePanel&&(t=" active"),y.a.createElement(b.a,{store:R.a},y.a.createElement("div",{className:e,onClick:this.onClick,onDragEnd:this.onDragEnd},y.a.createElement("div",{className:"left-panel"},y.a.createElement("div",{className:"editor-top-panel"},y.a.createElement("button",{className:"btn btn_hamburger"},y.a.createElement(Vt.a,{className:"icon"})),y.a.createElement("a",{href:"/admin",target:"_blank",className:"logo"},window.admin_logo?Object(w.j)(window.admin_logo,{className:"editor__logo"}):y.a.createElement(Ut.a,{viewBox:"0 0 97 35",className:"editor__logo"})),y.a.createElement("button",{className:"btn btn_dots",onClick:this.showWidgetsPanel},y.a.createElement(Jt.a,{className:"icon"}))),y.a.createElement("div",{className:"left-panel-main"},"widgets"===this.state.activePanel&&y.a.createElement(q,null),"settings"===this.state.activePanel&&y.a.createElement(St,null)),y.a.createElement("div",{className:"editor-bottom-panel d-flex align-content-center justify-center"},y.a.createElement("button",{className:"btn btn_settings"+t,onClick:this.openPageSettings},y.a.createElement(Gt.a,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(Wt.a,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(Ht.a,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(Bt.a,{className:"icon"})),y.a.createElement("button",{className:"btn "},y.a.createElement(Ft.a,{className:"icon"})),y.a.createElement(_t,null))),y.a.createElement("div",{className:"right-panel"},y.a.createElement(jt,null))),y.a.createElement(Lt,null))}}]),n}(g.Component);e.default=Mt}}]);
//# sourceMappingURL=23d0772acf3622567534.bundle.js.map