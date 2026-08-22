// Pega os elementos que vamos manipular no DOM
const botao = document.getElementById("btnCurtir");
const icone = document.getElementById("icone");
const textoBotao = document.getElementById("textoBotao");
const contador = document.getElementById("contador");

let curtidas = 0;
let jaCurtiu = false;

// Simula uma chamada de servidor (tipo um POST /curtir) que demora um pouco
// pra responder. Em um caso real aqui dentro entraria um fetch().
function enviarCurtidaParaServidor() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ ok: true }), 600);
    });
}

// Função assíncrona: enquanto espera a "resposta do servidor" o botão
// fica desabilitado, pra não deixar o usuário clicar várias vezes e
// bagunçar a contagem.
async function alternarCurtida() {
    botao.disabled = true;

    if (!jaCurtiu) {
        textoBotao.textContent = "Curtindo...";
        await enviarCurtidaParaServidor();

        curtidas++;
        jaCurtiu = true;
        icone.innerHTML = "&#9829;";
        textoBotao.textContent = "Curtido";
        botao.classList.add("curtido");
    } else {
        textoBotao.textContent = "Descurtindo...";
        await enviarCurtidaParaServidor();

        curtidas--;
        jaCurtiu = false;
        icone.innerHTML = "&#9825;";
        textoBotao.textContent = "Curtir";
        botao.classList.remove("curtido");
    }

    contador.textContent = `${curtidas} curtida${curtidas === 1 ? "" : "s"}`;
    botao.disabled = false;
}

botao.addEventListener("click", alternarCurtida);
