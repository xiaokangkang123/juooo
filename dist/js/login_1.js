var oInp1=document.getElementById("email");
        
// var oInp2=document.getElementById("code1");

// var oInp3=document.getElementById("code2");

var oInp2=document.getElementById("pwd");

var oBtn=document.getElementById("login-btn-");
console.log(oBtn)

oBtn.onclick=function(){
    $.ajax({
        url:"http://localhost:8888/proxy/localhost/php/login.php",
        type:"GET",
        data:`username=${oInp1.value}&password=${oInp2.value}`,
        success:function(res){
            alert(res)
        }
    })
}