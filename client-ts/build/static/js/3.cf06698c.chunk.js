(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{103:function(e,t,a){"use strict";a.r(t);var n=a(96),o=a(81),s=a(82),r=a(97),c=a(83),u=a(98),l=a(0),i=a.n(l),d=a(10),p=a(8),m=a(5),f=a.n(m),h=function(e){return f.a.post("/",{query:e}).then(function(e){return e}).catch(function(e){return e})};function _(e){var t={token:e.token,action:["post","show"],id:e.id},a=h(t).then(function(e){return e.data.post||{}}).catch(function(e){return e});return e==={token:"",id:""}?{type:"",payload:a}:{type:p.b,payload:a}}var S=a(71),g=a(17),w=a(67),E=a(84),b=a.n(E),v=function(){return i.a.createElement("h1",{className:b.a.header},"The Newsletter")},y=a(72),P=a(85),k=a.n(P),I=function(e){return i.a.createElement("h3",{className:k.a.title},Object(y.a)(e.date))},C=a(86),M=a.n(C),N=function(){return i.a.createElement("header",{className:M.a.header},i.a.createElement(v,null),i.a.createElement(I,{date:new Date}))},O=a(68),R=a(11),L=a(87),F=a.n(L),U=Object(d.b)(function(e){return{thisUser:e.currentUser,module:e.module,showRead:e.showRead,showFilter:e.showFilter}},{apiRequest:g.a,showModule:w.b,setMessage:w.a,toggleShowRead:function(e){return{type:p.d,payload:!e}},selectPost:_,toggleShowFilter:w.c})(function(e){var t,a=i.a.useState(!1),n=Object(R.a)(a,2),o=n[0],s=n[1],r=function(t){if("BACK"===t.child||"HOME"===t.child){switch(t.child){case"BACK":e.selectPost({token:"",id:""})}e.showModule("posts")}else"SOURCES"===t.child?e.showModule("sources"):"profile"===e.mode?e.showModule("profile"):"refresh"===e.mode?function(){s(!0);var t={token:e.thisUser.token,action:["post","refresh"]};e.apiRequest(t).then(function(t){s(!1),e.setMessage(t.payload.data.message)})}():"showRead"===e.mode?e.toggleShowRead(e.showRead):"filter"===e.mode?e.toggleShowFilter(e.showFilter):t.func()};t="refresh"===e.mode?o?F.a.smartRotate:F.a.smartRefresh:e.accent?F.a.smartAccented:F.a.smart;var c=e.function?e.function:null;return i.a.createElement("button",{className:t,"aria-label":e.mode,onClick:function(){return r({mode:e.mode,child:e.children,func:c})}},e.children)}),A=a(88),T=a.n(A),j=function(e){return i.a.createElement(U,{accent:e.accent,mode:e.mode,function:e.function},e.element)},B=Object(d.b)(function(e){return{module:e.module,showRead:e.showRead,filterSourceId:e.filterSourceId}})(function(e){var t=j({element:"post"===e.module?"BACK":"HOME",mode:"home",accent:!1}),a=j({element:"SOURCES",mode:"sources",accent:!1}),n="posts"===e.module?j({element:e.showRead?i.a.createElement(O.d,null):i.a.createElement(O.e,null),mode:"showRead",accent:e.showRead}):null,o="posts"===e.module?j({element:i.a.createElement(O.g,null),mode:"refresh",accent:!1}):null,s="posts"===e.module?j({element:i.a.createElement(O.f,null),mode:"filter",accent:""!==e.filterSourceId}):null,r=j({element:i.a.createElement(O.i,null),mode:"profile",accent:!1});return i.a.createElement("nav",{className:T.a.menu},t,a,n,s,o,r)}),D=a(21),x=a(76),J=a(73),H=a(75),q=a(69),z=a.n(q),K=Object(d.b)(function(e){return{thisUser:e.currentUser}},{selectPost:_,showModule:w.b})(function(e){var t="".concat(e.post.text.replace(/<(?:.|\n)*?>/gm," "),"..."),a=e.post.star?i.a.createElement(x.a,null):i.a.createElement(x.b,null),n=e.post.read?i.a.createElement(O.b,null):i.a.createElement(O.a,null),o=function(){e.selectPost({token:e.thisUser.token,id:e.post._id}),e.showModule("post")};return i.a.createElement("article",{className:z.a.card},i.a.createElement("h3",{className:z.a.title,onClick:function(){o()}},e.post.title),i.a.createElement(J.a,{mode:"card",source:e.post.source,author:e.post.author,buttons:{star:a,read:n},read:e.post.read,star:e.post.star,update:e.update,id:e.post._id}),i.a.createElement("main",{className:z.a.text,onClick:function(){o()}},t),i.a.createElement(H.a,{timestamp:e.post.published,readingTime:e.post.readTime}))}),W=a(90),G=a.n(W),V=i.a.lazy(function(){return a.e(7).then(a.bind(null,102))}),Q=Object(d.b)(function(e){return{showRead:e.showRead,sources:e.sources,filterSourceId:e.filterSourceId,showFilter:e.showFilter}},{})(function(e){var t=e.showFilter&&e.sources?i.a.createElement(l.Suspense,{fallback:i.a.createElement(D.a,null)},i.a.createElement(V,null)):null;return console.log(e.posts),i.a.createElement("div",{className:G.a.list},t,e.posts.map(function(t){var a=i.a.createElement(K,{key:t._id,post:t,update:e.update});return e.filterSourceId?e.showRead?t.sourceId===e.filterSourceId?a:null:t.read===e.showRead&&t.sourceId===e.filterSourceId?a:null:e.showRead?a:t.read===e.showRead?a:null}))}),X=(a(32),i.a.lazy(function(){return a.e(11).then(a.bind(null,99))})),Y=i.a.lazy(function(){return a.e(8).then(a.bind(null,100))}),Z=i.a.lazy(function(){return a.e(5).then(a.bind(null,105))}),$=i.a.lazy(function(){return a.e(9).then(a.bind(null,101))}),ee=i.a.lazy(function(){return a.e(10).then(a.bind(null,77))}),te=function(e){function t(){var e,a;Object(o.a)(this,t);for(var s=arguments.length,u=new Array(s),d=0;d<s;d++)u[d]=arguments[d];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(u)))).state={loading:!0,sources:[],posts:[],addSource:!1},a.fetchPostsSources=function(){a.props.loadPosts(a.props.thisUser.token).then(function(e){a.setState({posts:e.payload.data,loading:!1}),localStorage.setItem("posts",JSON.stringify(e.payload.data))}),a.props.loadSources(a.props.thisUser.token).then(function(e){a.setState({sources:e.payload.data,loading:!1})})},a.updateStatePosts=function(e){var t,n=a.state.posts;n.filter(function(t){return t._id===e.id}).forEach(function(a){"read"===e.field?(t=a.read,a.read=!a.read):(t=a.star,a.star=!a.star)});var o=n.map(function(t){var a=t;return t._id===e.id&&("read"===e.field?a.read=!t.read:a.star=!t.star),a});return a.setState({posts:o}),localStorage.setItem("posts",JSON.stringify(o)),t},a.updatePostAction=function(e){var t=a.updateStatePosts({id:e.id,field:e.field}),n={};n["".concat(e.field)]=!t;var o={token:a.props.thisUser.token,id:e.id,fields:n};a.props.updatePost(o).then(function(e){var t=e.payload.data.message;a.props.setMessage(t)})},a.updateSourceInState=function(e){var t=a.state.sources;t.filter(function(t){return t._id===e._id}).forEach(function(t){t.name=e.name,t.url=e.url,t.homepage=e.homepage}),a.setState({source:t})},a.updateSourceAction=function(e){var t={token:a.props.thisUser.token,action:["source","update"],fields:e};a.props.apiRequest(t).then(function(t){var n=t.payload.data.message;a.props.setMessage(n),a.updateSourceInState(e)})},a.deleteAction=function(e){},a.createSource=function(e){var t={token:a.props.thisUser.token,action:["source","create"],fields:e},o=e;o._id="012345";var s=[o],r=[].concat(Object(n.a)(a.state.sources),s);a.props.apiRequest(t).then(function(e){var t=e.payload.data.message;a.props.setMessage(t),a.setState({addSource:!1,sources:r})})},a.toggleShowAddSource=function(){a.setState({addSource:!a.state.addSource})},a.addSource=i.a.createElement(l.Suspense,{fallback:i.a.createElement(D.a,null)},i.a.createElement(ee,{submit:a.createSource,close:a.toggleShowAddSource})),a.postShow=function(e){return i.a.createElement(l.Suspense,{fallback:i.a.createElement(D.a,null)},i.a.createElement(Y,{post:e,update:a.updatePostAction}))},a.checkIfSourcesEmpty=function(){return a.props.sources===[]||0===a.props.sources.length},a.checkIfPostsSourcesEmpty=function(){var e;return!a.checkIfSourcesEmpty()||a.state.posts!==[]&&0!==a.state.posts.length?a.state.posts===[]||0===a.state.posts.length?e="The are no posts for now.":a.getLocalPosts().length>0&&(e=""):e="There are no sources configured.",e},a.getLocalPosts=function(){var e=localStorage.getItem("posts"),t=JSON.parse(e)?JSON.parse(e):[];return 0===t.length?t="The are no posts for now.":t.length>0&&a.state.loading&&a.setState({loading:!1}),t},a.sourcesListComponent=function(){return i.a.createElement(l.Suspense,{fallback:i.a.createElement(D.a,null)},i.a.createElement(Z,{sources:a.state.sources,submit:a.createSource,update:a.updateSourceAction}))},a.popUpMessageComponent=function(){return i.a.createElement("section",{className:"message"},a.props.message)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=localStorage.getItem("posts"),t=JSON.parse(e)?JSON.parse(e):[];this.setState({posts:t})}},{key:"componentDidMount",value:function(){this.fetchPostsSources(),this.refresher=setInterval(this.fetchPostsSources,1e4),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){clearInterval(this.refresher)}},{key:"render",value:function(){var e=this;this.props.message&&setTimeout(function(){return e.props.setMessage("")},3e3);var t,a,n,o=this.state.loading?null:i.a.createElement(Q,{posts:this.state.posts,update:this.updatePostAction});return this.checkIfSourcesEmpty()?(a={message:"The are no sources for now.",function:this.toggleShowAddSource,children:i.a.createElement("button",{className:"button","aria-label":"Add source"},"Add source")},t=i.a.createElement(l.Suspense,{fallback:i.a.createElement(D.a,null)},i.a.createElement(X,a))):t=this.sourcesListComponent(),i.a.createElement("main",{"data-test":"app"},i.a.createElement(N,null),i.a.createElement(B,null),this.state.loading?i.a.createElement(D.a,null):null,this.props.message?this.popUpMessageComponent():null,"posts"===this.props.module?o:null,"_id"in this.props.showPost?this.postShow(this.props.showPost):null,"sources"===this.props.module?t:null,this.state.addSource?this.addSource:null,"profile"===this.props.module?(n=this.props.toggle,i.a.createElement(l.Suspense,{fallback:i.a.createElement(D.a,null)},i.a.createElement($,{toggle:n}))):null)}}]),t}(i.a.Component);t.default=Object(d.b)(function(e){return{sources:e.sources,thisUser:e.currentUser,module:e.module,message:e.message,showPost:e.showPost}},{loadPosts:function(e){var t={token:e,action:["post","fetch"]},a=f.a.post("/",{query:t}).then(function(e){return e}).catch(function(e){return e});return{type:p.a,payload:a}},updatePost:function(e){var t={token:e.token,action:["post","update"],id:e.id,fields:e.fields},a=f.a.post("/",{query:t}).then(function(e){return e}).catch(function(e){return e});return{type:p.e,payload:a}},loadSources:S.a,apiRequest:g.a,setMessage:w.a})(te)},67:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return s}),a.d(t,"c",function(){return r});var n=a(15);function o(e){return{type:n.b,payload:e}}function s(e){return{type:n.a,payload:e}}function r(e){return{type:n.c,payload:!e}}},69:function(e,t,a){e.exports={card:"PostCard_card__2J-H1",text:"PostCard_text__1jLmP",title:"PostCard_title__3Vi12",line:"PostCard_line__1mgL2",footer:"PostCard_footer__1aTwF",wrapper:"PostCard_wrapper__2E9fT",sub:"PostCard_sub__2hKdg",scaleUp:"PostCard_scaleUp__3oKww",slideInFromTop:"PostCard_slideInFromTop__2REAI",slideInFromLeft:"PostCard_slideInFromLeft__FabEc",growLarge:"PostCard_growLarge__g5rIF",slideDown:"PostCard_slideDown__XTYyj",rotate:"PostCard_rotate__2m0Yg",disappear:"PostCard_disappear__37Is8"}},71:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return c});var n=a(16),o=a(5),s=a.n(o);function r(e){var t={token:e,action:["source","fetch"]},a=s.a.post("/",{query:t}).then(function(e){return e}).catch(function(e){return e});return{type:n.a,payload:a}}function c(e){return{type:n.b,payload:e}}},72:function(e,t,a){"use strict";var n={1:"Jan",2:"Feb",3:"Mar",4:"Apr",5:"May",6:"Jun",7:"Jul",8:"Aug",9:"Sep",10:"Oct",11:"Nov",12:"Dec"},o={1:"Sun",2:"Mon",3:"Tue",4:"Wed",5:"Thu",6:"Fri",7:"Sat"};t.a=function(e){var t=new Date;Object.keys(e).length||(t=new Date(e));var a="".concat(t.getHours(),":").concat(t.getMinutes()," am");return t.getHours()>12&&(a="".concat(t.getHours()-12,":").concat(t.getMinutes()," pm")),"".concat(o[t.getDay()+1]," ").concat(t.getDate()," ").concat(n[t.getMonth()+1]," at ").concat(a)}},73:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(74),r=a(69),c=a.n(r);t.a=function(e){var t="show"===e.mode?"".concat(e.author," @ ").concat(e.source):"@".concat(e.source);return o.a.createElement("section",{className:c.a.line,"data-test":"component__post-line"},o.a.createElement("div",{className:c.a.wrapper},t),o.a.createElement("div",{className:c.a.wrapper},o.a.createElement(s.a,{update:e.update,id:e.id,mode:"star",status:e.star,"data-test":"component__post-line--button"},e.buttons.star),o.a.createElement(s.a,{update:e.update,id:e.id,mode:"read",status:e.read,"data-test":"component__post-line--button"},e.buttons.read)))}},74:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(89),r=a.n(s);t.a=function(e){var t=e.status?o.a.createElement("span",{className:r.a.onStatus},e.children):o.a.createElement("span",{className:r.a.offStatus},e.children);return o.a.createElement("button",{className:r.a.post,"aria-label":e.mode,onClick:function(){return e.update({field:e.mode,id:e.id})}},t)}},75:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(72),r=a(69),c=a.n(r);t.a=function(e){var t="~".concat(e.readingTime," mins"),a=e.parsed?o.a.createElement("div",{className:c.a.wrapper},o.a.createElement("span",{className:c.a.span},"parsed: "),Object(s.a)(e.parsed)):null;return o.a.createElement("footer",{className:c.a.footer},o.a.createElement("div",{className:c.a.wrapper},o.a.createElement("span",{className:c.a.span},"posted: "),Object(s.a)(e.timestamp)),a,o.a.createElement("div",{className:c.a.wrapper},t))}},84:function(e,t,a){e.exports={header:"Title_header__a8239"}},85:function(e,t,a){e.exports={title:"Timestamp_title__1oVzj"}},86:function(e,t,a){e.exports={header:"Header_header__4gWOG"}},87:function(e,t,a){e.exports={smart:"SmartButton_smart__2LjGI",smartAccented:"SmartButton_smartAccented__3QZCJ",smartRefresh:"SmartButton_smartRefresh__mmdzI",smartRotate:"SmartButton_smartRotate__2lr2t",rotate:"SmartButton_rotate__2cqkO",scaleUp:"SmartButton_scaleUp__26vHE",slideInFromTop:"SmartButton_slideInFromTop__1MliQ",slideInFromLeft:"SmartButton_slideInFromLeft__3Xj3w",growLarge:"SmartButton_growLarge__3AZ2_",slideDown:"SmartButton_slideDown__37h5C",disappear:"SmartButton_disappear__3verO"}},88:function(e,t,a){e.exports={menu:"SmartMenu_menu__2dsRy",slideDown:"SmartMenu_slideDown__2HD0v",scaleUp:"SmartMenu_scaleUp__2ghSY",slideInFromTop:"SmartMenu_slideInFromTop__1iIxf",slideInFromLeft:"SmartMenu_slideInFromLeft__3WgAG",growLarge:"SmartMenu_growLarge__3i7pH",rotate:"SmartMenu_rotate__caE1e",disappear:"SmartMenu_disappear__3UryS"}},89:function(e,t,a){e.exports={post:"PostButton_post__3eHpg",status:"PostButton_status__3B7IS",onStatus:"PostButton_onStatus__3XZOD",offStatus:"PostButton_offStatus__3nzNP"}},90:function(e,t,a){e.exports={button:"PostCardList_button__1iLb_",modal:"PostCardList_modal__2ji0D",central:"PostCardList_central__2rVGP",display:"PostCardList_display__3V18P",list:"PostCardList_list__2tmb4",message:"PostCardList_message__2tQPO"}}}]);
//# sourceMappingURL=3.cf06698c.chunk.js.map