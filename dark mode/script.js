var button = document.getElementById('botao');

button.addEventListener('click', modoDiamodoNoite);

let noite = false;

function modoDiamodoNoite() {
    
    let title = document.querySelectorAll('h1');
    let divs = document.querySelectorAll('div');
    let sessao = document.getElementById('sessaobotao');


    
        title.style.backgroundColor = '#000';
        divs.style.backgroundColor = '#000'
        sessao.style.backgroundColor = '#000';

        alert('Funcionou')

    /*
    for(let i = 0; i < asDivs.length; i += 1) {

        window.getComputedStyle(asDivs[i]).getPropertyValue('background-color');
        console.log(window.getComputedStyle(asDivs).getPropertyValue('background-color'))
    }
    */
    
}