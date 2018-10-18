var oSmall=document.getElementById("small");
var oFrame=document.getElementById("frame");
var oBig=document.getElementById("big");
var smallImg=document.getElementById("smallImg");
var bigImg=document.getElementById("bigImg");
oSmall.onmouseenter=function(){
    oFrame.style.display="block";
    oBig.style.display="block";
    // smallImg.style.opacity=0.3;
}
oSmall.onmouseleave=function(){
    oFrame.style.display="none";
    oBig.style.display="none";
    // smallImg.style.opacity=1;
}
oSmall.onmousemove=function(event){
    // 获取定位的X,Y值
    var e=event||window.event;
    var offsetX=e.offsetX;
    var offsetY=e.offsetY;
    var nLeft=offsetX-60;
    var nTop=offsetY-60;
    // 边界检测
    nLeft=nLeft<0?0:nLeft;
    nTop=nTop<0?0:nTop;
    // 最大值
    var maxLeft=oSmall.offsetWidth-oFrame.offsetWidth;
    var maxTop=oSmall.offsetHeight-oFrame.offsetHeight;
    nLeft=nLeft>maxLeft?maxLeft:nLeft;
    nTop=nTop>maxTop?maxTop:nTop;
    //元素位置；
    oFrame.style.left=nLeft+"px";
    oFrame.style.top=nTop+"px";
    //大盒子位置；
    // 按比例移动
    var propX=oBig.offsetWidth/oFrame.offsetWidth;
    var propY=oBig.offsetHeight/oFrame.offsetHeight;
    bigImg.style.left=-nLeft*propX+"px";
    bigImg.style.top=-nTop*propY+"px";
    // 模糊背景
    oFrame.style.backgroundPosition=`${-nLeft}px ${-nTop}px`
}

//跨页面传值
function waterFall(){}
$.extend(waterFall.prototype,{
    // 初始化
    init(){
        this.page=1;
        this.main=$("#list");
        this.loading=false;
        
        this.loadJson()
        .done(function(res){
            this.renderPage(res)
        })
        
    },
    // 加载数据
    loadJson(){
        var opt = {
            // 链接接口
            url:"http://www.wookmark.com/api/json/popular",
            // 预期服务器返回的数据类型
            dataType:"jsonp",
            // 发送到服务器的数据。将自动转换为请求字符串格式
            data:{page:this.page},
            // this => 指向实例化对象;
            //检测上下文
            context:this
        }
        return $.ajax(opt);
    },
    renderPage(json){
        var oImg = document.getElementById("smallImg");
        var oImg1 = document.getElementById("bigImg");
        console.log(oImg)
        // var res = "";
        if(cookie("goodsId")){
            res = cookie("goodsId")
            console.log(res,json[res]);
            oImg.src = json[res].image;
            // oP.innerHTML = data[res].title;
            oImg1.src = json[res].image;
        }
    }
   
})
var waterfall = new waterFall();
waterfall.init();


