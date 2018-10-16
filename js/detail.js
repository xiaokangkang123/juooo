var oSmall=document.getElementById("small");
var oFrame=document.getElementById("frame");
var oBig=document.getElementById("big");
oSmall.onmouseenter=function(){
    oFrame.style.display="block";
    oBig.style.display="block";
}
oSmall.onmouseleave=function(){
    oFrame.style.display="none";
    oBig.style.display="none";
}
oSmall.onmousemove=function(event){
    var e=event||
}