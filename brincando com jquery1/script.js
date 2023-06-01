$(document).ready(function(){

    $('h2').css('margin', '0');
    $('p').css({margin: '0', color: 'blue'});
    $('.div1').css({'margin-bottom':'20px', background: '#ccc'});


    //Filhas
    $('.div1 span').hide().delay('1000').fadeIn(1000).css({color:'green','font-size':'15px'});
    $('.div1 h2').hide().css({'font-size':'50px',color:'red'}).fadeIn(800);


    //filhas diretas do elemento
    $('.div1 > span').css({color:'red'});

    //primeiro elemento após o selecionado, quero que selecione o próximo elemento p após p1(atacando de forma indireta)
    $('.p1 + p').css({'font-size':'25px'});

    //atacando todos os elementos após o selecionado, a partir da classe p1 todos os parágrafos vão receber as instruções
    $('.p1 ~ p').css({color:'black'});
    
    

});