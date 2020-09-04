(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this);function ea(a,b){if(b)a:{var c=da;a=a.split(".");for(var e=0;e<a.length-1;e++){var g=a[e];if(!(g in c))break a;c=c[g]}a=a[a.length-1];e=c[a];b=b(e);b!=e&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}} 
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function fa(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ha="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ia; 
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ia; 
ea("Promise",function(a){function b(d){this.h=0;this.l=void 0;this.g=[];var f=this.i();try{d(f.resolve,f.reject)}catch(h){f.reject(h)}}function c(){this.g=null}function e(d){return d instanceof b?d:new b(function(f){f(d)})}if(a)return a;c.prototype.h=function(d){if(null==this.g){this.g=[];var f=this;this.i(function(){f.l()})}this.g.push(d)};var g=da.setTimeout;c.prototype.i=function(d){g(d,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var d=this.g;this.g=[];for(var f=0;f<d.length;++f){var h= 
d[f];d[f]=null;try{h()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(d){this.i(function(){throw d;})};b.prototype.i=function(){function d(l){return function(m){h||(h=!0,l.call(f,m))}}var f=this,h=!1;return{resolve:d(this.v),reject:d(this.j)}};b.prototype.v=function(d){if(d===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(d instanceof b)this.A(d);else{a:switch(typeof d){case "object":var f=null!=d;break a;case "function":f=!0;break a;default:f=!1}f?this.u(d):this.m(d)}}; 
b.prototype.u=function(d){var f=void 0;try{f=d.then}catch(h){this.j(h);return}"function"==typeof f?this.B(f,d):this.m(d)};b.prototype.j=function(d){this.o(2,d)};b.prototype.m=function(d){this.o(1,d)};b.prototype.o=function(d,f){if(0!=this.h)throw Error("Cannot settle("+d+", "+f+"): Promise already settled in state"+this.h);this.h=d;this.l=f;this.s()};b.prototype.s=function(){if(null!=this.g){for(var d=0;d<this.g.length;++d)k.h(this.g[d]);this.g=null}};var k=new c;b.prototype.A=function(d){var f=this.i(); 
d.C(f.resolve,f.reject)};b.prototype.B=function(d,f){var h=this.i();try{d.call(f,h.resolve,h.reject)}catch(l){h.reject(l)}};b.prototype.then=function(d,f){function h(n,v){return"function"==typeof n?function(u){try{l(n(u))}catch(J){m(J)}}:v}var l,m,r=new b(function(n,v){l=n;m=v});this.C(h(d,l),h(f,m));return r};b.prototype.catch=function(d){return this.then(void 0,d)};b.prototype.C=function(d,f){function h(){switch(l.h){case 1:d(l.l);break;case 2:f(l.l);break;default:throw Error("Unexpected state: "+ 
l.h);}}var l=this;null==this.g?k.h(h):this.g.push(h)};b.resolve=e;b.reject=function(d){return new b(function(f,h){h(d)})};b.race=function(d){return new b(function(f,h){for(var l=p(d),m=l.next();!m.done;m=l.next())e(m.value).C(f,h)})};b.all=function(d){var f=p(d),h=f.next();return h.done?e([]):new b(function(l,m){function r(u){return function(J){n[u]=J;v--;0==v&&l(n)}}var n=[],v=0;do n.push(void 0),v++,e(h.value).C(r(n.length-1),m),h=f.next();while(!h.done)})};return b}); 
var q=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;function pa(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&na.test(a)?a:""}function sa(){}var ta="closure_uid_"+(1E9*Math.random()>>>0),ua=0,va=Date.now;function wa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a}function xa(a){return a};var ya=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},za=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,e="string"===typeof a?a.split(""):a,g=0;g<c;g++)g in e&&b.call(void 0,e[g],g,a)};var t;function Aa(a,b){this.g=b===Ba?a:""}var Ba={};function Ca(a){Ca[" "](a);return a}Ca[" "]=sa;function Da(){}var Ea="function"==typeof Uint8Array;function Fa(a,b,c){a.i=null;b||(b=[]);a.o=void 0;a.j=-1;a.g=b;a:{if(b=a.g.length){--b;var e=a.g[b];if(!(null===e||"object"!=typeof e||Array.isArray(e)||Ea&&e instanceof Uint8Array)){a.l=b-a.j;a.h=e;break a}}a.l=Number.MAX_VALUE}a.m={};if(c)for(b=0;b<c.length;b++)if(e=c[b],e<a.l)e+=a.j,a.g[e]=a.g[e]||w;else{var g=a.l+a.j;a.g[g]||(a.h=a.g[g]={});a.h[e]=a.h[e]||w}}var w=[]; 
function x(a,b){if(b<a.l){b+=a.j;var c=a.g[b];return c===w?a.g[b]=[]:c}if(a.h)return c=a.h[b],c===w?a.h[b]=[]:c}function y(a,b,c){a=x(a,b);return null==a?c:a}function z(a,b){a=x(a,b);a=null==a?a:!!a;return null==a?!1:a}function Ga(a){var b=Ha;a.i||(a.i={});if(!a.i[1]){var c=x(a,1);c&&(a.i[1]=new b(c))}return a.i[1]};function Ha(a){Fa(this,a,Ia)}wa(Ha,Da);var Ia=[28];function Ja(a){Fa(this,a,Ka)}wa(Ja,Da);var Ka=[21];function A(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};function B(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function La(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Ma(b,a)[0]||null);return a||null} 
function Ma(a,b){var c,e;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var g=a.getElementsByClassName(b);return g}g=a.getElementsByTagName("*");if(b){var k={};for(c=e=0;a=g[c];c++){var d=a.className,f;if(f="function"==typeof d.split)f=0<=ya(d.split(/\s+/),b);f&&(k[e++]=a)}k.length=e;return k}return g}function Na(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function Oa(a){Pa();if(void 0===t){var b=null;var c=q.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:xa,createScript:xa,createScriptURL:xa})}catch(e){q.console&&q.console.error(e.message)}t=b}else t=b}a=(b=t)?b.createScriptURL(a):a;return new Aa(a,Ba)}var Pa=sa;var Qa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function C(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ca(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Ra(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function D(a){a.preventDefault?a.preventDefault():a.returnValue=!1};function Sa(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};var Ta=0;function Ua(){var a=void 0===a?.01:a;if(!(Math.random()>a)){var b=document.currentScript;b=(b=void 0===b?null:b)&&60==b.getAttribute("data-jc")?b:document.querySelector('[data-jc="60"]');a="https://pagead2.googlesyndication.com/pagead/gen_204?id=jca&jc=60&version="+(b&&b.getAttribute("data-jc-version")||"unknown")+"&sample="+a;b=window;var c;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):Sa(b,a)}};var E=document,G=window;function Va(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function Wa(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Va(a).match(/\S+/g)||[],b=0<=ya(a,b));return b}function H(a,b){if(a.classList)a.classList.add(b);else if(!Wa(a,b)){var c=Va(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};function Xa(a){this.g=(this.serializedAttributionData=a)?new Ja(a):null;this.isMutableImpression=null!=x(this.g,1)&&!!z(Ga(this.g),33);y(this.g,30,"");this.T=!!z(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=x(this.g,1);this.L=!!z(this.g,4);this.O=!!z(this.g,6);this.K=!!z(this.g,13);y(this.g,8,0);this.creativeIndexSuffix=1<y(this.g,8,0)?y(this.g,7,0).toString():"";this.U=!!z(this.g,17);this.R=!!z(this.g,18);this.J=!!z(this.g,14);this.B=!!z(this.g,15);this.V=!!z(this.g,31);this.P=1==z(this.g, 
9);this.openAttributionInline=1==z(this.g,10);this.isMobileDevice=!!z(this.g,12);this.S=null;this.N=(a=E.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.F=""!==this.creativeIndexSuffix)&&void 0===G.goog_multislot_cache&&(G.goog_multislot_cache={});if(this.F&&!this.N){if(a=G.goog_multislot_cache.hd,void 0===a){a=!1;var b=E.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a=!1;else{var c=document.body.getBoundingClientRect(); 
150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.D=a;this.u=B("abgcp"+this.creativeIndexSuffix);this.s=B("abgc"+this.creativeIndexSuffix);this.h=B("abgs"+this.creativeIndexSuffix);B("abgl"+this.creativeIndexSuffix);this.o=B("abgb"+this.creativeIndexSuffix);this.A=B("abgac"+this.creativeIndexSuffix);B("mute_panel"+this.creativeIndexSuffix);this.v=La("goog_delegate_attribution"+this.creativeIndexSuffix); 
this.isDelegateAttributionActive=!!this.v&&!!this.J&&!La("goog_delegate_disabled")&&!this.B;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(var e=0;e<c.length;e++){var g=c.item(e);if("undefined"!=typeof g.tagName&&g.tagName.toUpperCase()==b){a=g;break a}}}else a=null;this.j=a;this.l=this.isDelegateAttributionActive?this.v:B("cbb"+this.creativeIndexSuffix);this.M=this.D?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu=!!this.l&&Wa(this.l,"goog_dismissable_menu");this.m=null;this.G= 
0;this.i=this.isDelegateAttributionActive?this.v:this.O&&this.u?this.u:this.s;this.I=!!z(this.g,19);this.adbadgeEnabled=!!z(this.g,24);this.enableNativeJakeUi=!!z(this.g,27)};function Ya(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c};var Za={};function I(a,b){if(b!==Za)throw Error("Bad secret");this.g=a}function K(){}I.prototype=ha(K.prototype);I.prototype.constructor=I;if(ma)ma(I,K);else for(var L in K)if("prototype"!=L)if(Object.defineProperties){var db=Object.getOwnPropertyDescriptor(K,L);db&&Object.defineProperty(I,L,db)}else I[L]=K[L];I.prototype.toString=function(){return this.g};new I("about:blank",Za);new I("about:invalid#zTSz",Za);function eb(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}var fb=!!window.google_async_iframe_id,M=fb&&window.parent||window;function N(a,b){a&&eb(b,function(c,e){a.style[e]=c})};function gb(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var hb=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function ib(a,b){this.g=a;this.h=b}function jb(a,b){this.url=a;this.H=!!b;this.depth=null};function kb(){this.i="&";this.h={};this.j=0;this.g=[]}function O(a,b){var c={};c[a]=b;return[c]}function lb(a,b,c,e,g){var k=[];Ra(a,function(d,f){(d=mb(d,b,c,e,g))&&k.push(f+"="+d)});return k.join(b)} 
function mb(a,b,c,e,g){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(e=e||0,e<c.length){for(var k=[],d=0;d<a.length;d++)k.push(mb(a[d],b,c,e+1,g));return k.join(c[e])}}else if("object"==typeof a)return g=g||0,2>g?encodeURIComponent(lb(a,b,c,e,g+1)):"...";return encodeURIComponent(String(a))} 
function nb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var e=ob(a)-c.length;if(0>e)return"";a.g.sort(function(m,r){return m-r});c=null;for(var g="",k=0;k<a.g.length;k++)for(var d=a.g[k],f=a.h[d],h=0;h<f.length;h++){if(!e){c=null==c?d:c;break}var l=lb(f[h],a.i,",$");if(l){l=g+l;if(e>=l.length){e-=l.length;b+=l;g=a.i;break}c=null==c?d:c}}a="";null!=c&&(a=g+"trn="+c);return b+a}function ob(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1};function pb(a,b,c,e,g){if((e?a.g:Math.random())<(g||.01))try{if(c instanceof kb)var k=c;else k=new kb,Ra(c,function(f,h){var l=k,m=l.j++;f=O(h,f);l.g.push(m);l.h[m]=f});var d=nb(k,a.h,"/pagead/gen_204?id="+b+"&");d&&Sa(q,d)}catch(f){}};var P=null;function qb(){var a=q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):va()}function rb(){var a=void 0===a?q:a;return(a=a.performance)&&a.now?a.now():null};function sb(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var Q=q.performance,tb=!!(Q&&Q.mark&&Q.measure&&Q.clearMarks),R=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=tb){var b;if(null===P){P="";try{a="";try{a=q.top.location.hash}catch(c){a=q.location.hash}a&&(P=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=P;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); 
function ub(){var a=S;this.h=[];this.i=a||q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=R()||(null!=b?b:1>Math.random())}function vb(a){a&&Q&&R()&&(Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))} 
ub.prototype.start=function(a,b){if(!this.g)return null;var c=rb()||qb();a=new sb(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";Q&&R()&&Q.mark(b);return a};function wb(){var a=xb;this.l=yb;this.h=null;this.m=this.j;this.g=void 0===a?null:a;this.i=!1}function zb(a,b,c){try{if(a.g&&a.g.g){var e=a.g.start(b.toString(),3);var g=c();var k=a.g;c=e;if(k.g&&"number"===typeof c.value){var d=rb()||qb();c.duration=d-c.value;var f="goog_"+c.label+"_"+c.uniqueId+"_end";Q&&R()&&Q.mark(f);!k.g||2048<k.h.length||k.h.push(c)}}else g=c()}catch(h){k=!0;try{vb(e),k=a.m(b,new gb(h,{message:Ab(h)}),void 0,void 0)}catch(l){a.j(217,l)}if(!k)throw h;}return g} 
function Bb(a,b){var c=T;return function(e){for(var g=[],k=0;k<arguments.length;++k)g[k]=arguments[k];return zb(c,a,function(){return b.apply(void 0,g)})}} 
wb.prototype.j=function(a,b,c,e,g){g=g||"jserror";try{var k=new kb;k.g.push(1);k.h[1]=O("context",a);b.error&&b.meta&&b.id||(b=new gb(b,{message:Ab(b)}));if(b.msg){var d=b.msg.substring(0,512);k.g.push(2);k.h[2]=O("msg",d)}var f=b.meta||{};if(this.h)try{this.h(f)}catch(X){}if(e)try{e(f)}catch(X){}b=[f];k.g.push(3);k.h[3]=b;e=q;b=[];d=null;do{var h=e;if(C(h)){var l=h.location.href;d=h.document&&h.document.referrer||null}else l=d,d=null;b.push(new jb(l||""));try{e=h.parent}catch(X){e=null}}while(e&& 
h!=e);l=0;for(var m=b.length-1;l<=m;++l)b[l].depth=m-l;h=q;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var r=b[m];r.url||(r.url=h.location.ancestorOrigins[m-1]||"",r.H=!0)}var n=new jb(q.location.href,!1);h=null;var v=b.length-1;for(r=v;0<=r;--r){var u=b[r];!h&&hb.test(u.url)&&(h=u);if(u.url&&!u.H){n=u;break}}u=null;var J=b.length&&b[v].url;0!=n.depth&&J&&(u=b[v]);var F=new ib(n,u);if(F.h){var Kb=F.h.url||"";k.g.push(4);k.h[4]=O("top", 
Kb)}var qa={url:F.g.url||""};if(F.g.url){var ra=F.g.url.match(Qa),$a=ra[1],ab=ra[3],bb=ra[4];n="";$a&&(n+=$a+":");ab&&(n+="//",n+=ab,bb&&(n+=":"+bb));var cb=n}else cb="";qa=[qa,{url:cb}];k.g.push(5);k.h[5]=qa;pb(this.l,g,k,this.i,c)}catch(X){try{pb(this.l,g,{context:"ecmserr",rctx:a,msg:Ab(X),url:F&&F.g.url},this.i,c)}catch(Wb){}}return!0}; 
function Ab(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){}}return b};var yb,T;if(fb&&!C(M)){var U="."+E.domain;try{for(;2<U.split(".").length&&!C(M);)E.domain=U=U.substr(U.indexOf(".")+1),M=window.parent}catch(a){}C(M)||(M=window)}var S=M,xb=new ub;function Cb(){if(!S.google_measure_js_timing){var a=xb;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(R()&&za(a.h,vb),a.h.length=0)}}yb=new function(){var a=void 0===a?G:a;this.h="http:"===a.location.protocol?"http:":"https:";this.g=Math.random()};"number"!==typeof S.google_srt&&(S.google_srt=Math.random());var Db=yb,Eb=S.google_srt; 
0<=Eb&&1>=Eb&&(Db.g=Eb);T=new wb; 
T.h=function(a){var b=G.jerExpIds;if(Array.isArray(b)&&0!==b.length){var c=a.eid;if(c){b=fa(c.split(",")).concat(fa(b));c={};for(var e=0,g=0;g<b.length;){var k=b[g++];var d=k;var f=typeof d;d="object"==f&&null!=d||"function"==f?"o"+(Object.prototype.hasOwnProperty.call(d,ta)&&d[ta]||(d[ta]=++ua)):(typeof d).charAt(0)+d;Object.prototype.hasOwnProperty.call(c,d)||(c[d]=!0,b[e++]=k)}b.length=e;a.eid=b.join(",")}else a.eid=b.join(",")}0!==Ta&&(a.jc=String(Ta));(b=G.jerUserAgent)&&(a.useragent=b)}; 
T.i=!0;"complete"==S.document.readyState?Cb():xb.g&&A(S,"load",function(){Cb()});function V(a,b){return Bb(a,b)};function Fb(a,b){var c=this;this.g=a;this.h=b;this.g.U||(this.j=!1,this.i=null,!this.g.D||this.g.adbadgeEnabled||this.g.M?Gb(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(N(this.g.o,a),N(this.g.h,a),N(this.g.u,b),N(this.g.s,b)):N(this.g.s,a)),Hb(this),this.g.enableNativeJakeUi&&H(this.g.A,"abgnac"),this.g.isDelegateAttributionActive?(H(document.body,"goog_delegate_active"),H(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.l&&Na(this.g.l),setTimeout(function(){H(document.body, 
"jar")},this.g.K?750:100)),this.g.B&&H(document.body,"goog_delegate_disabled"),this.g.I&&G.addEventListener("load",function(){return c.h()}))} 
function Hb(a){if(a.g.T)A(a.g.i,"click",V(365,function(c){var e=G.goog_interstitial_display;e&&(e(c),c&&(c.stopPropagation(),c.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)A(a.g.i,"click",function(){return a.h()});else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&(a.g.l&&A(a.g.l,"click",function(){return a.h()}),a.g.V&&a.g.h&&A(a.g.h,"click",function(){return a.h()})),a.g.L)Ib(a);else{A(a.g.i,"mouseover",V(367,function(){return Ib(a)}));A(a.g.i,"mouseout",V(369,function(){return Jb(a, 
500)}));A(a.g.i,"touchstart",V(368,function(){return Ib(a)}));var b=V(370,function(){return Jb(a,4E3)});A(a.g.i,"mouseup",b);A(a.g.i,"touchend",b);A(a.g.i,"touchcancel",b);a.g.j&&A(a.g.j,"click",V(371,function(c){return a.preventDefault(c)}))}} 
function Gb(a){if(a.g.j&&a.g.R){var b=Ga(a.g.g);b&&null!=x(b,5)&&null!=x(b,6)&&(a.i=new Ya(y(b,5,""),y(b,6,""),y(b,19,"")));A(a.g.j,"click",V(452,function(){if(!a.j&&(a.j=!0,a.i)){var c=a.i,e=c.h+"&label=closebutton_whythisad_click";e+="&label_instance=1";c.g&&(e+="&cid="+c.g);Sa(window,e)}}))}}function Lb(a){var b=a.g.A;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(function(){H(b,"abgacfo")})} 
function Ib(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.h&&"block"==a.g.h.style.display||(a.g.G=Date.now(),a.g.o&&a.g.h&&(a.g.o.style.display="none",a.g.h.style.display="block"))}function Jb(a,b){window.clearTimeout(a.g.m);a.g.m=window.setTimeout(function(){return Mb(a)},b)}function Mb(a){window.clearTimeout(a.g.m);a.g.m=null;a.g.o&&a.g.h&&(a.g.o.style.display="block",a.g.h.style.display="none")} 
Fb.prototype.preventDefault=function(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.G)D(a);else if(this.g.openAttributionInline){var b=this.g.j.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&D(a):window.openAttribution&&(window.openAttribution(b),D(a))}else this.g.P&&(b=this.g.j.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&D(a):window.openSystemBrowser&&(window.openSystemBrowser(b),D(a)))};function Nb(a){var b=Ob,c=this;if(!b)throw Error("bad ctor");this.i=b;this.h=a;this.g=!1;La("goog_delegate_deferred")?void 0!==G.goog_delegate_deferred_token?Pb(this):(a=function(){Pb(c)},G.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Pb(this)}function Pb(a){if(!a.g&&(a.g=!0,G.goog_delegate_deferred_token=void 0,a.h)){var b=a.i;a=a.h;if(!a)throw Error("bad attrdata");a=new Xa(a);new b(a)}};function Qb(){var a=this;this.g=new Promise(function(b,c){a.resolve=b;a.reject=c})};function Rb(){var a=new Qb;this.promise=a.g;this.resolve=a.resolve}function Sb(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Rb,b&&b());return a[5]} 
function Tb(){var a=window,b=Oa("https://pagead2.googlesyndication.com/pagead/js/r20200831/r20110914/abg_survey.js");return Sb(a,function(){var c=a.document,e=c.createElement("script"),g="string"===typeof b?Oa(b):b;e.src=g instanceof Aa&&g.constructor===Aa?g.g:"type_error:TrustedResourceUrl";(g=e.ownerDocument&&e.ownerDocument.defaultView)&&g!=q?g=pa(g.document):(null===oa&&(oa=pa(q.document)),g=oa);g&&e.setAttribute("nonce", 
g);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(e,c)}).promise};function Ob(a){var b=this;this.g=a;this.h=new Fb(this.g,V(359,function(){return Ub(b)}))}function Ub(a){zb(T,373,function(){Mb(a.h);Lb(a.h)});Tb().then(function(b){b.createAttributionCard(a.g);a.g.S=b;b.expandAttributionCard()});Ua()};Ta=60;function Vb(a){var b=[a];b=void 0===b?[]:b;q.google_logging_queue||(q.google_logging_queue=[]);q.google_logging_queue.push([11,b]);new Nb(a)}var W=["buildAttribution"],Y=q;W[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+W[0]);for(var Z;W.length&&(Z=W.shift());)W.length||void 0===Vb?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Vb;}).call(this);
