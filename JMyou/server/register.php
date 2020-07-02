<?php
$db = mysqli_connect("localhost", "root", "root", "user");

// 获取客户端提交的参数
$username = $_REQUEST["username"];
$password = $_REQUEST["userpwd"];

// 对数据库进行操作
# 思路：检查当前用户名在数据库中是否已经存在，如果不存在那么就执行插入一条语句的操作，如果已经存在了那么就返回错误的提示信息。
# 查询表中所有数据 SELECT * FROM user
$sql = "SELECT * FROM user WHERE username='$username'";
# 执行SQL语句
$result = mysqli_query($db,$sql);

if(mysqli_num_rows($result) == 0){
    # 用户不存在可以直接使用
    # 具体：向数据库中写入一行数据
    $sql = "INSERT INTO `user` (`username`, `password`) VALUES ('$username', '$password')";
    $result = mysqli_query($db, $sql);

    $arr = array("status"=>"success","msg"=>"恭喜你，注册成功！");
    echo json_encode($arr);
}else{
    echo '{"ststus":"error","msg":"抱歉，该用户名已经被注册，请重新选择一个更优秀的名字！"}';
}
?>