(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{223:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return a}));var n="CHANGE_APP_ROUTES";function a(t){return{type:n,routes:t}}},231:function(t,e,r){"use strict";var n=r(46),a=r(223),c={routes:[]};var o=Object(n.combineReducers)({appRoutes:function(t,e){switch(t=t||c,e.type){case a.a:t={routes:e.routes}}return t}}),s=Object(n.createStore)(o);e.a=s},232:function(t,e,r){"use strict";var n=r(7),a=r.n(n),c=r(8),o=r.n(c),s=function t(){a()(this,t)},u=function(){function t(){a()(this,t)}return o()(t,[{key:"getTemplates",value:function(){return this.templates=this.templates||[],this.templates}}],[{key:"areaFabric",value:function(e){var r=new t;return r.settings=e.settings,r.id=e.id,r.template=new s,r.template.data=e.template?JSON.parse(e.template.data):null,r.template.id=e.template?e.template.id:null,"popups"===e.area_name&&(r.templates=[],e.templates=e.templates||[],e.templates.forEach((function(t){var e=new s;e.data=t?JSON.parse(t.data):null,e.id=t?JSON.parse(t.id):null,e.template_settings=t?t.template_settings:[],r.templates.push(e)}))),r}}]),t}();e.a=u},291:function(t,e,r){"use strict";r.r(e);var n=r(7),a=r.n(n),c=r(8),o=r.n(c),s=r(4),u=r.n(s),i=r(15),l=r.n(i),p=r(16),f=r.n(p),h=r(5),m=r.n(h),y=r(0),d=r.n(y),v=r(39),b=r(231),g=r(61),O=r(21),w=r(103),R=r(24),j=r.n(R),E=r(238),k=r.n(E),S=r(13),P=r.n(S),D=r(9),x=r.n(D),N=r(17),C=r.n(N);function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m()(t);if(e){var a=m()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var I=function(t){l()(r,t);var e=T(r);function r(){return a()(this,r),e.apply(this,arguments)}return o()(r,[{key:"render",value:function(){console.log(this.props.template.template_settings),console.log(this.props.template);var t=window.frontElementsFabric.parseData(this.props.template.data,null,this.props.page,this.props.models);return d.a.createElement("div",{className:["app-popup"].join(" ")},d.a.createElement(t.componentClass,{element:t,children:t.children}))}}]),r}(y.Component);function J(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m()(t);if(e){var a=m()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var A=function(t){l()(r,t);var e=J(r);function r(){return a()(this,r),e.apply(this,arguments)}return o()(r,[{key:"render",value:function(){var t=["app-area","app-area_".concat(this.props.id)];if(this.props.area.getTemplates().length)return d.a.createElement("div",{className:t.join(" ")},this.props.area.getTemplates().map((function(t){return d.a.createElement(I,{key:t.id,template:t})})));if(!this.props.template.data)return d.a.createElement("div",{className:t.join(" ")});var e=window.frontElementsFabric.parseData(this.props.template.data,null,this.props.page,this.props.models);return d.a.createElement("div",{className:t.join(" ")},d.a.createElement(e.componentClass,{element:e,children:e.children}))}}]),r}(y.Component),F=r(240),H=r(47),M=new(function(){function t(){a()(this,t),this.resource=new H.a({route:"/ajax/pages"}),this.pagesStorage={}}var e;return o()(t,[{key:"loadPage",value:(e=C()(P.a.mark((function t(e){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!_.isObject(this.pagesStorage[e])){t.next=2;break}return t.abrupt("return",this.pagesStorage[e]);case 2:return t.next=4,this.resource.get(e);case 4:return r=t.sent,this.pagesStorage[e]=r,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),t}()),z=r(232);function G(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function U(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?G(Object(r),!0).forEach((function(e){x()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function V(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m()(t);if(e){var a=m()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var q=function(t){l()(n,t);var e,r=V(n);function n(t){var e;return a()(this,n),e=r.call(this,t),Object(v.d)(e.props.title),e.state={areas:e.props.areas||[]},e}return o()(n,[{key:"componentDidMount",value:(e=C()(P.a.mark((function t(){var e,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Object(v.d)(this.props.title),!this.props.lazy||!this.props.allowed){t.next=7;break}return t.next=4,M.loadPage(this.props.id);case 4:e=t.sent,r=e.areas.map((function(t){return z.a.areaFabric(t)})),this.setState((function(t){return U(U({},t),{},{areas:r})}));case 7:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"render",value:function(){var t=this;return this.props.allowed?d.a.createElement(F.Scrollbars,{style:{zIndex:99999},autoHide:!0,autoHideTimeout:500,autoHideDuration:200,renderTrackVertical:function(t){var e=t.style,r=k()(t,["style"]);return d.a.createElement("div",j()({className:"altrp-scroll__vertical-track",style:e},r))}},d.a.createElement("div",{className:"route-content"},this.state.areas.map((function(e){return d.a.createElement(A,j()({},e,{area:e,page:t.props.id,models:[t.props.model],key:"appArea_"+e.id}))})))):d.a.createElement(O.a,{to:this.props.redirect||"/"})}}]),n}(y.Component),B=r(108),K=r.n(B);function L(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?L(Object(r),!0).forEach((function(e){x()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m()(t);if(e){var a=m()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var X=function(t){l()(r,t);var e=W(r);function r(t){var n;return a()(this,r),(n=e.call(this,t)).state={elementStyles:[]},window.stylesModule=u()(n),window.stylesModuleResolve(u()(n)),n}return o()(r,[{key:"addElementStyles",value:function(t,e){if(e){var r=!1,n=K()(this.state.elementStyles);n.forEach((function(n){n.elementId===t&&(r=!0,n.styles=e)})),r||n.push({elementId:t,styles:e}),this.setState(Q(Q({},this.state),{},{elementStyles:n}))}}},{key:"render",value:function(){return d.a.createElement("div",{className:"styles-container"},this.state.elementStyles.map((function(t){return d.a.createElement("style",{"data-styles-id":t.elementId,key:t.elementId},t.styles)})))}}]),r}(y.Component);function Y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m()(t);if(e){var a=m()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}var Z=function(t){l()(r,t);var e=Y(r);function r(t){return a()(this,r),e.call(this,t)}return o()(r,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return d.a.createElement(g.a,null,d.a.createElement("div",{className:"front-app-content"},d.a.createElement(O.d,null,this.props.routes.map((function(t){return d.a.createElement(O.b,{key:t.id,children:d.a.createElement(q,t),path:t.path,exact:!0})})))),d.a.createElement(X,null))}}]),r}(y.Component);var $,tt=Object(w.b)((function(t){return{routes:t.appRoutes.routes}}))(Z);function et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=m()(t);if(e){var a=m()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return f()(this,r)}}$=function(t){l()(r,t);var e=et(r);function r(t){var n;return a()(this,r),n=e.call(this,t),window.frontApp=u()(n),n.getRoutes(),n}return o()(r,[{key:"getRoutes",value:function(){var t=this;return Object(v.a)().then((function(e){t.routes=e.default}))}},{key:"render",value:function(){return d.a.createElement(w.a,{store:b.a},d.a.createElement(tt,null))}}]),r}(y.Component);e.default=$}}]);
//# sourceMappingURL=976ddb193d8409de81da.bundle.js.map