(this.webpackJsonpdrag_drop_todo_list=this.webpackJsonpdrag_drop_todo_list||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),o=n.n(s),a=(n(12),n(2)),i=(n(13),n(3)),d=n(6),l=(n(15),n(0));function j(e){var t=e.todos,n=e.deleteTodo,r=Object(c.useState)(t),s=Object(a.a)(r,2),o=s[0],j=s[1];return Object(c.useEffect)((function(){j(t)}),[t]),Object(l.jsx)("div",{className:"mb-5",children:Object(l.jsx)(d.List,{values:o,onChange:function(e){var t=e.oldIndex,n=e.newIndex;return j(Object(d.arrayMove)(o,t,n))},renderList:function(e){var t=e.children,n=e.props;return Object(l.jsx)("ul",Object(i.a)(Object(i.a)({},n),{},{children:t}))},renderItem:function(e){var t=e.value,c=e.props;return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsxs)("li",Object(i.a)(Object(i.a)({className:"row d-flex justify-content-between mb-3",style:{wordWrap:"breakWord"}},c),{},{children:["".concat(t.task),Object(l.jsx)("button",{className:"btn btn-danger",style:{backgroundColor:"#D5E6FF",color:"#2560C1",border:"none"},onClick:function(){return n(t.id)},children:"Delete"})]}))}),Object(l.jsx)("hr",{})]},t.id)}})})}function u(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),r=n[0],s=n[1];return Object(l.jsx)("div",{className:"add mb-5",children:Object(l.jsx)("form",{style:{width:"90%",display:"flex",alinItems:"center",justifyContent:"center"},onSubmit:function(t){t.preventDefault(),r.trim()&&e.addTodo(r),s("")},children:Object(l.jsxs)("div",{className:"input-group input-group-lg ml-5",children:[Object(l.jsx)("div",{className:"input-group-prepend",children:Object(l.jsx)("span",{className:"input-group-text",children:"Add"})}),Object(l.jsx)("input",{className:"form-control",type:"text",value:r,placeholder:"Add Todo",onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",style:{fontSize:"1.2rem"},children:"Add Task"})]})})})}var b=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)("div",{className:"app container",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:" col-12 ",children:[Object(l.jsxs)("div",{className:"col-12 mt-4 ",children:[Object(l.jsx)(u,{addTodo:function(e){var t={id:n.length,task:e},c=n.concat([t]);r(c)}})," "]})," ",Object(l.jsxs)("div",{className:"col-12",children:[Object(l.jsx)(j,{todos:n,deleteTodo:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)}})," "]})," "]})," "]})," "]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.3477f7ef.chunk.js.map