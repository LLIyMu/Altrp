(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{366:function(t,e,n){var r=n(367),o=n(368),a=n(143),c=n(369);t.exports=function(t){return r(t)||o(t)||a(t)||c()}},367:function(t,e,n){var r=n(144);t.exports=function(t){if(Array.isArray(t))return r(t)}},368:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},369:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},373:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r),a=n(5),c=n.n(a),l=n(2),i=n.n(l),s=n(6),u=n.n(s),f=n(7),m=n.n(f),p=n(3),h=n.n(p),d=n(0),y=n.n(d),v=n(8),w=n.n(v),b=n(9),E=n.n(b),g=function(t){t.styles;var e=E()(t,["styles"]);return y.a.createElement("svg",w()({width:"29",height:"29",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),y.a.createElement("path",{d:"M26.411 14.842h.25V13.16h-11.82V1.34h-1.68v11.82H1.34v1.682h11.82v11.82h1.68v-11.82h11.57z",fill:"#fff",stroke:"#fff",strokeWidth:".5"}))},D=function(t){t.styles;var e=E()(t,["styles"]);return y.a.createElement("svg",w()({width:"27",height:"23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),y.a.createElement("path",{d:"M21.74 20.953c-.116.43-.54.755-1.022.755H2.068a1.06 1.06 0 01-1.066-1.056v.23H.774m20.965.07l.235.087.004-.01m-.239-.076l.242.064a.482.482 0 01-.003.012m-.239-.076L1 20.633l-.247-.002v.002c-.001.084.006.168.021.25m21.204.146c-.15.54-.674.93-1.26.93H2.068a1.31 1.31 0 01-1.046-.518h0a1.305 1.305 0 01-.248-.558m21.204.146l4.257-11.673.015-.041v-.118c0-.815-.514-1.489-1.296-1.489H23.75V5.347a1.39 1.39 0 00-1.388-1.389H12.177l-2.009-2.812-.075-.104H2.138A1.39 1.39 0 00.75 2.43v18.453h.024M11.49 5.292l-.075-.105-2.008-2.812H2.138a.055.055 0 00-.055.055v14.287l2.963-8.08c.13-.471.548-.828 1.04-.91 0 0 0 0 0 0l.041.246c.058-.01.118-.015.178-.015l5.185-2.666zm0 0h10.871c.03 0 .055.024.055.055v2.361L11.49 5.292zm9.22 15.324l-.003.009H2.092l4.22-11.574.003-.01h18.578a.402.402 0 01.015.063L20.71 20.616z",fill:"#fff",stroke:"#fff",strokeWidth:".5"}))},O=n(14),S=n(20);n(34);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var k=function(t){u()(n,t);var e=R(n);function n(){return o()(this,n),e.apply(this,arguments)}return c()(n,[{key:"onDragOver",value:function(t){return t.preventDefault(),t.stopPropagation(),!1}},{key:"onDragEnter",value:function(t){return t.preventDefault(),t.stopPropagation(),!1}},{key:"onDrop",value:function(t){var e=t.dataTransfer.getData("text/plain");return t.preventDefault(),t.stopPropagation(),Object(O.b)().modules.templateDataStorage.addWidgetInSection(e),!1}},{key:"render",value:function(){return y.a.createElement("div",{className:"new-section",onDragOver:this.onDragOver,onDragEnter:this.onDragEnter,onDrop:this.onDrop,"data-element-type":"new-section"},y.a.createElement("div",{className:"new-section-buttons d-flex"},y.a.createElement("button",{draggable:"true",className:"new-section__button new-section__button_add d-flex "},y.a.createElement(g,null)),y.a.createElement("button",{className:"new-section__button new-section__button_library d-flex"},y.a.createElement(D,null))),y.a.createElement("div",{className:"new-section__text"},"Drag widget here"))}}]),n}(d.Component),j=n(11),x=n(56),P=n(12),_=n.n(P),H=n(366),I=n.n(H);function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){_()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var L=function(t){u()(n,t);var e=C(n);function n(t){var r;return o()(this,n),(r=e.call(this,t)).state={elementStyles:[]},window.stylesModule=i()(r),window.stylesModuleResolve(i()(r)),r}return c()(n,[{key:"addElementStyles",value:function(t,e){if(e){var n=!1,r=I()(this.state.elementStyles);r.forEach((function(r){r.elementId===t&&(n=!0,r.styles=e)})),n||r.push({elementId:t,styles:e}),this.setState(M(M({},this.state),{},{elementStyles:r}))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"styles-container"},this.state.elementStyles.map((function(t){return y.a.createElement("style",{"data-styles-id":t.elementId,key:t.elementId},t.styles)})))}}]),n}(d.Component);function W(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h()(t);if(e){var o=h()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var z=function(t){u()(n,t);var e=W(n);function n(t){var r;return o()(this,n),(r=e.call(this,t)).state={},r.editorWindow=y.a.createRef(),S.a.subscribe(r.currentElementListener.bind(i()(r))),window.altrpEditorContent=i()(r),r}return c()(n,[{key:"currentElementListener",value:function(t){var e=S.a.getState().currentElement.currentElement;e instanceof x.a&&e!==this.state.rootElement&&this.setState({rootElement:e})}},{key:"componentDidMount",value:function(){var t=Object(O.b)().modules.templateDataStorage.getRootElement();this.setState({rootElement:t})}},{key:"render",value:function(){return y.a.createElement(j.a,{store:S.a},y.a.createElement("div",{className:"editor-content d-flex flex-column justify-center align-content-center",ref:this.editorWindow},this.state.rootElement?y.a.createElement(this.state.rootElement.componentClass,{children:this.state.rootElement.children,element:this.state.rootElement}):"",y.a.createElement(k,null)),y.a.createElement(L,null))}}]),n}(d.Component);e.default=z}}]);
//# sourceMappingURL=2.editor.js.map