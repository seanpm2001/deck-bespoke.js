!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},n={},i={},r={}.hasOwnProperty,o=/^\.\.?(\/|$)/,s=function(e,t){for(var n,i=[],r=(o.test(t)?e+"/"+t:t).split("/"),s=0,a=r.length;a>s;s++)n=r[s],".."===n?i.pop():"."!==n&&""!==n&&i.push(n);return i.join("/")},a=function(e){return e.split("/").slice(0,-1).join("/")},p=function(t){return function(n){var i=s(a(t),n);return e.require(i,t)}},l=function(e,t){var i=null;i=k&&k.createHot(e);var r={id:e,exports:{},hot:i};return n[e]=r,t(r.exports,p(e),r),r.exports},c=function(e){return i[e]?c(i[e]):e},u=function(e,t){return c(s(a(e),t))},f=function(e,i){null==i&&(i="/");var o=c(e);if(r.call(n,o))return n[o].exports;if(r.call(t,o))return l(o,t[o]);throw new Error("Cannot find module '"+e+"' from '"+i+"'")};f.alias=function(e,t){i[t]=e};var d=/\.[^.\/]+$/,b=/\/index(\.[^\/]+)?$/,m=function(e){if(d.test(e)){var t=e.replace(d,"");r.call(i,t)&&i[t].replace(d,"")!==t+"/index"||(i[t]=e)}if(b.test(e)){var n=e.replace(b,"");r.call(i,n)||(i[n]=e)}};f.register=f.define=function(e,i){if("object"==typeof e)for(var o in e)r.call(e,o)&&f.register(o,e[o]);else t[e]=i,delete n[e],m(e)},f.list=function(){var e=[];for(var n in t)r.call(t,n)&&e.push(n);return e};var k=e._hmr&&new e._hmr(u,f,t,n);f._cache=n,f.hmr=k&&k.wrap,f.brunch=!0,e.require=f}}(),function(){var e=window,t=function(e,t,n){var i={},r=function(t,n){var o;try{return o=e(n+"/node_modules/"+t)}catch(s){if(-1===s.toString().indexOf("Cannot find module"))throw s;if(-1!==n.indexOf("node_modules")){var a=n.split("/"),p=a.lastIndexOf("node_modules"),l=a.slice(0,p).join("/");return r(t,l)}}return i};return function(o){if(o in t&&(o=t[o]),o){if("."!==o[0]&&n){var s=r(o,n);if(s!==i)return s}return e(o)}}};require.register("bespoke-keys/lib/bespoke-keys.js",function(e,n,i){n=t(n,{},"bespoke-keys"),function(){i.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}}()}),require.register("bespoke-theme-cube/dist/bespoke-theme-cube.js",function(n,i,r){i=t(i,{},"bespoke-theme-cube"),function(){!function(t){if("object"==typeof n)r.exports=t();else if("function"==typeof define&&define.amd)define(t);else{var i;"undefined"!=typeof window?i=window:"undefined"!=typeof e?i=e:"undefined"!=typeof self&&(i=self);var o=i;o=o.bespoke||(o.bespoke={}),o=o.themes||(o.themes={}),o.cube=t()}}(function(){return function e(t,n,r){function o(a,p){if(!n[a]){if(!t[a]){var l="function"==typeof i&&i;if(!p&&l)return l(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var s="function"==typeof i&&i,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){var i=e("bespoke-classes"),r=e("insert-css");t.exports=function(){var e="*{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-transition:background .6s ease;transition:background .6s ease;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-theme-cube-slide-parent{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-perspective:600px;perspective:600px;pointer-events:none}.bespoke-slide{pointer-events:auto;-webkit-transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:#eaeaea;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;-webkit-transition:none;transition:none}}.bespoke-before{-webkit-transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px);transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px);transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1}.bespoke-bullet{-webkit-transition:all .3s ease;transition:all .3s ease}@media print{.bespoke-bullet{-webkit-transition:none;transition:none}}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:2px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:4px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{-webkit-transition:width .6s ease;transition:width .6s ease;position:absolute;height:100%;background:#0089f3;border-radius:0 4px 4px 0}.emphatic{background:#eaeaea}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:opacity .6s ease;transition:opacity .6s ease;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#404040}h1{font-size:72px;line-height:82px;letter-spacing:-2px;margin-bottom:16px}h2{font-size:42px;letter-spacing:-1px;margin-bottom:8px}h3{font-size:24px;font-weight:400;margin-bottom:24px;color:#606060}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}";return r(e,{prepend:!0}),function(e){i()(e);var t=function(e){var t=document.createElement("div");t.className="bespoke-theme-cube-slide-parent",e.parentNode.insertBefore(t,e),t.appendChild(e)};e.slides.forEach(t)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,r){var o=e.slides[e.slide()],s=r-e.slide(),a=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==o&&["inactive",a,a+"-"+Math.abs(s)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(r){e.slides.map(i),t(r.slide,"active"),n(r.slide,"inactive")})}}},{}],3:[function(e,t,n){var i={};t.exports=function(e,t){if(!i[e]){i[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var r=document.getElementsByTagName("head")[0];t&&t.prepend?r.insertBefore(n,r.childNodes[0]):r.appendChild(n)}}},{}]},{},[1])(1)})}()}),require.register("bespoke/lib/bespoke.js",function(e,n,i){n=t(n,{},"bespoke"),function(){var e=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),i=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),r=i[0],o={},s=function(e,t){i[e]&&(u("deactivate",f(r,t)),r=i[e],u("activate",f(r,t)))},a=function(e,t){return arguments.length?void(u("slide",f(i[e],t))&&s(e,t)):i.indexOf(r)},p=function(e,t){var n=i.indexOf(r)+e;u(e>0?"next":"prev",f(r,t))&&s(n,t)},l=function(e,t){return(o[e]||(o[e]=[])).push(t),c.bind(null,e,t)},c=function(e,t){o[e]=(o[e]||[]).filter(function(e){return e!==t})},u=function(e,t){return(o[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},f=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},d={on:l,off:c,fire:u,slide:a,next:p.bind(null,1),prev:p.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(d)}),s(0),d};i.exports={from:e}}()}),require.register("index.js",function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var r=t("./modules/deck"),o=i(r);e["default"]=function(){(0,o["default"])("#deck")}}),require.register("modules/deck.js",function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var r=t("bespoke"),o=i(r),s=t("bespoke-keys"),a=i(s),p=t("bespoke-theme-cube"),l=i(p),c=[(0,a["default"])(),(0,l["default"])()];e["default"]=function(e){o["default"].from(e,c)}}),require.alias("bespoke/lib/bespoke.js","bespoke"),require.alias("bespoke-theme-cube/dist/bespoke-theme-cube.js","bespoke-theme-cube"),require.alias("bespoke-keys/lib/bespoke-keys.js","bespoke-keys"),require.register("___globals___",function(e,t,n){})}(),require("___globals___");