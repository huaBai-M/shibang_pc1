// $(function () {
//     $('.hide_zd').height($(document).height());
//     $('.hide_zd').hide();
//     $('.hide_pro').hide();
//     $('.nav ul li a').mouseenter(function () {
//         $('.hide_pro').stop().hide();
//         $('.hide_zd').stop().hide();
//     })
//     $('.nav ul li').eq(8).find('a').mouseenter(function () {
//         $('.hide_pro').stop().show();
//         $('.hide_zd').stop().show();
//         $('.hide_pro').addClass('show');
//     })
//     $('.hide_pro').mouseleave(function () {
//         $('.hide_pro').stop().hide();
//         $('.hide_zd').stop().hide();
//     })
//
// })
$(function () {
    $('.nav li.fir').mouseenter(function () {
        // $(this).find('ul').css({"display":"block"});
        $(this).find('ul').css({"opacity":"1"});
    })
        .mouseleave(function () {
            $(this).find('ul').css({"opacity":"0"});
        })


    var href=window.location.href;
    if(href.indexOf("ryzz")>=0)
    {
        $(".caigou_banner").css("display","block");
    }
    else
    {
        $(".about_banner").css("display","block");
    }


})