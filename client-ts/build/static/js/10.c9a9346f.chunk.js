(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{72:function(e,a,t){e.exports={add:"SourceEditAdd_add__38_Hh",slideDown:"SourceEditAdd_slideDown__345va",buttonsWrapper:"SourceEditAdd_buttonsWrapper__2-dAQ",cancel:"SourceEditAdd_cancel__rzETj",edit:"SourceEditAdd_edit__2hFrs",submit:"SourceEditAdd_submit__1kIQR",error:"SourceEditAdd_error__EAwLA",scaleUp:"SourceEditAdd_scaleUp__3oZ3e",slideInFromTop:"SourceEditAdd_slideInFromTop__1814x",slideInFromLeft:"SourceEditAdd_slideInFromLeft__21_vy",growLarge:"SourceEditAdd_growLarge__6NFqd",rotate:"SourceEditAdd_rotate__z5WTt",disappear:"SourceEditAdd_disappear__2Lq0G"}},79:function(e,a,t){"use strict";t.r(a);var r=t(11),n=t(0),l=t.n(n),u=t(72),o=t.n(u);a.default=function(e){var a={_id:"",name:"",url:"",home:""};e.source&&(a=e.source);var t=Object(n.useState)(a.name),u=Object(r.a)(t,2),c=u[0],d=u[1],s=Object(n.useState)(a.url),i=Object(r.a)(s,2),m=i[0],_=i[1],p=Object(n.useState)(a.home),E=Object(r.a)(p,2),b=E[0],v=E[1],h={name:"",url:"",home:""},w=function(){e.close&&e.close()},S=function(e){var a=new RegExp("^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$","gm");switch(e.field){case"name":return""!==e.value?(h.name="",!0):(h.name="Name is not provided",!1);case"url":return""!==e.value?a.test(e.value)?(h.url="",!0):(h.url="The URL is wrong",!1):(h.name="URL is not provided",!1);default:return""!==e.value?a.test(e.value)?(h.home="",!0):(h.home="The homepage is wrong",!1):(h.home="Homepage is not provided",!1)}},f=function(e){switch(e.target.name){case"name":d(e.target.value);break;case"url":_(e.target.value);break;default:v(e.target.value)}},g=e.source?null:l.a.createElement("button",{className:o.a.cancel,"aria-label":"Cancel",onClick:function(){return w()}},"Cancel"),A=l.a.createElement("form",{onSubmit:function(t){t.preventDefault();var r=S({value:c,field:"name",type:"text"})&&S({value:m,field:"url",type:"url"})&&S({value:b,field:"home",type:"url"}),n={_id:a._id?a._id:"",name:c,url:m,home:b},l={_id:e.source?e.source._id:"",name:e.source?e.source.name:"",url:e.source?e.source.url:"",home:e.source?e.source.home:""};JSON.stringify(n)!==JSON.stringify(l)&&r&&n!==a&&(e.submit(n),w())}},l.a.createElement("label",null,l.a.createElement("span",null,"Source"),l.a.createElement("input",{type:"text",name:"name",value:c,onChange:f})),l.a.createElement("label",null,l.a.createElement("span",null,"URL"),l.a.createElement("input",{type:"url",name:"url",value:m,onChange:f})),l.a.createElement("label",null,l.a.createElement("span",null,"Homepage"),l.a.createElement("input",{type:"url",name:"home",value:b,onChange:f})),h.name?l.a.createElement("div",{className:o.a.error},"- ",h.name):null,h.url?l.a.createElement("div",{className:o.a.error},"- ",h.url):null,h.home?l.a.createElement("div",{className:o.a.error},"- ",h.home):null,l.a.createElement("div",{className:o.a.buttonsWrapper},l.a.createElement("button",{className:o.a.submit,"aria-label":e.source?"Submit":"Add"},l.a.createElement("input",{type:"button",value:e.source?"Submit":"Add",id:"submit_button"})),g));return e.source?l.a.createElement("section",{className:o.a.edit,"data-test":"component__source-edit"},A):l.a.createElement("section",{className:o.a.add,"data-test":"component__source-add"},A)}}}]);
//# sourceMappingURL=10.c9a9346f.chunk.js.map