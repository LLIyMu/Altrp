(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{231:function(t,e,r){(t.exports=r(55)(!1)).push([t.i,"",""])},234:function(t,e,r){(t.exports=r(55)(!1)).push([t.i,"",""])},289:function(t,e,r){var o=r(231);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},a=r(56)(o,n);o.locals&&(t.exports=o.locals),t.hot.accept(231,(function(){var e=r(231);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var r,o=0;for(r in t){if(!e||t[r]!==e[r])return!1;o++}for(r in e)o--;return 0===o}(o.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(e)})),t.hot.dispose((function(){a()}))},292:function(t,e,r){var o=r(234);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},a=r(56)(o,n);o.locals&&(t.exports=o.locals),t.hot.accept(234,(function(){var e=r(234);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var r,o=0;for(r in t){if(!e||t[r]!==e[r])return!1;o++}for(r in e)o--;return 0===o}(o.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(e)})),t.hot.dispose((function(){a()}))},298:function(t,e,r){"use strict";r.r(e);var o=r(24),n=r.n(o),a=r(9),s=r.n(a),i=r(7),c=r.n(i),l=r(8),p=r.n(l),u=r(4),f=r.n(u),d=r(15),h=r.n(d),m=r(16),g=r.n(m),v=r(5),_=r.n(v),b=r(0),w=r.n(b),y=r(264),k=r.n(y),x=r(280);r(289);function E(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=_()(t);if(e){var n=_()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return g()(this,r)}}var S=function(t){h()(r,t);var e=E(r);function r(t){return c()(this,r),e.call(this,t)}return p()(r,[{key:"render",value:function(){var t={backgroundColor:this.props.color.color};return console.log(this.props.color.color),w.a.createElement(x.a,n()({},this.props.settings,{style:t,wrapperClassName:"altrp-lightbox"}))}}]),r}(b.Component),O=r(27);r(290),r(291),r(292);function R(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?R(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=_()(t);if(e){var n=_()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return g()(this,r)}}var j=function(t){return w.a.createElement("svg",t,w.a.createElement("path",{fill:"none",stroke:"#000",strokeWidth:"1.03",d:"M13 16l-6-6 6-6"}))};j.defaultProps={width:"38",height:"38",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"};var C=function(t){h()(r,t);var e=P(r);function r(t){var o;return c()(this,r),(o=e.call(this,t)).next=o.next.bind(f()(o)),o.previous=o.previous.bind(f()(o)),o.state={activeSlide:0,openLightBox:!1,sliderImages:[]},o}return p()(r,[{key:"componentDidMount",value:function(){var t=this;this.props.slides_repeater.forEach((function(e){t.setState((function(t){var r=N({},e.image_slides_repeater)||{};return r.url=r.url||"/img/nullImage.png",t.sliderImages.push(r.url),N({},t)}))}))}},{key:"componentDidUpdate",value:function(t){var e=this;this.props.slides_repeater!==t.slides_repeater&&this.props.slides_repeater.forEach((function(t){e.setState((function(e){var r=N({},t.image_slides_repeater)||{};return r.url=r.url||"/img/nullImage.png",e.sliderImages.push(r.url),N({},e)}))}))}},{key:"next",value:function(){this.slider.slickNext()}},{key:"previous",value:function(){this.slider.slickPrev()}},{key:"render",value:function(){var t=this,e="altrp-carousel-container";e+=this.props.arrows_navigation_content?"":" altrp-carousel-container-no-arrow";var r=this.props.slides_repeater||[],o=w.a.createElement("a",null,w.a.createElement("div",{className:"altrp-carousel-paging"})),a="altrp-carousel-dots";if(this.props.dots_navigation_content)switch(this.props.dots_position_navigation_content){case"topLeft":a+=" altrp-carousel-dots-top-left",e+=" altrp-carousel-dots-top-container";break;case"top":a+=" altrp-carousel-dots-top",e+=" altrp-carousel-dots-top-container";break;case"topRight":a+=" altrp-carousel-dots-top-right",e+=" altrp-carousel-dots-top-container";break;case"bottomLeft":a+=" altrp-carousel-dots-bottom-left",e+=" altrp-carousel-dots-bottom-container";break;case"bottom":e+=" altrp-carousel-dots-bottom-container";break;case"bottomRight":a+=" altrp-carousel-dots-bottom-right",e+=" altrp-carousel-dots-bottom-container"}var s,i,c={arrows:!1,customPaging:function(){return o},dotsClass:a,dots:this.props.dots_navigation_content,infinite:this.props.infinite_loop_additional_content,pauseOnHover:this.props.pause_on_interaction_loop_additional_content,autoplay:this.props.autoplay_additional_content,className:"altrp-carousel-slides",autoplaySpeed:Number(this.props.transition_autoplay_duration_additional_content),speed:Number(this.props.transition_duration_additional_content),slidesToShow:Number(this.props.per_view_slides_content),slidesToScroll:Number(this.props.to_scroll_slides_content),rows:Number(this.props.per_row_slides_content),afterChange:function(e){return t.setState({activeSlide:e})},adaptiveHeight:!0},l=r.map((function(e,r){var o=N({},e.image_slides_repeater)||{};return o.url=o.url||"/img/nullImage.png",o.name=o.name||"null",o.assetType=o.assetType||"mediaBackground","media"===o.assetType&&(o.assetType="mediaBackground"),w.a.createElement("div",{className:"altrp-carousel-slide",key:r},Object(O.b)(o,{className:"altrp-carousel-slide-img",onDoubleClick:function(){t.props.lightbox_slides_content&&t.setState((function(t){return N(N({},t),{},{openLightBox:!0})}))}}))})),p="";switch(this.props.arrows_position_navigation_content){case"topLeft":p+=" altrp-carousel-arrow-top-left";break;case"top":p+=" altrp-carousel-arrow-top";break;case"topRight":p+=" altrp-carousel-arrow-top-right";break;case"bottomLeft":p+=" altrp-carousel-arrow-bottom-left";break;case"bottom":p+=" altrp-carousel-arrow-bottom";break;case"bottomRight":p+=" altrp-carousel-arrow-bottom-right"}s=this.props.arrows_navigation_content?w.a.createElement("div",{className:"altrp-carousel-arrow-prev altrp-carousel-arrow",onClick:this.previous},w.a.createElement(j,null)):"",i=this.props.arrows_navigation_content?w.a.createElement("div",{className:"altrp-carousel-arrow-next altrp-carousel-arrow",onClick:this.next},w.a.createElement(j,null)):"";var u="";return this.props.lightbox_slides_content&&(u=this.state.openLightBox?w.a.createElement(S,{settings:{mainSrc:this.state.sliderImages[this.state.activeSlide],onCloseRequest:function(){return t.setState({openLightBox:!1})}},color:this.props.color_lightbox_style}):""),w.a.createElement("div",{className:"altrp-carousel"},this.props.lightbox_slides_content?u:"","center"===this.props.arrows_position_navigation_content?s:w.a.createElement("div",{className:"altrp-carousel-arrows-container"+p},s,i),w.a.createElement("div",{className:e},w.a.createElement(k.a,n()({ref:function(e){return t.slider=e}},c),l)),"center"===this.props.arrows_position_navigation_content?i:"")}}]),r}(b.Component);e.default=C}}]);
//# sourceMappingURL=dac2f5d3e7c6078dc70e.bundle.js.map