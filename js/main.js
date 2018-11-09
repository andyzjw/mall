
/*下拉菜单*/
$('.allCommodity').hover(
    function () {
        $(".menucontainer").removeClass("hide");
        $('.allCommodity').css({
            backgroundColor:"black",
            color:"white"
        })
        console.log($(".menucontainer"));
    },function () {
        $(".menucontainer").addClass("hide");
        $('.allCommodity').css({
            backgroundColor:"white",
            color:"black"
        })
    }
)

$(".menucontainer").on("mouseover",function () {
    $('.allCommodity').css({
        backgroundColor:"black",
        color:"white"
    })
    $(".menucontainer").removeClass("hide");
});
$(".menucontainer").on("mouseout",function () {
    $(".menucontainer").addClass("hide");
    $('.allCommodity').css({
        backgroundColor:"white",
        color:"black"
    })
});

/*图片轮播*/
//图片地址
var address=["banner1.jpg","banner2.jpg","banner3.jpg"];
/*添加li并添加下标*/
for(var j = 0;j < address.length;j++){
    $("<li></li>").attr("index",j).appendTo($("#dots ul"));
}
/*li下标添加样式*/
$("#dots ul li").addClass("listStyle");

/*设置图片自动滚动*/
//设置定时器
var timer;
var i;
//先显示一次图片
imgAuto();

//图形轮播
startImg();

//图片显示函数
function startImg(){
    if(!timer){
        timer = setInterval(imgAuto,2000);
    }
}

//显示如图片
function imgAuto() {
    //图片下标
     i = $("#bannerImg").attr("index");
    console.log(i)
    //循环播放条件设置
    if(!i || i == address.length-1){
        i= -1;
    }
    //下标递增
    i++;
    $("#bannerImg").attr("src","image/"+address[i]);
    console.log("image/"+address[i]);
    //设置图片下标
    $("img").attr("index",i);
    /*for(j =0;j<$('#dots ul li').length;j++){
        $("#dots  ul li").css({
            background:" rgba(58, 52, 52, 0.5)",
            "box-shadow":"0px 0px 0px 3px  rgba(255,255,255,0.9) inset"
        })
    }
    //设置dots联动
    $("#dots  ul li").eq(i).css({
        background:" rgba(255,255,255,0.9)",
        "box-shadow":"0px 0px 0px 5px rgba(0,0,0,0.6) inset"
    })*/
    //清除原来的样式
    for(j =0;j<$('#dots ul li').length;j++){
        $("#dots  ul li").removeClass("hover");
    }

    $("#dots  ul li").eq(i).addClass("hover");
}

//悬停，开启
$("#bannerImg").mouseover(
    function () {
        stopImg();
    }
)
$("#bannerImg").mouseout(
    function () {
        startImg();
    }
)
function stopImg() {
    clearInterval(timer);
    timer=null;
}

//上一张下一张悬停
$(".pre").mouseover(function () {
    stopImg();
})
$(".next").mouseover(function () {
    stopImg();
})
//上一张下一张点击事件
$(".pre").click(function () {
        i = i - 1;
        if (i == -1) {
            i = address.length - 1;
        }
        //去上一张图片
        $("#bannerImg").attr("src", "image/" + address[i]);
        //添加下标
        $('#bannerImg').attr("index", i);
        //清除原来的样式
        for(j =0;j<$('#dots ul li').length;j++){
            $("#dots  ul li").removeClass("hover");
        }

        $("#dots  ul li").eq(i).addClass("hover");
    }
     )

$(".next").click(function () {
    imgAuto();
})

//dots点击
$('#dots  ul li').each(function(){
    $(this).on('click',change);
    $(this).on('click',stopImg);
})
function change(){
    i = $(this).attr('index');
    //去指定的图像
    $("#bannerImg").attr("src", "image/" + address[i]);
    //添加下标
    $("#bannerImg").attr("index",i);

    //清除原来的样式
    for(j =0;j<$('#dots ul li').length;j++){
        $("#dots  ul li").removeClass("hover");
    }

    $("#dots  ul li").eq(i).addClass("hover");
}