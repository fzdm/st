function testing(){var n=getCookie("picHost");if(""==n||n==undefined||"undefined"==n){var t=1,a={},p=new Array;p[1]="http://p1.manhuapan.com",p[2]="http://p5.manhuapan.com",p[3]="http://p17.manhuapan.com",p[4]="http://www-mipengine-org.mipcdn.com/i/p3.manhuapan.com",p[5]="http://p6.manhuapan.com",function(){for(var n=1;n<p.length;n++){var o=new Image;o.onerror=function(n){return function(){a[p[n]]=new Date-a[p[n]],t&&(t=0,addCookie("picHost",p[n].replace("http://p5","https://p5"),720))}}(n),o.src=p[n]+"/2019/03/080518429922.jpg?"+Math.floor(10*Math.random()+1),a[p[n]]=+new Date}}()}}