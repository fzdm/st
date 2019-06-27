function testing() {
    var ock = getCookie("picHost");
    if (ock == "" || ock == undefined || ock == 'undefined') {

        var container = document.getElementById("speed");
        container.innerHTML = `
    <div class=\'speed\' data-url=\'http://p1.manhuapan.com\'></div>
        <div class=\'speed\' data-url=\'http://www-mipengine-org.mipcdn.com/i/p1.manhuapan.com/\'></div>
        <div class=\'speed\' data-url=\'http://p5.manhuapan.com\'></div>
        <div class=\'speed\' data-url=\'http://p2.manhuapan.com\'></div>
        <div class=\'speed\' data-url=\'http://p3.manhuapan.com\'></div>
        <div class=\'speed\' data-url=\'http://p17.manhuapan.com\'></div>
    `;
        $(function () {
            var obj_n;
            var start_time;
            var ss = []
            var mhserver = [
                "p1.manhuapan.com",
                "www-mipengine-org.mipcdn.com/i/p1.manhuapan.com",
                "p2.manhuapan.com",
                "p3.manhuapan.com",
                "p5.manhuapan.com",
                "p17.manhuapan.com"
            ]
            var picLoad = function () {
                var end_time = new Date().getTime(); // 結束時間
                var pass_time = (end_time - start_time) + ' 毫秒';
                ss.push(end_time - start_time);
                //$('.speed').eq(obj_n).html(pass_time);
                nextTest();
            };
            var picError = function () {
                ss.push(99999)
                //$('.speed').eq(obj_n).html("無法連結");
                nextTest();
            };
            var nextTest = function () {
                ++obj_n;
                //$('.speed').eq(obj_n).html('測速中...');
                setTimeout(function () {
                    testSpeed();
                }, 300);
            };

            function indexOfSmallest(a) {
                return a.indexOf(Math.min.apply(Math, a));
            }

            var testSpeed = function () {
                var obj = $('.speed').eq(obj_n);
                //console.log(obj.data('url'));

                if (obj.length != 1) {
                    Array.prototype.min = function () {
                        return Math
                            .min
                            .apply({}, this);
                    }
                    // obj.html(mhserver[indexOfSmallest(ss)]);
                    // console.log(ss,obj.data('url'),mhserver[indexOfSmallest(ss)]) console.log(ss)
                    // console.log(indexOfSmallest(ss)) console.log(ss[indexOfSmallest(ss)]);
                    addCookie("picHost", mhserver[indexOfSmallest(ss)], 12);
                    return false;
                }
                // console.log(obj,obj_n,obj.data('url'))
                // obj.html(mhserver[indexOfSmallest(ss)]+'測速中...'); //建立 img 元素
                var pic = document.createElement('img');
                pic.onload = picLoad;
                pic.onerror = picError;
                start_time = new Date().getTime(); // 開始時間
                var m = 100;
                var n = Math.floor(Math.random() * m);
                if (obj.data('url').indexOf("mipengine") != -1) {
                    n = 1;
                }
                pic.src = obj.data('url') + '/2019/03/080518429922.jpg?' + n;
                //console.log(ss)
            };
            $(function () {
                obj_n = 0;
                testSpeed();
            });

        });
    }
};