(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{108:function(e,t,a){var r=a(73);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},l=a(26)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(73,(function(){var t=a(73);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");l(t)})),e.hot.dispose((function(){l()}))},130:function(e,t,a){"use strict";a.r(t);var r=a(65),n=a.n(r),l=a(10),o=a.n(l),c=a(12),s=a.n(c),i=a(102),u=a.n(i),m=a(0),d=a.n(m),p=a(106),f=a(109),b=(a(108),a(20)),g=a(17);t.default=function(e){var t=e.settings,a=e.query;if(!t.tables_columns||!t.tables_columns.length)return d.a.createElement("div",{children:"Please Add Column"});if(!a.modelName)return d.a.createElement("div",{children:"Please Choose Model"});var r,l,c,i=[],h=Object(m.useState)(1),v=u()(h,2),E=v[0],N=v[1],w=Object(m.useCallback)(function(){var e=s()(o.a.mark((function e(t){var r,n=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:1,e.abrupt("return",a.getQueried({page:r}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());if(a.pageSize){var y=Object(f.b)([a.modelName,E],w,{}),P=y.status,x=y.resolvedData,k=y.latestData,C=y.error;i=x?x[a.modelName]:i,r=P,l=C,c=k,Object(m.useEffect)((function(){(null==k?void 0:k.hasMore)&&f.a.prefetchQuery([a.modelName,E+1],w)}),[k,w,E])}else{var M=Object(f.c)(a.modelName,(function(){return a.getResource().getQueried()}),[a.modelName]),j=M.status,O=M.data,S=M.error;i=O,r=j,l=S}var R=[];R=function(e){var t=[],a=e.tables_columns;return(a=a||[]).forEach((function(e){e.column_name&&e.accessor&&t.push(e)})),t}(t);var T=Object(p.useTable)({columns:d.a.useMemo((function(){return R||[]}),[t.tables_columns]),data:d.a.useMemo((function(){return i||[]}),[i])}),A=T.getTableProps,H=T.getTableBodyProps,Q=T.headerGroups,z=T.rows,D=T.prepareRow;return d.a.createElement(d.a.Fragment,null,d.a.createElement("table",n()({className:"altrp-table"},A()),d.a.createElement("thead",{className:"altrp-table-head"},function(e){var t=e.additional_rows;if(!_.isArray(t))return"";return t.map((function(e){return e.additional_cells=e.additional_cells||[],d.a.createElement("tr",{key:"additional-row-".concat(e.id)},e.additional_cells.map((function(t){return t.rowspan=t.rowspan||1,t.colspan=t.colspan||1,d.a.createElement("th",{key:"additional-cell-".concat(e.id,"-").concat(t.id),role:"columnheader",className:"altrp-table-th",colSpan:t.colspan,rowSpan:t.rowspan},t.title)})))}))}(t),Q.map((function(e){return d.a.createElement("tr",n()({},e.getHeaderGroupProps(),{className:"altrp-table-tr"}),e.headers.map((function(e){return d.a.createElement("th",n()({},e.getHeaderProps(),{className:"altrp-table-th"}),e.render("column_name"))})))}))),d.a.createElement("tbody",n()({},H(),{className:"altrp-table-tbody"}),"error"===r?d.a.createElement("tr",null,d.a.createElement("td",null,l.message)):"loading"===r?d.a.createElement("tr",null,d.a.createElement("td",null,"Loading")):z.map((function(e,t){return D(e),d.a.createElement("tr",n()({},e.getRowProps(),{className:"altrp-table-tr"}),e.cells.map((function(t,a){var r=t.render("Cell"),l=Object(g.b)()?"a":b.b;return R[a].column_link&&e.original.id&&(r=d.a.createElement(l,{to:R[a].column_link.replace(":id",e.original.id),className:"altrp-inherit"},r)),d.a.createElement("td",n()({},t.getCellProps(),{className:"altrp-table-td"}),r)})))})))),"prev-next"===a.paginationType&&a.pageSize?d.a.createElement("div",{className:"altrp-pagination"},d.a.createElement("button",{className:"altrp-pagination__previous",onClick:function(){return N((function(e){return Math.max(e-1,0)}))},disabled:1===E},t.prev_text||"Previous Page"),d.a.createElement("div",{className:"altrp-pagination__count"},t.current_page_text||"Current Page:",E),d.a.createElement("button",{className:"altrp-pagination__next",onClick:function(){return N((function(e){return c&&c.hasMore?e+1:e}))},disabled:!c||!c.hasMore},t.next_text||"Next Page")):"")}},73:function(e,t,a){(e.exports=a(25)(!1)).push([e.i,"",""])}}]);
//# sourceMappingURL=da62e96b7708e93d2e4d.bundle.js.map