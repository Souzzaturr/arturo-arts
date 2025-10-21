//Adicionando funcionalidades site relógio

let titulo_anuncio = document.querySelector("#opcoes-produto h1");
const imagem_visualizacao = document.querySelector("#visualizacao img");
const tamanho_imagem = ["41 mm", "45 mm"];
const cores_relogio = [
    "verde-cipreste",
    "azul-inverno",
    "meia-noite",
    "estelar",
    "rosa-claro",
]
let cor_atual_relogio = "azul-inverno";
let tamanho_caixa = "41 mm";
let imagem_selecionada = 1;


function atualizar_imagem_selecionada () {
    const opcao_imagem_selecionada = document.querySelector('[name = "opcao-imagem"]:checked')

    imagem_selecionada = opcao_imagem_selecionada.id[0];

    imagem_visualizacao.src = 
    "./imagens/opcoes-cores/imagens-" + cor_atual_relogio + "/imagem-" + imagem_selecionada + ".jpeg"
}


function atualizar_tamanho_imagem () {
    const tamanho = document.querySelector('[name = "opcao-tamanho"]:checked');

    imagem = document.querySelector("#visualizacao img");

    tamanho_caixa = tamanho_imagem[tamanho.id[0]];
    
    titulo_anuncio.innerHTML = 
    "Pulseira loop esportiva " + cor_atual_relogio + " para caixa de " + tamanho_caixa;

    if (tamanho_imagem[tamanho.id[0]] === "41 mm") {
        imagem.classList.add("caixa-pequena");
        
    } else {
        imagem.classList.remove("caixa-pequena");
    }
}


function altera_cor_relogio () {
    const botao_cor = document.querySelector('[name = "opcao-cor"]:checked');
    const titulo_cor = document.querySelector("#nome-cor-selecionada");
    
    cor_atual_relogio = cores_relogio[botao_cor.id[0]];
    
    titulo_anuncio.innerHTML = "Pulseira loop esportiva " + cor_atual_relogio + " para caixa de " + tamanho_caixa;
    titulo_cor.innerHTML = "Cor - " + cor_atual_relogio;
    imagem_visualizacao.src = 
    "./imagens/opcoes-cores/imagens-" + cor_atual_relogio + "/imagem-" + imagem_selecionada + ".jpeg";

    for (let i = 0; i < 3; i++) {
        let img = document.querySelector('label[for = "' + i + '-imagem"] img');

        img.src =
        "./imagens/opcoes-cores/imagens-" + cor_atual_relogio + "/imagem-" + i + ".jpeg";
    }
}