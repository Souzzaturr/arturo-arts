fetch("bandeiras/countries.json")
    .then(response => response.json())
    .then(paises => {
      
        const sigla_paises = Object.keys(paises);
        const nome_paises = Object.values(paises);
        const qtd_paises = sigla_paises.map((element, num = 0) => num++);
        
        let conteudo_principal = document.querySelector("#conteudo");

        qtd_paises.forEach((posicao) => {
            conteudo_principal.innerHTML += 
            '<div id = "bloco-imagem">' +
                '<img src = "bandeiras/svg/' + sigla_paises[posicao].toLowerCase() + '.svg" alt = "imagem-de-nacao" width = 200px">' + 
                '<h3 id = "nome-pais">' + nome_paises[posicao] + '</h3>' +
            '</div>'
        });
    })
