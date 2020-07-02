$(() => {
    // 初始默认值
    $("#username").valueOf("ls");
    $("#userpwdA,#userpwdB").val("1234");
   
    let options = {
        "username": {
            reg: `/^[a-zA-Z]{2,6}$/.test(val)`,
            msg: "用户名不规范"
        },
        "userpwdA": {
            reg: `/^[a-zA-Z0-9]{3,6}$/.test(val)`,
            msg: "密码不规范！"
        },
        "userpwdB": {
            reg: `$.trim($("#userpwdA").val()) == val`,
            msg: "两次输入的密码不一致！！！"
        }
    }

    $(".loginView_box input").blur(function(){
        let action = this.id;
        let val = $.trim($(this).val());
        console.log(options[action]);
        // if (eval(options[action].reg)){
        //     $(this).next().text("");
        //     $(this).parents(".")
        // }
    });

    // 注册按钮点击事件
    $(".login_button").click(function() {
        $("#username,#userpwdA,#userpwdB").trigger("blur");

    })
})