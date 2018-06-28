var adtime=7200;
var adturn=3;
var adwait=0;
var ad_agent_id_arr=['0','0','0'];
var ad_agent_url_arr=['&cplaceid=7073','&cplaceid=7073','&cplaceid=7073'];
var gid_arr=['2','2','2'];
var adid_arr=['bdjp','oomc','vdrh'];

var cookie_name="336pop_7073";

if(!getcookie(cookie_name)){
	var cookie_turn="336turn_7073";
	var turn_string=getcookie(cookie_turn);
	var arr = js_range(adturn);
	var turn_arr = turn_string.split(",");
	if(!turn_string||turn_arr.length>=adturn){var turn = js_array_rand(arr);turn_string = turn;}else{var turn = js_array_rand(js_array_diff(arr,turn_arr));turn_string += ","+turn;}
	setcookie(cookie_name,1,adtime);
	setcookie(cookie_turn,turn_string,86400);
	var rand = turn+1;
	var gid=gid_arr[turn];
	var adid=adid_arr[turn];
	var adid_fixed_game_id_arr=['0','0','0'];
	if(typeof(main_game_id)!="undefined"){
		if(adid_fixed_game_id_arr[turn] != 0){
			gid = adid_fixed_game_id_arr[turn];
		}else{
			if(main_game_id != 0){
					gid = main_game_id;
			}else{
					gid= gid_arr[turn];
			}
		}
	}
	var ad_agent_id=ad_agent_id_arr[turn];
	var ad_agent_url=ad_agent_url_arr[turn];
    //var gourl="http://pop.ierge.cn/flash/"+adid+"/index.html?agent_id=3809&sid=7073&type=1&game_id="+gid+"&aid="+adid+"&rand="+rand+"&tid=0&t="+Math.random();
	//gourl=(ad_agent_id=='0'||ad_agent_id=='') ? gourl : ad_agent_url;
	
	var ref=_XSiteurl_();
	var referer=_Xref_();
	//var paypopupURL=gourl+"&referer="+referer+"&ref="+ref;
	var	paypopupURL ="//game.weibo.com/spread/s/a/933394baeac6a03a";

	var oP = Xobjpop(paypopupURL);
	oP.open();
	
}

function _Xref_(){var r;try{r=window.top.document.referrer}catch(e){r=document.referrer};if(r){return escape(r)}else{return""}}
function _XSiteurl_(){var s;try{s=window.top.document.location.href}catch(e){s=document.location.href};if(s){return escape(s)}else{return""}}
function getcookie(cName){var search=cName+"=";var returnvalue="";if(document.cookie.length>0){offset=document.cookie.indexOf(search);if(offset!=-1){offset+=search.length;end=document.cookie.indexOf(";",offset);if(end==-1){end=document.cookie.length}returnvalue=unescape(document.cookie.substring(offset,end))}}return returnvalue}
function setcookie(cName,value,cookie_time){var then=new Date();then.setTime(then.getTime()+cookie_time*1000);document.cookie=cName+'='+value+';expires='+then.toGMTString()+';path=/;'}
function Xobjpop(url){var obj=new Object;obj.isop=0;obj.w=window;obj.d=document;obj.width=screen.width;obj.height=screen.height;obj.userAgent=navigator.userAgent.toLowerCase();obj.url=url;obj.openstr="width="+obj.width+",height="+obj.height+",toolbar=1,location=1,titlebar=1,menubar=1,scrollbars=1,resizable=1,directories=1,status=1";obj.browser={version:(obj.userAgent.match(/(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(obj.userAgent),opera:/opera/.test(obj.userAgent),ie:/msie/.test(obj.userAgent)&&!/opera/.test(obj.userAgent),max:/maxthon/.test(obj.userAgent),se360:/360/.test(obj.userAgent),tw:/theworld/.test(obj.userAgent),tt:/tencenttraveler/.test(obj.userAgent),ttqq:/QQBrowser/.test(obj.userAgent),tt5:/qqbrowser/.test(obj.userAgent),sg:/se /.test(obj.userAgent),ff:/mozilla/.test(obj.userAgent)&&!/(compatible|webkit)/.test(obj.userAgent)};obj.open=function(){if(obj.browser.ie){if(!document.getElementById("_launchURL_"))document.write("<object id=_launchURL_ width=0 height=0 classid=CLSID:6BF52A52-394A-11D3-B153-00C04F79FAA6></object>");if(!document.getElementById("_DOMScript_"))document.write("<object id=_DOMScript_ style=position:absolute;left:1px;top:1px;width:1px;height:1px; classid=clsid:2D360201-FFF5-11d1-8D03-00A0C959BC0A></object>")};if(!obj.browser.ie&&!obj.browser.ff){obj.c()}else{try{if(obj.isop)return;obj.o1=window.open(obj.url,"_blank",obj.openstr+",left=0,top=0")}catch(err){obj.o1=""};if(obj.o1){obj.w.focus();obj.isop=1}else{if(obj.browser.ie){try{if(obj.browser.sg){obj.dsp()}else if(obj.browser.ttqq||obj.browser.max||obj.browser.se360||obj.browser.tw||obj.browser.tt||obj.browser.version=="7.0"||obj.browser.version=="8.0"||obj.browser.version=="9.0"){setTimeout(obj.lop,200)}else{obj.iev6=true;obj.dsp()}}catch(err){obj.c()}}else{obj.c()}}};setTimeout(obj.nt,400);if(!obj.isop)obj.ab=setInterval(obj.c,1000)};obj.nt=function(){if(obj.isop==0){if(obj.iev6)obj.dsp();else obj.lop()}};obj.dsp=function(){if(obj.isop)return null;try{setTimeout(function(){document.getElementById("_DOMScript_").DOM.Script.open(obj.url,"_blank",obj.openstr);obj.w.focus();obj.isop=1},200)}catch(err){}};obj.lop=function(){if(obj.isop)return null;try{document.getElementById("_launchURL_").launchURL(obj.url);obj.isop=1}catch(err){obj.isop=0}};obj.lap=function(){if(obj.browser.ie&&obj.isop==0){if(window.attachEvent){window.attachEvent("onload",function(){obj.lop()})}else{if(window.addEventListener){window.addEventListener("load",function(){obj.lop()},true)}else{window.onload=function(){obj.lop()}}}}};obj.c=function(){if(obj.isop){clearInterval(obj.ab);obj.d.onclick=null;return null};obj.d.onclick=function(){if(obj.isop)return;obj.isop=1;obj.o2=window.open(obj.url,"_blank",obj.openstr+",left=0,top=0");obj.w.focus();if(obj.o2){obj.d.onclick=null;clearInterval(obj.ab);obj.isop=1}}};return obj}
function js_array_rand(arr){return arr[parseInt(arr.length*Math.random())];}
function js_range(num){var arr=new Array();for(i=0;i<num;i++){arr.push(i);}return arr;}
function js_array_diff(arr1,arr2){var arr3=new Array();for(i=0;i<arr1.length;i++){var flag=true;for(j=0;j<arr2.length;j++){if(arr1[i]==arr2[j])flag=false;}if(flag)arr3.push(arr1[i]);}return arr3;}
