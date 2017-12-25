$(function(){

    

    // 在加载不同的图片
    $(window).on('resize',function(){

        //获取所有的item
        var items = $('#slide .item');

        if($(this).width() > 640){
            items.each(function (i, e) { 
                var imgUrl = $(e).data('pcimg');
                $(e).html('<a href="#" class="pcImg" style="background-image: url(\'' + imgUrl + '\')"></a>');
            });

            // bug???????????????????????????????????????
            $(this).on('scroll', function () { 
                // console.log($(this).scrollTop());
                // console.log($('#navId').outerHeight());
                var tarHeight = $('#navId').outerHeight();
        
                if($(this).scrollTop() > 40){
                    $('#navId').css({
                        position: 'fixed',
                        top: 0
                    });
                    $('#slide').css({
                        'marginTop': tarHeight
                    });
                }else{
                    $('#navId').css({
                        position: 'static'
                    });
                    $('#slide').css({
                        marginTop: 0
                    });
                }
            });
        }else{
            items.each(function (i, e) { 
                var imgUrl = $(e).data('mobimg');
               $(e).html('<a href="#"><img src="' + imgUrl + '" alt=""></a>')
            });            
        }

    }).trigger('resize');

    //工具提示
    $('[data-toggle="tooltip"]').tooltip();

    //导航栏固定
    // $(window).on('scroll', function () { 
    //     // console.log($(this).scrollTop());
    //     // console.log($('#navId').outerHeight());
    //     var tarHeight = $('#navId').outerHeight();

    //     if($(this).scrollTop() > 40){
    //         $('#navId').css({
    //             position: 'fixed',
    //             top: 0
    //         });
    //         $('#slide').css({
    //             'marginTop': tarHeight
    //         });
    //     }else{
    //         $('#navId').css({
    //             position: 'static'
    //         });
    //         $('#slide').css({
    //             marginTop: 0
    //         });
    //     }
    // });


    // 插件：默认插件只支持垂直方向的滑动，水平方向是静止的 需要传入参数来支持水平的滑动
    var myScroll = new IScroll('.ul-wrapper',{
        // 支持水平滚动
        scrollX: true,
        // 禁止垂直滚动
        scrollY: false,
        //支持鼠标滚动
        mouseWheel: true,
        click: true 
    });
});