(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],u=0,_=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&_.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(_.length)_.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var o=n[r];0!==s[o]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({"about~news":"about~news",about:"about",news:"news"}[t]||t)+"."+{"about~news":"0c143e3e",about:"dacd877f",news:"745ea431","chunk-2d0b5e07":"7b073f65","chunk-2d207f82":"e9de2272","chunk-2d216823":"28180413","chunk-2d228fd9":"f45116fd"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,news:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({"about~news":"about~news",about:"about",news:"news"}[t]||t)+"."+{"about~news":"31d6cfe0",about:"713c4419",news:"7bdcd44c","chunk-2d0b5e07":"31d6cfe0","chunk-2d207f82":"31d6cfe0","chunk-2d216823":"31d6cfe0","chunk-2d228fd9":"31d6cfe0"}[t]+".css",s=c.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===s))return e()}var _=document.getElementsByTagName("style");for(o=0;o<_.length;o++){l=_[o],u=l.getAttribute("data-href");if(u===a||u===s)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],p.parentNode.removeChild(p),n(i)},p.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(p)})).then((function(){r[t]=0})));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=s[t]=[e,n]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var _=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;_.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",_.name="ChunkLoadError",_.type=a,_.request=r,n[1](_)}s[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var _=0;_<l.length;_++)e(l[_]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"211e":function(t,e,n){},"52bc":function(t,e,n){"use strict";n("bfce")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",[e("ul",[e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/","active-class":"active",exact:""}},[t._v("首页")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/about","active-class":"active"}},[t._v("专业服务")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/product","active-class":"active"}},[t._v("产品应用")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/news","active-class":"active"}},[t._v("新闻中心")])],1),e("li",[t._v("案例分析")]),e("li",{staticClass:"nav-item"},[e("router-link",{attrs:{to:"/we","active-class":"active"}},[t._v("关于我们")])],1)]),t._m(0)]),e("router-view")],1)},s=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact"},[e("img",{staticStyle:{width:"180px"},attrs:{src:"https://picshack.net/ib/djxw8O2Atr.png"}})])}],i=(n("b163"),n("2877")),o={},c=Object(i["a"])(o,r,s,!1,null,null,null),l=c.exports,u=n("8c4f"),_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("header",{attrs:{id:"myHeader"}}),t._m(0),t._m(1),e("el-tabs",{staticStyle:{width:"1000px","font-weight":"400"},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"数字管理平台",name:"first"}},[e("Chuchuang")],1),e("el-tab-pane",{attrs:{label:"企业成长期",name:"second"}},[e("ChengZhang")],1),e("el-tab-pane",{attrs:{label:"企业成熟",name:"third"}},[e("ChengShuo")],1),e("el-tab-pane",{attrs:{label:"增值服务",name:"fourth"}},[e("Zen")],1)],1),t._m(2),e("div",{staticClass:"chanpin"},[t._m(3),e("el-tabs",{staticStyle:{width:"1000px"},on:{"tab-click":t.handleClick1},model:{value:t.activeName1,callback:function(e){t.activeName1=e},expression:"activeName1"}},[e("el-tab-pane",{attrs:{label:"数字管理平台",name:"first"}},[e("ChanPing1")],1),e("el-tab-pane",{attrs:{label:"科技e盟",name:"second"}},[e("ChanPing2")],1),e("el-tab-pane",{attrs:{label:"云端企业助手",name:"third"}},[e("ChanPing3")],1),e("el-tab-pane",{attrs:{label:"云端电子合同",name:"fourth"}},[e("ChanPing4")],1)],1),e("router-view"),t._m(4)],1),e("header",{attrs:{id:"myHeader1"}}),t._m(5),t._m(6),t._m(7),e("header",{attrs:{id:"myHeader2"}}),e("header",{attrs:{id:"myHeader3"}})],1)},p=[function(){var t=this,e=t._self._c;return e("section",{staticClass:"statistics"},[e("img",{staticStyle:{width:"1000px"},attrs:{src:"https://picshack.net/ib/QpMi80CUlA.png"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"hs"},[e("h2",[t._v("解决方案")])])},function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("button",{staticClass:"but"},[t._v("了解更多")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"hs"},[e("h2",[t._v("产品应用")])])},function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("button",{staticClass:"but"},[t._v("了解更多")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"hs2"},[e("h2",[t._v("新闻中心")])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"content-section"},[e("img",{staticStyle:{width:"950px"},attrs:{src:"https://picshack.net/ib/EMynksja0e.png"}})])},function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer",staticStyle:{"margin-top":"-300px"}},[e("button",{staticClass:"but"},[t._v("了解更多")])])}],h=n("fdab"),v=function(){var t=this;t._self._c;return t._m(0)},f=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("img",{staticStyle:{width:"920px","padding-left":"-1000x","margin-top":"30px"},attrs:{src:"https://picshack.net/ib/0ON4C52jgT.png"}})])}],d={},b=d,m=(n("a4a9"),Object(i["a"])(b,v,f,!1,null,"0172eed2",null)),g=m.exports,w=function(){var t=this;t._self._c;return t._m(0)},C=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("img",{staticStyle:{width:"920px","margin-left":"-50x","margin-top":"30px"},attrs:{src:"https://picshack.net/ib/RgrESPjMbV.png"}})])}],k={},x=k,y=Object(i["a"])(x,w,C,!1,null,"092cb1d8",null),j=y.exports,O=function(){var t=this;t._self._c;return t._m(0)},P=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("img",{staticStyle:{width:"920px","margin-left":"-50x","margin-top":"30px"},attrs:{src:"https://picshack.net/ib/5mCjVwq1g6.png"}})])}],S={},E=S,N=Object(i["a"])(E,O,P,!1,null,"5c8365e7",null),T=N.exports,L=function(){var t=this;t._self._c;return t._m(0)},A=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("img",{staticStyle:{width:"920px","margin-left":"-50x","margin-top":"30px"},attrs:{src:"https://picshack.net/ib/MULVeaEiau.png"}})])}],M={},H=M,R=Object(i["a"])(H,L,A,!1,null,"1e825984",null),W=R.exports,U=function(){var t=this;t._self._c;return t._m(0)},V=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("img",{staticStyle:{width:"820px","margin-left":"-50x","margin-top":"30px"},attrs:{src:"https://picshack.net/ib/S9m6WVMCdr.png"}})])}],D={},F=D,I=Object(i["a"])(F,U,V,!1,null,"d016066e",null),Z=I.exports,q=function(){var t=this;t._self._c;return t._m(0)},B=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("img",{staticStyle:{width:"820px","margin-left":"-50x","margin-top":"30px"},attrs:{src:"https://picshack.net/ib/NLwyGNma0i.png"}})])}],z={},J=z,$=Object(i["a"])(J,q,B,!1,null,"b2e9ef6a",null),G=$.exports,K=function(){var t=this;t._self._c;return t._m(0)},Q=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("img",{staticStyle:{width:"820px","margin-left":"-50x","margin-top":"30px"},attrs:{src:"https://picshack.net/ib/CMW2aTc0lR.png"}})])}],Y={},X=Y,tt=Object(i["a"])(X,K,Q,!1,null,"32033f3c",null),et=tt.exports,nt=function(){var t=this;t._self._c;return t._m(0)},at=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("img",{staticStyle:{width:"820px","margin-left":"-50x","margin-top":"30px"},attrs:{src:"https://picshack.net/ib/WVb0lhmzap.png"}})])}],rt={},st=rt,it=Object(i["a"])(st,nt,at,!1,null,"47001188",null),ot=it.exports,ct={name:"Home",components:{HelloWorld:h["a"],Chuchuang:g,ChengZhang:j,ChengShuo:T,Zen:W,ChanPing1:Z,ChanPing2:G,ChanPing3:et,ChanPing4:ot},methods:{isActive(t){return this.$route.path===t},handleClick(t,e){console.log(t,e)},handleClick1(t,e){console.log(t,e)}},data(){return{activeName:"first",activeName1:"first"}}},lt=ct,ut=(n("52bc"),Object(i["a"])(lt,_,p,!1,null,"0afe8fed",null)),_t=ut.exports;n("c79f");a["default"].use(u["a"]);const pt=[{path:"/",name:"Home",component:_t},{path:"/about",name:"About",component:()=>Promise.all([n.e("about~news"),n.e("about")]).then(n.bind(null,"f820")),children:[{path:"",component:()=>n.e("chunk-2d216823").then(n.bind(null,"c385"))},{path:"22",component:()=>n.e("chunk-2d0b5e07").then(n.bind(null,"1b88"))},{path:"33",component:()=>n.e("chunk-2d207f82").then(n.bind(null,"a393"))},{path:"44",component:()=>n.e("chunk-2d228fd9").then(n.bind(null,"dc15"))}]},{path:"/product",name:"Product",component:()=>Promise.all([n.e("about~news"),n.e("about")]).then(n.bind(null,"d2f1"))},{path:"/news",name:"News",component:()=>Promise.all([n.e("about~news"),n.e("news")]).then(n.bind(null,"a2f9"))},{path:"/we",name:"We",component:()=>Promise.all([n.e("about~news"),n.e("news")]).then(n.bind(null,"a9f9"))},{path:"/leibie",name:"leibie",component:()=>Promise.all([n.e("about~news"),n.e("news")]).then(n.bind(null,"5cce"))},{path:"/doctor/:id",name:"doctor-detail",component:()=>Promise.all([n.e("about~news"),n.e("news")]).then(n.bind(null,"162a"))},{path:"/shencha",name:"shencha",component:()=>Promise.all([n.e("about~news"),n.e("news")]).then(n.bind(null,"f971"))},{path:"/shenchademo",name:"shenchademo",component:()=>Promise.all([n.e("about~news"),n.e("news")]).then(n.bind(null,"857a"))}],ht=new u["a"]({mode:"history",routes:pt});var vt=ht,ft=n("5c96"),dt=n.n(ft);n("0fae");a["default"].use(dt.a),a["default"].config.productionTip=!1,new a["default"]({router:vt,render:t=>t(l)}).$mount("#app")},"64e3":function(t,e,n){},8454:function(t,e,n){"use strict";n("211e")},a4a9:function(t,e,n){"use strict";n("d926")},b163:function(t,e,n){"use strict";n("64e3")},bfce:function(t,e,n){},c79f:function(t,e,n){"use strict";var a=function(){var t=this;t._self._c;return t._m(0)},r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"outer-container"},[e("div",{staticClass:"ccer-contract"},[e("h1",[t._v("CCER交易买卖合同")]),e("div",{staticClass:"contract-content"},[e("p",[t._v("合同编号：____")]),e("p",[t._v("买方（以下简称甲方）：_________________")]),e("p",[t._v("卖方（以下简称乙方）：_________________")]),e("p",[e("strong",[t._v("第一条 标的物")])]),e("p",[t._v("乙方自愿将其产生的核证自愿减排量（CCER）转让给甲方，转让数量为____吨二氧化碳当量。")]),e("p",[e("strong",[t._v("第二条 交易价格")])]),e("p",[t._v("经双方协商，转让价格确定为每吨二氧化碳当量人民币____元，总价为人民币____元。")]),e("p",[e("strong",[t._v("第三条 交易方式和资金支付")])]),e("p",[t._v("甲方采用____（一次性付款/分期付款）方式支付转让价款。甲方于本合同签订后____日内，将转让价款全部支付到乙方指定账户。")]),e("p",[e("strong",[t._v("第四条 交付与验收")])]),e("p",[t._v("乙方应在收到甲方支付的转让价款后____日内，将标的物（CCER）交付给甲方。甲方应在收到标的物后____日内完成验收，并签署验收确认书。")]),e("p",[e("strong",[t._v("第五条 所有权与风险转移")])]),e("p",[t._v("标的物的所有权自甲方支付全部转让价款并签署验收确认书之日起转移给甲方，标的物毁损、灭失的风险亦同时转移。")]),e("p",[e("strong",[t._v("第六条 保密条款")])]),e("p",[t._v("双方应对本合同的内容及履行过程中知悉的对方商业秘密和敏感信息予以保密，未经对方书面同意，不得向任何第三方泄露或用于本合同以外的其他目的。")]),e("p",[e("strong",[t._v("第七条 违约责任")])]),e("p",[t._v("1. 若甲方未按照约定支付转让价款的，每逾期一日，应按照逾期支付金额的____%向乙方支付违约金。")]),e("p",[t._v("2. 若乙方未按照约定交付标的物的，每逾期一日，应按照合同总价款的____%向甲方支付违约金，并赔偿因此给甲方造成的损失。")]),e("p",[e("strong",[t._v("第八条 不可抗力")])]),e("p",[t._v("因不可抗力因素导致本合同无法履行的，双方应及时通知对方，并协商解决方案。")]),e("p",[e("strong",[t._v("第九条 争议解决")])]),e("p",[t._v("因本合同引起的或与本合同有关的任何争议，双方应首先尝试友好协商解决。协商不成的，任何一方均有权向____（合同签订地/被告住所地）人民法院提起诉讼。")]),e("p",[e("strong",[t._v("第十条 通知与送达")])]),e("p",[t._v("双方应确保本合同中填写的联系方式准确无误，如有变更，应及时通知对方。双方之间的任何通知和文件，以书面方式送达至对方在本合同中填写的地址即视为送达。")]),e("p",[e("strong",[t._v("第十一条 合同生效与变更")])]),e("p",[t._v("本合同自双方签字（或盖章）之日起生效。本合同一式两份，甲乙双方各执一份。本合同未尽事宜，可由双方协商补充。经双方协商一致达成的补充协议，与本合同具有同等法律效力。")]),e("p",[t._v(" 甲方（盖章）： "),e("br"),t._v("法定代表人（签字）： "),e("br"),t._v("签订日期：____年__月__日 ")]),e("p",[t._v(" 乙方（盖章）： "),e("br"),t._v("法定代表人（签字）： "),e("br"),t._v("签订日期：____年__月__日 ")]),e("p",[t._v("此合同模板仅供参考，具体内容、条款及百分比等数据，需要根据实际情况确定。在签署正式合同前，建议咨询法律专业人士，确保合同的有效性和可执行性。")])]),e("div",{staticClass:"download-section"},[e("a",{staticClass:"download-button",attrs:{href:"URL_TO_YOUR_WORD_FILE",download:"CCER交易买卖合同.docx"}},[t._v("下载合同模板")])])])])}],s={},i=s,o=(n("f677"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,null,null);e["a"]=c.exports},d926:function(t,e,n){},ee0d:function(t,e,n){},f677:function(t,e,n){"use strict";n("ee0d")},fdab:function(t,e,n){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._m(0),e("h3",[t._v("Installed CLI Plugins")]),t._m(1),e("h3",[t._v("Essential Links")]),t._m(2),e("h3",[t._v("Ecosystem")]),t._m(3)])},r=[function(){var t=this,e=t._self._c;return e("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),e("br"),t._v(" check out the "),e("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),e("li",[e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t._self._c;return e("ul",[e("li",[e("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),e("li",[e("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),e("li",[e("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],s={name:"HelloWorld",props:{msg:String}},i=s,o=(n("8454"),n("2877")),c=Object(o["a"])(i,a,r,!1,null,"ebbc34ee",null);e["a"]=c.exports}});
//# sourceMappingURL=app.553b4f1c.js.map