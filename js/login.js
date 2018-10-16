var oBody=document.getElementById("oBody");
var oLogin=document.getElementById("login");
var _oLogin=document.getElementById("_login")
var close=document.getElementById("close-img")
_oLogin.onclick=function(){
    oBody.style.display="block";
    oLogin.style.display="block"
}
close.onclick=function(){
    oBody.style.display="none";
    oLogin.style.display="none";
}