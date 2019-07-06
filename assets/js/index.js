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
});