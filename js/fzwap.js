var mypics =
  [{
    img: "https://static.fffdm.com/114/20762ef529853be7.jpg",
    url: "https://m.dingdingyuedu.com/bejita.html"
  },
  {
    img: "https://static.fffdm.com/114/20762ef529853be7.jpg",
    url: "https://m.dingdingyuedu.com/bejita.html"
  }, {
    img: "https://static.fffdm.com/114/20762ef529853be7.jpg",
    url: "https://m.dingdingyuedu.com/bejita.html"
  }
  ];
var myrand = Math.round(Math.random() * 2);
var randPicc = mypics[myrand];
document.writeln("<div><a href='" + randPicc.url + "' target='_blank'><img src='" + randPicc.img + "' style='width:100%;height:auto;'></a></div>");