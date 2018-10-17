var oSmall=document.getElementById("small");
var oFrame=document.getElementById("frame");
var oBig=document.getElementById("big");
var smallImg=document.getElementById("smallImg");
var bigImg=document.getElementById("bigImg");
oSmall.onmouseenter=function(){
    oFrame.style.display="block";
    oBig.style.display="block";
    smallImg.style.opacity=0.3;
}
oSmall.onmouseleave=function(){
    oFrame.style.display="none";
    oBig.style.display="none";
    smallImg.style.opacity=1;
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