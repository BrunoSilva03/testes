function mudaLayoult() {
    document.body.style.backgroundColor = 'yellow';
}

let divTeste = document.getElementById('teste');
let diamante = document.getElementById('diamante');
let noite = false;

divTeste.addEventListener('mouseover', mousesobre)
divTeste.addEventListener('mouseout', mousefora)

diamante.addEventListener('click', alteraModoSite)

function mousesobre() {
    divTeste.style.backgroundColor = 'green';
    divTeste.style.color = 'white';
}


function mousefora() {
    divTeste.style.backgroundColor = 'white';
    divTeste.style.color = 'black';
}


function alteraModoSite() {
    if(noite == false) {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white';
        noite = true;
    } else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        noite = false;
    }

   
        
    
   
}