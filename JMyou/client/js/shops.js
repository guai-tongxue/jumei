$(function () {
    // sc_num();
    // sc_msg();

    $.ajax({
        type: "get",
        url: "../js/shops.json",

        success: function(arr) {
            var str = ``;
            for(var i = 0; i < arr.length; i++){
                str += `<li class="goods_item">
                            <div class="goods_pic">
                                <a href=""><img src="${arr[i].src}" alt="">
                                    <div class="goods_pic_tit">
                                        <div>${arr[i].commont}</div>
                                    </div>
                                </a>
                            </div>
                            <div class="goods_title">
                                <p>${arr[i].title}</p>
                            </div>
                            <div class="goods_price">
                                <span>${arr[i].price}</span>
                                <div class="sc">
                                    <a href="javascript:void(0);" id="${arr[i].id}" class="sc_btn">加入购物车</a>
                                </div>
                            </div>
                        </li>`;
            }
            $(".goods_box ul").html(str);
        },
        error: function(msg){
            console.log(msg)
        }
    })
    // $(".goods_box ul").on("click", ".sc_btn", function(){
    //     let id = this.id;
    //     let first = $.cookie("goods") == null ? true : false;
    //     if(first){
    //         let arr =[{id: id, num: 1}];
    //         $.cookie("goods", JSON.stringify(arr), {
    //             expires: 7
    //         })
    //     }else{
    //         // 之前是否1添加过
    //         let cookieStr = $.cookie("goods");
    //         let cookieArr = JSON.parse(cookieStr);
    //         let same = false;// 假设没有添加过
    //         for( let i = 0; i < cookieArr.length; i++){
    //             if(cookieArr[i].id == id){

    //                 // 添加过，数量+1
    //                 same = true;
    //                 cookieArr[i].num++;
    //                 break;
    //             }
    //         }
    //         //3、如果没有添加过，新增一条数据
    //         if(!same){
    //             var obj = {id: id, num: 1};
    //             cookieArr.push(obj);
    //         }
    //         $.cookie("goods", JSON.stringify(cookieArr), {
    //             expires: 7
    //         })
    //     }
    //     // sc_num();
    //     // sc_msg();
    //     // ballMove(this);
    // })

    // 封装函数，进行抛物线运动
    // function ballMove(oBtn){
    //     $("#ball").css({
    //         display: "block",
    //         left: $(oBtn).offset().left,
    //         top: $(oBtn).offset().top
    //     })

    //     // 计算抛物线偏移的位置
    //     var offsetX = $(".sc_right .sc_pic").offset().left - $("#ball").offset().left;
    //     var offsetY = $(".sc_right .sc_pic").offset().top - $("#ball").offset().top;

    //      //声明抛物线对象
    //      var bool = new Parabola({
    //         el: "#ball",
    //         offset: [offsetX, offsetY],
    //         duration: 500,
    //         curvature: 0.001,
    //         callback: function(){
    //             $("#ball").hide();
    //         },
    //         autostart: true
    //     })
    // }

    // //给右侧购物车添加移入移出
    // $(".sc_right").mouseenter(function(){
    //     $(this).stop(true).animate({
    //         right: 0
    //     }, 500);
    // })
    // $(".sc_right").mouseleave(function(){
    //     $(this).stop(true).animate({
    //         right: -270
    //     }, 500);
    // })

    // //清空购物车的按钮添加点击
    // $("#clearBtn").click(function(){
    //     $.cookie("goods", null);
    //     sc_num();
    //     $(".sc_right ul").html("");
    // })

    // //给购物车内的删除按钮添加点击事件
    // $(".sc_right ul").on("click", ".delete_goodsBtn", function(){
    //     //清空购物车的数据  1、清空cookie中的这个值  2、清空页面的节点
    //     var id = $(this).closest("li").remove().attr("id");
    //     // alert(id);
    //     var cookieArr = JSON.parse($.cookie("goods"));
    //     for(var i = 0; i < cookieArr.length; i++){
    //         if(cookieArr[i].id == id){
    //             cookieArr.splice(i, 1);
    //             break;
    //         }
    //     }
    //     //判断数组是否为空
    //     if(!cookieArr.length){
    //         $.cookie("goods", null);
    //     }else{
    //         $.cookie("goods", JSON.stringify(cookieArr), {
    //             expires: 7
    //         })
    //     }

    //     //更新购物车商品数量
    //     sc_num();

    // })

    // //通过事件委托，给购物车上的按钮+和按钮-添加事件
    // $(".sc_right ul").on("click", "button", function(){
    //     var id = $(this).closest("li").attr("id");
    //     //更新cookie中的数据
    //     var cookieArr = JSON.parse($.cookie("goods"));
    //     //找出符合条件的数据的下标
    //     var index = cookieArr.findIndex(item => item.id == id); 
        
    //     if(this.innerHTML == "+"){
    //         cookieArr[index].num++;
    //     }else{
    //         cookieArr[index].num == 1 ? alert("数量已经到1了") : cookieArr[index].num--;
    //     }
    //     $.cookie("goods", JSON.stringify(cookieArr), {
    //         expires: 7
    //     })

    //     //更改页面上的数据
    //     $(this).siblings("span").html("商品数量：" + cookieArr[index].num);

    //     sc_num();

    // })


    // //加载购物车中的商品
    //         /*
    //             cookie里，只有上的id和数量
    //             商品的信息，数据源里
    //         */
    //        function sc_msg(){
    //         $.ajax({
    //             type: "get",
    //             url: "data.json",
    //             success: function(arr){
    //                 var cookieStr = $.cookie("goods");
    //                 if(cookieStr){
    //                     var cookieArr = JSON.parse(cookieStr);

    //                     var newArr = [];
    //                     for(var i = 0; i < arr.length; i++){
    //                         for(var j = 0; j < cookieArr.length; j++){
    //                             if(cookieArr[j].id == arr[i].id){
    //                                 //说明这个数据加载购物车里了
    //                                 arr[i].num = cookieArr[j].num;
    //                                 newArr.push(arr[i]);
    //                                 break;
    //                             }
    //                         }
    //                     }

    //                     // console.log(newArr);

    //                     var str = ``;
    //                     //通过循环创建节点，将数据添加到页面上
    //                     for(var i = 0; i < newArr.length; i++){
    //                         str += `<li id="${newArr[i].id}">
    //                                     <div class="sc_goodsPic">
    //                                         <img src="${newArr[i].img}" alt="">
    //                                     </div>
    //                                     <div class="sc_goodsTitle">
    //                                         <p>这是商品曲奇饼干</p>
    //                                     </div>
    //                                     <div class="sc_goodsBtn">购买</div>
    //                                     <div class="delete_goodsBtn">删除</div>
    //                                     <div class="sc_goodsNum">
    //                                     <div>
    //                                         <button>+</button>
    //                                         <button>-</button>
    //                                         <span>商品数量：${newArr[i].num}</span>
    //                                     </div>
    //                                 </li>`;
    //                     }

    //                     $(".sc_right ul").html(str);


    //                 }
    //             },
    //             error: function(msg){
    //                 console.log(msg);
    //             }
    //         })
    //     }

    //计算购物车中商品数量
//     function sc_num(){
//         var cookieStr = $.cookie("goods");
//         if(cookieStr){
//             var cookieArr = JSON.parse(cookieStr);

//             var sum = 0;

//             for(var i = 0; i < cookieArr.length; i++){
//                 sum += cookieArr[i].num;
//             }

//             $(".sc_right .sc_num").html(sum);
//         }else{
//             $(".sc_right .sc_num").html(0);
//         }
//     }
})