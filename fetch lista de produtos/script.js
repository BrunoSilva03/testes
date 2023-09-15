const requisicao = fetch("https://ranekapi.origamid.dev/json/api/produto")
    .then(response => {
        return response.json();
    })
     .then(jsonBody => {
        document.querySelector("#app").innerHTML = jsonBody[0].nome;
        console.log(jsonBody);
     });

     const data = {
        id: "andrerafa",
        nome: "Andre",
        email: "andrerafa@origamid.com",
        senha: "123456",
        cep: "123456-78910",
        rua: "Célio Soares Rosa",
        numero: "1972",
        bairro: "Botafogo-Fluminense",
        cidade: "Rio de Janeiro",
        estado: "Rio de Janeiro"
     }

     fetch("https://ranekapi.origamid.dev/json/api/produto", {
        method: 'POST',
        headers: {
            "Content-Type": 'Application/json'
        },
        body: JSON.stringify(data)
     });
