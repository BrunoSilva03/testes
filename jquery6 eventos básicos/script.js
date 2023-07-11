$(document).ready(function() {

    var ex = $('.ex1');

   $('.ev1').click(function() {
    ex.hide(3000);
   });


   $('.ev2').click(function() {
    ex.show('slow');
   })


   $('.ev3').click(function() {
    ex.toggle('slow');
   })
    

   $('.ev4').keyup(function() {
    var texto = $(this).val();

    if(texto == 'hide' || texto == 'Hide'){
        ex.hide();
    }
    if(texto == 'show' || texto == 'Show'){
        ex.show();
    }
    if(texto == 'toggle' || texto == 'Toggle'){
        ex.toggle();
    }
   })
});