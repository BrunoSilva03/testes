$(function() {

    var nav = $('.menu');

    $(window).scroll(function() {

        if($(this).scrollTop() > 64.71) {
            nav.addClass("menu-fixo")
        } else {
            nav.removeClass("menu-fixo")
        }

    })
})