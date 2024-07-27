let amigos = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');
    if(nomeAmigo.value == ''){
        alert('Informe o nome de algum amigo.');
        return;
    }
    if(amigos.includes(nomeAmigo.value)){
        alert('Nome do amigo já existente, adicione um Sobrenome ou outro Nome.');
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(nomeAmigo.value);
    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = '';
}

function sortear(){
    if(amigos.length < 4){
        alert('Não há amigos o suficiente para o sorteio.');
        return;
    }
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    for(i = 0; i < amigos.length; i++){
        
        if(i == amigos.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + "<br>";

        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + "<br>";
        }

    }
}

function embaralha(lista){
    for (let i = lista.length; i; i--){
        const indiceAleatorio = Math.floor(Math.random() * i);
        [lista[i-1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i-1]];
    }

}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
