(window.webpackJsonp=window.webpackJsonp||[]).push([[5,10],{104:function(e,a,t){"use strict";t.r(a);var r=t(5),n=t(0),u=t.n(n),c=t(68),o=t(73),l=t(76),s=t(92),d=t.n(s),i=function(e){var a=function(a){e.opened===a.id?e.setOpen(""):e.setOpen(a.id)},t=e.opened===e.source._id?u.a.createElement(l.default,{source:e.source,submit:function(t){a(t._id),e.update(t)}}):null;return u.a.createElement("section",{className:d.a.source},u.a.createElement("div",{className:d.a.card,onClick:function(){return a({id:e.source._id})}},u.a.createElement("section",{className:d.a.nameWrapper},u.a.createElement("div",{className:d.a.name}," ",e.source.name),u.a.createElement("div",{className:d.a.url},e.source.url)),u.a.createElement("div",{className:d.a.wrapper},u.a.createElement(o.a,{update:a,mode:"edit",id:e.source._id,status:e.opened===e.source._id},u.a.createElement(c.c,null)),u.a.createElement(o.a,{update:a,mode:"delete",id:e.source._id,status:!1},u.a.createElement(c.h,null)))),t)},m=(t(33),t(93)),_=t.n(m),p=u.a.lazy(function(){return Promise.resolve().then(t.bind(null,76))});a.default=function(e){var a=u.a.useState(""),t=Object(r.a)(a,2),c=t[0],o=t[1],l=u.a.useState(!1),s=Object(r.a)(l,2),d=s[0],m=s[1],E=function(){m(!d)},S=u.a.createElement(n.Suspense,{fallback:u.a.createElement("div",null)},u.a.createElement(p,{submit:e.submit,close:E}));return u.a.createElement("main",{className:_.a.list},e.sources.map(function(a){return u.a.createElement(i,{key:a._id,source:a,opened:c,setOpen:o,update:e.update})}),u.a.createElement("section",{className:_.a.addSource},u.a.createElement("button",{className:"button","aria-label":"Add source",onClick:function(){return E()}},"Add source")),d?S:null)}},70:function(e,a,t){e.exports={add:"SourceEditAdd_add__38_Hh",slideDown:"SourceEditAdd_slideDown__345va",buttonsWrapper:"SourceEditAdd_buttonsWrapper__2-dAQ",cancel:"SourceEditAdd_cancel__rzETj",edit:"SourceEditAdd_edit__2hFrs",submit:"SourceEditAdd_submit__1kIQR",error:"SourceEditAdd_error__EAwLA",scaleUp:"SourceEditAdd_scaleUp__3oZ3e",slideInFromTop:"SourceEditAdd_slideInFromTop__1814x",slideInFromLeft:"SourceEditAdd_slideInFromLeft__21_vy",growLarge:"SourceEditAdd_growLarge__6NFqd",rotate:"SourceEditAdd_rotate__z5WTt",disappear:"SourceEditAdd_disappear__2Lq0G"}},76:function(e,a,t){"use strict";t.r(a);var r=t(5),n=t(0),u=t.n(n),c=t(70),o=t.n(c);a.default=function(e){var a={_id:"",name:"",url:"",home:""};e.source&&(a=e.source);var t=Object(n.useState)(a.name),c=Object(r.a)(t,2),l=c[0],s=c[1],d=Object(n.useState)(a.url),i=Object(r.a)(d,2),m=i[0],_=i[1],p=Object(n.useState)(a.home),E=Object(r.a)(p,2),S=E[0],b=E[1],f={name:"",url:"",home:""},v=function(){e.close&&e.close()},h=function(e){var a=new RegExp("^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$","gm");switch(e.field){case"name":return""!==e.value?(f.name="",!0):(f.name="Name is not provided",!1);case"url":return""!==e.value?a.test(e.value)?(f.url="",!0):(f.url="The URL is wrong",!1):(f.name="URL is not provided",!1);default:return""!==e.value?a.test(e.value)?(f.home="",!0):(f.home="The homepage is wrong",!1):(f.home="Homepage is not provided",!1)}},g=function(e){switch(e.target.name){case"name":s(e.target.value);break;case"url":_(e.target.value);break;default:b(e.target.value)}},w=e.source?null:u.a.createElement("button",{className:o.a.cancel,"aria-label":"Cancel",onClick:function(){return v()}},"Cancel"),C=u.a.createElement("form",{onSubmit:function(t){t.preventDefault(),console.log("form clicked");var r=h({value:l,field:"name",type:"text"})&&h({value:m,field:"url",type:"url"})&&h({value:S,field:"home",type:"url"}),n={_id:a._id?a._id:"",name:l,url:m,home:S},u={_id:e.source?e.source._id:"",name:e.source?e.source.name:"",url:e.source?e.source.url:"",home:e.source?e.source.home:""};JSON.stringify(n)!==JSON.stringify(u)&&r&&n!==a&&(e.submit(n),v())}},u.a.createElement("label",null,u.a.createElement("span",null,"Source"),u.a.createElement("input",{type:"text",name:"name",value:l,onChange:g})),u.a.createElement("label",null,u.a.createElement("span",null,"URL"),u.a.createElement("input",{type:"url",name:"url",value:m,onChange:g})),u.a.createElement("label",null,u.a.createElement("span",null,"Homepage"),u.a.createElement("input",{type:"url",name:"home",value:S,onChange:g})),f.name?u.a.createElement("div",{className:o.a.error},"- ",f.name):null,f.url?u.a.createElement("div",{className:o.a.error},"- ",f.url):null,f.home?u.a.createElement("div",{className:o.a.error},"- ",f.home):null,u.a.createElement("div",{className:o.a.buttonsWrapper},u.a.createElement("button",{className:o.a.submit,"aria-label":e.source?"Submit":"Add"},u.a.createElement("input",{type:"button",value:e.source?"Submit":"Add",id:"submit_button"})),w));return e.source?u.a.createElement("section",{className:o.a.edit,"data-test":"component__source-edit"},C):u.a.createElement("section",{className:o.a.add,"data-test":"component__source-add"},C)}},92:function(e,a,t){e.exports={source:"SourceCard_source__3-lc0",scaleUp:"SourceCard_scaleUp__sc-b9",card:"SourceCard_card__2ui6G",nameWrapper:"SourceCard_nameWrapper__2o2X_",name:"SourceCard_name__NoISU",url:"SourceCard_url__yEeJe",wrapper:"SourceCard_wrapper__3DZx1",slideInFromTop:"SourceCard_slideInFromTop__MflUp",slideInFromLeft:"SourceCard_slideInFromLeft__3FOig",growLarge:"SourceCard_growLarge__2IRjl",slideDown:"SourceCard_slideDown__Rubc3",rotate:"SourceCard_rotate__2Wevz",disappear:"SourceCard_disappear__2Rn_A"}},93:function(e,a,t){e.exports={button:"SourceCardList_button__1XH4y",modal:"SourceCardList_modal__14_ZD",central:"SourceCardList_central__EgLtY",display:"SourceCardList_display__2-IZR",list:"SourceCardList_list__IrxFp",message:"SourceCardList_message__3u3_X",addSource:"SourceCardList_addSource__1se4s"}}}]);
//# sourceMappingURL=5.f0a8f7f2.chunk.js.map