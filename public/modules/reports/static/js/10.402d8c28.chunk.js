(this["webpackJsonprrbe-editor"]=this["webpackJsonprrbe-editor"]||[]).push([[10,2,3,4,5,6,7,8,9,35],{102:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(38);t.default=function(e){return a.a.createElement(o.a,e,e.text)}},103:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);t.default=function(e){var t=e.text,n=e.model;console.log("model :>> ",n);return a.a.createElement("div",{dangerouslySetInnerHTML:{__html:function(e){var t,r=(null===n||void 0===n||null===(t=n.item)||void 0===t?void 0:t.value)||{};for(var a in r)e=e.replace("{{".concat(a,"}}"),r[a]);return e}(t)}})}},104:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);t.default=function(e){return a.a.createElement("hr",{style:{borderTopWidth:parseInt(e.size)||2,borderTopColor:e.color,breakAfter:e.breakAfter}})}},105:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);t.default=function(e){return a.a.createElement("img",{alt:e.alt,src:e.src,width:e.width})}},106:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);t.default=function(e){return a.a.createElement("a",{className:e.isButton?"btn btn-primary":"",href:e.url,target:e.target},e.text)}},107:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);n(436);t.default=function(e){console.log("News init");return[{image:"https://picsum.photos/seed/1/300/200",title:"\u041d\u043e\u0432\u043e\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440 1",text:"\u0422\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043f\u043e\u0447\u0442\u0438 \u0431\u0435\u0437 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0442\u044d\u0433\u043e\u0432! <b>\u041d\u043e \u043e\u043d\u0438 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u044f\u0442\u044c\u0441\u044f.</b>"},{image:"https://picsum.photos/seed/2/300/200",title:"\u041d\u043e\u0432\u043e\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440 2",text:"\u0422\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043f\u043e\u0447\u0442\u0438 \u0431\u0435\u0437 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0442\u044d\u0433\u043e\u0432! <b>\u041d\u043e \u043e\u043d\u0438 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u044f\u0442\u044c\u0441\u044f.</b>"},{image:"https://picsum.photos/seed/3/300/200",title:"\u041d\u043e\u0432\u043e\u0441\u0442\u044c \u043d\u043e\u043c\u0435\u0440 3",text:"\u0422\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u043f\u043e\u0447\u0442\u0438 \u0431\u0435\u0437 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0442\u044d\u0433\u043e\u0432! <b>\u041d\u043e \u043e\u043d\u0438 \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u044f\u0442\u044c\u0441\u044f.</b>"}].map((function(e,t){return a.a.createElement("div",{className:"news",key:t},a.a.createElement("div",{className:"news__image"},a.a.createElement("img",{src:e.image,alt:e.title})),a.a.createElement("div",{className:"news__body"},a.a.createElement("h2",{className:"news__body-title"},e.title),a.a.createElement("div",{className:"news__body-text"},e.text)))}))}},108:function(e,t,n){"use strict";n.r(t);var r=n(40),a=n.n(r),o=n(51),i=n(10),c=n(0),u=n.n(c),s=n(481),l=n.n(s),d=n(52),f=n.n(d);n(488);t.default=function(e){var t=e.source,n=e.columns,r=void 0===n?[]:n,s=e.rows,d=void 0===s?[]:s,m=e.striped,v=void 0!==m&&m,b=e.variant,p=void 0===b?"light":b,g=e.bordered,h=void 0!==g&&g,x=e.size,y=void 0===x?"sm":x,w=e.hover,E=void 0!==w&&w,j=e.borderless,O=void 0!==j&&j,C=Object(c.useState)(d),k=Object(i.a)(C,2),_=k[0],S=k[1],N=Object(c.useCallback)(Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,f()(t);case 3:n=e.sent,S(n.data);case 5:case"end":return e.stop()}}),e)}))),[t]);return Object(c.useEffect)((function(){N()}),[N]),r.length>0?u.a.createElement(l.a,{bootstrap4:!0,size:y,variant:p,striped:v,bordered:h,hover:E,borderless:O,keyField:"id",data:_,columns:r}):"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"}},109:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(0),o=n.n(a),i=n(457),c=n(479),u=(n(464),n(465),n(466),n(467),n(468),n(469),n(475),n(470),n(477),function(e){var t=e.value,n=e.onChange,i=Object(a.useState)(t),u=Object(r.a)(i,2),s=u[0],l=u[1],d=Object(a.useState)(!1),f=Object(r.a)(d,2),m=f[0],v=f[1];return o.a.createElement("div",{draggable:!0,onDoubleClick:function(){return v(!0)},onDragStart:function(e){m&&(e.stopPropagation(),e.preventDefault())}},o.a.createElement(c.a,{value:s,onEditorChange:function(e){return l(e)},onBlur:function(){return n(s)},inline:!0,disabled:!m,init:{menubar:!1,contextmenu:!1,plugins:["autolink insertdatetime table code"],toolbar:"styleselect table insertdatetime | bold italic underline | align | forecolor | bullist numlist | outdent indent |\n           undo redo | removeformat code",table_toolbar:""}}))});t.default=function(e){var t=Object(i.a)("text"),n=Object(r.a)(t,2)[1];return o.a.createElement(u,{value:e.text,onChange:function(e){return n(e)}})}},141:function(e,t,n){"use strict";n.r(t);var r=n(102);n.d(t,"Button",(function(){return r.default}));var a=n(104);n.d(t,"Divider",(function(){return a.default}));var o=n(105);n.d(t,"Image",(function(){return o.default}));var i=n(106);n.d(t,"Link",(function(){return i.default}));var c=n(107);n.d(t,"News",(function(){return c.default}));var u=n(108);n.d(t,"Table",(function(){return u.default}));var s=n(109);n.d(t,"Text",(function(){return s.default}));var l=n(103);n.d(t,"DText",(function(){return l.default}))},436:function(e,t,n){},457:function(e,t,n){"use strict";var r=n(13),a=n.n(r),o=n(8),i=n(9),c=n(136);t.a=function(e,t){var n=Object(o.b)(),r=Object(o.c)((function(e){return e.sections.present.sections})),u=Object(o.c)((function(e){return e.sections.present.selectedWidget})),s=u.sectionIndex,l=u.columnIndex,d=u.rowIndex;if(!Object(c.a)(s))return[{},function(){}];var f=r[s].columns[l][d],m={};f&&e?m=a.a.get(f.params,e)||t:f&&(m=f.params);return[m,function(t){if(e){var r=a.a.set(f.params,e,t);n(Object(i.g)(r))}else n(Object(i.g)(t))}]}},475:function(e,t,n){n(476)},476:function(e,t){!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),t=function(e){var t=function(e){return e.getContent({source_view:!0})}(e);e.windowManager.open({title:"Source Code",size:"large",body:{type:"panel",items:[{type:"textarea",name:"code"}]},buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:{code:t},onSubmit:function(t){!function(e,t){e.focus(),e.undoManager.transact((function(){e.setContent(t)})),e.selection.setCursorLocation(),e.nodeChanged()}(e,t.getData().code),t.close()}})};e.add("code",(function(e){return function(e){e.addCommand("mceCodeEditor",(function(){t(e)}))}(e),function(e){e.ui.registry.addButton("code",{icon:"sourcecode",tooltip:"Source code",onAction:function(){return t(e)}}),e.ui.registry.addMenuItem("code",{icon:"sourcecode",text:"Source code",onAction:function(){return t(e)}})}(e),{}}))}()},477:function(e,t,n){}}]);
//# sourceMappingURL=10.402d8c28.chunk.js.map