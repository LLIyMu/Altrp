(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{633:function(e,t,r){"use strict";r.r(t);var n=r(4),i=r.n(n),s=r(5),a=r.n(s),o=r(13),u=r.n(o),l=r(21),c=r.n(l),h=r(39),d=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};i()(this,e),this.formId=t,this.fields=[],this.method=n,this.options=s,this.modelName=r;var a="/ajax/models/".concat(r);switch(r){case"login":a="/login";break;case"logout":a="/logout"}this.resource=new h.a({route:a})}var t;return a()(e,[{key:"setFields",value:function(e){this.fields=e}},{key:"addField",value:function(e){return this.fields.push(e),!0}},{key:"submit",value:(t=c()(u.a.mark((function e(t){var n,i,s,a=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!0,this.fields.forEach((function(e){e.fieldValidate()||(n=!1)})),!n){e.next=34;break}e.t0=this.method,e.next="POST"===e.t0?6:"PUT"===e.t0?19:"DELETE"===e.t0?27:32;break;case 6:return e.next=8,this.resource.post(this.getData());case 8:if(i=e.sent,"login"!==this.modelName||!this.options.afterLoginRedirect){e.next=12;break}return document.location.replace(this.options.afterLoginRedirect),e.abrupt("return");case 12:if("logout"!==this.modelName||!this.options.afterLogoutRedirect){e.next=15;break}return document.location.replace(this.options.afterLogoutRedirect),e.abrupt("return");case 15:if(!i.reload){e.next=18;break}return document.location.reload(),e.abrupt("return");case 18:return e.abrupt("return",i);case 19:if(!t){e.next=25;break}return e.next=22,this.resource.put(t,this.getData());case 22:return s=e.sent,Promise.resolve().then(r.bind(null,111)).then((function(e){e.default.updateModelWithData(a.modelName,t,a.getData())})),e.abrupt("return",s);case 25:return console.error("Не удалось получить ИД модели для удаления!"),e.abrupt("break",32);case 27:if(!t){e.next=31;break}return e.next=30,this.resource.delete(t);case 30:return e.abrupt("return",e.sent);case 31:console.error("Не удалось получить ИД модели для удаления!");case 32:e.next=37;break;case 34:return e.next=36,alert("Валидация не прошла");case 36:return e.abrupt("return",e.sent);case 37:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"getData",value:function(){var e={altrp_ajax:!0};return this.fields.forEach((function(t){null!==t.getValue()&&(e[t.getSettings("field_id")]=t.getValue())})),e}}]),e}(),f=new(function(){function e(){i()(this,e),this.forms=[],this.formIds=[],this.fieldsStorage={}}return a()(e,[{key:"registerForm",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=this.getForm(e);return i||(i=new d(e,t,r,n),this.fieldsStorage[e]&&this.fieldsStorage[e].length&&(i.setFields(this.fieldsStorage[e]),delete this.fieldsStorage[e]),this.forms.push(i)),i}},{key:"addField",value:function(e,t){var r=this.getForm(e);return r?r.addField(t):(this.fieldsStorage[e]=this.fieldsStorage[e]||[],this.fieldsStorage[e].push(t),!0)}},{key:"submitForm",value:function(e,t){return this.getForm(e)?this.getForm(e).submit(t):(console.error("Форма не найдена"),!1)}},{key:"getForm",value:function(e){var t=null;return this.forms.forEach((function(r){r.formId===e&&(t=r)})),t}}]),e}());t.default=f}}]);
//# sourceMappingURL=401fb620eaf4460a911f.bundle.js.map