(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{155:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(31),o=a.n(c),i=a(5),u=a(6),l=a.n(u),s=a(12),m=a(18),d=a(19),p=a(8),f=a(29),E=(a(157),a(73),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_APIKEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTHDOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PROJECTID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_STORAGEBUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MESSAGINGSENDERID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_APPID});f.a.initializeApp(E);var b=f.a.firestore(),_=new f.a.auth.GoogleAuthProvider,h=a(35),v=a.n(h),O="[Auth] login",j="[Auth] logout",g="[UI] Set Error",y="[UI] REmove Error",N="[UI] Start Loading",S="[UI] Finish Loading",w="[Notes] New note",C="[Notes] Set active note",T="[Notes] Load notes",P="[Notes] Update note",D="[Notes] Delete note",x="[Notes] Logout Cleaning",A=a(20),k=a.n(A),I=function(e){return{type:g,payload:e}},R=function(){return{type:S}},L=a(4),W=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dfmursg0o/upload",(a=new FormData).append("upload_preset","react-journal"),a.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dfmursg0o/upload",{method:"POST",body:a});case 7:if(!(n=e.sent).ok){e.next=15;break}return e.next=11,n.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("".concat(t,"/journal/notes")).get();case 2:return a=e.sent,n=[],a.forEach((function(e){n.push(Object(L.a)({id:e.id},e.data()))})),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e,t){return{type:C,payload:Object(L.a)({id:e},t)}},H=function(e,t){return{type:w,payload:Object(L.a)({id:e},t)}},B=function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e);case 2:n=t.sent,a(V(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},V=function(e){return{type:T,payload:e}},G=function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,e.url||delete e.url,delete(c=Object(L.a)({},e)).id,t.next=6,b.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c);case 6:a(F(e.id,c)),k.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},F=function(e,t){return{type:P,payload:{id:e,note:Object(L.a)({id:e},t)}}},J=function(e){return{type:D,payload:e}},M=function(e,t){return function(a){return a({type:N}),f.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(q(t.uid,t.displayName)),a(R())})).catch((function(e){console.log(e),a(R()),k.a.fire("Error",e.message,"error")}))}},q=function(e,t){return{type:O,payload:{uid:e,displayName:t}}},z=function(){return{type:j}},X=a(34),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(m.a)(t,2),r=a[0],c=a[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},i=function(e){var t=e.target;c(Object(L.a)(Object(L.a)({},r),{},Object(X.a)({},t.name,t.value)))};return[r,i,o]},Q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).loading,a=Y({email:"",password:""}),n=Object(m.a)(a,2),c=n[0],o=n[1],u=c.email,l=c.password,s=function(){return!!v.a.isEmail(u)||(e(I("Email is not valid")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Login"),r.a.createElement("form",{className:"animate_animated animate_fadeIn animate_faster",onSubmit:function(t){t.preventDefault(),s()&&e(M(u,l))}},r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:l,onChange:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(){e(M(u,l))},disabled:t},"Login"),r.a.createElement("div",{className:"auth__social-networks"},r.a.createElement("p",null,"Login with social networks"),r.a.createElement("div",{className:"google-btn",onClick:function(){e((function(e){f.a.auth().signInWithPopup(_).then((function(t){var a=t.user;e(q(a.uid,a.displayName))}))}))}},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with google")))),r.a.createElement(d.b,{to:"/auth/register",className:"link"},"Create new account")))},Z=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).msgError,a=Y({name:"leonardo",email:"leonardo@hotmail.com",password:"123456",password2:"123456"}),n=Object(m.a)(a,2),c=n[0],o=n[1],u=c.name,p=c.email,E=c.password,b=c.password2,_=function(){return 0===u.trim().length?(e(I("Nombre es requerido")),!1):v.a.isEmail(p)?E!==b||E.length<5?(e(I("Password should be at least 6 characters and match each other")),!1):(e({type:y}),!0):(e(I("Email is not valid")),!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"auth__title"},"Register"),r.a.createElement("form",{className:"animate_animated animate_fadeIn animate_faster",onSubmit:function(t){t.preventDefault(),_()&&e(function(e,t,a){return function(n){f.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(s.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:a});case 3:n(q(r.uid,r.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),k.a.fire("Error",e.message,"error")}))}}(p,E,u))}},t&&r.a.createElement("div",{className:"auth__alert-error"},t),r.a.createElement("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:u,onChange:o}),r.a.createElement("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:p,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:E,onChange:o}),r.a.createElement("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:b,onChange:o}),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block mb-5"},"Register"),r.a.createElement(d.b,{to:"/auth/login",className:"link"},"Already registered?")))},$=function(){return r.a.createElement("div",{className:"auth__main"},r.a.createElement("div",{className:"auth__box-container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/auth/login",component:Q}),r.a.createElement(p.b,{exact:!0,path:"/auth/register",component:Z}),r.a.createElement(p.a,{to:"/auth/login"}))))},ee=a(60),te=a.n(ee),ae=function(e){var t=e.id,a=e.date,n=e.title,c=e.body,o=e.url,u=te()(a),l=Object(i.b)();return r.a.createElement("div",{className:"journal__entry pointer animate_animated animate_fadeIn animate_faster",onClick:function(){l(K(t,{date:a,title:n,body:c,url:o}))}},o&&r.a.createElement("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"journal__entry-body"},r.a.createElement("p",{className:"journal__entry-title"},n),r.a.createElement("p",{className:"journal__entry-content"},c)),r.a.createElement("div",{className:"journal__entry-date-box"},r.a.createElement("span",null,u.format("dddd")),r.a.createElement("h4",null,u.format("Do"))))},ne=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return r.a.createElement("div",{className:"journal__entries"},e.map((function(e){return r.a.createElement(ae,Object.assign({key:e.id},e))})))},re=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).name;return r.a.createElement("aside",{className:"journal__sidebar"},r.a.createElement("div",{className:"journal__sidebar-navbar"},r.a.createElement("h3",{className:"mt-5"},r.a.createElement("i",{className:"far fa-moon"}),r.a.createElement("span",null,t)),r.a.createElement("button",{onClick:function(){e(function(){var e=Object(s.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.auth().signOut();case 2:t(z()),t({type:x});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},className:"btn"},"Logout")),r.a.createElement("div",{onClick:function(){e(function(){var e=Object(s.a)(l.a.mark((function e(t,a){var n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,b.collection("".concat(n,"/journal/notes")).add(r);case 4:c=e.sent,t(K(c.id,r)),t(H(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},className:"journal__new-entry"},r.a.createElement("i",{className:"far fa-calendar-plus fa-5x"}),r.a.createElement("p",{className:"mt-5"},"New entry")),r.a.createElement(ne,null))},ce=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"notes__appbar"},r.a.createElement("span",null,"28 de agosto 2020"),r.a.createElement("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var a=t.target.files[0];a&&e(function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().notes.active,k.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){k.a.showLoading()}}),t.next=4,W(e);case 4:c=t.sent,r.url=c,a(G(r)),k.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(a))}}),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()}},"Picture"),r.a.createElement("button",{onClick:function(){e(G(t))},className:"btn"},"Save")))},oe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active,a=Y(t),c=Object(m.a)(a,3),o=c[0],u=c[1],d=c[2],p=o.body,f=o.title,E=o.id,_=Object(n.useRef)(t.id);Object(n.useEffect)((function(){t.id!==_.current&&(d(t),_.current=t.id)}),[t,d]),Object(n.useEffect)((function(){e(K(o.id,Object(L.a)({},o)))}),[o,e]);return r.a.createElement("div",{className:"notes__main-content"},r.a.createElement(ce,null),r.a.createElement("div",{className:"notes__content"},r.a.createElement("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",value:f,name:"title",onChange:u}),r.a.createElement("textarea",{placeholder:"What happened today",className:"notes__textarea",value:p,name:"body",onChange:u}),t.url&&r.a.createElement("div",{className:"notes__image"},r.a.createElement("img",{src:t.url,alt:"imagen"}))),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(s.a)(l.a.mark((function t(a,n){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.uid,t.next=3,b.doc("".concat(r,"/journal/notes/").concat(e)).delete();case 3:a(J(e));case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}(E))}},"Delete"))},ie=function(){return r.a.createElement("div",{className:"nothing__main-content"},r.a.createElement("p",null,"Select something",r.a.createElement("br",null),"pr create an entry!"),r.a.createElement("i",{className:"far fa-star fa-4x mt-5"}))},ue=function(){var e=Object(i.c)((function(e){return e.notes})).active;return r.a.createElement("div",{className:"journal__main-content animate_animated animate_fadeIn animate_faster"},r.a.createElement(re,null),r.a.createElement("main",null,e?r.a.createElement(oe,null):r.a.createElement(ie,null)))},le=a(36),se=function(e){var t=e.isAuthenticated,a=e.component,n=Object(le.a)(e,["isAuthenticated","component"]);return r.a.createElement(p.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(p.a,{to:"/"}):r.a.createElement(a,e)}}))},me=function(e){var t=e.isAuthenticated,a=e.component,n=Object(le.a)(e,["isAuthenticated","component"]);return r.a.createElement(p.b,Object.assign({},n,{component:function(e){return t?r.a.createElement(a,e):r.a.createElement(p.a,{to:"/auth/login"})}}))},de=function(){var e=Object(i.b)(),t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),E=Object(m.a)(u,2),b=E[0],_=E[1];return Object(n.useEffect)((function(){f.a.auth().onAuthStateChanged(function(){var t=Object(s.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===a||void 0===a?void 0:a.uid)?(e(q(a.uid,a.displayName)),_(!0),e(B(a.uid))):_(!1),o(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,o,_]),c?r.a.createElement("h1",null,"Wait..."):r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(se,{path:"/auth",component:$,isAuthenticated:b}),r.a.createElement(me,{exact:!0,path:"/",component:ue,isAuthenticated:b}),r.a.createElement(p.a,{to:"/auth/login"}))))},pe=a(21),fe=a(61),Ee={loading:!1,msgError:null},be=a(44),_e={notes:[],active:null},he="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||pe.d,ve=Object(pe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{uid:t.payload.uid,name:t.payload.displayName};case j:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(L.a)(Object(L.a)({},e),{},{msgError:t.payload});case y:return Object(L.a)(Object(L.a)({},e),{},{msgError:null});case N:return Object(L.a)(Object(L.a)({},e),{},{loading:!0});case S:return Object(L.a)(Object(L.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(L.a)(Object(L.a)({},e),{},{active:Object(L.a)({},t.payload)});case w:return Object(L.a)(Object(L.a)({},e),{},{notes:[t.payload].concat(Object(be.a)(e.notes))});case T:return Object(L.a)(Object(L.a)({},e),{},{notes:Object(be.a)(t.payload)});case P:return Object(L.a)(Object(L.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case D:return Object(L.a)(Object(L.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case x:return Object(L.a)(Object(L.a)({},e),{},{active:null,notes:[]});default:return e}}}),Oe=Object(pe.e)(ve,he(Object(pe.a)(fe.a))),je=function(){return r.a.createElement(i.a,{store:Oe},r.a.createElement(de,null))};a(155);o.a.render(r.a.createElement(je,null),document.getElementById("root"))},62:function(e,t,a){e.exports=a(156)}},[[62,1,2]]]);
//# sourceMappingURL=main.ca063935.chunk.js.map