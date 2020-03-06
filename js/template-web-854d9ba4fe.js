/*! art-template@4.13.2 for browser | https://github.com/aui/art-template */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.template=t():e.template=t()}("undefined"!=typeof self?self:this,(function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";var r=n(6),i=n(2),o=n(22),s=function(e,t){t.onerror(e,t);var n=function(){return"{Template Error}"};return n.mappings=[],n.sourcesContent=[],n},u=function a(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};"string"!=typeof e?t=e:t.source=e,e=(t=i.$extend(t)).source,!0===t.debug&&(t.cache=!1,t.minimize=!1,t.compileDebug=!0),t.compileDebug&&(t.minimize=!1),t.filename&&(t.filename=t.resolveFilename(t.filename,t));var n=t.filename,u=t.cache,c=t.caches;if(u&&n){var l=c.get(n);if(l)return l}if(!e)try{e=t.loader(n,t),t.source=e}catch(d){var f=new o({name:"CompileError",path:n,message:"template not found: "+d.message,stack:d.stack});if(t.bail)throw f;return s(f,t)}var p=void 0,h=new r(t);try{p=h.build()}catch(f){if(f=new o(f),t.bail)throw f;return s(f,t)}var m=function(e,n){try{return p(e,n)}catch(f){if(!t.compileDebug)return t.cache=!1,t.compileDebug=!0,a(t)(e,n);if(f=new o(f),t.bail)throw f;return s(f,t)()}};return m.mappings=p.mappings,m.sourcesContent=p.sourcesContent,m.toString=function(){return p.toString()},u&&n&&c.set(n,m),m};u.Compiler=r,e.exports=u},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,t.matchToToken=function(e){var t={type:"invalid",value:e[0]};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t}},function(e,t,n){"use strict";function r(){this.$extend=function(e){return o(e=e||{},e instanceof r?e:this)}}var i=n(10),o=n(12),s=n(13),u=n(14),a=n(15),c=n(16),l=n(17),f=n(18),p=n(19),h=n(21),m={source:null,filename:null,rules:[f,l],escape:!0,debug:!!("undefined"==typeof window)&&"production"!==process.env.NODE_ENV,bail:!0,cache:!0,minimize:!0,compileDebug:!1,resolveFilename:h,include:s,htmlMinifier:p,htmlMinifierOptions:{collapseWhitespace:!0,minifyCSS:!0,minifyJS:!0,ignoreCustomFragments:[]},onerror:u,loader:c,caches:a,root:"/",extname:".art",ignore:[],imports:i};r.prototype=m,e.exports=new r},function(e,t){},function(e,t,n){"use strict";var r=n(5),i=n(0),o=n(23),s=function(e,t){return t instanceof Object?r({filename:e},t):i({filename:e,source:t})};s.render=r,s.compile=i,s.defaults=o,e.exports=s},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r(e,n)(t)}},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(7),a=n(9),c="$data",l="$imports",f="print",p="include",h="extend",m="block",d="$$out",v="$$line",g="$$blocks",y="$$slice",b="$$from",w="$$options",x=function(e,t){return Object.hasOwnProperty.call(e,t)},k=JSON.stringify,T=function(){function e(t){var n,s,u=this;o(this,e);var x=t.source,k=t.minimize,T=t.htmlMinifier;if(this.options=t,this.stacks=[],this.context=[],this.scripts=[],this.CONTEXT_MAP={},this.ignore=[c,l,w].concat(i(t.ignore)),this.internal=(r(n={},d,"''"),r(n,v,"[0,0]"),r(n,g,"arguments[1]||{}"),r(n,b,"null"),r(n,f,"function(){var s=''.concat.apply('',arguments);$$out+=s;return s}"),r(n,p,"function(src,data){var s="+w+".include(src,data||"+c+",arguments[2]||"+g+","+w+");"+d+"+=s;return s}"),r(n,h,"function(from){"+b+"=from}"),r(n,y,"function(c,p,s){p=$$out;$$out='';c();s=$$out;$$out=p+s;return s}"),r(n,m,"function(){var a=arguments,s;if(typeof a[0]==='function'){return "+y+"(a[0])}else if("+b+"){if(!"+g+"[a[0]]){"+g+"[a[0]]="+y+"(a[1])}else{"+d+"+="+g+"[a[0]]}}else{s="+g+"[a[0]];if(typeof s==='string'){"+d+"+=s}else{s="+y+"(a[1])}return s}}"),n),this.dependencies=(r(s={},f,[d]),r(s,p,[d,w,c,g]),r(s,h,[b,p]),r(s,m,[y,b,d,g]),s),this.importContext(d),t.compileDebug&&this.importContext(v),k)try{x=T(x,t)}catch(E){}this.source=x,this.getTplTokens(x,t.rules,this).forEach((function(e){e.type===a.TYPE_STRING?u.parseString(e):u.parseExpression(e)}))}return s(e,[{key:"getTplTokens",value:function(){return a.apply(undefined,arguments)}},{key:"getEsTokens",value:function(e){return u(e)}},{key:"getVariables",value:function(e){var t=!1;return e.filter((function(e){return"whitespace"!==e.type&&"comment"!==e.type})).filter((function(e){return"name"===e.type&&!t||(t="punctuator"===e.type&&"."===e.value,!1)})).map((function(e){return e.value}))}},{key:"importContext",value:function(e){var t=this,n="",r=this.internal,i=this.dependencies,o=this.ignore,s=this.context,u=this.options.imports,a=this.CONTEXT_MAP;x(a,e)||-1!==o.indexOf(e)||(x(r,e)?(n=r[e],x(i,e)&&i[e].forEach((function(e){return t.importContext(e)}))):n="$escape"===e||"$each"===e||x(u,e)?l+"."+e:c+"."+e,a[e]=n,s.push({name:e,value:n}))}},{key:"parseString",value:function(e){var t=e.value;if(t){var n=d+"+="+k(t);this.scripts.push({source:t,tplToken:e,code:n})}}},{key:"parseExpression",value:function(e){var t=this,n=e.value,r=e.script,i=r.output,o=this.options.escape,s=r.code;i&&(s=!1===o||i===a.TYPE_RAW?d+"+="+r.code:d+"+=$escape("+r.code+")");var u=this.getEsTokens(s);this.getVariables(u).forEach((function(e){return t.importContext(e)})),this.scripts.push({source:n,tplToken:e,code:s})}},{key:"checkExpression",value:function(e){for(var t=[[/^\s*}[\w\W]*?{?[\s;]*$/,""],[/(^[\w\W]*?\([\w\W]*?(?:=>|\([\w\W]*?\))\s*{[\s;]*$)/,"$1})"],[/(^[\w\W]*?\([\w\W]*?\)\s*{[\s;]*$)/,"$1}"]],n=0;n<t.length;){if(t[n][0].test(e)){var r;e=(r=e).replace.apply(r,i(t[n]));break}n++}try{return new Function(e),!0}catch(o){return!1}}},{key:"build",value:function(){var e=this.options,t=this.context,n=this.scripts,r=this.stacks,i=this.source,o=e.filename,s=e.imports,u=[],f=x(this.CONTEXT_MAP,h),m=0,y=function(e,t){var n=t.line,i=t.start,o={generated:{line:r.length+m+1,column:1},original:{line:n+1,column:i+1}};return m+=e.split(/\n/).length-1,o},T=function(e){return e.replace(/^[\t ]+|[\t ]$/g,"")};r.push("function("+c+"){"),r.push("'use strict'"),r.push(c+"="+c+"||{}"),r.push("var "+t.map((function(e){return e.name+"="+e.value})).join(",")),e.compileDebug?(r.push("try{"),n.forEach((function(e){e.tplToken.type===a.TYPE_EXPRESSION&&r.push(v+"=["+[e.tplToken.line,e.tplToken.start].join(",")+"]"),u.push(y(e.code,e.tplToken)),r.push(T(e.code))})),r.push("}catch(error){"),r.push("throw {"+["name:'RuntimeError'","path:"+k(o),"message:error.message","line:"+v+"[0]+1","column:"+v+"[1]+1","source:"+k(i),"stack:error.stack"].join(",")+"}"),r.push("}")):n.forEach((function(e){u.push(y(e.code,e.tplToken)),r.push(T(e.code))})),f&&(r.push(d+"=''"),r.push(p+"("+b+","+c+","+g+")")),r.push("return "+d),r.push("}");var E=r.join("\n");try{var $=new Function(l,w,"return "+E)(s,e);return $.mappings=u,$.sourcesContent=[i],$}catch(P){for(var O=0,j=0,_=0,C=void 0;O<n.length;){var S=n[O];if(!this.checkExpression(S.code)){j=S.tplToken.line,_=S.tplToken.start,C=S.code;break}O++}throw{name:"CompileError",path:o,message:P.message,line:j+1,column:_+1,source:i,generated:C,stack:P.stack}}}}]),e}();T.CONSTS={DATA:c,IMPORTS:l,PRINT:f,INCLUDE:p,EXTEND:h,BLOCK:m,OPTIONS:w,OUT:d,LINE:v,BLOCKS:g,SLICE:y,FROM:b,ESCAPE:"$escape",EACH:"$each"},e.exports=T},function(e,t,n){"use strict";var r=n(8),i=n(1)["default"],o=n(1).matchToToken;e.exports=function(e){return e.match(i).map((function(e){return i.lastIndex=0,o(i.exec(e))})).map((function(e){return"name"===e.type&&r(e.value)&&(e.type="keyword"),e}))}},function(e,t,n){"use strict";var r={abstract:!0,await:!0,boolean:!0,"break":!0,byte:!0,"case":!0,"catch":!0,char:!0,"class":!0,"const":!0,"continue":!0,"debugger":!0,"default":!0,"delete":!0,"do":!0,double:!0,"else":!0,"enum":!0,"export":!0,"extends":!0,"false":!0,final:!0,"finally":!0,float:!0,"for":!0,"function":!0,goto:!0,"if":!0,"implements":!0,"import":!0,"in":!0,"instanceof":!0,int:!0,"interface":!0,"let":!0,long:!0,native:!0,"new":!0,"null":!0,"package":!0,"private":!0,"protected":!0,"public":!0,"return":!0,short:!0,"static":!0,"super":!0,"switch":!0,synchronized:!0,"this":!0,"throw":!0,transient:!0,"true":!0,"try":!0,"typeof":!0,"var":!0,"void":!0,volatile:!0,"while":!0,"with":!0,yield:!0};e.exports=function(e){return r.hasOwnProperty(e)}},function(e,t,n){"use strict";function r(e){var t=new String(e.value);return t.line=e.line,t.start=e.start,t.end=e.end,t}function i(e,t,n){this.type=e,this.value=t,this.script=null,n?(this.line=n.line+n.value.split(/\n/).length-1,this.line===n.line?this.start=n.end:this.start=n.value.length-n.value.lastIndexOf("\n")-1):(this.line=0,this.start=0),this.end=this.start+this.value.length}var o=function(e,t){for(var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},o=[new i("string",e)],s=0;s<t.length;s++)for(var u=t[s],a=u.test.ignoreCase?"ig":"g",c=new RegExp(u.test.source,a),l=0;l<o.length;l++){var f=o[l],p=o[l-1];if("string"===f.type){for(var h=void 0,m=0,d=[],v=f.value;null!==(h=c.exec(v));)h.index>m&&(p=new i("string",v.slice(m,h.index),p),d.push(p)),p=new i("expression",h[0],p),h[0]=r(p),p.script=u.use.apply(n,h),d.push(p),m=h.index+h[0].length;m<v.length&&(p=new i("string",v.slice(m),p),d.push(p)),o.splice.apply(o,[l,1].concat(d)),l+=d.length-1}}return o};o.TYPE_STRING="string",o.TYPE_EXPRESSION="expression",o.TYPE_RAW="raw",o.TYPE_ESCAPE="escape",e.exports=o},function(e,t,n){"use strict";(function(t){/*! art-template@runtime | https://github.com/aui/art-template */
var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=Object.create(n),i=/["&'<>]/;r.$escape=function(e){return function(e){var t=""+e,n=i.exec(t);if(!n)return e;var r="",o=void 0,s=void 0,u=void 0;for(o=n.index,s=0;o<t.length;o++){switch(t.charCodeAt(o)){case 34:u="&#34;";break;case 38:u="&#38;";break;case 39:u="&#39;";break;case 60:u="&#60;";break;case 62:u="&#62;";break;default:continue}s!==o&&(r+=t.substring(s,o)),s=o+1,r+=u}return s!==o?r+t.substring(s,o):r}(function t(e){return"string"!=typeof e&&(e=e===undefined||null===e?"":"function"==typeof e?t(e.call(e)):JSON.stringify(e)),e}(e))},r.$each=function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)t(e[n],n);else for(var i in e)t(e[i],i)},e.exports=r}).call(t,n(11))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(r){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=Object.prototype.toString,i=function(e){return null===e?"Null":r.call(e).slice(8,-1)};e.exports=function o(e,t){var n=void 0,r=i(e);if("Object"===r?n=Object.create(t||{}):"Array"===r&&(n=[].concat(t||[])),n){for(var s in e)Object.hasOwnProperty.call(e,s)&&(n[s]=o(e[s],n[s]));return n}return e}},function(e,t,n){"use strict";e.exports=function(e,t,r,i){return n(0)(i=i.$extend({filename:i.resolveFilename(e,i),bail:!0,source:null}))(t,r)}},function(e,t,n){"use strict";e.exports=function(e){}},function(e,t,n){"use strict";var r={__data:Object.create(null),set:function(e,t){this.__data[e]=t},get:function(e){return this.__data[e]},reset:function(){this.__data={}}};e.exports=r},function(e,t,n){"use strict";var r="undefined"==typeof window;e.exports=function(e){if(r)return n(3).readFileSync(e,"utf8");var t=document.getElementById(e);return t.value||t.innerHTML}},function(e,t,n){"use strict";var r={test:/{{([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*}}/,use:function(e,t,n,i){this.options;var o=this.getEsTokens(i),s=o.map((function(e){return e.value})),u={},a=void 0,c=!!t&&"raw",l=n+s.shift();switch(l){case"set":i="var "+s.join("").trim();break;case"if":i="if("+s.join("").trim()+"){";break;case"else":var f=s.indexOf("if");~f?(s.splice(0,f+1),i="}else if("+s.join("").trim()+"){"):i="}else{";break;case"/if":i="}";break;case"each":(a=r._split(o)).shift(),"as"===a[1]&&a.splice(1,1),i="$each("+(a[0]||"$data")+",function("+(a[1]||"$value")+","+(a[2]||"$index")+"){";break;case"/each":i="})";break;case"block":(a=r._split(o)).shift(),i="block("+a.join(",").trim()+",function(){";break;case"/block":i="})";break;case"echo":l="print";case"print":case"include":case"extend":if(0!==s.join("").trim().indexOf("(")){(a=r._split(o)).shift(),i=l+"("+a.join(",")+")";break}default:if(~s.indexOf("|")){var p=o.reduce((function(e,t){var n=t.value,r=t.type;return"|"===n?e.push([]):"whitespace"!==r&&"comment"!==r&&(e.length||e.push([]),":"===n&&1===e[e.length-1].length||e[e.length-1].push(t)),e}),[]).map((function(e){return r._split(e)}));i=p.reduce((function(e,t){var n=t.shift();return t.unshift(e),"$imports."+n+"("+t.join(",")+")"}),p.shift().join(" ").trim())}c=c||"escape"}return u.code=i,u.output=c,u},_split:function(e){e=e.filter((function(e){var t=e.type;return"whitespace"!==t&&"comment"!==t}));for(var t=0,n=e.shift(),r=/\]|\)/,i=[[n]];t<e.length;){var o=e[t];"punctuator"===o.type||"punctuator"===n.type&&!r.test(n.value)?i[i.length-1].push(o):i.push([o]),n=o,t++}return i.map((function(e){return e.map((function(e){return e.value})).join("")}))}};e.exports=r},function(e,t,n){"use strict";e.exports={test:/<%(#?)((?:==|=#|[=-])?)[ \t]*([\w\W]*?)[ \t]*(-?)%>/,use:function(e,t,n,r){return n={"-":"raw","=":"escape","":!1,"==":"raw","=#":"raw"}[n],t&&(r="/*"+r+"*/",n=!1),{code:r,output:n}}}},function(e,t,n){"use strict";var r="undefined"==typeof window;e.exports=function(e,t){if(r){var i,o=n(20).minify,s=t.htmlMinifierOptions,u=t.rules.map((function(e){return e.test}));(i=s.ignoreCustomFragments).push.apply(i,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(u)),e=o(e,s)}return e}},function(e,t){!function(e){e.noop=function(){}}("object"==typeof e&&"object"==typeof e.exports?e.exports:window)},function(e,t,n){"use strict";var r="undefined"==typeof window,i=/^\.+\//;e.exports=function(e,t){if(r){var o=n(3),s=t.root,u=t.extname;if(i.test(e)){var a=t.filename,c=!a||e===a?s:o.dirname(a);e=o.resolve(c,e)}else e=o.resolve(s,e);o.extname(e)||(e+=u)}return e}},function(e,t,n){"use strict";var r=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.message));return n.name="TemplateError",n.message=function(e){var t=e.name,n=e.source,r=e.path,i=e.line,o=e.column,s=e.generated,u=e.message;if(!n)return u;var a=n.split(/\n/),c=Math.max(i-3,0),l=Math.min(a.length,i+3),f=a.slice(c,l).map((function(e,t){var n=t+c+1;return(n===i?" >> ":"    ")+n+"| "+e})).join("\n");return(r||"anonymous")+":"+i+":"+o+"\n"+f+"\n\n"+t+": "+u+(s?"\n   generated: "+s:"")}(e),Error.captureStackTrace&&Error.captureStackTrace(n,n.constructor),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Error),t}();e.exports=r},function(e,t,n){"use strict";e.exports=n(2)}])})),template.defaults.rules[0].test=/{%(#?)((?:==|=#|[=-])?)[ \t]*([\w\W]*?)[ \t]*(-?)%}/,Promise.all([fetch("/tpl.html?1").then((function(e){return e.text()}))]).then((function(e){if(e[0].length>2e3){var t=e[0],n={};n.mhpic=window.atob(temps).split("\r\n"),n.Title=Title,n.Clid=Clid,n.mhurl=mhurl,n.Url=Url,n.CTitle=CTitle,n.nexturl=nexturl;for(let e=0;e<n.mhpic.length;e++){n.mhpage=e;let r="index_"+e+".html",i=template.render(t,n);console.log;let o=new Blob([i],{type:"text/html"});caches.open("manhua").then((function(e){e.put(r,new Response(o,{headers:{"Content-Type":"text/html"}}))}))}}}));