(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{459:function(t,e,r){"use strict";r.r(e);var n=r(9),a=r.n(n),o=r(11),i=r.n(o),u=r(15),l=function t(){a()(this,t)},s=function(){function t(){a()(this,t)}return i()(t,[{key:"getTemplates",value:function(){return this.templates=this.templates||[],this.templates}}],[{key:"areaFabric",value:function(e){var r=new t;return r.settings=e.settings,r.id=e.id,r.template=new l,r.template.data=e.template?JSON.parse(e.template.data):null,r.template.id=e.template?e.template.id:null,"popups"===e.area_name&&(r.templates=[],e.templates=e.templates||[],e.templates.forEach((function(t){var e=new l;e.data=t?JSON.parse(t.data):null,e.id=t?JSON.parse(t.id):null,e.template_settings=t?t.template_settings:[],r.templates.push(e)}))),r}}]),t}();function c(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var p=function(){function t(e){a()(this,t),this.id=e.id,this.path=e.path,this.model=e.model,this.models=e.models,this.models||(this.models=e.model?[e.model]:[]),this.model=e.model,this.title=e.title||"",this.allowed=e.allowed,this.redirect=e.redirect,this.lazy=e.lazy}return i()(t,null,[{key:"routeFabric",value:function(e){var r=new t(e);r.areas=[],e.areas=e.areas||[];var n,a=c(e.areas);try{for(a.s();!(n=a.n()).done;){var o=n.value;r.areas.push(s.areaFabric(o))}}catch(t){a.e(t)}finally{a.f()}return r}}]),t}(),m=r(38);var d={routes:[]};var h=Object(m.combineReducers)({appRoutes:function(t,e){switch(t=t||d,e.type){case"CHANGE_APP_ROUTES":t={routes:e.routes}}return t}}),y=Object(m.createStore)(h);function v(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var w=function(){function t(){a()(this,t),this.resource=new u.a({route:"/ajax/routes"}),this.loadRoutes()}return i()(t,[{key:"loadRoutes",value:function(){this.resource.getAll().then((function(t){var e,r=[],n=v(t.pages);try{for(n.s();!(e=n.n()).done;){var a=e.value;r.push(p.routeFabric(a))}}catch(t){n.e(t)}finally{n.f()}y.dispatch(function(t){return{type:"CHANGE_APP_ROUTES",routes:t}}(r))})).catch((function(t){console.error(t)}))}}]),t}();e.default=new w}}]);
//# sourceMappingURL=ac5f3118d54f66e01dd2.bundle.js.map