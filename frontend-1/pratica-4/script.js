const input = document.getElementById("usuario");
const botao = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

// Função assíncrona que busca o perfil na API pública do GitHub
// e atualiza o DOM com o resultado, sem recarregar a página.
async function buscarPerfil() {
    const usuario = input.value.trim();

    if (!usuario) {
        resultado.innerHTML = `<p class="erro">Digite um usuário antes de buscar.</p>`;
        return;
    }

    botao.disabled = true;
    botao.textContent = "Buscando...";
    resultado.innerHTML = `<p class="mensagem">Carregando dados de ${usuario}...</p>`;

    try {
        const resposta = await fetch(`https://api.github.com/users/${usuario}`);

        if (!resposta.ok) {
            throw new Error("Usuário não encontrado");
        }

        const dados = await resposta.json();
        renderizarPerfil(dados);

    } catch (erro) {
        resultado.innerHTML = `<p class="erro">Não foi possível carregar: ${erro.message}</p>`;
    } finally {
        botao.disabled = false;
        botao.textContent = "Buscar";
    }
}

// Monta o HTML do card de resultado a partir do JSON retornado pela API
function renderizarPerfil(dados) {
    resultado.innerHTML = `
        <div class="perfil">
            <img src="${dados.avatar_url}" alt="Avatar de ${dados.login}" onerror="this.style.display='none'">
            <div>
                <h2>${dados.name || dados.login}</h2>
                <p class="login">@${dados.login}</p>
                <p class="bio">${dados.bio || "Sem bio cadastrada."}</p>
                <div class="stats">
                    <span><strong>${dados.public_repos}</strong> repositórios</span>
                    <span><strong>${dados.followers}</strong> seguidores</span>
                </div>
            </div>
        </div>
    `;
}

botao.addEventListener("click", buscarPerfil);
input.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") buscarPerfil();
});
