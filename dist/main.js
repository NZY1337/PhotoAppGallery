!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){(function(e){var n=e&&e.pid?e.pid.toString(36):"";function r(){var t=Date.now(),e=r.last||t;return r.last=t>e?t:e+1}t.exports=t.exports.default=function(t){return(t||"")+""+n+r().toString(36)},t.exports.process=function(t){return(t||"")+n+r().toString(36)},t.exports.time=function(t){return(t||"")+r().toString(36)}}).call(this,n(1))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:l}catch(t){r=l}}();var u,c=[],a=!1,p=-1;function f(){a&&u&&(a=!1,u.length?c=u.concat(c):p=-1,c.length&&y())}function y(){if(!a){var t=s(f);a=!0;for(var e=c.length;e;){for(u=c,c=[];++p<e;)u&&u[p].run();p=-1,e=c.length}u=null,a=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function h(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||a||s(y)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){"use strict";n.r(e);var r=n(0);const o=n.n(r)()();var i;console.log(o),console.log((i="Andrei",void console.log(`${i} is my brother`)));const l=document.querySelector("#signUpForm"),s=document.querySelector("#registerForm");!function(){const t=document.querySelector(".navBar__open-buton"),e=t.querySelector("span:first-child"),n=t.querySelector("span:nth-child(2)"),r=t.querySelector("span:nth-child(3)"),o=t.querySelector("span:last-child"),i=(t.childNodes,"all .5s"),l={top:0,right:"5px",transition:"all 1s"},s={top:0,right:"20px"},u={top:"15px",right:"5px"},c={top:"15px",right:"20px"};t.addEventListener("mouseenter",t=>{e.style.top="0px",e.style.transition=i,e.style.right="0px",n.style.top="0px",n.style.right="0px",n.style.transition=i,r.style.top="0px",r.style.right="0px",r.style.transition=i,o.style.top="0px",o.style.right="0px",o.style.transition=i}),t.addEventListener("mouseleave",()=>{e.style.top=l.top,e.style.right=l.right,n.style.top=s.top,n.style.right=s.right,r.style.top=u.top,r.style.right=u.right,o.style.top=c.top,o.style.right=c.right})}(),function(){const t=document.querySelector("#login-title"),e=document.querySelector("#signup-title");l.style.animation="delayOpac1 1s linear forwards",s.style.animation="delayOpac1 1s linear forwards",s.style.display="none",l.style.display="block",t.addEventListener("click",()=>{l.style.display="none",s.style.display="block"}),e.addEventListener("click",()=>{l.style.display="block",s.style.display="none",document.styleSheets[0].insertRule("\n           h2 {\n               color:red;\n           }\n        ",0)})}()}]);