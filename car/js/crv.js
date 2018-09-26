$(function () {
    $('.car-big').hover(function(){
        $('.car-show').animate({opacity:1},800);
    },function () {
        $('.car-show').animate({opacity:0},500);
    })

    $('.page3-car>img').mouseover(function(){
        $(this).siblings().animate({opacity:0},300);
    });
    $('.page3-car>img').mouseout(function(){
        $(this).siblings().animate({opacity:1},1);
    })
})