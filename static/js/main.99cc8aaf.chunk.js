(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{109:function(e,t,a){e.exports=a(139)},114:function(e,t,a){},115:function(e,t,a){},139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c);a(114),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(115);var s,i,l=a(182),u=a(183),d=a(184),b=a(175),O=a(141),f=a(178),m=a(186),p=a(187),T=a(185),j=a(19),E=a(23),v=a(11),k=a(66),I=[],S=function(e){return{type:"REMOVE-TODOLIST",id:e}},g=function(e){return{type:"ADD-TODOLIST",todolist:e}},x=function(e){return{type:"SET-TODOLISTS",todolists:e}},h=a(50),w=a(188),A=a(176),D=r.a.memo((function(e){var t=e.addItem,a=e.disabled,c=void 0!==a&&a;console.log("AddItemForm called");var o=Object(n.useState)(""),s=Object(h.a)(o,2),i=s[0],l=s[1],u=Object(n.useState)(null),d=Object(h.a)(u,2),O=d[0],f=d[1],m=function(){""!==i.trim()?(t(i),l("")):f("Title is required")};return r.a.createElement("div",null,r.a.createElement(w.a,{variant:"outlined",disabled:c,error:!!O,value:i,onChange:function(e){l(e.currentTarget.value)},onKeyPress:function(e){null!==O&&f(null),13===e.charCode&&m()},label:"Title",helperText:O}),r.a.createElement(b.a,{color:"primary",onClick:m,disabled:c},r.a.createElement(A.a,null)))})),C=a(97),L=r.a.memo((function(e){console.log("EditableSpan called");var t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)(e.value),i=Object(h.a)(s,2),l=i[0],u=i[1];return c?r.a.createElement(w.a,{value:l,onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),e.onChange(l)}}):r.a.createElement("span",{onDoubleClick:function(){o(!0),u(e.value)}},e.value)})),y=a(177),P=a(190),K=a(91),N=a.n(K).a.create(Object(v.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"9aa516cb-8f4b-45f8-be8d-59445844c51c"}})),F=function(){return N.get("todo-lists")},H=function(e){return N.post("todo-lists",{title:e})},R=function(e){return N.delete("todo-lists/".concat(e))},M=function(e,t){return N.put("todo-lists/".concat(e),{title:t})},U=function(e){return N.get("todo-lists/".concat(e,"/tasks")).then((function(e){return e.data}))},G=function(e,t){return N.delete("todo-lists/".concat(e,"/tasks/").concat(t))},Y=function(e,t){return N.post("todo-lists/".concat(e,"/tasks"),{title:t})},V=function(e,t,a){return N.put("todo-lists/".concat(e,"/tasks/").concat(t),a)},q=function(e){return N.post("auth/login",e)},z=function(){return N.delete("auth/login")},B=function(){return N.get("auth/me").then((function(e){return e.data}))};!function(e){e[e.New=0]="New",e[e.InProgress=1]="InProgress",e[e.Completed=2]="Completed",e[e.Draft=3]="Draft"}(s||(s={})),function(e){e[e.Low=0]="Low",e[e.Middle=1]="Middle",e[e.Hi=2]="Hi",e[e.Urgently=3]="Urgently",e[e.Later=4]="Later"}(i||(i={}));var J=r.a.memo((function(e){var t=Object(n.useCallback)((function(){return e.removeTask(e.task.id,e.todolistId)}),[e.task.id,e.todolistId]),a=Object(n.useCallback)((function(t){var a=t.currentTarget.checked;e.changeTaskStatus(e.task.id,a?s.Completed:s.New,e.todolistId)}),[e.task.id,e.todolistId]),c=Object(n.useCallback)((function(t){e.changeTaskTitle(e.task.id,t,e.todolistId)}),[e.task.id,e.todolistId]);return r.a.createElement("div",{key:e.task.id,className:e.task.status===s.Completed?"is-done":""},r.a.createElement(P.a,{checked:e.task.status===s.Completed,color:"primary",onChange:a}),r.a.createElement(L,{value:e.task.title,onChange:c}),r.a.createElement(b.a,{onClick:t},r.a.createElement(y.a,null)))})),W=a(10),Z=a.n(W),$=a(6),_={status:"idle",error:null,isInitialized:!1},Q=function(e){return{type:"APP/SET-ERROR",error:e}},X=function(e){return{type:"APP/SET-STATUS",status:e}},ee=Z.a.mark(ae),te=Z.a.mark(ne);function ae(e){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.messages.length){t.next=5;break}return t.next=3,Object($.c)(Q(e.messages[0]));case 3:t.next=7;break;case 5:return t.next=7,Object($.c)(Q("Some error occurred"));case 7:return t.next=9,Object($.c)(X("failed"));case 9:case"end":return t.stop()}}),ee)}function ne(e){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.c)(Q(e.message?e.message:"Some error occurred"));case 2:return t.next=4,Object($.c)(X("failed"));case 4:case"end":return t.stop()}}),te)}var re=a(40),ce={},oe=function(e){return{type:"ADD-TASK",task:e}},se=function(e,t){return{type:"SET-TASKS",tasks:e,todolistId:t}},ie=Z.a.mark(Oe),le=Z.a.mark(fe),ue=Z.a.mark(me),de=Z.a.mark(pe),be=Z.a.mark(je);function Oe(e){var t,a;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.c)(X("loading"));case 2:return n.next=4,Object($.b)(U,e.todolistId);case 4:return t=n.sent,a=t.items,n.next=8,Object($.c)(se(a,e.todolistId));case 8:return n.next=10,Object($.c)(X("succeeded"));case 10:case"end":return n.stop()}}),ie)}function fe(e){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.b)(G,e.todolistId,e.taskId);case 2:return t.sent,t.next=5,Object($.c)((a=e.taskId,n=e.todolistId,{type:"REMOVE-TASK",taskId:a,todolistId:n}));case 5:case"end":return t.stop()}var a,n}),le)}function me(e){var t,a;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.c)(X("loading"));case 2:return n.next=4,Object($.b)(Y,e.todolistId,e.title);case 4:if(t=n.sent,n.prev=5,0!==t.data.resultCode){n.next=14;break}return a=t.data.data.item,n.next=10,Object($.c)(oe(a));case 10:return n.next=12,Object($.c)(X("succeeded"));case 12:n.next=15;break;case 14:return n.delegateYield(ae(t.data),"t0",15);case 15:n.next=20;break;case 17:return n.prev=17,n.t1=n.catch(5),n.delegateYield(ne(n.t1),"t2",20);case 20:case"end":return n.stop()}}),ue,null,[[5,17]])}function pe(e){var t,a,n,r;return Z.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object($.d)();case 2:if(t=c.sent,a=t.tasks[e.todolistId].find((function(t){return t.id===e.taskId}))){c.next=7;break}return console.warn("task not found in the state"),c.abrupt("return");case 7:return n=Object(v.a)({deadline:a.deadline,description:a.description,priority:a.priority,startDate:a.startDate,title:a.title,status:a.status},e.domainModel),c.next=10,Object($.b)(V,e.todolistId,e.taskId,n);case 10:if(r=c.sent,c.prev=11,0!==r.data.resultCode){c.next=17;break}return c.next=15,Object($.c)((o=e.taskId,s=e.domainModel,i=e.todolistId,{type:"UPDATE-TASK",model:s,todolistId:i,taskId:o}));case 15:c.next=18;break;case 17:return c.delegateYield(ae(r.data),"t0",18);case 18:c.next=23;break;case 20:return c.prev=20,c.t1=c.catch(11),c.delegateYield(ne(c.t1),"t2",23);case 23:case"end":return c.stop()}var o,s,i}),de,null,[[11,20]])}var Te=function(e,t,a){return{type:"TASKS/UPDATE-TASK",taskId:e,domainModel:t,todolistId:a}};function je(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.e)("TASKS/FETCH-TASKS",Oe);case 2:return e.next=4,Object($.e)("TASKS/REMOVE-TASK",fe);case 4:return e.next=6,Object($.e)("TASKS/ADD-TASK",me);case 6:return e.next=8,Object($.e)("TASKS/UPDATE-TASK",pe);case 8:case"end":return e.stop()}}),be)}var Ee=r.a.memo((function(e){var t=e.demo,a=void 0!==t&&t,c=Object(C.a)(e,["demo"]);console.log("Todolist called");var o=Object(E.b)();Object(n.useEffect)((function(){if(!a){var e={type:"TASKS/FETCH-TASKS",todolistId:c.todolist.id};o(e)}}),[]);var i=Object(n.useCallback)((function(e){c.addTask(e,c.todolist.id)}),[c.addTask,c.todolist.id]),l=Object(n.useCallback)((function(e){c.changeTodolistTitle(c.todolist.id,e)}),[c.todolist.id,c.changeTodolistTitle]),u=Object(n.useCallback)((function(){return c.changeFilter("all",c.todolist.id)}),[c.todolist.id,c.changeFilter]),d=Object(n.useCallback)((function(){return c.changeFilter("active",c.todolist.id)}),[c.todolist.id,c.changeFilter]),O=Object(n.useCallback)((function(){return c.changeFilter("completed",c.todolist.id)}),[c.todolist.id,c.changeFilter]),m=c.tasks;return"active"===c.todolist.filter&&(m=c.tasks.filter((function(e){return e.status===s.New}))),"completed"===c.todolist.filter&&(m=c.tasks.filter((function(e){return e.status===s.Completed}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement(L,{value:c.todolist.title,onChange:l}),r.a.createElement(b.a,{onClick:function(){c.removeTodolist(c.todolist.id)},disabled:"loading"===c.todolist.entityStatus},r.a.createElement(y.a,null))),r.a.createElement(D,{addItem:i,disabled:"loading"===c.todolist.entityStatus}),r.a.createElement("div",null,m.map((function(e){return r.a.createElement(J,{key:e.id,task:e,todolistId:c.todolist.id,removeTask:c.removeTask,changeTaskTitle:c.changeTaskTitle,changeTaskStatus:c.changeTaskStatus})}))),r.a.createElement("div",{style:{paddingTop:"10px"}},r.a.createElement(f.a,{variant:"all"===c.todolist.filter?"outlined":"text",onClick:u,color:"default"},"All"),r.a.createElement(f.a,{variant:"active"===c.todolist.filter?"outlined":"text",onClick:d,color:"primary"},"Active"),r.a.createElement(f.a,{variant:"completed"===c.todolist.filter?"outlined":"text",onClick:O,color:"secondary"},"Completed")))})),ve=Z.a.mark(xe),ke=Z.a.mark(he),Ie=Z.a.mark(we),Se=Z.a.mark(Ae),ge=Z.a.mark(De);function xe(){var e,t;return Z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object($.c)(X("loading"));case 2:return a.prev=2,a.next=5,Object($.b)(F);case 5:return e=a.sent,t=e.data,a.next=9,Object($.c)(x(t));case 9:return a.next=11,Object($.c)(X("succeeded"));case 11:a.next=16;break;case 13:return a.prev=13,a.t0=a.catch(2),a.delegateYield(ne(a.t0),"t1",16);case 16:case"end":return a.stop()}}),ve,null,[[2,13]])}function he(e){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.c)(X("loading"));case 2:return t.next=4,Object($.c)({type:"CHANGE-TODOLIST-ENTITY-STATUS",id:e.todolistId,status:"loading"});case 4:return t.next=6,Object($.b)(R,e.todolistId);case 6:return t.sent,t.next=9,Object($.c)(S(e.todolistId));case 9:return t.next=11,Object($.c)(X("succeeded"));case 11:case"end":return t.stop()}}),ke)}function we(e){var t,a;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object($.c)(X("loading"));case 2:return n.next=4,Object($.b)(H,e.title);case 4:return t=n.sent,a=t.data.data.item,n.next=8,Object($.c)(g(a));case 8:return n.next=10,Object($.c)(X("succeeded"));case 10:case"end":return n.stop()}}),Ie)}function Ae(e){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.b)(M,e.todolistId,e.title);case 2:return t.sent,t.next=5,Object($.c)((a=e.todolistId,n=e.title,{type:"CHANGE-TODOLIST-TITLE",id:a,title:n}));case 5:case"end":return t.stop()}var a,n}),Se)}function De(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.e)("TODOLISTS/FETCH-TODOLISTS",xe);case 2:return e.next=4,Object($.e)("TODOLISTS/REMOVE-TODOLIST",he);case 4:return e.next=6,Object($.e)("TODOLISTS/ADD-TODOLIST",we);case 6:return e.next=8,Object($.e)("TODOLISTS/CHANGE-TODOLIST",Ae);case 8:case"end":return e.stop()}}),ge)}var Ce=a(179),Le=a(140),ye=function(e){var t=e.demo,a=void 0!==t&&t,c=Object(E.c)((function(e){return e.todolists})),o=Object(E.c)((function(e){return e.tasks})),s=Object(E.c)((function(e){return e.auth.isLoggedIn})),i=Object(E.b)();Object(n.useEffect)((function(){!a&&s&&i({type:"TODOLISTS/FETCH-TODOLISTS"})}),[]);var l=Object(n.useCallback)((function(e,t){var a=function(e,t){return{type:"TASKS/REMOVE-TASK",taskId:e,todolistId:t}}(e,t);i(a)}),[]),u=Object(n.useCallback)((function(e,t){var a=function(e,t){return{type:"TASKS/ADD-TASK",title:e,todolistId:t}}(e,t);i(a)}),[]),d=Object(n.useCallback)((function(e,t,a){var n=Te(e,{status:t},a);i(n)}),[]),b=Object(n.useCallback)((function(e,t,a){var n=Te(e,{title:t},a);i(n)}),[]),O=Object(n.useCallback)((function(e,t){var a={type:"CHANGE-TODOLIST-FILTER",id:t,filter:e};i(a)}),[]),f=Object(n.useCallback)((function(e){i({type:"TODOLISTS/REMOVE-TODOLIST",todolistId:e})}),[]),m=Object(n.useCallback)((function(e,t){i(function(e,t){return{type:"TODOLISTS/CHANGE-TODOLIST",todolistId:e,title:t}}(e,t))}),[]),p=Object(n.useCallback)((function(e){i(function(e){return{type:"TODOLISTS/ADD-TODOLIST",title:e}}(e))}),[i]);return s?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{container:!0,style:{padding:"20px"}},r.a.createElement(D,{addItem:p})),r.a.createElement(Ce.a,{container:!0,spacing:3},c.map((function(e){var t=o[e.id];return r.a.createElement(Ce.a,{item:!0,key:e.id},r.a.createElement(Le.a,{style:{padding:"10px"}},r.a.createElement(Ee,{todolist:e,tasks:t,removeTask:l,changeFilter:O,addTask:u,changeTaskStatus:d,removeTodolist:f,changeTaskTitle:b,changeTodolistTitle:m,demo:a})))})))):r.a.createElement(j.a,{to:"/login"})},Pe=a(192),Ke=a(189);function Ne(e){return r.a.createElement(Ke.a,Object.assign({elevation:6,variant:"filled"},e))}function Fe(){var e=Object(E.c)((function(e){return e.app.error})),t=Object(E.b)(),a=function(e,a){"clickaway"!==a&&t(Q(null))},n=null!==e;return r.a.createElement(Pe.a,{open:n,autoHideDuration:6e3,onClose:a},r.a.createElement(Ne,{onClose:a,severity:"error"},e))}var He=a(58),Re=a(193),Me=a(174),Ue=a(180),Ge=a(181),Ye=a(95),Ve={isLoggedIn:!1},qe=function(e){return{type:"login/SET-IS-LOGGED-IN",value:e}},ze=Z.a.mark(We),Be=Z.a.mark(Ze),Je=Z.a.mark($e);function We(e){var t;return Z.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object($.c)(X("loading"));case 2:return a.next=4,Object($.b)(q,e.data);case 4:if(t=a.sent,a.prev=5,0!==t.data.resultCode){a.next=13;break}return a.next=9,Object($.c)(qe(!0));case 9:return a.next=11,Object($.c)(X("succeeded"));case 11:a.next=14;break;case 13:return a.delegateYield(ae(t.data),"t0",14);case 14:a.next=19;break;case 16:return a.prev=16,a.t1=a.catch(5),a.delegateYield(ne(a.t1),"t2",19);case 19:case"end":return a.stop()}}),ze,null,[[5,16]])}function Ze(){var e;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object($.c)(X("loading"));case 2:return t.next=4,Object($.b)(z);case 4:if(e=t.sent,t.prev=5,0!==e.data.resultCode){t.next=13;break}return t.next=9,Object($.c)(qe(!1));case 9:return t.next=11,Object($.c)(X("succeeded"));case 11:t.next=14;break;case 13:return t.delegateYield(ae(e.data),"t0",14);case 14:t.next=19;break;case 16:return t.prev=16,t.t1=t.catch(5),t.delegateYield(ne(t.t1),"t2",19);case 19:case"end":return t.stop()}}),Be,null,[[5,16]])}function $e(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.e)("AUTH/LOGIN",We);case 2:return e.next=4,Object($.e)("AUTH/LOGOUT",Ze);case 4:case"end":return e.stop()}}),Je)}var _e=function(){var e=Object(E.b)(),t=Object(E.c)((function(e){return e.auth.isLoggedIn})),a=Object(Ye.a)({validate:function(e){return e.email?e.password?void 0:{password:"Password is required"}:{email:"Email is required"}},initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){e({type:"AUTH/LOGIN",data:t})}});return t?r.a.createElement(j.a,{to:"/"}):r.a.createElement(Ce.a,{container:!0,justify:"center"},r.a.createElement(Ce.a,{item:!0,xs:4},r.a.createElement("form",{onSubmit:a.handleSubmit},r.a.createElement(Re.a,null,r.a.createElement(Me.a,null,r.a.createElement("p",null,"To log in get registered ",r.a.createElement("a",{href:"https://social-network.samuraijs.com/",target:"_blank"},"here")),r.a.createElement("p",null,"or use common test account credentials:"),r.a.createElement("p",null," Email: free@samuraijs.com"),r.a.createElement("p",null,"Password: free")),r.a.createElement(Ue.a,null,r.a.createElement(w.a,Object.assign({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.errors.email?r.a.createElement("div",null,a.errors.email):null,r.a.createElement(w.a,Object.assign({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.errors.password?r.a.createElement("div",null,a.errors.password):null,r.a.createElement(Ge.a,{label:"Remember me",control:r.a.createElement(P.a,Object.assign({},a.getFieldProps("rememberMe"),{checked:a.values.rememberMe}))}),r.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary"},"Login"))))))},Qe=Z.a.mark(et),Xe=Z.a.mark(tt);function et(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object($.b)(B);case 3:if(0!==e.sent.resultCode){e.next=9;break}return e.next=7,Object($.c)(qe(!0));case 7:e.next=9;break;case 9:return e.prev=9,e.next=12,Object($.c)({type:"APP/SET-IS-INITIALIED",value:!0});case 12:return e.finish(9);case 13:case"end":return e.stop()}}),Qe,null,[[0,,9,13]])}function tt(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.e)("APP/INITIALIZE-APP",et);case 2:case"end":return e.stop()}}),Xe)}var at=function(e){var t=e.demo,a=void 0!==t&&t,c=Object(E.c)((function(e){return e.app.status})),o=Object(E.c)((function(e){return e.auth.isLoggedIn})),s=Object(E.c)((function(e){return e.app.isInitialized})),i=Object(E.b)(),v=Object(n.useCallback)((function(){i({type:"AUTH/LOGOUT"})}),[]);return Object(n.useEffect)((function(){i({type:"APP/INITIALIZE-APP"})}),[]),s?r.a.createElement(He.a,{basename:"project-todolist-ts-sagas"},r.a.createElement("div",{className:"App"},r.a.createElement(Fe,null),r.a.createElement(u.a,{position:"static"},r.a.createElement(d.a,null,r.a.createElement(b.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(T.a,null)),r.a.createElement(O.a,{variant:"h6"},"News"),o&&r.a.createElement(f.a,{color:"inherit",onClick:v},"Log out")),"loading"===c&&r.a.createElement(m.a,null)),r.a.createElement(p.a,{fixed:!0},r.a.createElement(j.b,{exact:!0,path:"/",render:function(){return r.a.createElement(ye,{demo:a})}}),r.a.createElement(j.b,{path:"/login",render:function(){return r.a.createElement(_e,null)}})))):r.a.createElement("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"}},r.a.createElement(l.a,null))},nt=a(47),rt=a(94),ct=a(96),ot=Z.a.mark(ut),st=Object(nt.c)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":return Object(v.a)(Object(v.a)({},e),{},Object(re.a)({},t.todolistId,e[t.todolistId].filter((function(e){return e.id!=t.taskId}))));case"ADD-TASK":return Object(v.a)(Object(v.a)({},e),{},Object(re.a)({},t.task.todoListId,[t.task].concat(Object(k.a)(e[t.task.todoListId]))));case"UPDATE-TASK":return Object(v.a)(Object(v.a)({},e),{},Object(re.a)({},t.todolistId,e[t.todolistId].map((function(e){return e.id===t.taskId?Object(v.a)(Object(v.a)({},e),t.model):e}))));case"ADD-TODOLIST":return Object(v.a)(Object(v.a)({},e),{},Object(re.a)({},t.todolist.id,[]));case"REMOVE-TODOLIST":var a=Object(v.a)({},e);return delete a[t.id],a;case"SET-TODOLISTS":var n=Object(v.a)({},e);return t.todolists.forEach((function(e){n[e.id]=[]})),n;case"SET-TASKS":return Object(v.a)(Object(v.a)({},e),{},Object(re.a)({},t.todolistId,t.tasks));default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!=t.id}));case"ADD-TODOLIST":return[Object(v.a)(Object(v.a)({},t.todolist),{},{filter:"all",entityStatus:"idle"})].concat(Object(k.a)(e));case"CHANGE-TODOLIST-TITLE":return e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{title:t.title}):e}));case"CHANGE-TODOLIST-FILTER":return e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{filter:t.filter}):e}));case"CHANGE-TODOLIST-ENTITY-STATUS":return e.map((function(e){return e.id===t.id?Object(v.a)(Object(v.a)({},e),{},{entityStatus:t.status}):e}));case"SET-TODOLISTS":return t.todolists.map((function(e){return Object(v.a)(Object(v.a)({},e),{},{filter:"all",entityStatus:"idle"})}));default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(v.a)(Object(v.a)({},e),{},{status:t.status});case"APP/SET-ERROR":return Object(v.a)(Object(v.a)({},e),{},{error:t.error});case"APP/SET-IS-INITIALIED":return Object(v.a)(Object(v.a)({},e),{},{isInitialized:t.value});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":return Object(v.a)(Object(v.a)({},e),{},{isLoggedIn:t.value});default:return e}}}),it=Object(ct.a)(),lt=Object(nt.d)(st,Object(nt.a)(rt.a,it));function ut(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object($.a)([tt(),$e(),je(),De()]);case 2:case"end":return e.stop()}}),ot)}it.run(ut),window.store=lt,o.a.render(r.a.createElement(E.a,{store:lt},r.a.createElement(at,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.99cc8aaf.chunk.js.map