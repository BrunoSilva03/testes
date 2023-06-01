$(document).ready(function() {
    /*
    $('h1').css("color","red");
    $('h1').hide(); //esconde o h1
    $('h1').delay('1000');
    $('h1').fadeIn("slow");
    $('h1').text('Curso Jquery PontoCanal');
    */

    /* EM UMA ÚNICA LINHA
    $('h1').css("color","red").hide().delay('1000').fadeIn("slow").text('Curso Jquery PontoCanal');
    */

    /*em blocos tipo seletores - mais legível
    $('h1')
        .css("color","red")
        .hide()
        .delay('1000')
        .fadeIn("slow")
        .text('Curso Jquery PontoCanal')
        .click(function() {
            $('body').css("background","blue")
            $('h1').css("color","white")
        })
        */

        //$('a').css("color","green");
        $('a').css({color: 'green', display: 'block'})
        $('h1, #link3').css("border-bottom", "solid 3px blue");




});