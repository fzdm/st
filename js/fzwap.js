


  var sUserAgent= navigator.userAgent.toLowerCase();
    var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp= sUserAgent.match(/midp/i) == "midp";
    var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid= sUserAgent.match(/android/i) == "android";
    var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
if(bIsIphoneOs || bIsIpad){
//��iOS  pad ��ʾ���
var mypics=new Array("https://jy.ggweb.net/ikanman/640-1.jpg","https://jy.ggweb.net/ikanman/640-2.jpg","https://jy.ggweb.net/ikanman/640-4.jpg","https://jy.ggweb.net/ikanman/640-3.jpg","https://jy.ggweb.net/ikanman/640-3.jpg","https://jy.ggweb.net/ikanman/640-4.jpg");
var myrand = Math.ceil(Math.random() * 5);
var randPic = mypics[myrand];
var linkUrl = "https://itunes.apple.com/cn/app/bo-luo-bao-qing-xiao-shuo/id928785539";
document.writeln("<div><a href='"+linkUrl+"' target='_blank'><img src='"+randPic+"' style='width:100%;height:auto;'></a></div>");
   }
else
{  
//android ��ʾ���
var mypics=new Array("https://jy.ggweb.net/ikanman/640-1.jpg","https://jy.ggweb.net/ikanman/640-2.jpg","https://jy.ggweb.net/ikanman/640-4.jpg","https://jy.ggweb.net/ikanman/640-3.jpg","https://jy.ggweb.net/ikanman/640-3.jpg","https://jy.ggweb.net/ikanman/640-4.jpg");
var myrand = Math.ceil(Math.random() * 5);
var randPic = mypics[myrand];
var linkUrl = "https://rss.sfacg.com/app/down/android/boluobao_v3.2.28-VChannel1.apk";
document.writeln("<div><a href='"+linkUrl+"' target='_blank'><img src='"+randPic+"' style='width:100%;height:auto;'></a></div>");
}



