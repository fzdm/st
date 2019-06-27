var mypics=new Array("https://rs.sfacg.com/web/spread/images/02.png","https://rs.sfacg.com/web/spread/images/03.png","https://rs.sfacg.com/web/spread/images/04.png","https://rs.sfacg.com/web/spread/images/01.png","https://rs.sfacg.com/web/spread/images/02.png","https://rs.sfacg.com/web/spread/images/03.png");
var myrand = Math.ceil(Math.random() * 6);
var randPicc = mypics[myrand];
var linkUrl = "https://at.umeng.com/onelink/zqGLDa";
document.writeln("<div><a href='"+linkUrl+"' target='_blank'><img src='"+randPicc+"' style='width:100%;height:auto;'></a></div>");