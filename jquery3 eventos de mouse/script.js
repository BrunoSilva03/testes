$(document).ready(function() {

    var ex = $('.ex1');

    $('.ev1').click(function() {
        $(this).css("background","#ccc");
        ex.text("Você Clicou!");
    });

    $('.ev2').dblclick(function() {
        $(this).css("background", "#ccc");
        ex.text("Você deu Dois Cliques");
    })

    $('.ev3').focusin(function() {
        $(this).css("background", "#ccc");
        ex.text("Você deu foco no input");
    }).focusout(function() {
        $(this).css("background", "#000");
        ex.text("Você tirou o foco do input");
    })

    

    //OU

    /*
    $('.ev3').focusin(function() {
        $(this).css("background", "#ccc");
        ex.text("Você deu foco no input");
    });


    $('.ev3').focusout(function() {
        $(this).css("background", "#000");
        ex.text("Você tirou o foco do input");
    })
    */

    
});