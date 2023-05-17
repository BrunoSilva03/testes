var dependentes = [{
    identificador: 13,

    nome: "Joana da Silva",

    idade: 12,
}];


function carregarDependentes() {
    let dependentes_container = document.querySelector('#dependentesContainer');

    dependentes_container.innerHTML = "";

    dependentes.forEach((el) => {

        let identificador = el.identificador;

        let nome = el.nome;

        let idade = el.idade;

        let dependente_container = `<div class="dependente" data-id="${identificador}">
        
        <input class="nome" placeholder="Digite o nome" type="text" value="${nome}">
        
        <input class="idade" placeholder="Digite a idade" type="number" value="${idade}">
        
        <div class="action">
            <a href="#" class="salvar">salvar💾</a>
            
            <a href="#" class="remover">❌</a>
            
        </div>
        
        </div>`;

        dependentes_container.innerHTML += dependente_container;
    })
}