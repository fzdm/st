//document.writeln('<script src="https://s16.cnzz.com/stat.php?id=3219973&web_id=3219973" language="JavaScript"></script>');
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-2084845-1']);
  _gaq.push(['_setDomainName', 'fzdm.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
/**↑↑网站统计代码↑↑**/

if ($.cookie('bg'))
{
$("body").css({"background":"black",color: "#fff"});
$("a").css({color: "#fff"});
$("a:active").css({color: "#fff"});
$("#share a").css({color: "#fff"});
$("#fzdmcom").css({"background-color": "black"});
}

$('a.bg').click(function() {
$.cookie('bg', '1',{ expires: 365, path: '/' ,domain: 'fzdm.com'});
$("body").css({"background":"black",color: "#fff"});
$("a").css({color: "#999"});
$("#share a").css({color: "#fff"});
});
$('a.bg1').click(function() {
$.cookie('bg', null,{path: '/' ,domain: 'fzdm.com'});
$("body").css({"background":"#fff",color: "#333"});
$("a").css({color: "#333"});
$("#share a").css({color: "#333"});
});