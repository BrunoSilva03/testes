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



    $('.ev4').hover(function() {
        $(this).css("background", "#ccc");
        ex.text("Você passou o mouse");
    })


    $('.ev5').mousedown(function() {
        $(this).css("background", "#ccc");
        ex.text("Você apertou(segurou o mouse)");
    }).mouseup(function() {
        $(this).css("background", "#000");
        ex.text("Você soltou o mouse");
    });


    var a = 0;

    $('.ev6').mouseenter(function() {
        a += 1;
        ex.text("Entradas do Mouse: " + a);
    }).mouseout(function() {
        ex.text("Saída do Mouse");
    })
    


    
});