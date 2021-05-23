(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{109:function(e,t,a){e.exports=a(139)},114:function(e,t,a){},115:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c);a(114),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(115);var s,i,l=a(182),u=a(183),d=a(184),b=a(175),O=a(141),m=a(178),f=a(186),j=a(187),p=a(185),T=a(19),E=a(23),k=a(10),v=a(66),S=[],x=function(e){return{type:"REMOVE-TODOLIST",id:e}},I=function(e){return{type:"ADD-TODOLIST",todolist:e}},g=function(e){return{type:"SET-TODOLISTS",todolists:e}},h=a(50),A=a(188),w=a(176),D=r.a.memo((function(e){var t=e.addItem,a=e.disabled,c=void 0!==a&&a;console.log("AddItemForm called");var o=Object(n.useState)(""),s=Object(h.a)(o,2),i=s[0],l=s[1],u=Object(n.useState)(null),d=Object(h.a)(u,2),O=d[0],m=d[1],f=function(){""!==i.trim()?(t(i),l("")):m("Title is required")};return r.a.createElement("div",null,r.a.createElement(A.a,{variant:"outlined",disabled:c,error:!!O,value:i,onChange:function(e){l(e.currentTarget.value)},onKeyPress:function(e){null!==O&&m(null),13===e.charCode&&f()},label:"Title",helperText:O}),r.a.createElement(b.a,{color:"primary",onClick:f,disabled:c},r.a.createElement(w.a,null)))})),C=a(97),L=r.a.memo((function(e){console.log("EditableSpan called");var t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(e.value),i=Object(h.a)(s,2),l=i[0],u=i[1];return c?r.a.createElement(A.a,{value:l,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.onChange(l)}}):r.a.createElement("span",{onDoubleClick:function(){o(!0),u(e.value)}},e.value)})),y=a(177),P=a(190),K=a(91),N=a.n(K).a.create(Object(k.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"9aa516cb-8f4b-45f8-be8d-59445844c51c"}})),F=function(){return N.get("todo-lists")},H=function(e){return N.post("todo-lists",{title:e})},R=function(e){return N.delete("todo-lists/".concat(e))},M=function(e,t){return N.put("todo-lists/".concat(e),{title:t})},U=function(e){return N.get("todo-lists/".concat(e,"/tasks")).then((function(e){return e.data}))},G=function(e,t){return N.delete("todo-lists/".concat(e,"/tasks/").concat(t))},V=function(e,t){return N.post("todo-lists/".concat(e,"/tasks"),{title:t})},q=function(e,t,a){return N.put("todo-lists/".concat(e,"/tasks/").concat(t),a)},z=function(e){return N.post("auth/login",e)},B=function(){return N.delete("auth/login")},Y=function(){return N.get("auth/me").then((function(e){return e.data}))};!function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Completed=2]="Completed",e[e.Draft=3]="Draft"}(s||(s={})),function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.Hi=2]="Hi",e[e.Urgently=3]="Urgently",e[e.Later=4]="Later"}(i||(i={}));var J=r.a.memo((function(e){var t=Object(n.useCallback)((function(){return e.removeTask(e.task.id,e.todolistId)}),[e.task.id,e.todolistId]),a=Object(n.useCallback)((function(t){var a=t.currentTarget.checked;e.changeTaskStatus(e.task.id,a?s.Completed:s.New,e.todolistId)}),[e.task.id,e.todolistId]),c=Object(n.useCallback)((function(t){e.changeTaskTitle(e.task.id,t,e.todolistId)}),[e.task.id,e.todolistId]);return r.a.createElement("div",{key:e.task.id,className:e.task.status===s.Completed?"is-done":""},r.a.createElement(P.a,{checked:e.task.status===s.Completed,color:"primary",onChange:a}),r.a.createElement(L,{value:e.task.title,onChange:c}),r.a.createElement(b.a,{onClick:t},r.a.createElement(y.a,null)))})),W=a(11),Z=a.n(W),$=a(5),_={status:"idle",error:null,isInitialized:!1},Q=function(e){return{type:"APP/SET-ERROR",error:e}},X=function(e){return{type:"APP/SET-STATUS",status:e}},ee=a(40),te={},ae=function(e){return{type:"ADD-TASK",task:e}},ne=function(e,t){return{type:"SET-TASKS",tasks:e,todolistId:t}},re=Z.a.mark(le),ce=Z.a.mark(ue),oe=Z.a.mark(de),se=Z.a.mark(be),ie=Z.a.mark(me);function le(e){var t,a;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.c)(X("loading"));case 2:return n.next=4,Object($.b)(U,e.todolistId);case 4:return t=n.sent,a=t.items,n.next=8,Object($.c)(ne(a,e.todolistId));case 8:return n.next=10,Object($.c)(X("succeeded"));case 10:case"end":return n.stop()}}),re)}function ue(e){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.b)(G,e.todolistId,e.taskId);case 2:return t.sent,t.next=5,Object($.c)((a=e.taskId,n=e.todolistId,{type:"REMOVE-TASK",taskId:a,todolistId:n}));case 5:case"end":return t.stop()}var a,n}),ce)}function de(e){var t,a;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.c)(X("loading"));case 2:return n.next=4,Object($.b)(V,e.todolistId,e.title);case 4:if(t=n.sent,n.prev=5,0!==t.data.resultCode){n.next=14;break}return a=t.data.data.item,n.next=10,Object($.c)(ae(a));case 10:return n.next=12,Object($.c)(X("succeeded"));case 12:n.next=23;break;case 14:if(!t.data.messages.length){n.next=19;break}return n.next=17,Object($.c)(Q(t.data.messages[0]));case 17:n.next=21;break;case 19:return n.next=21,Object($.c)(Q("Some error occurred"));case 21:return n.next=23,Object($.c)(X("failed"));case 23:n.next=31;break;case 25:return n.prev=25,n.t0=n.catch(5),n.next=29,Object($.c)(Q(n.t0.message?n.t0.message:"Some error occurred"));case 29:return n.next=31,Object($.c)(X("failed"));case 31:case"end":return n.stop()}}),oe,null,[[5,25]])}function be(e){var t,a,n,r;return Z.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object($.d)();case 2:if(t=c.sent,a=t.tasks[e.todolistId].find((function(t){return t.id===e.taskId}))){c.next=7;break}return console.warn("task not found in the state"),c.abrupt("return");case 7:return n=Object(k.a)({deadline:a.deadline,description:a.description,priority:a.priority,startDate:a.startDate,title:a.title,status:a.status},e.domainModel),c.next=10,Object($.b)(q,e.todolistId,e.taskId,n);case 10:if(r=c.sent,c.prev=11,0!==r.data.resultCode){c.next=17;break}return c.next=15,Object($.c)((o=e.taskId,s=e.domainModel,i=e.todolistId,{type:"UPDATE-TASK",model:s,todolistId:i,taskId:o}));case 15:c.next=26;break;case 17:if(!r.data.messages.length){c.next=22;break}return c.next=20,Object($.c)(Q(r.data.messages[0]));case 20:c.next=24;break;case 22:return c.next=24,Object($.c)(Q("Some error occurred"));case 24:return c.next=26,Object($.c)(X("failed"));case 26:c.next=34;break;case 28:return c.prev=28,c.t0=c.catch(11),c.next=32,Object($.c)(Q(c.t0.message?c.t0.message:"Some error occurred"));case 32:return c.next=34,Object($.c)(X("failed"));case 34:case"end":return c.stop()}var o,s,i}),se,null,[[11,28]])}var Oe=function(e,t,a){return{type:"TASKS/UPDATE-TASK",taskId:e,domainModel:t,todolistId:a}};function me(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.e)("TASKS/FETCH-TASKS",le);case 2:return e.next=4,Object($.e)("TASKS/REMOVE-TASK",ue);case 4:return e.next=6,Object($.e)("TASKS/ADD-TASK",de);case 6:return e.next=8,Object($.e)("TASKS/UPDATE-TASK",be);case 8:case"end":return e.stop()}}),ie)}var fe=r.a.memo((function(e){var t=e.demo,a=void 0!==t&&t,c=Object(C.a)(e,["demo"]);console.log("Todolist called");var o=Object(E.b)();Object(n.useEffect)((function(){if(!a){var e={type:"TASKS/FETCH-TASKS",todolistId:c.todolist.id};o(e)}}),[]);var i=Object(n.useCallback)((function(e){c.addTask(e,c.todolist.id)}),[c.addTask,c.todolist.id]),l=Object(n.useCallback)((function(e){c.changeTodolistTitle(c.todolist.id,e)}),[c.todolist.id,c.changeTodolistTitle]),u=Object(n.useCallback)((function(){return c.changeFilter("all",c.todolist.id)}),[c.todolist.id,c.changeFilter]),d=Object(n.useCallback)((function(){return c.changeFilter("active",c.todolist.id)}),[c.todolist.id,c.changeFilter]),O=Object(n.useCallback)((function(){return c.changeFilter("completed",c.todolist.id)}),[c.todolist.id,c.changeFilter]),f=c.tasks;return"active"===c.todolist.filter&&(f=c.tasks.filter((function(e){return e.status===s.New}))),"completed"===c.todolist.filter&&(f=c.tasks.filter((function(e){return e.status===s.Completed}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(L,{value:c.todolist.title,onChange:l}),r.a.createElement(b.a,{onClick:function(){c.removeTodolist(c.todolist.id)},disabled:"loading"===c.todolist.entityStatus},r.a.createElement(y.a,null))),r.a.createElement(D,{addItem:i,disabled:"loading"===c.todolist.entityStatus}),r.a.createElement("div",null,f.map((function(e){return r.a.createElement(J,{key:e.id,task:e,todolistId:c.todolist.id,removeTask:c.removeTask,changeTaskTitle:c.changeTaskTitle,changeTaskStatus:c.changeTaskStatus})}))),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(m.a,{variant:"all"===c.todolist.filter?"outlined":"text",onClick:u,color:"default"},"All"),r.a.createElement(m.a,{variant:"active"===c.todolist.filter?"outlined":"text",onClick:d,color:"primary"},"Active"),r.a.createElement(m.a,{variant:"completed"===c.todolist.filter?"outlined":"text",onClick:O,color:"secondary"},"Completed")))})),je=Z.a.mark(ve),pe=Z.a.mark(Se),Te=Z.a.mark(xe),Ee=Z.a.mark(Ie),ke=Z.a.mark(ge);function ve(){var e,t;return Z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object($.c)(X("loading"));case 2:return a.prev=2,a.next=5,Object($.b)(F);case 5:return e=a.sent,t=e.data,a.next=9,Object($.c)(g(t));case 9:return a.next=11,Object($.c)(X("succeeded"));case 11:a.next=19;break;case 13:return a.prev=13,a.t0=a.catch(2),a.next=17,Object($.c)(Q(a.t0.message?a.t0.message:"Some error occurred"));case 17:return a.next=19,Object($.c)(X("failed"));case 19:case"end":return a.stop()}}),je,null,[[2,13]])}function Se(e){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.c)(X("loading"));case 2:return t.next=4,Object($.c)({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e.todolistId,status:"loading"});case 4:return t.next=6,Object($.b)(R,e.todolistId);case 6:return t.sent,t.next=9,Object($.c)(x(e.todolistId));case 9:return t.next=11,Object($.c)(X("succeeded"));case 11:case"end":return t.stop()}}),pe)}function xe(e){var t,a;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.c)(X("loading"));case 2:return n.next=4,Object($.b)(H,e.title);case 4:return t=n.sent,a=t.data.data.item,n.next=8,Object($.c)(I(a));case 8:return n.next=10,Object($.c)(X("succeeded"));case 10:case"end":return n.stop()}}),Te)}function Ie(e){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.b)(M,e.todolistId,e.title);case 2:return t.sent,t.next=5,Object($.c)((a=e.todolistId,n=e.title,{type:"CHANGE-TODOLIST-TITLE",id:a,title:n}));case 5:case"end":return t.stop()}var a,n}),Ee)}function ge(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.e)("TODOLISTS/FETCH-TODOLISTS",ve);case 2:return e.next=4,Object($.e)("TODOLISTS/REMOVE-TODOLIST",Se);case 4:return e.next=6,Object($.e)("TODOLISTS/ADD-TODOLIST",xe);case 6:return e.next=8,Object($.e)("TODOLISTS/CHANGE-TODOLIST",Ie);case 8:case"end":return e.stop()}}),ke)}var he=a(179),Ae=a(140),we=function(e){var t=e.demo,a=void 0!==t&&t,c=Object(E.c)((function(e){return e.todolists})),o=Object(E.c)((function(e){return e.tasks})),s=Object(E.c)((function(e){return e.auth.isLoggedIn})),i=Object(E.b)();Object(n.useEffect)((function(){!a&&s&&i({type:"TODOLISTS/FETCH-TODOLISTS"})}),[]);var l=Object(n.useCallback)((function(e,t){var a=function(e,t){return{type:"TASKS/REMOVE-TASK",taskId:e,todolistId:t}}(e,t);i(a)}),[]),u=Object(n.useCallback)((function(e,t){var a=function(e,t){return{type:"TASKS/ADD-TASK",title:e,todolistId:t}}(e,t);i(a)}),[]),d=Object(n.useCallback)((function(e,t,a){var n=Oe(e,{status:t},a);i(n)}),[]),b=Object(n.useCallback)((function(e,t,a){var n=Oe(e,{title:t},a);i(n)}),[]),O=Object(n.useCallback)((function(e,t){var a={type:"CHANGE-TODOLIST-FILTER",id:t,filter:e};i(a)}),[]),m=Object(n.useCallback)((function(e){i({type:"TODOLISTS/REMOVE-TODOLIST",todolistId:e})}),[]),f=Object(n.useCallback)((function(e,t){i(function(e,t){return{type:"TODOLISTS/CHANGE-TODOLIST",todolistId:e,title:t}}(e,t))}),[]),j=Object(n.useCallback)((function(e){i(function(e){return{type:"TODOLISTS/ADD-TODOLIST",title:e}}(e))}),[i]);return s?r.a.createElement(r.a.Fragment,null,r.a.createElement(he.a,{container:!0,style:{padding:"20px"}},r.a.createElement(D,{addItem:j})),r.a.createElement(he.a,{container:!0,spacing:3},c.map((function(e){var t=o[e.id];return r.a.createElement(he.a,{item:!0,key:e.id},r.a.createElement(Ae.a,{style:{padding:"10px"}},r.a.createElement(fe,{todolist:e,tasks:t,removeTask:l,changeFilter:O,addTask:u,changeTaskStatus:d,removeTodolist:m,changeTaskTitle:b,changeTodolistTitle:f,demo:a})))})))):r.a.createElement(T.a,{to:"/login"})},De=a(192),Ce=a(189);function Le(e){return r.a.createElement(Ce.a,Object.assign({elevation:6,variant:"filled"},e))}function ye(){var e=Object(E.c)((function(e){return e.app.error})),t=Object(E.b)(),a=function(e,a){"clickaway"!==a&&t(Q(null))},n=null!==e;return r.a.createElement(De.a,{open:n,autoHideDuration:6e3,onClose:a},r.a.createElement(Le,{onClose:a,severity:"error"},e))}var Pe=a(58),Ke=a(193),Ne=a(174),Fe=a(180),He=a(181),Re=a(95),Me={isLoggedIn:!1},Ue=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},Ge=Z.a.mark(ze),Ve=Z.a.mark(Be),qe=Z.a.mark(Ye);function ze(e){var t;return Z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object($.c)(X("loading"));case 2:return a.next=4,Object($.b)(z,e.data);case 4:if(t=a.sent,a.prev=5,0!==t.data.resultCode){a.next=13;break}return a.next=9,Object($.c)(Ue(!0));case 9:return a.next=11,Object($.c)(X("succeeded"));case 11:a.next=22;break;case 13:if(!t.data.messages.length){a.next=18;break}return a.next=16,Object($.c)(Q(t.data.messages[0]));case 16:a.next=20;break;case 18:return a.next=20,Object($.c)(Q("Some error occurred"));case 20:return a.next=22,Object($.c)(X("failed"));case 22:a.next=30;break;case 24:return a.prev=24,a.t0=a.catch(5),a.next=28,Object($.c)(Q(a.t0.message?a.t0.message:"Some error occurred"));case 28:return a.next=30,Object($.c)(X("failed"));case 30:case"end":return a.stop()}}),Ge,null,[[5,24]])}function Be(){var e;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.c)(X("loading"));case 2:return t.next=4,Object($.b)(B);case 4:if(e=t.sent,t.prev=5,0!==e.data.resultCode){t.next=13;break}return t.next=9,Object($.c)(Ue(!1));case 9:return t.next=11,Object($.c)(X("succeeded"));case 11:t.next=22;break;case 13:if(!e.data.messages.length){t.next=18;break}return t.next=16,Object($.c)(Q(e.data.messages[0]));case 16:t.next=20;break;case 18:return t.next=20,Object($.c)(Q("Some error occurred"));case 20:return t.next=22,Object($.c)(X("failed"));case 22:t.next=30;break;case 24:return t.prev=24,t.t0=t.catch(5),t.next=28,Object($.c)(Q(t.t0.message?t.t0.message:"Some error occurred"));case 28:return t.next=30,Object($.c)(X("failed"));case 30:case"end":return t.stop()}}),Ve,null,[[5,24]])}function Ye(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.e)("AUTH/LOGIN",ze);case 2:return e.next=4,Object($.e)("AUTH/LOGOUT",Be);case 4:case"end":return e.stop()}}),qe)}var Je=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.auth.isLoggedIn})),a=Object(Re.a)({validate:function(e){return e.email?e.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){e({type:"AUTH/LOGIN",data:t})}});return t?r.a.createElement(T.a,{to:"/"}):r.a.createElement(he.a,{container:!0,justify:"center"},r.a.createElement(he.a,{item:!0,xs:4},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(Ke.a,null,r.a.createElement(Ne.a,null,r.a.createElement("p",null,"To log in get registered ",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null," Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement(Fe.a,null,r.a.createElement(A.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?r.a.createElement("div",null,a.errors.email):null,r.a.createElement(A.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?r.a.createElement("div",null,a.errors.password):null,r.a.createElement(He.a,{label:"Remember me",control:r.a.createElement(P.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),r.a.createElement(m.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))},We=Z.a.mark($e),Ze=Z.a.mark(_e);function $e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.b)(Y);case 2:if(0!==e.sent.resultCode){e.next=8;break}return e.next=6,Object($.c)(Ue(!0));case 6:e.next=8;break;case 8:return e.next=10,Object($.c)({type:"APP/SET-IS-INITIALIED",value:!0});case 10:case"end":return e.stop()}}),We)}function _e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.e)("APP/INITIALIZE-APP",$e);case 2:case"end":return e.stop()}}),Ze)}var Qe=function(e){var t=e.demo,a=void 0!==t&&t,c=Object(E.c)((function(e){return e.app.status})),o=Object(E.c)((function(e){return e.app.isInitialized})),s=Object(E.c)((function(e){return e.auth.isLoggedIn})),i=Object(E.b)();Object(n.useEffect)((function(){i({type:"APP/INITIALIZE-APP"})}),[]);var k=Object(n.useCallback)((function(){i({type:"AUTH/LOGOUT"})}),[]);return o?r.a.createElement(Pe.a,{basename:"project-todolist-ts-sagas"},r.a.createElement("div",{className:"App"},r.a.createElement(ye,null),r.a.createElement(u.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(b.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(p.a,null)),r.a.createElement(O.a,{variant:"h6"},"News"),s&&r.a.createElement(m.a,{color:"inherit",onClick:k},"Log out")),"loading"===c&&r.a.createElement(f.a,null)),r.a.createElement(j.a,{fixed:!0},r.a.createElement(T.b,{exact:!0,path:"/",render:function(){return r.a.createElement(we,{demo:a})}}),r.a.createElement(T.b,{path:"/login",render:function(){return r.a.createElement(Je,null)}})))):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(l.a,null))},Xe=a(47),et=a(94),tt=a(96),at=Z.a.mark(ot),nt=Object(Xe.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":return Object(k.a)(Object(k.a)({},e),{},Object(ee.a)({},t.todolistId,e[t.todolistId].filter((function(e){return e.id!=t.taskId}))));case"ADD-TASK":return Object(k.a)(Object(k.a)({},e),{},Object(ee.a)({},t.task.todoListId,[t.task].concat(Object(v.a)(e[t.task.todoListId]))));case"UPDATE-TASK":return Object(k.a)(Object(k.a)({},e),{},Object(ee.a)({},t.todolistId,e[t.todolistId].map((function(e){return e.id===t.taskId?Object(k.a)(Object(k.a)({},e),t.model):e}))));case"ADD-TODOLIST":return Object(k.a)(Object(k.a)({},e),{},Object(ee.a)({},t.todolist.id,[]));case"REMOVE-TODOLIST":var a=Object(k.a)({},e);return delete a[t.id],a;case"SET-TODOLISTS":var n=Object(k.a)({},e);return t.todolists.forEach((function(e){n[e.id]=[]})),n;case"SET-TASKS":return Object(k.a)(Object(k.a)({},e),{},Object(ee.a)({},t.todolistId,t.tasks));default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!=t.id}));case"ADD-TODOLIST":return[Object(k.a)(Object(k.a)({},t.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(v.a)(e));case"CHANGE-TODOLIST-TITLE":return e.map((function(e){return e.id===t.id?Object(k.a)(Object(k.a)({},e),{},{title:t.title}):e}));case"CHANGE-TODOLIST-FILTER":return e.map((function(e){return e.id===t.id?Object(k.a)(Object(k.a)({},e),{},{filter:t.filter}):e}));case"CHANGE-TODOLIST-ENTITY-STATUS":return e.map((function(e){return e.id===t.id?Object(k.a)(Object(k.a)({},e),{},{entityStatus:t.status}):e}));case"SET-TODOLISTS":return t.todolists.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{filter:"all",entityStatus:"idle"})}));default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(k.a)(Object(k.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(k.a)(Object(k.a)({},e),{},{error:t.error});case"APP/SET-IS-INITIALIED":return Object(k.a)(Object(k.a)({},e),{},{isInitialized:t.value});default:return Object(k.a)({},e)}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(k.a)(Object(k.a)({},e),{},{isLoggedIn:t.value});default:return e}}}),rt=Object(tt.a)(),ct=Object(Xe.d)(nt,Object(Xe.a)(et.a,rt));function ot(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([_e(),Ye(),me(),ge()]);case 2:case"end":return e.stop()}}),at)}rt.run(ot),window.store=ct,o.a.render(r.a.createElement(E.a,{store:ct},r.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.465785bc.chunk.js.map