// Elementos do formulário
const form = document.getElementById("formCadastro");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoSenha = document.getElementById("senha");
const campoConfirmar = document.getElementById("confirmarSenha");
const btnCadastrar = document.getElementById("btnCadastrar");

const msgEmail = document.getElementById("msgEmail");
const msgConfirmar = document.getElementById("msgConfirmar");
const msgForca = document.getElementById("msgForca");
const msgSucesso = document.getElementById("msgSucesso");
const forcaBarra = document.getElementById("forcaBarra");

// Itens da checklist de senha, associados a uma regra cada
const requisitos = [
    { id: "reqTamanho", regra: (s) => s.length >= 8 },
    { id: "reqMaiuscula", regra: (s) => /[A-Z]/.test(s) },
    { id: "reqMinuscula", regra: (s) => /[a-z]/.test(s) },
    { id: "reqNumero", regra: (s) => /[0-9]/.test(s) },
    { id: "reqEspecial", regra: (s) => /[^A-Za-z0-9]/.test(s) },
];

// Regex simples de formato de e-mail: algo@algo.algo
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let emailValido = false;
let senhaValida = false;
let confirmarValida = false;

// Valida o campo de e-mail em tempo real
function validarEmail() {
    const valor = campoEmail.value.trim();

    if (valor === "") {
        campoEmail.classList.remove("valido", "invalido");
        msgEmail.textContent = "";
        msgEmail.className = "mensagem";
        emailValido = false;
    } else if (regexEmail.test(valor)) {
        campoEmail.classList.remove("invalido");
        campoEmail.classList.add("valido");
        msgEmail.textContent = "E-mail em formato válido.";
        msgEmail.className = "mensagem ok";
        emailValido = true;
    } else {
        campoEmail.classList.remove("valido");
        campoEmail.classList.add("invalido");
        msgEmail.textContent = "Digite um e-mail válido (ex: nome@dominio.com).";
        msgEmail.className = "mensagem erro";
        emailValido = false;
    }

    atualizarBotao();
}

// Percorre a lista de requisitos, marca quais foram atendidos no DOM
// e devolve quantos deles a senha atual cumpre
function validarSenha() {
    const valor = campoSenha.value;
    let atendidos = 0;

    requisitos.forEach((req) => {
        const item = document.getElementById(req.id);
        const cumpre = req.regra(valor);
        item.classList.toggle("atendido", cumpre);
        if (cumpre) atendidos++;
    });

    atualizarForca(atendidos, valor.length);

    senhaValida = atendidos === requisitos.length;

    // se o usuário já tinha preenchido a confirmação, revalida o match
    if (campoConfirmar.value !== "") {
        validarConfirmacao();
    }

    atualizarBotao();
}

// Atualiza a barrinha visual de força da senha (0 a 5 requisitos)
function atualizarForca(atendidos, tamanho) {
    const porcentagem = (atendidos / requisitos.length) * 100;
    forcaBarra.style.width = `${porcentagem}%`;

    if (tamanho === 0) {
        forcaBarra.style.backgroundColor = "#e5e9ee";
        msgForca.textContent = "Força da senha";
        return;
    }

    if (atendidos <= 2) {
        forcaBarra.style.backgroundColor = "#dc2626";
        msgForca.textContent = "Senha fraca";
    } else if (atendidos <= 4) {
        forcaBarra.style.backgroundColor = "#d97706";
        msgForca.textContent = "Senha média";
    } else {
        forcaBarra.style.backgroundColor = "#16a34a";
        msgForca.textContent = "Senha forte";
    }
}

// Confirma se o segundo campo de senha bate com o primeiro
function validarConfirmacao() {
    const valor = campoConfirmar.value;

    if (valor === "") {
        campoConfirmar.classList.remove("valido", "invalido");
        msgConfirmar.textContent = "";
        msgConfirmar.className = "mensagem";
        confirmarValida = false;
    } else if (valor === campoSenha.value) {
        campoConfirmar.classList.remove("invalido");
        campoConfirmar.classList.add("valido");
        msgConfirmar.textContent = "As senhas coincidem.";
        msgConfirmar.className = "mensagem ok";
        confirmarValida = true;
    } else {
        campoConfirmar.classList.remove("valido");
        campoConfirmar.classList.add("invalido");
        msgConfirmar.textContent = "As senhas não coincidem.";
        msgConfirmar.className = "mensagem erro";
        confirmarValida = false;
    }

    atualizarBotao();
}

// Só libera o botão de cadastro quando nome, e-mail, senha e confirmação
// estiverem todos válidos ao mesmo tempo
function atualizarBotao() {
    const nomePreenchido = campoNome.value.trim().length > 0;
    btnCadastrar.disabled = !(nomePreenchido && emailValido && senhaValida && confirmarValida);
}

campoNome.addEventListener("input", atualizarBotao);
campoEmail.addEventListener("input", validarEmail);
campoSenha.addEventListener("input", validarSenha);
campoConfirmar.addEventListener("input", validarConfirmacao);

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // trava de segurança: revalida tudo antes de "enviar"
    if (btnCadastrar.disabled) return;

    msgSucesso.textContent = `Conta criada com sucesso! Bem-vindo(a), ${campoNome.value.trim()}.`;
    form.reset();
    emailValido = false;
    senhaValida = false;
    confirmarValida = false;
    document.querySelectorAll(".checklist li").forEach((li) => li.classList.remove("atendido"));
    forcaBarra.style.width = "0%";
    msgForca.textContent = "Força da senha";
    btnCadastrar.disabled = true;
});
