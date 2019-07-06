$(document).ready(function(){
    $('.top-navigation').children().hover(function(){
        $('.top-navigation').children().map((key, element) => {
            if($(element).hasClass('active')){
                $(element).removeClass('active');
            }
        });
        $(this).addClass('active');
        $(this).css('color', '#ff0884');
    });

    $(".owl-carousel").owlCarousel({
        items : 4,
        margin : 10,
        loop : true,
        rewind : true,
        dots : true,
        autoplay : true,
        responsive : {
            autoplayHoverPause : false,
            loop : true,
            nav : true,
            rewind : true,
            dots : true,
            margin : 10,
            0 : {
                items : 1
            },
            480 : {
                items : 2,
            },
            768 : {
                items : 3,
            },
            1024 : {
                items : 4
            }

        }
    });

});