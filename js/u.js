var ock = getCookie("picHost");
if (ock == "") {
document.writeln("<div class=\'speed\' data-url=\'http://p1.manhuapan.com\'></div>");
document.writeln("<div class=\'speed\' data-url=\'http://p2.manhuapan.com\'></div>");
document.writeln("<div class=\'speed\' data-url=\'http://p3.manhuapan.com\'></div>");
document.writeln("<div class=\'speed\' data-url=\'http://p5.manhuapan.com\'></div>");
document.writeln("<div class=\'speed\' data-url=\'http://p17.manhuapan.com\'></div>");
$(function() {
    var obj_n;
    var start_time;
    var ss=[]
    var mhserver =["p1.manhuapan.com","p2.manhuapan.com","p3.manhuapan.com","p5.manhuapan.com","p17.manhuapan.com"]
    var picLoad = function() {
        var end_time = new Date().getTime(); // 結束時間
        var pass_time = (end_time - start_time) + ' 毫秒';
        ss.unshift(end_time - start_time)
        //$('.speed').eq(obj_n).html(pass_time);
        nextTest();
    };
    var picError = function() {
        ss.unshift(99999)
        //$('.speed').eq(obj_n).html("無法連結");
        nextTest();
    };
    var nextTest = function() {
        ++obj_n;
        //$('.speed').eq(obj_n).html('測速中...');
        setTimeout(function() {
            testSpeed();
        }, 300);
    };

    function indexOfSmallest(a) {
        var lowest = 0;
        for (var i = 1; i < a.length; i++) {
            if (a[i] < a[lowest]) lowest = i;
        }
    return lowest;
}

    var testSpeed = function() {
        var obj = $('.speed').eq(obj_n);
        //console.log(obj.data('url'));
        
        if (obj.length != 1) {
            Array.prototype.min = function(){ 
return Math.min.apply({},this) 
}
            //console.log(ss)
            //console.log(indexOfSmallest(ss))
            //console.log(ss[indexOfSmallest(ss)]);
            addCookie("picHost", mhserver[indexOfSmallest(ss)],12);
            return false;
        }
        //obj.html('測速中...');
        // 建立 img 元素
        var pic = document.createElement('img');
        pic.onload = picLoad;
        pic.onerror = picError;
        start_time = new Date().getTime(); // 開始時間
        var m=100;
        var n=Math.floor(Math.random()*m)
        pic.src = obj.data('url') + '/2017/02/148816883875316.jpg?'+n;
        //console.log(ss)
    };
    $(function() {
        obj_n = 0;
        testSpeed();
    });

});
};
