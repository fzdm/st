function testing() {
    var ock = getCookie("picHost");
    if (ock == "" || ock == undefined || ock == 'undefined') {
        var jump = 1, t = {}, autourl = new Array();
        autourl[1] = "http://p1.manhuapan.com";
        autourl[2] = "http://p5.manhuapan.com";
        autourl[3] = "http://p17.manhuapan.com";
        autourl[4] = "http://www-mipengine-org.mipcdn.com/i/p2.manhuapan.com";
        autourl[5] = "http://p2.manhuapan.com";
        (function () {
            for (var i = 1; i < autourl.length; i++) {
                var img = new Image;
                img.onerror = (function (j) {
                    return function () {
                        t[autourl[j]] = (new Date()) - t[autourl[j]];
                        if (jump) {
                            jump = 0;
                            addCookie("picHost", autourl[j].replace("http://", ""), 24*30);
                        }
                    }
                })(i);
                img.src = autourl[i] + "/2019/03/080518429922.jpg?" + Math.floor((Math.random() * 10) + 1);
                t[autourl[i]] = (+new Date());
            }
        })();
    }
};