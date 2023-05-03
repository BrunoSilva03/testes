function adicionar() {
    let res = document.querySelector('div#texto');
    let novotextinho = document.createElement('p');
    novotextinho.innerHTML = "Tenham todos um Bom Dia!";
    res.appendChild(novotextinho);
}

/*Testando como se insere um texto via JavaScript */


function adicionarTextao() {
    let resultado = document.querySelector('div#texto');
    let novoParagrafo = window.document.createElement('div')
    novoParagrafo.innerHTML = '<p>Nós somos do Clube Atlético Mineiro,<br>Jogamos com muita raça e amor</p><p>Vibramos com Alegria nas vitórias,<br> Clube Atlético Mineiro, Galo Forte e Vingador!</p>'
    resultado.appendChild(novoParagrafo);
}