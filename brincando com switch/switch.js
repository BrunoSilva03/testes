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
}