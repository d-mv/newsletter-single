(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"a",function(){return a});var r="CHECK_USER",a="API_REQUEST"},17:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"c",function(){return a}),t.d(e,"a",function(){return o});var r="SET_POSTS",a="UPDATE_POST",o="SELECT_POST"},21:function(n,e,t){"use strict";var r=t(0),a=t.n(r),o=t(22);e.a=function(){return a.a.createElement(o.b,null,a.a.createElement(o.a,null,"Loading..."))}},22:function(n,e,t){"use strict";t.d(e,"b",function(){return s}),t.d(e,"a",function(){return l});var r=t(5),a=t(6);function o(){var n=Object(r.a)([""]);return o=function(){return n},n}function i(){var n=Object(r.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  transition: 0.7s;\n\n  @media (max-width: 599px) {\n  }\n\n  @media (min-width: 600px) and (max-width: 949px) {\n  }\n\n  @media (min-width: 950px) and (max-width: 1099px) {\n  }\n\n  @media (min-width: 1100px) {\n  }\n"]);return i=function(){return n},n}function c(){var n=Object(r.a)(["\n  padding: 0 20px;\n  margin: 0 auto;\n  margin-top: 2.3rem;\n"]);return c=function(){return n},n}var u=a.a.main(c()),s=Object(a.a)(u)(i()),l=a.a.div(o())},26:function(n,e,t){"use strict";t.d(e,"b",function(){return r}),t.d(e,"j",function(){return a}),t.d(e,"k",function(){return o}),t.d(e,"i",function(){return i}),t.d(e,"h",function(){return c}),t.d(e,"a",function(){return u}),t.d(e,"c",function(){return s}),t.d(e,"e",function(){return f}),t.d(e,"g",function(){return h}),t.d(e,"f",function(){return p}),t.d(e,"l",function(){return d}),t.d(e,"d",function(){return l});var r="#444444",a="#d3d3d3",o="#c4c4c4",i="#6b6b6b",c="#aaaaaa",u="#6d6bc4",s="rgba(68, 68, 68, 0.5)",l="Alegreya",d="Open Sans",f="0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",h="all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",p="0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"},27:function(n,e,t){"use strict";t.d(e,"b",function(){return i}),t.d(e,"a",function(){return c});var r=t(12),a=t(9),o=t.n(a);function i(n){var e=o.a.post("/",{query:n}).then(function(n){return n}).catch(function(n){return n});return{type:r.b,payload:e}}function c(n){var e=o.a.post("/",{query:n}).then(function(n){return n}).catch(function(n){return n});return{type:r.b,payload:e}}},28:function(n,e,t){"use strict";var r=t(5),a=t(6),o=t(26);function i(){var n=Object(r.a)(["\n  margin: 0 auto;\n  padding: 0;\n  width: 99vw;\n  /* height: 97vh; */\n  font-family: ",";\n  background-color: #d3d3d3 !important;\n  color: #444444;\n\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  -ms-word-break: break-all;\n  /* This is the dangerous one in WebKit, as it breaks things wherever */\n  word-break: break-all;\n  /* Instead use this non-standard one: */\n  word-break: break-word;\n\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n"]);return i=function(){return n},n}var c=a.a.div(i(),o.d);e.a=c},35:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var r="SET_SOURCES"},44:function(n,e,t){n.exports=t(76)},71:function(n,e,t){},76:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=t(36),u=t.n(c),s=t(14),l=t(18),d=t(7),f=t(27),h=t(28),p=t(21),b=a.a.lazy(function(){return t.e(6).then(t.bind(null,98))}),v=a.a.lazy(function(){return Promise.all([t.e(3),t.e(4)]).then(t.bind(null,96))}),g=Object(s.b)(function(n){return{user:n.user}},{checkUser:f.b})(Object(l.b)(function(n){var e=a.a.useState(""),t=Object(d.a)(e,2),o=t[0],i=t[1],c=a.a.useState(""),u=Object(d.a)(c,2),s=u[0],l=u[1],f=a.a.useState(!1),g=Object(d.a)(f,2),w=g[0],m=g[1],k=a.a.useState(0),y=Object(d.a)(k,2),S=y[0],E=y[1],O=a.a.useState(!0),x=Object(d.a)(O,2),j=x[0],A=x[1],U=n.cookies,T=function(){m(!w)},W={email:U.get("email"),token:U.get("token")};U.get("email")&&U.get("token")&&0===S?(function(e){var t={action:["user","verifyCookies"],fields:e};n.checkUser(t).then(function(n){n.payload.data.authed&&(i(e.email),l(e.token),T()),A(!1)})}(W),E(1)):0===S&&(A(!1),E(1));return j?a.a.createElement(h.a,null,"Loading ---"):w?a.a.createElement(r.Suspense,{fallback:a.a.createElement(p.a,null)},a.a.createElement(v,{currentUser:{email:o,token:s},signOff:function(){U.set("email","",{path:"/"}),U.set("token","",{path:"/"}),i(""),l(""),m(!1)}})):a.a.createElement(r.Suspense,{fallback:a.a.createElement(p.a,null)},a.a.createElement(b,{cookies:n.cookies,toggleAuth:T,setUserEmail:i,setUserToken:l}))})),w=(t(71),t(4)),m=t(40),k=t(9),y=t.n(k),S=t(41),E=t(42),O=t.n(E),x=t(2),j=t(17),A={token:"",action:["",""]};var U=t(35),T={token:"",action:["",""]};var W=t(12),R={user:{name:"",password:"",email:""},currentUser:{email:"",token:""}};y.a.defaults.baseURL="".concat("http://localhost:8080","/api"),y.a.defaults.headers.common.Authorization="sdasfAWAFSDSD34t23rSADrqrg34qew54675hSDFADF";var C=Object(w.combineReducers)({posts:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j.b:return Object(x.a)({},e.payload);default:return n}},sources:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U.a:return Object(x.a)({},e.payload);default:return n}},user:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case W.b:return Object(x.a)({},e.payload);default:return n}}});var P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function D(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}u.a.load({google:{families:["Alegreya:400,400i,500,500i,700,700i:cyrillic,cyrillic-ext,latin-ext","Open+Sans:300,300i,400","Roboto+Mono:300"]}});var L=function(){var n=[O.a,S.logger],e=w.applyMiddleware.apply(void 0,n);return Object(w.createStore)(C,Object(m.composeWithDevTools)(e))}();i.a.render(a.a.createElement(l.a,null,a.a.createElement(s.a,{store:L},a.a.createElement(g,null))),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");P?(function(n,e){fetch(n).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):D(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):D(e,n)})}}()}},[[44,1,2]]]);
//# sourceMappingURL=main.384250a1.chunk.js.map