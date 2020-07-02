$(() => {
    $(".tab_login_item").click(function(){
        // 设置当前标签选中状态并且排他处理
        $(this).addClass("active").siblings().removeClass("active");
        // 设置内容区域转化
        $(".loginView").eq($(this).index()).addClass("loginViewCurrent").siblings().removeClass("loginViewCurrent");
    })
    // 02、点击登录按钮
    $(".login_btn").click(function() {

        let username = $.trim($("#username").val());
        let password = $.trim($("#userpwd").val());

        if (username.length == 0) {
            alert("请输入用户名");
            return;
        }
        
        if (password.length == 0){
            alert("请输入密码");
            return;
        }
        // let data = {
        //     username,
        //     passsword: md5(password).substr(0, 10)
        // };
        // // 发送ajax请求
        // $.ajax({
        //     type: "post",
        //     url: "",
        //     data,
        //     dataType: "json",
        //     success: function(response) {
        //         if (response.status == "success") {
        //             window.location.href = "http://www.baidu.com";
        //         }else{
        //             alert(response.msg);
        //         }
        //     }
        // });
    })

})