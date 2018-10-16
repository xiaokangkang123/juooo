var data=[
    {
        img:"http://image.juooo.com/group1/M00/02/25/rAoKNVuFCpKAWuLcAAB7DEA-pe4291.jpg",
        title:"OLive橄榄现场呈现·2018杨乃文“BACK TO FAITH+”信念回归巡回演唱会",
        time:"时 间：2018.10.17 20:00",
        place:"场 馆： [重庆] 重庆江南体育中心体育馆",
        price:"280~888"
    },
    {
        img:"http://image.juooo.com/group1/M00/02/3F/rAoKNVu9b_OANkqAAACT4-si7Xk206.jpg",
        title:"JINLONGGUO 金龙国 1st FAN MEETING 'Friday n Night' in HOvfknbjbnjbn",
        time:"时 间：2018.11.15 20:00",
        place:"场 馆：  [香港] 九龙湾国际展贸中心6楼展贸厅3",
        price:"280~888"
    },
    {
        img:"http://image.juooo.com/group1/M00/01/82/rAoKmVuQ672AcVyCAABe0vF40CU084.jpg",
        title:"2018简单生活节 武汉站 Simple Fire",
        time:"时 间：2018.12.15 15:00",
        place:"场 馆：  [武汉] 武汉蔡甸区花博汇",
        price:"280~520"
    },
    {
        img:"http://image.juooo.com/group1/M00/02/37/rAoKNVupkGGAZNlXAADpfSvA8Kk565.jpg",
        title:"谭咏麟银河岁月40载巡回演唱会-梧州站",
        time:"时 间：2018.10.17 20:00",
        place:"场 馆：  [梧州] 梧州市体育中心体育场",
        price:"380~1280"
    },
    {
        img:"http://image.juooo.com/group1/M00/01/78/rAoKmVt_cPOAcls2AADCvs4XXbA709.jpg",
        title:"2018张韶涵“旅程“世界巡回演唱会—金华站",
        time:"时 间：2018.10.19 21:00",
        place:"场 馆：  [金华] 金华市体育中心体育馆",
        price:"399~1399"
    },
    {
        img:"http://image.juooo.com/group1/M00/02/37/rAoKNVuqBGWAFUwnAACOUjL3T48880.jpg",
        title:"第十二届咪咕汇年度最佳人气新人提名 吴奇专辑首唱会-北京站",
        time:"时 间：2018.11.15 20:00",
        place:"场 馆：  [北京] 壹空间 THE ONE CLUB",
        price:"120"
    },
]
var btn=document.getElementById("pop");
var list=document.getElementById("list")
var html="";
for(i=0;i<data.length;i++){
    // console.log(data[i].image,data[i].title,data[i].price)
    html+=
    "<li class='render-li clearfix'>"+
        '<div class="render-li-left">'+
           '<img src="'+data[i].img+'" alt="" class="render-img">'+
        '</div>'+
        '<div class="render-li-center">'+
            '<p class="render-center-p">'+
                '<a href="../detail.html" class="render-center-a">'+
                    data[i].title+
                '</a>'+
            '</p>'+
            '<p class="render-center-p2">'+data[i].time+'</p>'+
            '<p class="render-center-p2">'+data[i].place+'</p>'+
            '<p class="render-center-p2">'+
                '<span class="render-center-span1">票价：￥</span>'+
                '<span class="render-center-span2">'+data[i].price+'</span>'+
            '</p>'+
        '</div>'+
        '<div class="render-li-right">'+
            '<span class="render-right-span1">立即购票</span>'+
            '<span class="render-right-span2">+ 关注</span>'+
        '</div>'+
    "</li>"
}
list.innerHTML=html;

