var siteID = 0;
var curIndex = GetArgsFromHref(window.location.href, "p");
var p = curIndex;
if(curIndex=="")
    curIndex = 1;
function getHost() {
    return 0;
    var host = getCookie("picHost");
    if (host == "") {
        addCookie("picHost", 0, 24 * 365);
        return 0;
    }
    else
    {
        if(host>=0&&host<=2)
            return host;
        return 0;
    }
}

function reload()
{
	var pic1 = document.getElementById('mhpic');
        pic1.src = hosts[getHost()]+picAy[curIndex-1];
        if(curIndex<picAy.length){
            var pic2 = document.createElement("img");
            pic2.src = hosts[getHost()] + picAy[curIndex];
            pic2.style.display = "none";
            }
        pic1.onerror = function(){
        };
	//scroll(0,0);
	$('html, body').animate({scrollTop:0}, 200 );
    /*
    var ad4 = document.getElementById("footlead2");
	while (ad4.firstChild) {
	  ad4.removeChild(ad4.firstChild);
	}

	var ifm2 = document.createElement("iframe");
	ifm2.src= "https://static.fzdm.com/2-1.html";
	ifm2.marginWidth = 0;
	ifm2.marginHeight=0;
	ifm2.frameBorder = 0;
	ifm2.width = 730;
	ifm2.height = 90;
	ifm2.scrolling = "no";
	ad4.appendChild(ifm2);
    */
	InitialList();
}

function reloadAbleJSFn(id,newJS)
{
var oldjs = null;
var t = null;
var oldjs = document.getElementById(id);
//alert(oldjs.innerHTML);
while (oldjs.firstChild) {
  oldjs.removeChild(oldjs.firstChild);
}
//if(oldjs) oldjs.parentNode.removeChild(oldjs);
var scriptObj = document.createElement("script");
scriptObj.src = newJS;
scriptObj.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(scriptObj);
}

function addCookie(name, value, expiresHours) {
    var cookieString = name + "=" + escape(value);
    //判断是否设置过期时间
    if (expiresHours > 0) {
        var date = new Date();
        date.setTime(date.getTime() + expiresHours * 3600 * 1000);
        cookieString = cookieString + ";path=/;expires=" + date.toGMTString()+";domain=fzdm.com";
    }
    document.cookie = cookieString;
}
function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == name) return arr[1];
    }
    return "";
}
function changeHost(hostid) {
    addCookie("picHost", hostid, 24 * 365);
    location.href = location.href;
}

function HostInfo() {
    var host = getHost();
    var info;
    if (host == 1)
        info = "<a href=\"javascript:changeHost(0);\">自 动</a><span>电 信</span><a href=\"javascript:changeHost(2);\">联 通</a>";
    else if(host==2)
        info = "<a href=\"javascript:changeHost(0);\">自 动</a><a href=\"javascript:changeHost(1);\" style=\"margin-right:5px;\">电 信</a><span>联 通</span>";
    else info = "<span>自 动</span><a href=\"javascript:changeHost(1);\" style=\"margin-right:5px;\">电 信</a><a href=\"javascript:changeHost(2);\">联 通</a>";
    document.write(info);
}

function NextPage()
{
    if(curIndex<picCount){
        curIndex++;
	p = GetArgsFromHref(window.location.href, "p");
	if(p=="")
		window.location.href = "#p="+curIndex;
	else window.location.href = window.location.href.replace(/p=(\d+)/i,"p="+curIndex);
	reload();

    }
    else void 0;
}
function NextVolume()
{
    window.location.href = nextVolume;
}
function PrePage()
{
    if(curIndex>1){
	curIndex--;
	window.location.href = window.location.href.replace(/p=(\d+)/i,"p="+curIndex);
	reload();
    }
    else void 0;
}

