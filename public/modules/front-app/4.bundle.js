(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{54:function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),a=n(3),i=n.n(a),u=function(){function t(e){if(o()(this,t),this.route=e.route,!this.route)throw"Нужен URL"}return i()(t,[{key:"get",value:function(t){if(!t)throw'Get only by "id"';var e=this.route+"/"+t;return fetch(e,{method:"get",headers:{"Content-Type":"application/json"}}).then((function(t){return!1===t.ok?Promise.reject(t.text(),t.status):t.json()}))}},{key:"getAll",value:function(){var t=this.route;return fetch(t,{method:"get",headers:{"Content-Type":"application/json"}}).then((function(t){return!1===t.ok?Promise.reject(t.text(),t.status):t.json()}))}},{key:"post",value:function(t,e){t._token=_token,e=e||{"Content-Type":"application/json"};var n={method:"POST",body:JSON.stringify(t),headers:e};return fetch(this.route,n).then((function(t){return!1===t.ok?Promise.reject(t.text(),t.status):t.json()}))}},{key:"postFiles",value:function(t,e){String(Math.random()).slice(2);e=e||"image";var n={"X-CSRF-TOKEN":_token},r=new FormData;console.log(t);for(var o=0;o<t.length;o++)t[o].size>10485760||0!==t[o].type.indexOf(e)?console.log(t[o]):r.append("files[".concat(o,"]"),t[o]);var a={method:"POST",body:r,headers:n};return fetch(this.route,a).then((function(t){return!1===t.ok?Promise.reject(t.text(),t.status):t.json()}))}},{key:"put",value:function(t,e){e._token=_token;var n={method:"put",body:JSON.stringify(e),headers:{"X-CSRF-TOKEN":_token,"Content-Type":"application/json"}},r=this.route+"/"+t;return fetch(r,n).then((function(t){return!1===t.ok?Promise.reject(t.text(),t.status):t.json()}))}},{key:"delete",value:function(t){var e={method:"delete",headers:{"X-CSRF-TOKEN":_token,"Content-Type":"application/json"}},n=this.route+"/"+t;return fetch(n,e).then((function(t){return!1===t.ok?Promise.reject(t.text(),t.status):t.json()}))}},{key:"getOptions",value:function(){var t=this.route+"/options";return fetch(t,{method:"get",headers:{"Content-Type":"application/json"}}).then((function(t){return!1===t.ok?Promise.reject(t.text(),t.status):t.json()}))}}]),t}();var s=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)};function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"areaFabric",value:function(e){var n=new t;return n.settings=e.settings,n.id=e.id,n.template=new s,n.template.data=JSON.parse(e.template.data),n.template.id=e.template.id,n}}],(n=null)&&c(e.prototype,n),r&&c(e,r),t}();function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e,this.path=n}var e,n,r;return e=t,r=[{key:"routeFabric",value:function(e){var n=new t(e.id,e.path);n.areas=[];var r=!0,o=!1,a=void 0;try{for(var i,u=e.areas[Symbol.iterator]();!(r=(i=u.next()).done);r=!0){var s=i.value;n.areas.push(l.areaFabric(s))}}catch(t){o=!0,a=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}],(n=null)&&f(e.prototype,n),r&&f(e,r),t}(),p=n(37),v=n(33);function y(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resource=new u({route:"/ajax/routes"}),this.loadRoutes()}var e,n,r;return e=t,(n=[{key:"loadRoutes",value:function(){this.resource.getAll().then((function(t){var e=[],n=!0,r=!1,o=void 0;try{for(var a,i=t.pages[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var u=a.value;e.push(h.routeFabric(u))}}catch(t){r=!0,o=t}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}p.a.dispatch(Object(v.b)(e))})).catch((function(t){console.error(t)}))}}])&&y(e.prototype,n),r&&y(e,r),t}();e.default=new d}}]);
//# sourceMappingURL=4.bundle.js.map