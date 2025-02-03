//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Captura o valor do campo de texto
    let nome = document.getElementById("nomeAmigo").value;

    // Valida se o campo está vazio
    if (nome.trim() === "") {
        alert("Digite um nome");
    } else {
        // Adiciona o nome ao array de amigos
        amigos.push(nome);

        // Atualiza a lista de amigos na tela (pode ser implementado posteriormente)
        console.log(amigos);

        // Limpa o campo de entrada
        document.getElementById("nomeAmigo").value = "";
    }
}// Função para atualizar a lista de amigos
function atualizarLista() {
    // Obtém o elemento da lista HTML
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista existente
    lista.innerHTML = "";

    // Percorre o array de amigos e cria um <li> para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        // Cria o elemento <li> para cada nome
        let item = document.createElement("li");
        item.textContent = amigos[i];

        // Adiciona o <li> à lista HTML
        lista.appendChild(item);
    }
}// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se o array de amigos não está vazio
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione amigos antes de sortear.");
        return;
    }

    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado
    document.getElementById("resultado").innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
}


