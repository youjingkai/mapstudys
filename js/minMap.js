window.onload=function () {
    // 获取屏幕宽高,调整网页大小
    $("body").css("height",document.body.clientHeight );//获取屏幕高度，并设置高度
    // console.log(document.body.clientWidth);
    // 全局变量

    // 打开弹窗按钮
    $("#showShenyun").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox01").css('display','block');
    });
    $("#showWanghu").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox02").css('display','block');
    });
    $("#showZhusheng").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox03").css('display','block');
    });
    $("#showJinjiu").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox04").css('display','block');
    });

    // 关闭按钮
    // $(".close01").on("click",function () {
    //     $(".tancuang").css('display','none');
    //     $(".t-maxbox").css('display','none');
    //     for(var i=0;i<$("audio").length;i++){
    //         $("audio")[i].load();
    //     }
    //     $(".bofang").attr("src", "imgs/stop.png" );
    //     $(".bofang").attr("title","暂停");
    // });
    $(".close01").on("click",function () {
        location.href="question/shenjunru.html";
    });
    $(".close02").on("click",function () {
        location.href="question/wanghuzhen.html";
    });
    $(".close03").on("click",function () {
        location.href="question/xuangongci.html";
    });
    $(".close04").on("click",function () {
        location.href="question/jinjiu.html";
    });




    // var viewHeight = document.documentElement.clientHeight;//可视区域的高度
    function lazyload(){
        var eles = document.querySelectorAll('img[data-url][lazyload]');
        Array.prototype.forEach.call(eles,function(item,index){
            var rect;
            if(item.dataset.url === ''){//html5 data 钩子的写法
                return;
            }
            // rect = item.getBoundingClientRect();//getBoundingClientRect()返回一个矩形对象.
            // if(rect.bottom >= 0 && rect.top < viewHeight){
            if(true){
                !function(){//感叹号表明这是一个函数表达式
                    var img = new Image();
                    img.src = item.dataset.url;
                    img.onload = function(){
                        item.src = img.src;
                    }
                    item.removeAttribute('data-url');
                    item.removeAttribute('lazyload');
                }()
            }
        })
    }
    setTimeout(function () {
        lazyload();//首屏调用
    },500)

    // document.addEventListener('scroll',lazyload);





}