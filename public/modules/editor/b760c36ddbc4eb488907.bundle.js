(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{392:function(t,e,n){(t.exports=n(87)(!1)).push([t.i,"",""])},414:function(t,e,n){var r=n(392);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},s=n(88)(r,a);r.locals&&(t.exports=r.locals),t.hot.accept(392,(function(){var e=n(392);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");s(e)})),t.hot.dispose((function(){s()}))},423:function(t,e,n){"use strict";n.r(e);var r=n(10),a=n.n(r),s=n(4),c=n.n(s),o=n(5),i=n.n(o),l=n(2),u=n.n(l),f=n(6),m=n.n(f),p=n(7),h=n.n(p),d=n(3),v=n.n(d),b=(n(185),n(0)),g=n.n(b),y=n(11),E=function t(e){c()(this,t),this.modules=e},w=n(13);function O(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,o=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){o=!0,s=t},f:function(){try{c||null==n.return||n.return()}finally{if(o)throw s}}}}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var P=function(t){m()(n,t);var e=S(n);function n(){return c()(this,n),e.apply(this,arguments)}return i()(n,[{key:"parseData",value:function(t,e){var n=[],r=window.elementsManager,a=new(r.getElementClass(t.name));if(t.children&&t.children.length){var s,c=O(t.children);try{for(c.s();!(s=c.n()).done;){var o=s.value;r.checkElementExists(o.name)&&n.push(this.parseData(o,a))}}catch(t){c.e(t)}finally{c.f()}}return a.id=t.id,a.children=n,a.settings=0===t.settings.length?{}:t.settings,e&&(a.parent=e),a.update(),a}},{key:"duplicateElement",value:function(t,e){var n=this._duplicateElement(t);e.insertNewChildAfter(t.getId(),n);var r=Object(w.c)().modules.templateDataStorage;return r.elementsIds=_.union(r.elementsIds,n.getIds()),n}},{key:"_duplicateElement",value:function(t){var e=this,n=new(elementsManager.getElementClass(t.getName())),r=[];return t.children.map((function(t){var a=e._duplicateElement(t);a.setParent(n),r.push(a)})),n.component=new n.setChildren(r),n.settings=_.cloneDeep(t.settings),n.children=r,n}}]),n}(E),j=n(45),k=n(69),N=n(17),R=n(42);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var A=function(t){m()(n,t);var e=T(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).resource=new j.a({route:"/admin/ajax/templates"}),r}return i()(n,[{key:"load",value:function(){var t=this;if(this.template_id=Object(w.f)(),N.a.dispatch(Object(R.b)(w.a.TEMPLATE_SAVING)),this.template_id)this.resource.get(this.template_id).then((function(e){var n=JSON.parse(e.data),r=t.modules.elementsFactory.parseData(n),a=Object(w.c)().modules.templateDataStorage;a.replaceAll(r),a.setTitle(e.title),a.setName(e.name),Object(w.c)().endLoading(),N.a.dispatch(Object(R.b)(w.a.TEMPLATE_UPDATED))})).catch((function(t){console.error(t),N.a.dispatch(Object(R.b)(w.a.TEMPLATE_UPDATED))}))}},{key:"saveTemplate",value:function(){N.a.dispatch(Object(R.b)(w.a.TEMPLATE_SAVING));var t=Object(w.c)().modules.templateDataStorage.getTemplateDataForSave();this.resource.put(this.template_id,t).then((function(t){N.a.dispatch(Object(R.b)(w.a.TEMPLATE_UPDATED))})).catch((function(t){console.error(t),N.a.dispatch(Object(R.b)(w.a.TEMPLATE_UPDATED))}))}}]),n}(E),C=function t(){c()(this,t)},x=function t(){c()(this,t)},I=n(90),M=n(18),L=n(79),B=n(48);function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var W=function(t){m()(n,t);var e=U(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).elementsIds=[],r}return i()(n,[{key:"replaceAll",value:function(t){if(!t instanceof k.a)throw"Expect Root Element as root element;)";this.rootElement=t,this.elementsIds=t.getIds(),this.setCurrentRootElement()}},{key:"getTemplateData",value:function(){return this.rootElement.toObject()}},{key:"getTemplateDataForSave",value:function(){var t={};return t.data=this.getTemplateData(),t.title=this.title||"testtitle",t.name=this.name||"testname",t}},{key:"setTitle",value:function(t){this.title=t}},{key:"setName",value:function(t){this.name=t}},{key:"setCurrentRootElement",value:function(){return this.currentElement=this.rootElement,N.a.dispatch(Object(I.b)(this.currentElement)),this.currentElement}},{key:"setCurrentElement",value:function(t){if(!t instanceof M.a)throw"Only Base Element Can Be Set as Default";this.currentElement=t,N.a.dispatch(Object(I.b)(t))}},{key:"getCurrentElement",value:function(){return this.currentElement?this.currentElement:this.setCurrentRootElement()}},{key:"getRootElement",value:function(){return this.rootElement}},{key:"addWidgetInSection",value:function(t){var e=new L.a;this.elementsIds.push(e.getId());var n=new B.a;this.elementsIds.push(n.getId());var r=new(window.elementsManager.getElementClass(t));this.elementsIds.push(r.getId()),n.appendWidget(r),e.appendColumn(n),this.rootElement.appendNewSection(e),this.setCurrentElement(r),N.a.dispatch(Object(R.b)(w.a.TEMPLATE_NEED_UPDATE)),Object(w.c)().showSettingsPanel()}}]),n}(E),F=function(){function t(e){c()(this,t),this.elementsFactory=new P(this),this.saveImportModule=new A(this),this.settingsChangeModule=new C(this),this.templateSettingsChangeModule=new x(this),this.templateDataStorage=new W(this)}return i()(t,[{key:"loaded",value:function(){this.saveImportModule.load()}}]),t}(),H=n(35);function G(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var J=function(t){m()(n,t);var e=G(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={element:r.props.element},r.onDragStart=r.onDragStart.bind(u()(r)),r}return i()(n,[{key:"onDragStart",value:function(t){N.a.dispatch(Object(H.c)(null)),t.dataTransfer.effectAllowed="copy",t.dataTransfer.setData("text/plain",this.state.element.getName())}},{key:"render",value:function(){if(!this.state.element instanceof M.a)throw"Widget Component must has Element in props";return g.a.createElement("div",{className:"widget-icon",draggable:"true",onDragStart:this.onDragStart},g.a.createElement(this.state.element.getIconComponent(),{height:35}),g.a.createElement("div",{className:"widget-icon__title"},this.state.element.getTitle()))}}]),n}(b.Component);function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var $=function(t){m()(n,t);var e=V(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={widgets:window.elementsManager.getWidgetsList()},r}return i()(n,[{key:"render",value:function(){return g.a.createElement("div",{className:"widget-panel"},this.state.widgets.map((function(t){return g.a.createElement(J,{element:t,key:t.getName()})})))}}]),n}(b.Component),q=n(38),z=n(177),K=n(168),Q=n(1),X=n(125),Y=n(113);n(70);function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function tt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var nt=function(t){m()(n,t);var e=et(n);function n(t){var r;c()(this,n),(r=e.call(this,t)).state={open:t.open,active:t.open},r.toggle=r.toggle.bind(u()(r));t.open;return r}return i()(n,[{key:"componentDidMount",value:function(){document.getElementById("settingsSection0").classList.add("open")}},{key:"toggle",value:function(t){this.setState({open:!this.state.open,active:t.currentTarget.dataset.key})}},{key:"render",value:function(){var t=document.getElementById("settingsControllers");if(document.getElementById("settingsSection"+this.props.active))if(!1===document.getElementById("settingsSection"+this.props.active).classList.contains("open")){for(var e=0;e<t.children.length;e++)document.getElementById("settingsSection"+e).classList.remove("open");document.getElementById("settingsSection"+this.props.active).classList.add("open")}else document.getElementById("settingsSection"+this.props.active).classList.remove("open");var n=this.props.controls||[];return g.a.createElement("div",{className:"settings-section",id:"settingsSection"+this.props.active},g.a.createElement("div",{className:"settings-section"},g.a.createElement("div",{className:"settings-section__title d-flex ","data-open":!0,"data-key":this.props.active,onClick:this.toggle},g.a.createElement("div",{className:"settings-section__icon d-flex "},g.a.createElement(X.a,null)),g.a.createElement("div",{className:"settings-section__label"},this.props.label)),g.a.createElement("div",{className:"controllers-wrapper"},n.map((function(t){var e=window.controllersManager.getController(t.type);return g.a.createElement(e,tt(tt({},t),{},{key:t.controlId,controller:new Y.a(t)}))})))))}}]),n}(b.Component),rt=n(397);function at(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?at(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):at(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ct(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var ot=function(t){m()(n,t);var e=ct(n);function n(){return c()(this,n),e.apply(this,arguments)}return i()(n,[{key:"render",value:function(){var t=0,e=this.props.sections||[];return g.a.createElement("div",{className:"settings-controllers"},g.a.createElement(rt.Scrollbars,{autoHide:!0,autoHideTimeout:500,autoHideDuration:200},g.a.createElement("div",{id:"settingsControllers"},e.map((function(e,n){return g.a.createElement(nt,st(st({},e),{},{key:e.sectionId,active:t++,open:0===n}))})))))}}]),n}(b.Component);function it(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?it(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ut(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var ft=function(t){m()(n,t);var e=ut(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={activeTab:"content"},r}return i()(n,[{key:"setActiveTab",value:function(t){this.setState(lt(lt({},this.state),{},{activeTab:t}))}},{key:"render",value:function(){var t=this,e=window.controllersManager,n=[];this.props.currentElement.getName&&(n=e.getControls(this.props.currentElement.getName())[this.state.activeTab]||[]);var r="panel-tab d-flex "+(this.state.activeTab===Q.v?"active":""),a="panel-tab d-flex "+(this.state.activeTab===Q.w?"active":""),s="panel-tab d-flex "+(this.state.activeTab===Q.u?"active":"");return g.a.createElement("div",{className:"panel settings-panel d-flex"},g.a.createElement("div",{className:"panel-tabs d-flex"},g.a.createElement("button",{className:r,onClick:function(){return t.setActiveTab(Q.v)}},g.a.createElement("span",{className:"panel-tab__icon"},g.a.createElement(q.a,null)),g.a.createElement("span",{className:"panel-tab__text"},"Content")),g.a.createElement("button",{className:a,onClick:function(){return t.setActiveTab(Q.w)}},g.a.createElement("span",{className:"panel-tab__icon"},g.a.createElement(z.a,null)),g.a.createElement("span",{className:"panel-tab__text"},"Style")),g.a.createElement("button",{className:s,onClick:function(){return t.setActiveTab(Q.u)}},g.a.createElement("span",{className:"panel-tab__icon"},g.a.createElement(K.a,null)),g.a.createElement("span",{className:"panel-tab__text"},"Advanced"))),g.a.createElement(ot,{sections:n}))}}]),n}(b.Component);var mt=Object(y.b)((function(t){return{currentElement:t.currentElement.currentElement}}))(ft);function pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var ht=function(t){m()(n,t);var e=pt(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).state={},r}return i()(n,[{key:"render",value:function(){return g.a.createElement("div",{className:"editor-window",id:"editorWindow"},g.a.createElement("iframe",{src:"/admin/editor-content",width:"100%"}))}}]),n}(b.Component);function dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}b.Component;function vt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var bt=function(t){m()(n,t);var e=vt(n);function n(t){var r;return c()(this,n),(r=e.call(this,t)).saveTemplate=r.saveTemplate.bind(u()(r)),r}return i()(n,[{key:"saveTemplate",value:function(t){Object(w.c)().modules.saveImportModule.saveTemplate()}},{key:"render",value:function(){var t="btn font_montserrat font_500 btn_grey";switch(this.props.templateStatus){case w.a.TEMPLATE_UPDATED:t+=" btn_disabled ";break;case w.a.TEMPLATE_NEED_UPDATE:t+=" btn_active "}return g.a.createElement("div",{className:"control-group d-flex"},g.a.createElement("button",{className:t,onClick:this.saveTemplate},"UPDATE"),g.a.createElement("button",{className:"btn btn_grey"},g.a.createElement(X.a,{className:"icon"})))}}]),n}(b.Component);var gt=Object(y.b)((function(t){return{templateStatus:t.templateStatus.status}}))(bt),yt=n(19),Et=n.n(yt),wt=n(24),Ot=n.n(wt),Dt=n(120),St=n(55);n(414);function Pt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function jt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Pt(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function kt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}var Nt=function(t){m()(r,t);var e,n=kt(r);function r(){var t;return c()(this,r),(t=n.call(this)).tabClick=t.tabClick.bind(u()(t)),t.toggleBrowser=t.toggleBrowser.bind(u()(t)),t.selectAsset=t.selectAsset.bind(u()(t)),t.chooseAsset=t.chooseAsset.bind(u()(t)),t.state={activeTab:"media",tabs:[{name:"icons",title:"Icons Library"},{name:"media",title:"Media Library"}],assets:t.getAssets("media"),selectedAsset:null,mediaAssets:[]},t.mediaResource=new j.a({route:"/admin/ajax/media"}),t}return i()(r,[{key:"componentDidMount",value:(e=Ot()(Et.a.mark((function t(){var e;return Et.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.mediaResource.getAll();case 3:e=t.sent,this.setState((function(t){return"media"===(t=jt(jt({},t),{},{mediaAssets:e})).activeTab&&(t.assets=e),t})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("error",t.t0);case 10:case"end":return t.stop()}}),t,this,[[0,7]])}))),function(){return e.apply(this,arguments)})},{key:"getAssets",value:function(t){switch(t||(t=this.state.activeTab),t){case"icons":return Object(w.h)().getIconsList();case"media":return this.state?this.state.mediaAssets:[]}return[]}},{key:"selectAsset",value:function(t){var e=t.currentTarget.dataset.assetname;this.setState((function(t){return jt(jt({},t),{},{selectedAsset:e})}))}},{key:"tabClick",value:function(t){this.setActiveTab(t.target.dataset.tab)}},{key:"setActiveTab",value:function(t){var e=this;this.setState((function(n){return jt(jt({},n),{},{activeTab:t,assets:e.getAssets(t)})}))}},{key:"toggleBrowser",value:function(){this.setState((function(t){return jt(jt({},t),{},{selectedAsset:null})})),this.props.dispatch(Object(St.d)())}},{key:"chooseAsset",value:function(){var t,e=this;if(this.state.assets.forEach((function(n){n.name===e.state.selectedAsset&&(t=n)})),!t)throw"Asset with name ".concat(this.state.selectedAsset," not found in Assets Browser (").concat(this.state.activeTab,")!");this.props.onChoose(t),this.setState((function(t){return jt(jt({},t),{},{selectedAsset:null})})),this.props.dispatch(Object(St.d)())}},{key:"render",value:function(){var t=this,e="assets-browser";this.props.active&&(e+=" assets-browser_active");var n="btn";return this.state.selectedAsset?n+=" btn_success":n+=" btn_disabled",g.a.createElement("div",{className:e},g.a.createElement("div",{className:"assets-browser__bg",onClick:this.toggleBrowser}),g.a.createElement("div",{className:"assets-browser-content"},g.a.createElement("div",{className:"assets-browser-top"},g.a.createElement("div",{className:"caption"},"Append Media"),g.a.createElement("button",{className:"btn btn_bare assets-browser__close",onClick:this.toggleBrowser},g.a.createElement(Dt.a,{className:"icon"})),g.a.createElement("div",{className:"assets-browser-nav"},this.state.tabs.map((function(e){var n="assets-browser__tab";return t.state.activeTab===e.name&&(n+=" assets-browser__tab_active"),g.a.createElement("button",{className:n,onClick:t.tabClick,key:e.name,"data-tab":e.name},e.title)})))),this.state.assets.length?g.a.createElement("div",{className:"assets-browser-choose-frame"},this.state.assets.map((function(e){var n,r="asset-choose",a={className:"asset-choose__content"};return"icons"===t.state.activeTab&&(n=e.iconComponent,r+=" asset-choose_icon",a.width="20",a.height="20"),"media"===t.state.activeTab&&(n="img",a.src=e.url,r+=" asset-choose_media",e.name=e.filename,e.assetType="media"),t.state.selectedAsset===e.name&&(r+=" asset-choose_selected"),g.a.createElement("div",{className:r,"data-assetname":e.name,key:e.name,onClick:t.selectAsset},g.a.createElement(n,a))}))):"",g.a.createElement("div",{className:"assets-browser-bottom"},g.a.createElement("button",{className:n,onClick:this.chooseAsset},"Choose"))))}}]),r}(b.Component);var _t,Rt=Object(y.b)((function(t){return jt({},t.assetsManagerSettings)}))(Nt),Tt=n(169),At=n(173),Ct=n(174),xt=n(54),It=n(176),Mt=n(74),Lt=n(170),Bt=n(172),Ut=n(89);n(179);function Wt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Ft(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Wt(Object(n),!0).forEach((function(e){a()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Ht(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v()(t);if(e){var a=v()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h()(this,n)}}_t=function(t){m()(n,t);var e=Ht(n);function n(t){var r;return c()(this,n),r=e.call(this,t),window.altrpEditor=u()(r),r.state={activePanel:"settings",templateStatus:w.a.TEMPLATE_UPDATED},r.openPageSettings=r.openPageSettings.bind(u()(r)),r.showSettingsPanel=r.showSettingsPanel.bind(u()(r)),r.showWidgetsPanel=r.showWidgetsPanel.bind(u()(r)),r.onDragEnd=r.onDragEnd.bind(u()(r)),r.onClick=r.onClick.bind(u()(r)),N.a.subscribe(r.templateStatus.bind(u()(r))),r}return i()(n,[{key:"templateStatus",value:function(){var t=N.a.getState().templateStatus.status;t!==this.state.templateStatus&&this.setState(Ft(Ft({},this.state),{},{templateStatus:t}))}},{key:"initModules",value:function(){this.modules=new F(this),this.modules.loaded()}},{key:"showWidgetsPanel",value:function(){this.setState(Ft(Ft({},this.state),{},{activePanel:"widgets"}))}},{key:"showSettingsPanel",value:function(){this.setState(Ft(Ft({},this.state),{},{activePanel:"settings"}))}},{key:"onClick",value:function(){Ut.contextMenu.hideAll()}},{key:"onDragEnd",value:function(){var t=N.a.getState().elementDrag.element;t&&t.stopDrag&&t.stopDrag(),N.a.dispatch(Object(H.d)())}},{key:"endLoading",value:function(){console.log("editor loaded")}},{key:"componentDidMount",value:function(){this.initModules()}},{key:"openPageSettings",value:function(){this.modules.templateDataStorage.setCurrentRootElement(),this.showSettingsPanel()}},{key:"render",value:function(){var t="",e="editor ";return this.state.templateStatus===w.a.TEMPLATE_SAVING&&(e+=" editor_saving"),N.a.getState().currentElement.currentElement.getType&&"root-element"===N.a.getState().currentElement.currentElement.getType()&&"settings"===this.state.activePanel&&(t=" active"),g.a.createElement(y.a,{store:N.a},g.a.createElement("div",{className:e,onClick:this.onClick,onDragEnd:this.onDragEnd},g.a.createElement("div",{className:"left-panel"},g.a.createElement("div",{className:"editor-top-panel"},g.a.createElement("button",{className:"btn btn_hamburger"},g.a.createElement(Bt.a,{className:"icon"})),g.a.createElement("a",{href:"/admin",target:"_blank",className:"logo"},window.admin_logo?Object(w.j)(window.admin_logo,{className:"editor__logo"}):g.a.createElement(At.a,{viewBox:"0 0 97 35",className:"editor__logo"})),g.a.createElement("button",{className:"btn btn_dots",onClick:this.showWidgetsPanel},g.a.createElement(Lt.a,{className:"icon"}))),g.a.createElement("div",{className:"left-panel-main"},"widgets"===this.state.activePanel&&g.a.createElement($,null),"settings"===this.state.activePanel&&g.a.createElement(mt,null)),g.a.createElement("div",{className:"editor-bottom-panel d-flex align-content-center justify-center"},g.a.createElement("button",{className:"btn btn_settings"+t,onClick:this.openPageSettings},g.a.createElement(Mt.a,{className:"icon"})),g.a.createElement("button",{className:"btn "},g.a.createElement(Ct.a,{className:"icon"})),g.a.createElement("button",{className:"btn "},g.a.createElement(xt.a,{className:"icon"})),g.a.createElement("button",{className:"btn "},g.a.createElement(Tt.a,{className:"icon"})),g.a.createElement("button",{className:"btn "},g.a.createElement(It.a,{className:"icon"})),g.a.createElement(gt,null))),g.a.createElement("div",{className:"right-panel"},g.a.createElement(ht,null))),g.a.createElement(Rt,null))}}]),n}(b.Component);e.default=_t}}]);
//# sourceMappingURL=b760c36ddbc4eb488907.bundle.js.map