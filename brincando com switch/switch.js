let button = window.document.getElementById('button');

button.addEventListener('click', mudaLayoult);

function mudaLayoult() {
    let cor = window.document.getElementById('inputText').value;
    cor = cor.toLowerCase();

    switch (cor) {
        case "amarelo":

            window.document.body.style.backgroundColor = 'yellow';
            break;


        case "azul":
            window.document.body.style.backgroundColor = 'blue';
            break;

        case "vermelho":
            window.document.body.style.backgroundColor = 'red';
            break;

        case "violeta":
            window.document.body.style.backgroundColor = 'violet';
            break;

        case "marrom":
            window.document.body.style.backgroundColor = 'brown';
            break;

        case "verde":
            window.document.body.style.backgroundColor = 'green';
            break;


        case "cinza":
            window.document.body.style.backgroundColor = 'gray';
            break;


        case "rosa":
            window.document.body.style.backgroundColor = 'pink';
            break;

        case "preto":
            window.document.body.style.color = 'white';
            window.document.body.style.backgroundColor = 'black';
            break;


        case "branco":
            window.document.body.style.color = 'black';
            window.document.body.style.backgroundColor = 'white';
            break;

        default:
            alert('Não anotamos essa cor no código, tente outra');
            break;

    }

    diaDaSemana();
}


function diaDaSemana() {
    var dia = new Date().getDay();
    let texto = window.document.getElementById('texto');

    switch (dia) {
        case 0:
            texto.innerHTML = "Hoje é Domingo";
            break;

        case 1:
            texto.innerHTML = "Hoje é Segunda-Feira";
            break;


        case 2:
            texto.innerHTML = "Hoje é Terça-Feira";
            break;


        case 3:
            texto.innerHTML = "Hoje é Quarta-Feira";
            break;


        case 4:
            texto.innerHTML = "Hoje é Quinta-Feira";
            break;

        case 5:
            texto.innerHTML = "Hoje é Sexta-Feira";
            break;


        case 6:
            texto.innerHTML = "Hoje é Sábado";
    }
}