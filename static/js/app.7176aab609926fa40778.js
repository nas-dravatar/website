webpackJsonp([1],{"N/6+":function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("7+uW"),n=e("MMSg"),r=e.n(n),i=e("86jz"),o=e.n(i),c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar is-transparent"},[e("div",{staticClass:"navbar-brand"},[e("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[e("img",{attrs:{src:"https://i.loli.net/2018/05/10/5af31ce5f31d3.png",alt:"NAS Dravatar"}})]),t._v(" "),t._m(0)],1),t._v(" "),e("div",{staticClass:"navbar-menu",attrs:{id:"navbarExampleTransparentExample"}},[e("div",{staticClass:"navbar-start"},t._l(t.menuItems,function(a){return e("div",{key:a.name,staticClass:"navbar-item"},[a.isOutside?t._e():e("router-link",{staticClass:"navbar-item",attrs:{to:a.to}},[t._v(" "+t._s(a.name)+" ")]),t._v(" "),a.isOutside?e("a",{staticClass:"navbar-item",attrs:{href:a.to}},[t._v(" "+t._s(a.name)+" ")]):t._e()],1)})),t._v(" "),e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"input",attrs:{type:"text",placeholder:"输入钱包地址",width:"450"},domProps:{value:t.search},on:{input:function(a){a.target.composing||(t.search=a.target.value)}}}),t._v(" "),e("button",{staticClass:"button is-black",on:{click:t.jumpTo}},[t._v("查")])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarExampleTransparentExample"}},[a("span"),this._v(" "),a("span"),this._v(" "),a("span")])}]};var u={components:{Navbar:e("VU/8")({name:"Navbar",data:function(){return{menuItems:[{name:"首页",to:"/"},{name:"我的资料",to:"/my"},{name:"文档",to:"https://github.com/nas-dravatar/wiki",isOutside:!0}],search:""}},methods:{jumpTo:function(){var t=this.search;this.$router.push({name:"User",params:{address:t}})}}},c,!1,function(t){e("gdRb")},"data-v-7a876dd5",null).exports},name:"App"},l={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),this._v(" "),a("div",{staticClass:"container"},[a("router-view")],1),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content has-text-centered"},[e("h2",[t._v("NasDravatar")]),t._v(" "),e("p",[t._v("\n        本服务由 "),e("a",{attrs:{href:"https://incentive.nebulas.io/signup.html?invite=po4VY"}},[t._v("\n        Nebulas 星云链")]),t._v(" 驱动\n        "),e("br"),t._v("\n        本网站需要 Chrome 搭配\n        "),e("a",{attrs:{href:"https://github.com/ChengOrangeJu/WebExtensionWallet"}},[t._v("\n        WebExtensionWallet")]),t._v(" 插件（5月9号后的版本）才能正常使用\n        ")])])])])}]};var d=e("VU/8")(u,l,!1,function(t){e("u1e1")},null,null).exports,v=e("/ocq"),p={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"hello"},[a("section",{staticClass:"hero is-medium"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[this._m(0),this._v(" "),a("h2",{staticClass:"subtitle"},[this._v("\n            星云链钱包通用头像\n          ")]),this._v(" "),a("router-link",{staticClass:"button is-large is-black is-rounded",attrs:{to:{name:"My"}}},[this._v("\n          管理我的星云链钱包头像 ")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{staticClass:"title"},[this._v("\n            NasDravatar "),a("strong",{staticClass:"tag is-danger"},[this._v("Beta")])])}]};var m=e("VU/8")({name:"HelloWorld",computed:{},components:{}},p,!1,function(t){e("vhRb")},"data-v-1b1ba9eb",null).exports,h=e("Xxa5"),f=e.n(h),b=e("exGp"),_=e.n(b),C=e("woOf"),g=e.n(C),y=e("//Fk"),w=e.n(y),x=e("mvHQ"),k=e.n(x),N={address:"n1ysjgjUHMi19WXGACTV1j7Z11u1zj3hEd6"},E=e("WJJ6"),R=e.n(E),A=e("uotZ"),P=e.n(A),T=e("71e1"),U=e.n(T),$={};window.addEventListener("message",function(t){if(console.log("nebpay: received resp.data: "+k()(t.data)),"content"===t.data.src){var a=t.data.serialNumber,e=$[a];"function"==typeof e&&e(t.data.resp)}});var j=function(t){t.listener&&($[t.serialNumber]=t.listener),t.listener=void 0,window.postMessage({src:"nebPay",logo:"nebulas",params:t},"*")},M=function(t,a){this.appKey=t,this.appSecret=a};M.prototype={submit:function(t,a,e,s,n){n.serialNumber=function(t){var a,e,s="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n="";for(a=0;t>a;a+=1)e=Math.random()*s.length,e=Math.floor(e),n+=s.charAt(e);return n}(32),e=e||"0";var r=new P.a(e).times("1000000000000000000"),i={serialNumber:n.serialNumber,goods:n.goods,pay:{currency:t,to:a,value:r.toString(10),payload:s},callback:n.callback,listener:n.listener,nrc20:n.nrc20};return j(i),function(t,a){var e={category:"jump",des:"confirmTransfer",pageParams:t},s="openapp.NASnano://virtual?params="+k()(e);window.location.href=s,a.qrcode.showQRCode&&function(t,a){U.a.showQRCode(t,a.qrcode.container)}(k()(e),a)}(i,n),n.serialNumber}};var S=M,q=e("fZjL"),H=e.n(q),I=function(t){return new w.a(function(a,e){var s=new XMLHttpRequest;s.open(t.method||"GET",t.url),t.headers&&H()(t.headers).forEach(function(a){s.setRequestHeader(a,t.headers[a])}),s.onload=function(){s.status>=200&&s.status<300?a(s.response):e(s.statusText)},s.onerror=function(){return e(s.statusText)},s.send(t.body)})},V="https://pay.nebulas.io/api/pay",W=function(t,a){this._pay=new S(t,a)},O={goods:{name:"",desc:"",orderId:"",ext:""},qrcode:{showQRCode:!1,container:void 0},callback:V,listener:void 0,nrc20:void 0};W.prototype={pay:function(t,a,e){return e=R()(O,e),this._pay.submit("NAS",t,a,{type:"binary"},e)},nrc20pay:function(t,a,e,s){s.nrc20&&s.nrc20.decimals>0&&(e=e||"0",e=new P.a(e).times(new P.a(10).pow(s.nrc20.decimals)).toString(10));var n="";s.nrc20&&s.nrc20.address&&(n=s.nrc20.address);var r=[a,e],i={type:"call",function:"transfer",args:k()(r)};return s=R()(O,s),this._pay.submit(t,n,"0",i,s)},deploy:function(t,a,e,s){var n={type:"deploy",source:t,sourceType:a,args:e};return s=R()(O,s),this._pay.submit("NAS","","0",n,s)},call:function(t,a,e,s,n){var r={type:"call",function:e,args:s};return n=R()(O,n),this._pay.submit("NAS",t,a,r,n)},simulateCall:function(t,a,e,s,n){var r={type:"simulateCall",function:e,args:s};return n=R()(O,n),this._pay.submit("NAS",t,a,r,n)},queryPayInfo:function(t){return function(t,a){return I({url:t,method:"GET",body:a})}(V+"/query?payId="+t)}};var F,G,J=W,L=e("GG98"),X=e.n(L),Y=new J,D=(F=_()(f.a.mark(function t(a){var e,s;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=N.address,t.next=3,Y.call(e,0,"save",k()(a),{listener:void 0});case 3:return s=t.sent,t.abrupt("return",s);case 5:case"end":return t.stop()}},t,this)})),function(t){return F.apply(this,arguments)}),Q=(G=_()(f.a.mark(function t(a){var e,s,n,r,i,o;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=N.address,s={value:"0",nonce:0,gasPrice:"1000000",gasLimit:"2000000",contract:{function:"get",args:'[""]'}},t.next=4,X.a.post("https://testnet.nebulas.io/v1/user/call").send(g()({from:a,to:e},s));case 4:return n=t.sent,r=n.body,i=r.result.result,o=JSON.parse(i),console.log(o),t.abrupt("return",o);case 10:case"end":return t.stop()}},t,this)})),function(t){return G.apply(this,arguments)}),z={name:"HelloWorld",computed:{},data:function(){return{myCroppa:{},address:"",input:{}}},created:function(){var t=this;return _()(f.a.mark(function a(){var e,s;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,new w.a(function(t,a){window.postMessage({target:"contentscript",data:{},method:"getAccount"},"*"),window.addEventListener("message",function(a){a.data.data.account&&t(a.data.data.account)})});case 2:return e=a.sent,t.address=e,a.next=6,Q(t.address);case 6:s=a.sent,t.input=s;case 8:case"end":return a.stop()}},a,t)}))()},methods:{getBase64URI:function(){var t=this;return _()(f.a.mark(function a(){var e,s,n,r,i;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.myCroppa.generateDataUrl("image/jpeg"),s=t.input,n=s.nickname,r=s.bio,i=[e,n,r],a.next=5,D(i);case 5:alert("信息已经被打包，正等待矿工处理，请稍后刷新查看");case 6:case"end":return a.stop()}},a,t)}))()}}},B={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"upload"}},[t._m(0),t._v(" "),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-256x256"},[e("img",{attrs:{src:t.input.avatar,alt:"Placeholder image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-4"},[t._v(t._s(t.input.nickname))]),t._v(" "),e("p",{staticClass:"subtitle is-6"},[t._v("钱包地址："+t._s(t.address))])])]),t._v(" "),e("div",{staticClass:"content"},[t._v("\n      签名："+t._s(t.input.bio)+"\n    ")])])])]),t._v(" "),e("div",{staticClass:"column"},[e("h2",{staticClass:"subtitle"},[t._v("修改资料")]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("头像")]),t._v(" "),e("div",{staticClass:"control"},[e("croppa",{attrs:{width:256,height:256,quality:1,placeholder:"拖动或点击选择头像","placeholder-font-size":0,disabled:!1,"prevent-white-space":!1,"show-remove-button":!0},model:{value:t.myCroppa,callback:function(a){t.myCroppa=a},expression:"myCroppa"}},[e("img",{attrs:{slot:"initial",src:t.input.avatar,alt:""},slot:"initial"})])],1)]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("昵称")]),t._v(" "),e("div",{staticClass:"control"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input.nickname,expression:"input.nickname"}],staticClass:"input",attrs:{type:"text",placeholder:"Your nickname"},domProps:{value:t.input.nickname},on:{input:function(a){a.target.composing||t.$set(t.input,"nickname",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("签名")]),t._v(" "),e("div",{staticClass:"control"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input.bio,expression:"input.bio"}],staticClass:"textarea",attrs:{placeholder:"Your bio"},domProps:{value:t.input.bio},on:{input:function(a){a.target.composing||t.$set(t.input,"bio",a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"field is-grouped"},[e("div",{staticClass:"control"},[e("button",{staticClass:"button is-black",on:{click:t.getBase64URI}},[t._v("更新资料")])])])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"hero"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[this._v("\n              我的资料\n            ")]),this._v(" "),a("h2",{staticClass:"subtitle"},[this._v("\n              你可以更新、查看你的个人资料\n            ")])])])])}]};var K=e("VU/8")(z,B,!1,function(t){e("N/6+")},"data-v-3967b607",null).exports,Z={name:"User",computed:{address:function(){return this.$route.params.address},code:function(){return this.address.slice(-6)}},data:function(){return{myCroppa:{},info:{}}},created:function(){var t=this;return _()(f.a.mark(function a(){var e;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Q(t.address);case 2:e=a.sent,t.info=e;case 4:case"end":return a.stop()}},a,t)}))()},methods:{}},tt={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"user-panel"}},[e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("img",{attrs:{src:t.info.avatar,alt:"Placeholder image"}}),t._v(" "),e("h1",{staticClass:"title"},[t._v("\n              "+t._s(t.info.nickname)+" ("+t._s(t.code)+")\n            ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n              钱包地址："+t._s(t.address)+"\n            ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n              签名："+t._s(t.info.bio)+"\n            ")])])])])])},staticRenderFns:[]};var at=e("VU/8")(Z,tt,!1,function(t){e("kVXK")},"data-v-426634ff",null).exports;s.a.use(v.a);var et=new v.a({routes:[{path:"/",name:"Home",component:m},{path:"/my",name:"My",component:K},{path:"/user/:address",name:"User",component:at}]});e("doPI"),e("toYN");s.a.use(r.a),s.a.use(o.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:et,components:{App:d},template:"<App/>"})},doPI:function(t,a){},gdRb:function(t,a){},kVXK:function(t,a){},toYN:function(t,a){},u1e1:function(t,a){},vhRb:function(t,a){}},["NHnr"]);