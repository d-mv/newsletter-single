(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(n,e,t){n.exports={text:"PostTextStyle_text__1hs1R",signature:"PostTextStyle_signature__1GYUC","book-cta":"PostTextStyle_book-cta__2wsY4","border-bottom":"PostTextStyle_border-bottom__3Orxm"}},45:function(n,e,t){n.exports=t(77)},72:function(n,e,t){},77:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),o=t(12),i=t.n(o),c=t(31),u=t.n(c),l=t(8),s=t(19),d=t(4),m="CHECK_USER",p=t(7),f=t.n(p);function h(n){var e=f.a.post("/",{query:n}).then(function(n){return n}).catch(function(n){return n});return{type:m,payload:e}}var g=t(2),b=t(3),x="#444444",w="0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",v="all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)";function E(){var n=Object(g.a)(["\n  padding: 5px;\n  margin-bottom: 5px;\n  color: ",";\n  list-style: none;\n  text-align: center;\n  li {\n    padding: 5px 0;\n  }\n"]);return E=function(){return n},n}function y(){var n=Object(g.a)(["\n  input {\n    font-weight: 300;\n    background: none;\n    border: none;\n    background-color: ",";\n    color: ",";\n    font-family: ",";\n    border-radius: 2px;\n    /* margin: 0.2rem auto; */\n    padding: 10px;\n    font-size: 1rem;\n    letter-spacing: 1px;\n    outline: none;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n\n    &:hover {\n      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\n        0 10px 10px rgba(0, 0, 0, 0.22);\n      background-color: ",";\n      color: ",";\n    }\n    &:active {\n      transform: scale(0.9);\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    }\n  }\n"]);return y=function(){return n},n}function O(){var n=Object(g.a)(["\n  margin-top: -1.4rem;\n  background-color: ",";\n  color: black;\n  display: inline-block;\n  max-width: 5rem;\n  margin-left: 1rem;\n  text-align: center;\n  font-weight: 300;\n  font-size: 1rem;\n"]);return O=function(){return n},n}function k(){var n=Object(g.a)([""]);return k=function(){return n},n}function j(){var n=Object(g.a)(["\n  height: ",";\n\n  @media (max-width: 499px) {\n    width: 80%;\n    margin-top: 25vh;\n  }\n  @media (min-width: 500px) {\n    width: 50%;\n    margin-top: 30vh;\n  }\n  margin: 0 auto;\n  padding: 1rem;\n  text-align: center;\n\n  border-radius: 2px;\n  background-color: ",";\n  box-shadow: ",";\n  transition: ",";\n  &:hover {\n    box-shadow: ",";\n  }\n\n  label {\n    display: grid;\n    border: 1px solid ",";\n    border-radius: 2px;\n    padding: 10px 20px;\n    margin: 1rem 0;\n\n    input {\n      background-color: ",";\n      font-family: ",";\n      font-weight: 300;\n      font-size: 1rem;\n      border: none;\n      margin: 0.5rem 0;\n      border-radius: 2px;\n      padding: 3px 2px;\n    }\n  }\n"]);return j=function(){return n},n}var S=b.a.section(j(),function(n){return n.height},"#c4c4c4",w,v,"0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)","#aaaaaa","#d3d3d3","Open Sans"),z=b.a.h1(k()),_=b.a.span(O(),"#c4c4c4"),U=b.a.button(y(),x,"#d3d3d3","Alegreya","#aaaaaa",x),T=b.a.div(E(),"#6d6bc4"),P=function(n){var e=r.a.useState(""),t=Object(d.a)(e,2),a=t[0],o=t[1],i=r.a.useState(""),c=Object(d.a)(i,2),u=c[0],l=c[1],s=r.a.useState(""),m=Object(d.a)(s,2),p=m[0],f=m[1],h=r.a.useState(""),g=Object(d.a)(h,2),b=g[0],x=g[1],w=r.a.useState(""),v=Object(d.a)(w,2),E=v[0],y=v[1],O=r.a.useState(""),k=Object(d.a)(O,2),j=k[0],P=k[1],R=function(n){var e=n.length>0;return y(e?"":"Email is missing"),e},A=function(n){var e=n.length>6;return P(e?"":"Password too short"),e},C=function(n){switch(n.target.name){case"uName":o(n.target.value);break;case"uPass":f(n.target.value);break;default:l(n.target.value)}},F=n.newUser?r.a.createElement("label",null,r.a.createElement(_,null,"Name"),r.a.createElement("input",{type:"text",name:"uName",value:a,onChange:C})):null,D=n.newUser?"350px":"300px",M=n.newUser?"Register new user":"Login details",I=r.a.createElement(T,null,b?r.a.createElement("li",null,b):null,E?r.a.createElement("li",null,E):null,j?r.a.createElement("li",null,j):null,n.message?r.a.createElement("li",null,n.message):null);return r.a.createElement(S,{height:D},r.a.createElement(z,null,M),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),n.newUser?function(n){var e=n.length>3;return x(e?"":"Name is too short"),e}(a)&&R(u)&&A(p):R(u)&&A(p)){var t={new:n.newUser,fields:{name:a,email:u,password:p}};n.login(t)}}},F,r.a.createElement("label",null,r.a.createElement(_,null,"Email"),r.a.createElement("input",{type:"email",name:"uMail",value:u,onChange:C})),r.a.createElement("label",null,r.a.createElement(_,null,"Password"),r.a.createElement("input",{type:"password",name:"uPass",value:p,onChange:C})),I,r.a.createElement(U,null,r.a.createElement("input",{type:"button",value:n.newUser?"Register":"Login",id:"submit_button"}))))};function R(){var n=Object(g.a)(["\n  position: absolute;\n  top: 44vh;\n  left: 10vw;\n  font-weight: 300;\n  background: none;\n  border: none;\n  background-color: ",";\n  color: ",";\n  font-family: ",";\n  border-radius: 2px;\n  margin: 0.2rem auto;\n  padding: 10px;\n  font-size: 1rem;\n  letter-spacing: 1px;\n  outline: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  user-select: none;\n  cursor: pointer;\n  &:hover {\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n    background-color: ",";\n  }\n  &:active {\n    transform: scale(0.9);\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  }\n"]);return R=function(){return n},n}function A(){var n=Object(g.a)(["\n  position: absolute;\n  margin: 0;\n  padding: 0;\n  @media (max-width: 499px) {\n    display: none;\n  }\n  @media (min-width: 800px) {\n    left: 50vw;\n    top: 20vh;\n    height: 50vh;\n    width: 45vw;\n    border-radius: 2px;\n    border: 1px solid ",';\n    background: rgba(0, 0, 0, 0)\n      url("https://res.cloudinary.com/diciu4xpu/image/upload/v1557432341/newsletter/homepage/screenshot_desktop.jpg");\n  }\n  background-color: white;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  object-fit: cover;\n  box-shadow: ',";\n  transition: ",");\n"]);return A=function(){return n},n}function C(){var n=Object(g.a)(["\n  position: absolute;\n  top: 30vh;\n  left: 10vw;\n  font-style: italic;\n  @media (max-width: 399px) {\n    font-size: 2rem;\n  }\n  @media (min-width: 400px) {\n    font-size: 2.2rem;\n  }\n  font-size: 2.2rem;\n"]);return C=function(){return n},n}function F(){var n=Object(g.a)(["\n  position: absolute;\n  top: 20vh;\n  left: 10vw;\n  margin: 0;\n  padding: 0;\n  font-weight: 500;\n  @media (max-width: 399px) {\n    font-size: 2.5rem;\n  }\n  @media (min-width: 400px) {\n    font-size: 3.3rem;\n  }\n"]);return F=function(){return n},n}function D(){var n=Object(g.a)(["\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  font-family: ",";\n  background-color: ",";\n  color: ",";\n"]);return D=function(){return n},n}var M=b.a.div(D(),"Alegreya","#d3d3d3",x),I=b.a.h1(F()),L=b.a.h2(C()),N=b.a.div(A(),"#aaaaaa",w,v),W=b.a.button(R(),x,"#d3d3d3","Alegreya","#aaaaaa");function H(){var n=Object(g.a)(["\n  color: ",";\n  background-color: ",";\n  border-bottom: 3px solid ",";\n\n  &:hover {\n    color: ",";\n    border-bottom: 3px solid ",";\n  }\n"]);return H=function(){return n},n}function q(){var n=Object(g.a)(["\n  background-color: ",";\n  color: ",";\n  border-bottom: 3px solid ",";\n\n  &:hover {\n    border-bottom: 3px solid ",";\n  }\n"]);return q=function(){return n},n}function J(){var n=Object(g.a)(["\n  font-family: ",";\n  font-size: 1.1rem;\n  padding: 5px;\n  padding-top: 7px;\n  letter-spacing: 1px;\n  border-radius: 1px;\n  width: 180px;\n  margin: 3px auto;\n  text-align: center;\n"]);return J=function(){return n},n}function Y(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n"]);return Y=function(){return n},n}function B(){var n=Object(g.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 100vh;\n  width: 100vw;\n  background: ",";\n  z-index: 100;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n"]);return B=function(){return n},n}var K=b.a.div(B(),"rgba(68, 68, 68, 0.5)"),X=b.a.section(Y()),$=b.a.button(J(),"Alegreya"),G=Object(b.a)($)(q(),function(n){return n.accent?"#6b6b6b":"#d3d3d3"},function(n){return n.accent?"#d3d3d3":x},function(n){return n.accent?"#6b6b6b":"#d3d3d3"},function(n){return n.accent?"#d3d3d3":"#6b6b6b"}),Q=Object(b.a)($)(H(),"#d3d3d3",x,x,"#d3d3d3","#d3d3d3"),V=Object(l.b)(function(n){return{user:n.user}},{checkUser:h})(function(n){var e=r.a.useState(!1),t=Object(d.a)(e,2),a=t[0],o=t[1],i=r.a.useState(!1),c=Object(d.a)(i,2),u=c[0],l=c[1],s=r.a.useState(""),m=Object(d.a)(s,2),p=m[0],f=m[1],h=n.cookies,g={email:h.get("email"),token:h.get("token")};h.get("email")&&h.get("token")&&function(e){var t={action:["user","cookiesCheck"],fields:e};n.checkUser(t).then(function(t){t.payload.data.authed&&(n.setUserEmail(e.email),n.setUserToken(e.token),n.toggleAuth())})}(g);return r.a.createElement(M,null,r.a.createElement(I,null,"The Newsletter"),r.a.createElement(L,null,"Just information."),r.a.createElement(N,null),r.a.createElement(W,{onClick:function(){return l(!u)}},"Login or register"),u?r.a.createElement(K,null,r.a.createElement(P,{message:p,cookies:n.cookies,login:function(e){var t=e.new?"create":"login",a={action:["user",e.new?"create":t],id:"",fields:e.fields};n.checkUser(a).then(function(e){var t=e.payload.data;"new"===t.user?o(!0):t.status?(f(""),n.setUserEmail(t.user.email),n.setUserToken(t.user.token),h.set("email",t.user.email,{path:"/"}),h.set("token",t.user.token,{path:"/"}),n.toggleAuth()):f(t.data.message)})},newUser:a})):null)}),Z=t(35),nn=t(36),en=t(42),tn=t(37),an=t(43),rn="SET_POSTS",on="UPDATE_POST",cn="SELECT_POST";var un="SET_SOURCES";function ln(){var n=Object(g.a)(["\n  font-family: ",";\n  color: ",";\n\n  @media (max-width: 302px) {\n    font-size: 1.5rem;\n  }\n\n  @media (min-width: 303px) and (max-width: 340px) {\n    font-size: 2rem;\n  }\n\n  @media (min-width: 341px) {\n    font-size: 2.5rem;\n  }\n  font-weight: 700;\n  margin: 0;\n  height: 3rem;\n"]);return ln=function(){return n},n}var sn=b.a.h1(ln(),"Alegreya",x),dn=function(){return r.a.createElement(sn,null,"The Newsletter")},mn={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},pn={1:"Sun",2:"Mon",3:"Tue",4:"Wed",5:"Thu",6:"Fri",7:"Sat"},fn=function(n){var e=new Date;Object.keys(n).length||(e=new Date(n));var t="".concat(e.getHours(),":").concat(e.getMinutes()," am");return e.getHours()>12&&(t="".concat(e.getHours()-12,":").concat(e.getMinutes()," pm")),"".concat(pn[e.getDay()+1]," ").concat(e.getDate()," ").concat(mn[e.getMonth()+1]," at ").concat(t)};function hn(){var n=Object(g.a)(["\n  color: ",";\n  font-size: 100%;\n  font-weight: normal;\n"]);return hn=function(){return n},n}var gn=b.a.h5(hn(),"#6b6b6b"),bn=function(n){return r.a.createElement(gn,null,fn(n.date))};function xn(){var n=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-wrap: wrap;\n  padding: 0;\n\n  margin: -10px 20px 20px 20px;\n  border-bottom: 1px solid ",";\n  cursor: default;\n  user-select: none;\n"]);return xn=function(){return n},n}var wn=b.a.header(xn(),"#aaaaaa"),vn=function(){return r.a.createElement(wn,null,r.a.createElement(dn,null),r.a.createElement(bn,{date:new Date}))},En=t(5);function yn(){var n=Object(g.a)(["\n  color: ",";\n  transition: 0.7s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  margin: 0 5px;\n  padding: {\n    top: 3px;\n    left: 10px;\n    right: 10px;\n  }\n  font-family: ",";\n  font-size: 0.9rem;\n  letter-spacing: 1px;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    transform: scale(0.9);\n  }\n"]);return yn=function(){return n},n}var On=b.a.button(yn(),function(n){return n.accent?"#6d6bc4":x},"Alegreya","#6d6bc4"),kn=function(n){return r.a.createElement(On,{accent:n.accent,onClick:function(){return function(n){"BACK"===n.child||"HOME"===n.child?n.func("posts"):"SOURCES"===n.child?n.func("sources"):"profile"===n.mode?n.func("profile"):n.func()}({mode:n.mode,child:n.children,func:n.function})}},n.children)};function jn(){var n=Object(g.a)(["\n    0% {\n            transform: translateY(-30%);\n            filter:opacity(0)\n\n    }\n    100% {\n           transform: translateY(0);\n\n    }\n    "]);return jn=function(){return n},n}function Sn(){var n=Object(g.a)(["\n    0% {\n      transform: scale(0);\n    }\n    100% {\n      transform: scale(1);\n    }\n    "]);return Sn=function(){return n},n}function zn(){var n=Object(g.a)(["\n    0% {\n      transform: translateX(-100%);\n    }\n    100% {\n      transform: translateY(0);\n    }\n  "]);return zn=function(){return n},n}function _n(){var n=Object(g.a)(["\n    0% {\n      transform: translateY(-100%);\n    }\n    100% {\n      transform: translateX(0);\n    }"]);return _n=function(){return n},n}function Un(){var n=Object(g.a)(["\n0% {transform:scale(0)} 100%{transform:scale(1)}\n"]);return Un=function(){return n},n}var Tn=Object(b.b)(Un()),Pn=(Object(b.b)(_n()),Object(b.b)(zn()),Object(b.b)(Sn()),Object(b.b)(jn()));function Rn(){var n=Object(g.a)(["\n  animation: 0.7s ease-out 0s 1 ",";\n  position: absolute;\n  left: 10vw;\n  top: 3.2rem;\n  transition: 0.7s;\n  width: 80vw;\n  height: 2rem;\n  font-family: ",";\n  font-weight: 300;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-transform: uppercase;\n  user-select: none;\n\n  @media (max-width: 435px) {\n    top: 4.5rem;\n    width: 100vw;\n    left: 0;\n  }\n"]);return Rn=function(){return n},n}var An=b.a.nav(Rn(),Pn,"Alegreya"),Cn=function(n){return r.a.createElement(kn,{accent:n.accent,mode:n.mode,function:n.function},n.element)},Fn=function(n){var e=Cn({element:"post"===n.mode?"BACK":"HOME",mode:"home",accent:!1,function:n.moduleToggle}),t=Cn({element:"SOURCES",mode:"sources",accent:!1,function:n.moduleToggle}),a=Cn({element:n.read?r.a.createElement(En.d,null):r.a.createElement(En.e,null),mode:"showRead",accent:n.read,function:n.toggleRead}),o=Cn({element:r.a.createElement(En.g,null),mode:"refresh",accent:!1,function:n.toggleRead}),i=Cn({element:r.a.createElement(En.f,null),mode:"filter",accent:n.showFilter,function:n.toggleFilter}),c=Cn({element:r.a.createElement(En.i,null),mode:"profile",accent:!1,function:n.moduleToggle});return r.a.createElement(An,null,e,t,a,i,o,c)},Dn=function(n){var e=""===n.id?null:r.a.createElement(Q,{onClick:function(){return n.choose("clear")}},"Clear Filter"),t=n.list.map(function(e){return r.a.createElement(G,{key:e._id,accent:e._id===n.id,onClick:function(){return n.choose(e._id)},"data-test":"component-filter-item"},e.name)});return r.a.createElement(K,{"data-test":"container-filter",onClick:function(){return n.toggle()}},r.a.createElement(X,null,e,t))};function Mn(){var n=Object(g.a)([""]);return Mn=function(){return n},n}function In(){var n=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  transition: 0.7s;\n\n  @media (max-width: 599px) {\n  }\n\n  @media (min-width: 600px) and (max-width: 949px) {\n  }\n\n  @media (min-width: 950px) and (max-width: 1099px) {\n  }\n\n  @media (min-width: 1100px) {\n  }\n"]);return In=function(){return n},n}function Ln(){var n=Object(g.a)(["\n  padding: 0 20px;\n  margin: 0 auto;\n  margin-top: 2.3rem;\n"]);return Ln=function(){return n},n}var Nn=b.a.main(Ln()),Wn=Object(b.a)(Nn)(In()),Hn=b.a.div(Mn()),qn=function(){return r.a.createElement(Wn,null,r.a.createElement(Hn,null,"Loading..."))},Jn=t(15);function Yn(){var n=Object(g.a)(["\n  transition: 0.3s;\n\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"]);return Yn=function(){return n},n}function Bn(){var n=Object(g.a)(["\n  transition: 0.3s;\n\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"]);return Bn=function(){return n},n}function Kn(){var n=Object(g.a)(["\n  cursor: pointer;\n  outline: none;\n  font-size: 1.2rem;\n  margin: 0;\n  transition: 0.3s;\n\n  @media (max-width: 599px) {\n    font-size: 1.2rem;\n  }\n"]);return Kn=function(){return n},n}var Xn=b.a.button(Kn()),$n=b.a.span(Bn(),"#aaaaaa",x),Gn=b.a.span(Yn(),x,"#aaaaaa"),Qn=function(n){var e=n.status?r.a.createElement(Gn,null,n.children):r.a.createElement($n,null,n.children);return r.a.createElement(Xn,{onClick:function(){return n.update({field:n.mode,id:n.id})}},e)};function Vn(){var n=Object(g.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Vn=function(){return n},n}function Zn(){var n=Object(g.a)(["\n  display: flex;\n  font-family: ",";\n  justify-content: space-between;\n  font-size: 80%;\n  font-weight: 300;\n  padding: 0 0.3rem;\n"]);return Zn=function(){return n},n}function ne(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  align-content: center;\n  font-weight: 300;\n  font-family: ",";\n  letter-spacing: 0.03rem;\n  font-size: 0.8rem;\n  padding-top: 0.6rem;\n"]);return ne=function(){return n},n}function ee(){var n=Object(g.a)(["\n  font-size: 1.1rem;\n  padding: 0 0 0.3rem 0;\n  cursor: pointer;\n  margin-bottom: 5px;\n  line-height: 1.4rem;\n\n  @media (max-width: 499px) {\n    font-size: 1.3rem;\n  }\n"]);return ee=function(){return n},n}function te(){var n=Object(g.a)(["\n  cursor: pointer;\n  font-weight: 500;\n  margin: 0;\n  line-height: 1.6rem;\n  font-size: 1.3rem;\n  @media (max-width: 499px) {\n    font-size: 1.5rem;\n    line-height: 1.8rem;\n  }\n"]);return te=function(){return n},n}function ae(){var n=Object(g.a)(["\n  animation: 0.3s ease-out 0s 1 ",";\n\n  @media (min-width: 499px) {\n    .text {\n      max-height: 50rem;\n    }\n  }\n\n  margin: 0 auto;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n\n  border-bottom: 1px solid ",";\n  @media (max-width: 699px) {\n    width: 90%;\n  }\n\n  @media (min-width: 700px) and (max-width: 949px) {\n    width: 45%;\n  }\n\n  @media (min-width: 950px) and (max-width: 1199px) {\n    width: 30%;\n  }\n\n  @media (min-width: 1200px) and (max-width: 1599px) {\n    width: 23%;\n  }\n\n  @media (min-width: 1599px) and (max-width: 4000px) {\n    width: 18%;\n  }\n"]);return ae=function(){return n},n}var re=b.a.article(ae(),Tn,"#aaaaaa"),oe=b.a.h3(te()),ie=b.a.main(ee()),ce=b.a.section(ne(),"Open Sans"),ue=b.a.footer(Zn(),"Open Sans"),le=b.a.div(Vn()),se=function(n){var e="show"===n.mode?"".concat(n.author," @ ").concat(n.source):"@".concat(n.source);return r.a.createElement(ce,null,r.a.createElement(le,null,e),r.a.createElement(le,null,r.a.createElement(Qn,{update:n.update,id:n.id,mode:"star",status:n.star},n.buttons.star),r.a.createElement(Qn,{update:n.update,id:n.id,mode:"read",status:n.read},n.buttons.read)))},de=function(n){var e="~".concat(n.readingTime," mins");return r.a.createElement(ue,null,r.a.createElement(le,null,fn(n.timestamp)),r.a.createElement(le,null,e))},me=function(n){var e="".concat(n.post.text.replace(/<(?:.|\n)*?>/gm," "),"..."),t=n.post.star?r.a.createElement(Jn.a,null):r.a.createElement(Jn.b,null),a=n.post.read?r.a.createElement(En.b,null):r.a.createElement(En.a,null);return r.a.createElement(re,null,r.a.createElement(oe,{onClick:function(){n.select({id:n.post._id})}},n.post.title),r.a.createElement(se,{mode:"card",source:n.post.source,author:n.post.author,buttons:{star:t,read:a},read:n.post.read,star:n.post.star,update:n.update,id:n.post._id}),r.a.createElement(ie,{onClick:function(){n.select({id:n.post._id})}},e),r.a.createElement(de,{timestamp:n.post.published,readingTime:n.post.readTime}))},pe=function(n){return r.a.createElement(Wn,null,n.posts.map(function(e){var t=function(n){return r.a.createElement(me,{key:n.post._id,post:n.post,update:n.update,select:n.select})}({post:e,update:n.update,select:n.selectPost});return function(n){return n.filter?n.show?n.pSource===n.filter:n.pRead===n.show&&n.pSource===n.filter:!!n.show||n.pRead===n.show}({show:n.showRead,filter:n.filter,pRead:e.read,pSource:e.sourceId})?t:null}))};function fe(){var n=Object(g.a)(["\n  border-bottom: 1px solid ",";\n  padding-bottom: 1rem;\n  margin-bottom: 1rem;\n"]);return fe=function(){return n},n}function he(){var n=Object(g.a)(["\n  cursor: pointer;\n  font-weight: 500;\n  margin: 0;\n  line-height: 1.6rem;\n  font-size: 1.3rem;\n  @media (max-width: 499px) {\n    font-size: 1.5rem;\n    line-height: 1.8rem;\n  }\n"]);return he=function(){return n},n}function ge(){var n=Object(g.a)(["\n  font-family: ",";\n  padding: 0 20px;\n  padding-bottom: 1rem;\n  margin: 0 auto;\n  margin-top: 3rem;\n  max-width: 1000px;\n  display: flex;\n  flex-direction: column;\n"]);return ge=function(){return n},n}var be=b.a.article(ge(),"Alegreya"),xe=b.a.h3(he()),we=b.a.main(fe(),"#aaaaaa"),ve=t(38),Ee=t.n(ve),ye=function(n){var e=n.post.star?r.a.createElement(Jn.a,null):r.a.createElement(Jn.b,null),t=r.a.createElement(En.h,null);return r.a.createElement(be,null,r.a.createElement(xe,{onClick:function(){n.post.url}},n.post.title),r.a.createElement(se,{mode:"show",source:n.post.source,author:n.post.author,buttons:{star:e,trash:t},read:n.post.read,star:n.post.star,update:n.update,id:n.post._id}),r.a.createElement(we,{className:Ee.a.text,dangerouslySetInnerHTML:{__html:n.post.text}}),r.a.createElement(de,{timestamp:n.post.published,readingTime:n.post.readTime}))};function Oe(){var n=Object(g.a)(["\n  color: red;\n  font-family: ",";\n  font-size: 0.8rem;\n  font-weight: 300;\n  /* background-color: ","; */\n"]);return Oe=function(){return n},n}function ke(){var n=Object(g.a)(["\n  input {\n    font-weight: 300;\n    background: none;\n    border: none;\n    background-color: ",";\n    font-family: ",";\n    border-radius: 2px;\n    margin: 0.2rem auto;\n    padding: 10px;\n    font-size: 1rem;\n    letter-spacing: 1px;\n    outline: none;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n\n    &:hover {\n      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),\n        0 10px 10px rgba(0, 0, 0, 0.22);\n      background-color: ",";\n    }\n  }\n"]);return ke=function(){return n},n}function je(){var n=Object(g.a)(["\n  animation: 0.3s ease-out 0s 1 ",";\n  border-radius: 0 0 2px 2px;\n\n  /* @media (max-width: 599px) {\n    padding: {\n      top: 20px;\n      left: 10px;\n      right: 10px;\n      bottom: 10px;\n    }\n\n    background-color: none;\n  } */\n\n  width: 75%;\n  max-width: 750px;\n  /* margin: 0.2rem auto; */\n  margin: 0 auto;\n  margin-top: -0.2rem;\n  margin-bottom: 1rem;\n  background-color: ",";\n  color: ",';\n\n  padding: 1rem;\n\n  form {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n    label {\n      width: 100%;\n      display: grid;\n      grid-template-columns: 1fr 4fr;\n      grid-template-areas: "title" "field";\n      font-family: ',';\n\n      margin: 5px 0;\n\n      span {\n        font-size: 1rem;\n        padding-top: 5px;\n      }\n\n      input {\n        grid-area: "field";\n        border: none;\n        font-family: ',";\n        font-size: 1rem;\n        font-weight: 300;\n        background-color: ",";\n        padding: 5px 3px;\n        border-radius: 1px;\n      }\n    }\n  }\n"]);return je=function(){return n},n}function Se(){var n=Object(g.a)(['\n  @media (max-width: 599px) {\n    display: none;\n  }\n\n  margin: 0;\n  letter-spacing: 0.05rem;\n  font-family: "Open Sans";\n  white-space: pre-wrap;\n  font-weight: 400;\n  font-size: 0.7rem;\n']);return Se=function(){return n},n}function ze(){var n=Object(g.a)(["\n  @media (max-width: 599px) {\n    margin-top: 0.7rem;\n    font-size: 1rem;\n  }\n\n  margin: 0;\n  font-weight: 700;\n  font-size: 1.2rem;\n  letter-spacing: 0.07rem;\n"]);return ze=function(){return n},n}function _e(){var n=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: center;\n"]);return _e=function(){return n},n}function Ue(){var n=Object(g.a)(["\n  z-index: 100;\n  border-radius: 1px;\n  display: flex;\n  border-radius: 1px;\n  width: 80%;\n  max-width: 800px;\n  margin: 0.2rem auto;\n  padding: 0.7rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  background-color: ",";\n  border-bottom: 3px solid ",";\n\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n\n  &:hover {\n    /* transform: scale(1.02); */\n    /* transform: scale(1.05); */\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n\n    border-bottom: 3px solid ",";\n  }\n  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  } */\n"]);return Ue=function(){return n},n}function Te(){var n=Object(g.a)(["\n  animation: 0.3s ease-out 0s 1 ",";\n  display: flex;\n  flex-direction: column;\n"]);return Te=function(){return n},n}var Pe=b.a.section(Te(),Tn),Re=b.a.div(Ue(),"#c4c4c4","#c4c4c4",x),Ae=b.a.section(_e()),Ce=b.a.div(ze()),Fe=b.a.div(Se()),De=b.a.div(je(),Pn,x,"#d3d3d3","Open Sans","Open Sans","#d3d3d3"),Me=b.a.button(ke(),"#d3d3d3","Alegreya","#aaaaaa"),Ie=b.a.div(Oe(),"Open Sans","#d3d3d3"),Le=function(n){var e={_id:"",name:"",url:"",home:""};n.source&&(e=n.source);var t=Object(a.useState)(e.name),o=Object(d.a)(t,2),i=o[0],c=o[1],u=Object(a.useState)(e.url),l=Object(d.a)(u,2),s=l[0],m=l[1],p=Object(a.useState)(e.home),f=Object(d.a)(p,2),h=f[0],g=f[1],b={name:"",url:"",home:""},x=function(n){var e=new RegExp("^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$","gm");switch(n.field){case"name":return""!==n.value?(b.name="",!0):(b.name="Name is not provided",!1);case"url":return""!==n.value?e.test(n.value)?(b.url="",!0):(b.url="The URL is wrong",!1):(b.name="URL is not provided",!1);default:return""!==n.value?e.test(n.value)?(b.home="",!0):(b.home="The homepage is wrong",!1):(b.home="Homepage is not provided",!1)}},w=function(n){switch(n.target.name){case"name":c(n.target.value);break;case"url":m(n.target.value);break;default:g(n.target.value)}};return r.a.createElement(De,null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a=x({value:i,field:"name",type:"text"})&&x({value:s,field:"url",type:"url"})&&x({value:h,field:"home",type:"url"}),r={_id:e._id?e._id:"",name:i,url:s,home:h};a&&r!==e&&n.submit(r)}},r.a.createElement("label",null,r.a.createElement("span",null,"Source"),r.a.createElement("input",{type:"text",name:"name",value:i,onChange:w})),r.a.createElement("label",null,r.a.createElement("span",null,"URL"),r.a.createElement("input",{type:"url",name:"url",value:s,onChange:w})),r.a.createElement("label",null,r.a.createElement("span",null,"Homepage"),r.a.createElement("input",{type:"url",name:"home",value:h,onChange:w})),b.name?r.a.createElement(Ie,null,"- ",b.name):null,b.url?r.a.createElement(Ie,null,"- ",b.url):null,b.home?r.a.createElement(Ie,null,"- ",b.home):null,r.a.createElement(Me,null,r.a.createElement("input",{type:"button",value:"Submit",id:"submit_button"}))))},Ne=function(n){var e=function(e){n.opened===e.id?n.setOpen(""):n.setOpen(e.id)},t=n.opened===n.source._id?r.a.createElement(Le,{source:n.source,submit:e}):null;return r.a.createElement(Pe,null,r.a.createElement(Re,{onClick:function(){return e({id:n.source._id})}},r.a.createElement(Ae,null,r.a.createElement(Ce,null," ",n.source.name),r.a.createElement(Fe,null,n.source.url)),r.a.createElement(le,null,r.a.createElement(Qn,{update:e,mode:"edit",id:n.source._id,status:n.opened===n.source._id},r.a.createElement(En.c,null)),r.a.createElement(Qn,{update:e,mode:"delete",id:n.source._id,status:!1},r.a.createElement(En.h,null)))),t)};function We(){var n=Object(g.a)(["\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    transition: 0.3s;\n\n  @media (max-width: 599px) {\n  }\n\n  @media (min-width: 600px) and (max-width: 949px) {\n  }\n\n  @media (min-width: 950px) and (max-width: 1099px) {\n  }\n\n  @media (min-width: 1100px) {\n  }\n"]);return We=function(){return n},n}function He(){var n=Object(g.a)(["\n  padding: 0 20px;\n  margin: 0 auto;\n  margin-top: 2.3rem;\n"]);return He=function(){return n},n}var qe=b.a.main(He()),Je=Object(b.a)(qe)(We()),Ye=function(n){var e=r.a.useState(""),t=Object(d.a)(e,2),a=t[0],o=t[1];return r.a.createElement(Je,null,n.sources.map(function(n){return r.a.createElement(Ne,{key:n._id,source:n,opened:a,setOpen:o})}))};function Be(){var n=Object(g.a)(["\n  margin: 0 auto;\n  padding: 0;\n  width: 99vw;\n  /* height: 97vh; */\n  font-family: ",";\n  background-color: #d3d3d3 !important;\n  color: #444444;\n\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  -ms-word-break: break-all;\n  /* This is the dangerous one in WebKit, as it breaks things wherever */\n  word-break: break-all;\n  /* Instead use this non-standard one: */\n  word-break: break-word;\n\n  /* Adds a hyphen where the word breaks, if supported (No Blink) */\n  -ms-hyphens: auto;\n  -moz-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n"]);return Be=function(){return n},n}var Ke=b.a.div(Be(),"Alegreya");function Xe(){var n=Object(g.a)([""]);return Xe=function(){return n},n}var $e=b.a.button(Xe()),Ge=Object(l.b)(function(n){return{}},{checkUser:h})(function(n){return r.a.createElement(Ke,null,r.a.createElement($e,{onClick:function(){return function(){var e={action:["user","signOff"],fields:n.currentUser};n.checkUser(e).then(function(e){e.payload.data.status&&n.signOff()})}()}},"Profile"))}),Qe={_id:"",source:"",sourceId:"",title:"",url:"",author:"",published:new Date,parsed:new Date,text:"",readTime:0,pages:0,read:!1,star:!1},Ve=function(n){function e(){var n,t;Object(Z.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(en.a)(this,(n=Object(tn.a)(e)).call.apply(n,[this].concat(r)))).state={loading:!0,module:"posts",showRead:!1,showFilter:!1,filterId:"",sources:[],posts:[],message:"",showPost:Qe},t.loadPosts=function(n){t.props.loadPosts(n).then(function(n){n.payload.data.message?t.setState({posts:[],message:n.payload.data.message,loading:!1}):t.setState({posts:n.payload.data,loading:!1})})},t.loadSources=function(n){t.props.loadSources(n).then(function(n){n.payload.data.message?t.setState({sources:[],message:n.payload.data.message,loading:!1}):t.setState({sources:n.payload.data,loading:!1})})},t.fetchPostsSources=function(){var n={token:t.props.currentUser.token,action:["post","fetch"]},e={token:t.props.currentUser.token,action:["source","fetch"]};t.loadPosts(n),t.loadSources(e)},t.showModule=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"posts";t.setState({module:n})},t.toggleShowRead=function(){t.setState({showRead:!t.state.showRead})},t.toggleShowFilter=function(){t.setState({showFilter:!t.state.showFilter})},t.chooseFilter=function(n){t.toggleShowFilter(),"clear"===n?t.setState({filterId:""}):t.setState({filterId:n})},t.handleRefreshClick=function(){},t.selectPostToShow=function(n){t.props.selectPost(n.id).then(function(n){t.showModule("post"),t.setState({showPost:n.payload.data})})},t.updateStatePosts=function(n){var e,a=t.state.posts;return a.filter(function(e){return e._id===n.id}).forEach(function(t){"read"===n.field?(e=t.read,t.read=!t.read):(e=t.star,t.star=!t.star)}),t.setState({posts:a}),e},t.updatePostAction=function(n){var e=t.updateStatePosts({id:n.id,field:n.field}),a={};a["".concat(n.field)]=!e;var r={action:["post","update"],id:n.id,fields:a};t.props.updatePost(r).then(function(n){t.setState({message:n.statusText})})},t}return Object(an.a)(e,n),Object(nn.a)(e,[{key:"componentDidMount",value:function(){this.fetchPostsSources(),this.refresher=setInterval(this.fetchPostsSources,1e4),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refresher)}},{key:"render",value:function(){var n,e=r.a.createElement(Fn,{read:this.state.showRead,toggleRead:this.toggleShowRead,refresh:this.handleRefreshClick,moduleToggle:this.showModule,mode:this.state.module,showFilter:""!==this.state.filterId,toggleFilter:this.toggleShowFilter}),t=this.state.showFilter&&this.state.sources?r.a.createElement(Dn,{toggle:this.toggleShowFilter,list:this.state.sources,choose:this.chooseFilter,id:this.state.filterId}):null;this.state.message||(n=this.state.loading?r.a.createElement(qn,null):r.a.createElement(pe,{showRead:this.state.showRead,posts:this.state.posts,selectPost:this.selectPostToShow,update:this.updatePostAction,filter:this.state.filterId}));var a=r.a.createElement(ye,{post:this.state.showPost,update:this.updatePostAction}),o=r.a.createElement(Ye,{sources:this.state.sources}),i=r.a.createElement(Ge,{currentUser:this.props.currentUser,signOff:this.props.signOff});return r.a.createElement(Ke,{"data-test":"app"},r.a.createElement(vn,null),e,t,"posts"===this.state.module?n:null,"post"===this.state.module?a:null,"sources"===this.state.module?o:null,"profile"===this.state.module?i:null)}}]),e}(r.a.Component),Ze=Object(l.b)(function(n){return{user:n.user}},{loadPosts:function(n){var e=f.a.post("/",{query:n}).then(function(n){return n}).catch(function(n){return n});return{type:rn,payload:e}},updatePost:function(n){var e=f.a.post("/",{query:n}).then(function(n){return n}).catch(function(n){return n});return{type:on,payload:e}},selectPost:function(n){var e=f.a.get("/post/".concat(n)).then(function(n){return n}).catch(function(n){return n});return{type:cn,payload:e}},loadSources:function(n){var e=f.a.post("/",{query:n}).then(function(n){return n}).catch(function(n){return n});return{type:un,payload:e}},checkUser:h})(Ve),nt=Object(s.b)(function(n){var e=r.a.useState(""),t=Object(d.a)(e,2),a=t[0],o=t[1],i=r.a.useState(""),c=Object(d.a)(i,2),u=c[0],l=c[1],s=r.a.useState(!1),m=Object(d.a)(s,2),p=m[0],f=m[1],h=n.cookies;return p?r.a.createElement(Ze,{currentUser:{email:a,token:u},signOff:function(){h.set("email","",{path:"/"}),h.set("token","",{path:"/"}),o(""),l(""),f(!1)}}):r.a.createElement(V,{cookies:n.cookies,toggleAuth:function(){f(!p)},setUserEmail:o,setUserToken:l})}),et=(t(72),t(11)),tt=t(39),at=t(40),rt=t(41),ot=t.n(rt),it=t(9),ct={token:"",action:["",""]};var ut={token:"",action:["",""]};var lt={user:{name:"",password:"",email:""},currentUser:{email:"",token:""}};f.a.defaults.baseURL="".concat("http://localhost:8080","/api"),f.a.defaults.headers.common.Authorization="sdasfAWAFSDSD34t23rSADrqrg34qew54675hSDFADF";var st=Object(et.combineReducers)({posts:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case rn:return Object(it.a)({},e.payload);default:return n}},sources:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case un:return Object(it.a)({},e.payload);default:return n}},user:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(it.a)({},e.payload);default:return n}}});var dt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function mt(n,e){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}u.a.load({google:{families:["Alegreya:400,400i,500,500i,700,700i:cyrillic,cyrillic-ext,latin-ext","Open+Sans:300,300i,400","Roboto+Mono:300"]}});var pt=function(){var n=[ot.a,at.logger],e=et.applyMiddleware.apply(void 0,n);return Object(et.createStore)(st,Object(tt.composeWithDevTools)(e))}();i.a.render(r.a.createElement(s.a,null,r.a.createElement(l.a,{store:pt},r.a.createElement(nt,null))),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");dt?(function(n,e){fetch(n).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):mt(n,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):mt(e,n)})}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.c70523ac.chunk.js.map