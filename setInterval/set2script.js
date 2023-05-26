let buttonIniciar = document.getElementById('iniciar');
let buttonParar = document.getElementById('parar');


buttonIniciar.addEventListener('click', iniciarContagem);
buttonParar.addEventListener('click', pararContagem);


function iniciarContagem() {
    tempo = setInterval(function() {
        var cronometro = window.document.getElementById('conteudo').innerHTML;
        var soma = parseInt(cronometro) + 1;

        document.getElementById('conteudo').innerHTML = soma;
    }, 1000)
}


function pararContagem() {
    clearInterval(tempo);
}