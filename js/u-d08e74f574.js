var ock=getCookie("picHost");""==ock&&(document.writeln("<div class='speed' data-url='http://p1.xiaoshidi.net'></div>"),document.writeln("<div class='speed' data-url='http://p2.xiaoshidi.net'></div>"),document.writeln("<div class='speed' data-url='http://p3.xiaoshidi.net'></div>"),document.writeln("<div class='speed' data-url='http://p17.xiaoshidi.net'></div>"),$(function(){var t,i,e=[],n=["p1.xiaoshidi.net","p2.xiaoshidi.net","p3.xiaoshidi.net","p17.xiaoshidi.net"],a=function(){var t=(new Date).getTime();e.unshift(t-i),d()},o=function(){e.unshift(99999),d()},d=function(){++t,setTimeout(function(){r()},300)};var r=function(){var d=$(".speed").eq(t);if(1!=d.length)return Array.prototype.min=function(){return Math.min.apply({},this)},addCookie("picHost",n[function(t){for(var i=0,e=1;e<t.length;e++)t[e]<t[i]&&(i=e);return i}(e)],12),!1;var r=document.createElement("img");r.onload=a,r.onerror=o,i=(new Date).getTime();var s=Math.floor(100*Math.random());r.src=d.data("url")+"/2017/02/148816883875316.jpg?"+s};$(function(){t=0,r()})}));