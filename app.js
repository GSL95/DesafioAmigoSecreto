//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// lista com os amigos
let amigos = [];

// função para adicionar amigo na lista
function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo != ''){
        amigos.push(amigo);
        atualizaAmigos();
        limparCampo('amigo');
    }
    else{
        alert('Por favor, insira um nome.');
    }
}

// função para limpar o campo após a inclusão do nome na lista
function limparCampo(id){
    let texto = document.getElementById(id);
    texto.value = '';
}

// função para atualizar lista de amigos na tela
function atualizaAmigos(){
    // Pega a ul
    let lista = document.getElementById('listaAmigos');

    // Limpar a lista
    lista.innerHTML = '';

    // Loop que percorre a lista de amigos e cria um li para cada um
    for(let i = 0; i < amigos.length; i++){

        // Cria uma li
        let novaLi = document.createElement('li');

        // Adiciona o conteúdo ao li
        novaLi.textContent = amigos[i];

        // Adiciona o li à ul
        lista.appendChild(novaLi);
    }
}

// função para sortear um amigo dentre os adicionados na lista
function sortearAmigo(){
    // Condição para existir amigos na lista
    if(amigos.length > 0){
        // Gerando o índice aleatório
        let indiceSorteado = Math.random() * amigos.length;
        indiceSorteado = Math.floor(indiceSorteado);
        console.log(indiceSorteado);

        // Amigo sorteado
        let amigoSorteado = amigos[indiceSorteado];

        // Mostrar o amigo sorteado na tela
        let amigo = document.getElementById('resultado');
        amigo.innerHTML = amigoSorteado;

    }else{
        alert('Não existem amigos para sortear')
    }
}