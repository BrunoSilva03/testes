
/*

//init
document.querySelector("#btnAdicionarDependentes").addEventListener("click", adicionarDependentes);

carregarDependentes();

//capturarDados

document.querySelector("#btnCapturarDados").addEventListener("click", () => {
    document.querySelector("#containerDados").innerHTML = JSON.stringify(dependentes, undefined, 4);
});

*/

var dependentes = [{
    identificador: 13,

    nome: "Joana da Silva",

    idade: 12,
}];


function carregarDependentes() {
    let dependentes_container = document.querySelector("#dependentesContainer");

    dependentes_container.innerHTML = "";

    dependentes.forEach((el) => {

        let identificador = el.identificador;

        let nome = el.nome;

        let idade = el.idade;

        let dependente_container = 
        `<div class="dependente" data-id="${identificador}">
        
        <input class="nome" placeholder="Digite o nome" type="text" value="${nome}"/>
        
        <input class="idade" placeholder="Digite a idade" type="number" value="${idade}"/>
        
            <div class="action">
                <a href="#" class="salvar">salvar💾</a>
                
                <a href="#" class="remover">❌</a>
                
            </div>
        
        </div>`;

        dependentes_container.innerHTML += dependente_container;
    });

    salvarDependentes(); //Adicionamos o método aqui para que o laço seja aplicado nos novos itens adicionados

    removerDependentes(); //Adicionamos o método aqui para que o laço seja aplicado nos novos itens adicionados

    travarOutros(false); //Adicionamos para destravar tudo
}



function removerDependentes() {
    document.querySelectorAll("#dependentesContainer .remover").forEach((el, i) => {
        el.addEventListener("click", () => {
            dependentes.splice(i, 1); //O splice vai remover um item do array no JSON

            carregarDependentes(); //E chamamos o método para regenerar os elementos.  Regenerar os elementos HTML após remover do JSON
        });
    });
}


function adicionarDependentes() {
    dependentes.push({identificador: "", nome: "", idade: ""});

    carregarDependentes(); //Regenerar os elementos HTML após remover do JSON

    travarOutros(document.querySelector("#dependentesContainer > div:last-child")); //Desabilitar todos os outros elementos, exceto o que acabou de ser adicionado
}





function salvarDependentes() {
    document.querySelectorAll("#dependentesContainer .salvar").forEach((el, i) => {
        el.addEventListener("click", () => {
            let identificador = el.parentElement.parentElement.getAttribute("data-id");

            let nome = el.parentElement.parentElement.querySelector(".nome").value;

            let idade = el.parentElement.parentElement.querySelector(".idade").value;


            if(!nome.length || !idade.length) { //Verifica se nome e idade foram preenchidos

                alert("Nome e idade precisam ser preenchidos para salvar.");

                return false;

            }

            dependentes.splice(i, 1, {
                identificador: identificador,

                nome: nome,

                idade: idade,
            }); //Substitui o dado no JSON

            
            carregarDependentes(); //E chamamos o método para regenerar os elementos     Regenerar os elementos HTML após remover do JSON
            
            travarOutros(false); //Liberar todos os elementos novamente
        });
    });
}


function travarOutros(element) {
    if(element == false) { //Passar false como parâmetro para que todos os elementos fiquem habilitados novamente, ao invés de apenas o elemento que queremos liberar.

        document.querySelectorAll(".dependentes button, .dependentes .container > div").forEach((el) => {
            el.classList.remove("disabled");
        });

        document.querySelector("#containerDados").innerHTML = "";

        return false;
    

    }

    document.querySelectorAll(".dependentes button, .dependentes .container > div").forEach((el) => {
        if (el != element) { //Verifica se o elemento no laço é o que está sendo editado
            el.classList.add("disabled");
        }
    });
}


//init
document.querySelector("#btnAdicionarDependentes").addEventListener("click", adicionarDependentes);
carregarDependentes();

//capturarDados
document.querySelector("#btnCapturarDados").addEventListener("click", ()=>{
	document.querySelector("#containerDados").innerHTML = JSON.stringify(dependentes, undefined, 4);
});
