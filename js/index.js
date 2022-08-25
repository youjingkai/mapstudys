window.onload=function () {
    // 获取屏幕宽高,调整网页大小
    $("body").css("height",document.body.clientHeight );//获取屏幕高度，并设置高度
    // console.log(document.body.clientWidth);
    // 全局变量

    // 打开弹窗按钮
    $("#showYida").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox01").css('display','block');
    });
    $("#showJiaxing").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox02").css('display','block');
    });
    $("#showXuangong").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox03").css('display','block');
    });
    $("#showShizi").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox04").css('display','block');
    });
    $("#showHongchuan").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox05").css('display','block');
    });
    $("#showNanhu").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox06").css('display','block');
    });
    $("#showGeming").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox07").css('display','block');
    });
    $("#showYuehe").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox08").css('display','block');
    });
    $("#showSanta").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox09").css('display','block');
    });
    $("#showZicheng").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox10").css('display','block');
    });
    $("#showJiaxingbowuguan").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox11").css('display','block');
    });
    $("#showHuxindao").click(function () {
        $(".tancuang").css('display','block');
        $("#maxbox12").css('display','block');
    });

    // 关闭按钮
    $(".close01").on("click",function () {
        $(".tancuang").css('display','none');
        $(".t-maxbox").css('display','none');
        for(var i=0;i<$("audio").length;i++){
            $("audio")[i].load();
        }
        $(".bofang").attr("src", "imgs/stop.png" );
        $(".bofang").attr("title","暂停");
    });
    $(".close02").on("click",function () {
        location.href="question/huochezhan.html";
    });
    $(".close03").on("click",function () {
        location.href="question/xuangongci.html";
    });
    $(".close04").on("click",function () {
        location.href="question/shizhihuidukou.html";
    });
    $(".close05").on("click",function () {
        location.href="question/hongcuan.html";
    });
    $(".close08").on("click",function () {
        location.href="question/yuehe.html";
    });
    $(".close09").on("click",function () {
        location.href="question/santa.html";
    });
    $(".close10").on("click",function () {
        location.href="question/zicheng.html";
    });
    $(".close11").on("click",function () {
        location.href="question/jiaxingbowuguan.html";
    });
    $(".close12").on("click",function () {
        location.href="question/huxindao.html";
    });









    // 音乐播放暂停
    $("#bofang03").click(function () {
        console.log($("#bofang03").attr("title"));
        let bofang = $("#bofang03");
        if(bofang.attr("title")=="暂停"){
            bofang.attr("src", "imgs/play.png" ); //jq方式
            bofang.attr("title","播放");
            $("#media03")[0].play();//播放


        }else{
            bofang.attr("src", "imgs/stop.png" ); //jq方式
            bofang.attr("title","暂停");
            $("#media03")[0].pause();//暂停
        }

    });
    $("#bofang02").click(function () {
        console.log($("#bofang02").attr("title"));
        let bofang = $("#bofang02");
        if(bofang.attr("title")=="暂停"){
            bofang.attr("src", "imgs/play.png" ); //jq方式
            bofang.attr("title","播放");
            $("#media02")[0].play();//播放


        }else{
            bofang.attr("src", "imgs/stop.png" ); //jq方式
            bofang.attr("title","暂停");
            $("#media02")[0].pause();//暂停
        }

    });
    $("#bofang04").click(function () {
        console.log($("#bofang04").attr("title"));
        let bofang = $("#bofang04");
        if(bofang.attr("title")=="暂停"){
            bofang.attr("src", "imgs/play.png" ); //jq方式
            bofang.attr("title","播放");
            $("#media04")[0].play();//播放


        }else{
            bofang.attr("src", "imgs/stop.png" ); //jq方式
            bofang.attr("title","暂停");
            $("#media04")[0].pause();//暂停
        }

    });
    $("#bofang05").click(function () {
        console.log($("#bofang05").attr("title"));
        let bofang = $("#bofang05");
        if(bofang.attr("title")=="暂停"){
            bofang.attr("src", "imgs/play.png" ); //jq方式
            bofang.attr("title","播放");
            $("#media05")[0].play();//播放


        }else{
            bofang.attr("src", "imgs/stop.png" ); //jq方式
            bofang.attr("title","暂停");
            $("#media05")[0].pause();//暂停
        }

    });
    $("#bofang06").click(function () {
        console.log($("#bofang06").attr("title"));
        let bofang = $("#bofang06");
        if(bofang.attr("title")=="暂停"){
            bofang.attr("src", "imgs/play.png" ); //jq方式
            bofang.attr("title","播放");
            $("#media06")[0].play();//播放


        }else{
            bofang.attr("src", "imgs/stop.png" ); //jq方式
            bofang.attr("title","暂停");
            $("#media06")[0].pause();//暂停
        }

    });
    $("#bofang07").click(function () {
        console.log($("#bofang07").attr("title"));
        let bofang = $("#bofang07");
        if(bofang.attr("title")=="暂停"){
            bofang.attr("src", "imgs/play.png" ); //jq方式
            bofang.attr("title","播放");
            $("#media07")[0].play();//播放


        }else{
            bofang.attr("src", "imgs/stop.png" ); //jq方式
            bofang.attr("title","暂停");
            $("#media07")[0].pause();//暂停
        }

    });
    $("#bofang08").click(function () {
        console.log($("#bofang08").attr("title"));
        let bofang = $("#bofang08");
        if(bofang.attr("title")=="暂停"){
            bofang.attr("src", "imgs/play.png" ); //jq方式
            bofang.attr("title","播放");
            $("#media08")[0].play();//播放


        }else{
            bofang.attr("src", "imgs/stop.png" ); //jq方式
            bofang.attr("title","暂停");
            $("#media08")[0].pause();//暂停
        }

    });
    $("#bofang09").click(function () {
        console.log($("#bofang09").attr("title"));
        let bofang = $("#bofang09");
        if(bofang.attr("title")=="暂停"){
            bofang.attr("src", "imgs/play.png" ); //jq方式
            bofang.attr("title","播放");
            $("#media09")[0].play();//播放


        }else{
            bofang.attr("src", "imgs/stop.png" ); //jq方式
            bofang.attr("title","暂停");
            $("#media09")[0].pause();//暂停
        }

    });
    $("#bofang10").click(function () {
        console.log($("#bofang10").attr("title"));
        let bofang = $("#bofang10");
        if(bofang.attr("title")=="暂停"){
            bofang.attr("src", "imgs/play.png" ); //jq方式
            bofang.attr("title","播放");
            $("#media10")[0].play();//播放


        }else{
            bofang.attr("src", "imgs/stop.png" ); //jq方式
            bofang.attr("title","暂停");
            $("#media10")[0].pause();//暂停
        }

    });
    $("#bofang11").click(function () {
        console.log($("#bofang11").attr("title"));
        let bofang = $("#bofang11");
        if(bofang.attr("title")=="暂停"){
            bofang.attr("src", "imgs/play.png" ); //jq方式
            bofang.attr("title","播放");
            $("#media11")[0].play();//播放


        }else{
            bofang.attr("src", "imgs/stop.png" ); //jq方式
            bofang.attr("title","暂停");
            $("#media11")[0].pause();//暂停
        }

    });
    $("#bofang12").click(function () {
        console.log($("#bofang12").attr("title"));
        let bofang = $("#bofang12");
        if(bofang.attr("title")=="暂停"){
            bofang.attr("src", "imgs/play.png" ); //jq方式
            bofang.attr("title","播放");
            $("#media12")[0].play();//播放


        }else{
            bofang.attr("src", "imgs/stop.png" ); //jq方式
            bofang.attr("title","暂停");
            $("#media12")[0].pause();//暂停
        }

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