var mypics =
  [{
    img: "https://349upload.3a4b5c.com/data/upload/narutoads/640X150/ad_44.jpg",
    url: "https://h5.3a4b5c.com/channel/index/channel_id/1/page/1?aid=44"
  },
  {
    img: "https://349upload.3a4b5c.com/data/upload/narutoads/640X150/ad_45.jpg",
    url: "https://h5.3a4b5c.com/channel/index/channel_id/1/page/1?aid=45"
  }, {
    img: "https://349upload.3a4b5c.com/data/upload/narutoads/640X150/ad_58.gif",
    url: "https://h5.3a4b5c.com/channel/index/channel_id/1/page/1?aid=58"
  }
  ];
var myrand = Math.round(Math.random() * 2);
var randPicc = mypics[myrand];
document.writeln("<div><a href='" + randPicc.url + "' target='_blank'><img src='" + randPicc.img + "' style='width:100%;height:auto;'></a></div>");