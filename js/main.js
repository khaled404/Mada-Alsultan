$(function(){
    // Loading Window
    $(window).load(function () {
        $(".loader-box").fadeOut(500,function () {
            $(this).remove();
        });
    });
    $('.nav-torger, .overlay').on('click',function () {
        $('.nav-torger').toggleClass('active unActive')
        $('.overlay').toggleClass('over-active')
        $('.side-nav').toggleClass('nav-active')
        $('body').toggleClass('over')
    });
    $('.right-sm .search-box , .sm-search').on('click',function () {
        $('.sm-search').toggleClass('search-active')
        $('body').toggleClass('over')
        $('.nav-torger').toggleClass('active unActive')
        $('.overlay').toggleClass('over-active')

    });
    $(' .sm-search .form ').on('click',function (e) {
        e.stopPropagation()
    })

    $(".main-header .owl-carousel").owlCarousel({
        autoplay: true,
        rtl:true,
        loop:true,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed: 1000,
        navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"]
    });
    if($(window).width() <= 991){
        $(".special .row ").addClass("owl-carousel owl-theme");
    }
    if($(window).width() <= 992){
        $('.fotnav h2').on('click',function () {
            $(this).parent().find('ul').slideToggle();
            $(this).parent().siblings().find('ul').slideUp();
        })
    
    }

    $('.special .owl-carousel').owlCarousel({
        autoplay: true,
        rtl:true,
        loop:true,
        items: 5,
        dots: true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            },
        },
    });

});