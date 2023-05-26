let buttonIniciar = document.getElementById('iniciar');
let buttonParar = document.getElementById('parar');

buttonIniciar.addEventListener('click', contar);
buttonParar.addEventListener('click', pararContagem);


function contar() {
    document.getElementById('conteudo').innerHTML = "Começou a contar";


    tempo = setTimeout(function() {
        document.getElementById('conteudo').innerHTML = "Passou os 5 segundos";
    },5000)
}


function pararContagem() {
    clearTimeout(tempo);
    document.getElementById('conteudo').innerHTML = "Parou a contagem";
}