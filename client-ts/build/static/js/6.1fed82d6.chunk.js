(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,a,t){"use strict";t.r(a);var n=t(5),l=t(0),s=t.n(l),r=t(10),o=t(21),u=t(79),i=t.n(u),c=function(e){var a=s.a.useState(""),t=Object(n.a)(a,2),l=t[0],r=t[1],o=s.a.useState(""),u=Object(n.a)(o,2),c=u[0],m=u[1],b=s.a.useState(""),g=Object(n.a)(b,2),p=g[0],E=g[1],_=s.a.useState(""),h=Object(n.a)(_,2),w=h[0],f=h[1],d=s.a.useState(""),v=Object(n.a)(d,2),N=v[0],k=v[1],j=s.a.useState(""),U=Object(n.a)(j,2),O=U[0],S=U[1],L=function(e){var a=e.length>0;return k(a?"":"Email is missing"),a},T=function(e){var a=e.length>6;return S(a?"":"Password too short"),a},P=function(e){switch(e.target.name){case"uName":r(e.target.value);break;case"uPass":E(e.target.value);break;default:m(e.target.value)}},x=e.newUser?s.a.createElement("label",null,s.a.createElement("span",{className:i.a.label},"Name"),s.a.createElement("input",{type:"text",name:"uName",value:l,onChange:P})):null,F=e.newUser?i.a.loginTall:i.a.login,y=e.newUser?"Register new user":"Login details",C=s.a.createElement("div",{className:i.a.error},w?s.a.createElement("li",null,w):null,N?s.a.createElement("li",null,N):null,O?s.a.createElement("li",null,O):null,e.message?s.a.createElement("li",null,e.message):null);return s.a.createElement("section",{className:F},s.a.createElement("h1",null,y),s.a.createElement("form",{onSubmit:function(a){if(a.preventDefault(),e.newUser?function(e){var a=e.length>3;return f(a?"":"Name is too short"),a}(l)&&L(c)&&T(p):L(c)&&T(p)){var t={new:e.newUser,fields:{name:l,email:c,password:p}};e.login(t)}}},x,s.a.createElement("label",null,s.a.createElement("span",{className:i.a.label},"Email"),s.a.createElement("input",{type:"email",name:"uMail",value:c,onChange:P})),s.a.createElement("label",null,s.a.createElement("span",{className:i.a.label},"Password"),s.a.createElement("input",{type:"password",name:"uPass",value:p,onChange:P})),C,s.a.createElement("button",{className:i.a.submit},s.a.createElement("input",{type:"button",value:e.newUser?"Register":"Login",id:"submit_button"}))))},m=t(80),b=t.n(m);t(34),a.default=Object(r.b)(function(e){return{user:e.user}},{checkUser:o.b})(function(e){var a=s.a.useState(!1),t=Object(n.a)(a,2),l=t[0],r=t[1],o=s.a.useState(!1),u=Object(n.a)(o,2),i=u[0],m=u[1],g=s.a.useState(""),p=Object(n.a)(g,2),E=p[0],_=p[1],h=e.cookies;return s.a.createElement("main",{className:b.a.home},s.a.createElement("h1",{className:b.a.title},"The Newsletter"),s.a.createElement("h2",{className:b.a.subTitle},"Just information."),s.a.createElement("div",{className:b.a.screenshot}),s.a.createElement("div",{className:b.a.buttonWrapper},s.a.createElement("button",{className:"button",onClick:function(){return m(!i)}},"Login or register")),i?s.a.createElement("div",{className:"modal"},s.a.createElement(c,{message:E,cookies:e.cookies,login:function(a){var t=a.new?"create":"login",n={action:["user",a.new?"create":t],id:"",fields:a.fields};e.checkUser(n).then(function(a){var t=a.payload.data;console.log(t),"new"===t.user?r(!0):t.status?(_(""),e.setUserEmail(t.user.email),e.setUserToken(t.user.token),h.set("email",t.user.email,{path:"/"}),h.set("token",t.user.token,{path:"/"}),e.toggleAuth()):_(t.data.message)})},newUser:l})):null)})},79:function(e,a,t){e.exports={login:"LoginForm_login__pgnVi",loginTall:"LoginForm_loginTall__3xFXP",label:"LoginForm_label__Exx1P",submit:"LoginForm_submit__3_ICg",error:"LoginForm_error__2pBlE"}},80:function(e,a,t){e.exports={home:"Home_home__2jlRQ",title:"Home_title__1maBB",subTitle:"Home_subTitle__17VvD",screenshot:"Home_screenshot__305jA",buttonWrapper:"Home_buttonWrapper__1GPzh"}}}]);
//# sourceMappingURL=6.1fed82d6.chunk.js.map