(this["webpackJsonprrbe-editor"]=this["webpackJsonprrbe-editor"]||[]).push([[14,36],{222:function(e,n,t){"use strict";t.r(n);var a=t(10),r=t(0),c=t.n(r),u=t(452),o=t(455),l=t(26),s=t(40),i=t.n(s),m=t(51),b=t(32),f=t(52),p=t.n(f),v=function(e){var n=e.name,t=e.value,u=e.onChange,o=e.options,l=void 0===o?{}:o,s=Object(r.useState)([]),f=Object(a.a)(s,2),v=f[0],d=f[1],j=Object(r.useCallback)(Object(m.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("/admin/ajax/data_sources_for_query");case 2:200===(n=e.sent).status&&(console.log("req :>> ",n),d(n.data[1].options));case 4:case"end":return e.stop()}}),e)}))),[d]);Object(r.useEffect)((function(){j()}),[j]);var O=Object(r.useCallback)((function(e){u(e.target.value)}),[u]);return c.a.createElement(b.a.Group,null,c.a.createElement(b.a.Label,null,n),c.a.createElement(b.a.Control,Object.assign({},l,{as:"select",size:"sm",value:t,onChange:O}),c.a.createElement("option",{value:""},"\u0412 \u0440\u0443\u0447\u043d\u0443\u044e"),v.map((function(e,n){return c.a.createElement("option",{key:n,value:e.value},e.label)}))))},d=t(457);t(437),n.default=function(){var e=Object(d.a)("source",""),n=Object(a.a)(e,2),r=n[0],s=n[1],i=[{name:"\u041a\u043e\u043b\u043e\u043d\u043a\u0438",cmp:Object(l.a)((function(){return t.e(27).then(t.bind(null,214))}))},{name:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",cmp:Object(l.a)((function(){return t.e(29).then(t.bind(null,213))}))}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{name:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0434\u0430\u043d\u043d\u044b\u0445",value:r,onChange:s}),c.a.createElement(u.a,null,i.map((function(e,n){return c.a.createElement(o.a,{key:n},c.a.createElement(u.a.Toggle,{as:o.a.Header,eventKey:e.name},e.name),c.a.createElement(u.a.Collapse,{eventKey:e.name},c.a.createElement(o.a.Body,null,e.cmp.render())))}))))}},437:function(e,n,t){},457:function(e,n,t){"use strict";var a=t(13),r=t.n(a),c=t(8),u=t(9),o=t(136);n.a=function(e,n){var t=Object(c.b)(),a=Object(c.c)((function(e){return e.sections.present.sections})),l=Object(c.c)((function(e){return e.sections.present.selectedWidget})),s=l.sectionIndex,i=l.columnIndex,m=l.rowIndex;if(!Object(o.a)(s))return[{},function(){}];var b=a[s].columns[i][m],f={};b&&e?f=r.a.get(b.params,e)||n:b&&(f=b.params);return[f,function(n){if(e){var a=r.a.set(b.params,e,n);t(Object(u.g)(a))}else t(Object(u.g)(n))}]}}}]);
//# sourceMappingURL=14.6d8b9612.chunk.js.map