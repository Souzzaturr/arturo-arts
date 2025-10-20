const botao_play_pause = document.querySelector("#play-pause");
const audio = document.querySelector("#audio-capitulo");
const botao_proximo_capitulo = document.querySelector("#proximo");
const botao_anterior_capitulo = document.querySelector("#anterior");

let tah_tocando = false;
let num_capitulo = 1;

function tocar_musica_ao_click () {
    console.log("Ta tocando")

    audio.play();

    botao_play_pause.classList.add("tocando");

    tah_tocando = true;

    return null;
}

function parar_musica_ao_click () {
    console.log("parou de tocar")

    audio.pause();

    botao_play_pause.classList.remove("tocando");

    tah_tocando = false; 

    return null;
}

function tocar_ou_pausar () {
    if (tah_tocando) {
        parar_musica_ao_click()

    } else {
        tocar_musica_ao_click()
    }

    return null;
}

function proximo_capitulo () {
    if (num_capitulo < 10) {
        let titulo = document.querySelector("#capitulo");

        num_capitulo += 1;

        titulo.innerHTML = `Capítulo ${num_capitulo}`;
        audio.src = `./audios/${num_capitulo}.mp3`;

        parar_musica_ao_click();
    }

    return null;
}

function anterior_capitulo () {
    if (num_capitulo > 1) {
        let titulo = document.querySelector("#capitulo");

        num_capitulo -= 1;

        titulo.innerHTML = `Capítulo ${num_capitulo}`;
        audio.src = `./audios/${num_capitulo}.mp3`;

        parar_musica_ao_click();
    }

    return null;
}


botao_play_pause.addEventListener("click", tocar_ou_pausar);
botao_proximo_capitulo.addEventListener("click", proximo_capitulo);
botao_anterior_capitulo.addEventListener("click", anterior_capitulo);