function FirstPage()
{
    if(curIndex!=1){
	curIndex = 1;
	window.location.href = window.location.href.replace(/p=(\d+)/i,"p="+curIndex);
	reload();
    }
    else void 0;
}
function LastPage()
{
    if(curIndex!=picCount){
	curIndex = picCount;
	if(p=="")
		window.location.href = window.location.href+"#p="+curIndex;
	else window.location.href = window.location.href.replace(/p=(\d+)/i,"p="+curIndex);
	reload();
    }
    else void 0;
}
function GoSelPage()
{
    if(curIndex!=document.getElementById("pageSel").value){
	curIndex = document.getElementById("pageSel").value;
	if(p=="")
		window.location.href = window.location.href+"#p="+curIndex;
	else window.location.href = window.location.href.replace(/p=(\d+)/i,"p="+curIndex);
	reload();
    }

}
function GoPage(pi)
{
	curIndex = pi;
	p = GetArgsFromHref(window.location.href, "p");
	if(p=="")
		window.location.href = window.location.href+"#p="+pi;
	else window.location.href = window.location.href.replace(/p=(\d+)/i,"p="+pi);
	reload();
}
function InitialList()
{
    document.getElementById("CurrentPage").innerHTML = curIndex;
    document.getElementById("TotalPage").innerHTML = picCount;
    var i;
    for(i = 1;i<=picCount;i++)
    {
	document.getElementById("pageSel").options[i-1] = new Option('第'+i+'页',i);
    }
    document.getElementById("pageSel").value = curIndex;

        var pages = "";
        if(picCount<=12)
        {
            for(var pi=1;pi<=picCount;pi++)
            {
                if(pi!=curIndex)
                    pages+=("<a href=\"javascript:GoPage("+pi+");\" class=\"page_fleet\">"+pi+"</a>");
                else pages+=("<span id=\"mhona\">"+pi+"</span>");
            }
        }
        else
        {
            if(curIndex<=7)
            {
                for(pi=1;pi<=10;pi++)
                {
                    if(pi!=curIndex)
                        pages+=("<a href=\"javascript:GoPage("+pi+");\" class=\"page_fleet\">"+pi+"</a>");
                    else pages+=("<span id=\"mhona\">"+pi+"</span>");
                }
                pages+="……&nbsp;&nbsp;";
                for(pi=picCount-1;pi<=picCount;pi++)
                    pages+=("<a href=\"javascript:GoPage("+pi+");\" class=\"page_fleet\">"+pi+"</a>");
            }
            else if(curIndex<picCount-6&&curIndex>7)
            {
                for(pi=1;pi<=3;pi++)
                    pages+=("<a href=\"javascript:GoPage("+pi+");\" class=\"page_fleet\">"+pi+"</a>");
                pages+="……&nbsp;&nbsp;";
                for(pi=curIndex-3;pi<=(parseInt(curIndex)+3);pi++)
                {
                    if(pi!=curIndex)
                        pages+=("<a href=\"javascript:GoPage("+pi+");\" class=\"page_fleet\">"+pi+"</a>");
                    else pages+=("<span id=\"mhona\">"+pi+"</span>");
                }
                pages+="……&nbsp;&nbsp;";
                for(pi=picCount-1;pi<=picCount;pi++)
                    pages+=("<a href=\"javascript:GoPage("+pi+");\" class=\"page_fleet\">"+pi+"</a>");
            }
            else
            {
                for(pi=1;pi<=3;pi++)
                    pages+=("<a href=\"javascript:GoPage("+pi+");\" class=\"page_fleet\">"+pi+"</a>");
                pages+="……&nbsp;&nbsp;";
                for(pi=curIndex-3;pi<=picCount;pi++)
                {
                    if(pi!=curIndex)
                        pages+=("<a href=\"javascript:GoPage("+pi+");\" class=\"page_fleet\">"+pi+"</a>");
                    else pages+=("<span id=\"mhona\">"+pi+"</span>");
                }
            }
        }
        document.getElementById("Pages").innerHTML = pages;
}
function GetArgsFromHref(sHref, sArgName)
{
    var args = sHref.split("#");
    var retval = "";

    if(args[0] == sHref) /*参数为空*/
    {
        return retval; /*无需做任何处理*/
    }
    var str = args[1];
    args = str.split("&");
    for(var i = 0; i < args.length; i ++)
    {
        str = args[i];
        var arg = str.split("=");
        if(arg.length <= 1) continue;
        if(arg[0] == sArgName) retval = arg[1];
    }
    return retval;
}
function HandlingNothing(info)
{
   //do nothing
}
