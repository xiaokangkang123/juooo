<?php
     header("Content-Type:text/html;charset=utf-8");
     #1. 从前端拿来数据;
     $username = @$_POST["username"];
     $password =  @$_POST["password"];
     //判断参数是否齐全；
     if($username==""||$password==""){
         die("参数不齐");
     }
     #2. 把数据放入到数据库之中;
     // 1. 如何连接数据;
     // mysql_connect(servername,username,password);
     $con = mysql_connect("localhost","root","123456");
     // echo $con;
     if(!$con){
         // echo "数据库连接成功";
         // die 终止并返回代码
         die("数据库连接失败");
     }
     //2. 选中操作的数据库
     mysql_select_db("userlist",$con);
     //判断用户名是否重名
     $result=mysql_query(
                         "SELECT username,password FROM
                         detaillist WHERE username='$username'");
                         
     //密码加密
    $password=md5($password);
    while($row=mysql_fetch_array($result)){
        if($row['password']==$password){
            die("登陆成功");
        }
         
    }
    //错误
    echo mysql_error();
    echo "账号或密码不正确"
?>