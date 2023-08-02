$(document).ready(function() {

    var valorUpdate;
    var contador = 1;
    var idTarefa;

    $('.container input').change(function() {
        var input = $(this).val();
        $('ul').append(`<li id="${contador}">` + input + ' <i class="fas fa-check"></i> <i class="fas fa-trash"></i> <i class="fas fa-pen"></i></li>');
        $(this).val('');
        contador++;
    });

    $('ul').on('click', '.fa-check', function() {
        $(this).parent('li').toggleClass('tarefa-feita');
    });

    $('ul').on('click', '.fa-trash', function() {
        $(this).parent('li').fadeOut(300);
    });

    $('ul').on('click', '.fa-pen', function() {
        $('.container').hide();
        $('.formupdate').fadeIn();
        idTarefa = $(this).parent('li').attr('id');

       
       
    });

    $('#btncancelar').on('click', function() {
        $('#inputupdate').val('');
        $('.formupdate').hide();
        $('.container').fadeIn();
    });


    $('#btnconfirma').on('click', function() {
        valorUpdate = $('#inputupdate').val();
        $('ul').each(function() {

            if($('li').attr('id').val() == idTarefa) {
                alert('achou');
            }
        });
        
        $('.formupdate').hide();
        $('.container').fadeIn();
        $('#inputupdate').val('');
        alert(valorUpdate);
    })
    
    
    
    


});