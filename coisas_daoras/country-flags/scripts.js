fetch("bandeiras/countries.json")
    .then(response => response.json())
    .then(paises => {
      
        const sigla_paises = Object.keys(paises);
        const nome_paises = Object.values(paises);
        const qtd_paises = sigla_paises.length;
        
        let conteudo_principal = document.querySelector("#conteudo");

        for (let i = 0; i < qtd_paises; i++) {
            conteudo_principal.innerHTML += 
            '<div id = "bloco-imagem">' +
                '<img src = "bandeiras/svg/' + sigla_paises[i].toLowerCase() + '.svg" alt = "imagem-de-nacao" width = 200px">' + 
                '<h3 id = "nome-pais">' + nome_paises[i] + '</h3>' +
            '</div>'
        }
    })