$(document).ready(function() {

    //era pra aparecer a imagem de erro quando a img estivesse errada


    /*
    $('img').error(function() {
        $('img').attr("src","img/page not found.jpg");
    });
    */

    /*
    $('img').error(function(){
        var imagem = $(this).attr("src");
        alert('imagem'+imagem+'indisponível');
        $('img').attr("src","img/page not found.jpg");
    });
    */


    //$('body').css('background-color',"blue");
    $('img').width($(window).width()).height($(window).height());

    $(window).resize(function() {
//largura da imagem //largura da janela
$('img').width($(window).width()).height($(window).height());
    });

    
    $('body').css("height","5000px");

    $(window).scroll(function() {
        var topo = $(window).scrollTop();
        if(topo=400) {
            $('img').fadeOut('1000'); //SUMIR A IMAGEM
        } else {
            $('img').fadeIn('1000'); //APARECER A IMAGEM
            
        }
    });
});

/*
//efeito para a imagem sumir em 1 segundo depois de ter rolado o scroll
$(window).scroll(function() {
    $('img').fadeOut('1000');
})
*/




//Pra saber a que distância está do topo do site
/*
$(window).scroll(function() {
    var topo = $(window).scrollTop();
    alert(topo);
});
*/



