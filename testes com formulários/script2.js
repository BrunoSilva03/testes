function aparecedivcomresultado() {
    let email = document.getElementById('idemail').value
    let senha = document.getElementById('idsenha').value

    if (email=='' || senha=='' || email=='' && senha=='') {
        mostramensagem()
    } else {

        let resultado = document.querySelector('div#resultado');
        let mostraValores = document.createElement('p');
        
        mostraValores.innerHTML = `Dados Enviados com sucesso<br>
        Seu email: ${email}<br>
        Sua senha: ${senha}`;
        
        resultado.appendChild(mostraValores);
    }


}

function mostramensagem() {
    alert('Senha e email devem ser preenchidos!');
}