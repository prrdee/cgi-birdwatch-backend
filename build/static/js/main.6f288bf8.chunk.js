(this["webpackJsonpbird-watch-frontend"]=this["webpackJsonpbird-watch-frontend"]||[]).push([[0],{26:function(e,t,n){e.exports=n(51)},31:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(19),c=n.n(o),l=(n(31),n(3)),u=n(20),s=n(21),i=n(7),d=n(2),m=n.n(d),f=n(4),p=n(5),b=n.n(p),h="https://pure-atoll-07080.herokuapp.com/api/observations",v={getAll:function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=b.a.get(h),e.next=3,t;case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(f.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.a.post(h,t),e.next=3,n;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),deleteEntry:function(){var e=Object(f.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.a.delete("".concat(h,"/").concat(t)),e.next=3,n;case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){var t=e.errorMessage,n=e.successMessage;return null===t&&null===n?null:t?a.a.createElement("div",{className:"error"},t):a.a.createElement("div",{className:"success"},n)};n(49);function E(){var e=Object(u.a)(["\n  padding: 1rem;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n"]);return E=function(){return e},e}var w=s.a.div(E());function O(e){var t=e.columns,n=e.data,r=Object(i.b)({columns:t,data:n},i.a),o=r.getTableProps,c=r.getTableBodyProps,l=r.headerGroups,u=r.rows,s=r.prepareRow,d=u.slice(0,20);return a.a.createElement(a.a.Fragment,null,a.a.createElement("table",o(),a.a.createElement("thead",null,l.map((function(e){return a.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return a.a.createElement("th",e.getHeaderProps(e.getSortByToggleProps()),e.render("Header"),a.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""))})))}))),a.a.createElement("tbody",c(),d.map((function(e,t){return s(e),a.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return a.a.createElement("td",e.getCellProps(),e.render("Cell"))})))})))),a.a.createElement("br",null),a.a.createElement("div",null,"Showing the first 20 results of ",u.length," rows"))}var y=function(){var e=Object(r.useState)([{}]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),u=Object(l.a)(c,2),s=u[0],i=u[1],d=Object(r.useState)("common"),m=Object(l.a)(d,2),f=m[0],p=m[1],b=Object(r.useState)(""),h=Object(l.a)(b,2),E=h[0],y=h[1],j=Object(r.useState)(null),k=Object(l.a)(j,2),x=k[0],S=k[1],C=Object(r.useState)(null),D=Object(l.a)(C,2),H=D[0],P=D[1];Object(r.useEffect)((function(){v.getAll().then((function(e){o(e)}))}),[]);var T=a.a.useMemo((function(){return[{Header:"Name",accessor:"name"},{Header:"Rarity",accessor:"rarity"},{Header:"Notes",accessor:"notes"},{Header:"Date",accessor:"timestamp"},{Header:"Delete",id:"delete",accessor:function(e){return"delete"},Cell:function(e){return a.a.createElement("span",{style:{cursor:"pointer",color:"blue",textDecoration:"underline"},onClick:function(){var t=e.row.original.id,r=n.find((function(e){return e.id===t}));window.confirm("Delete ".concat(r.name))&&v.deleteEntry(t).then((function(e){o(n.filter((function(t){return t.id!==e.id}))),P("".concat(r.name," was deleted from the server")),setTimeout((function(){P(null)}),5e3)})).catch((function(e){S("the observation '".concat(r.name,"' was already deleted from server")),o(n.filter((function(e){return e.id!==r.id}))),setTimeout((function(){S(null)}),5e3)}))}},"Delete")}}]}),[n]),A=a.a.useMemo((function(){return n}),[n]);return a.a.createElement("div",{class:"main-container"},a.a.createElement(w,null,a.a.createElement("p",null,"Clicking on the header sorts the column in ascending or decending order !"),a.a.createElement("h1",null,"Bird Observation Table"),a.a.createElement(g,{errorMessage:x,successMessage:H}),a.a.createElement(O,{columns:T,data:A}),a.a.createElement("div",{class:"form-section"},a.a.createElement("h2",null,"Add new observation"),a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:s,rarity:f,notes:E,timestamp:new Date};v.create(t).then((function(e){o(n.concat(e)),i(""),y(""),P("".concat(e.name," has been added")),setTimeout((function(){P(null)}),3e3)})).catch((function(e){i(""),y(""),S(e.response.data.error),setTimeout((function(){P(null)}),3e3)}))}},"Add Name",a.a.createElement("input",{value:s,onChange:function(e){i(e.target.value)}}),"Pick Rarity",a.a.createElement("select",{value:f,onChange:function(e){p(e.target.value)}},a.a.createElement("option",{value:"common"},"Common"),a.a.createElement("option",{value:"rare"},"Rare"),a.a.createElement("option",{value:"extremely rare"},"Extremely Rare")),"Add Notes ",a.a.createElement("textarea",{rows:"5",cols:"25",value:E,onChange:function(e){y(e.target.value)}}),a.a.createElement("br",null),a.a.createElement("button",{type:"submit"},"Add Observation")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.6f288bf8.chunk.js.map