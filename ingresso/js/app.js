function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(tipoIngresso == 'pista'){
        comprarPista(quantidade);
    } else if(tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
    


    document.getElementById('qtd').value = '';
}

function comprarPista(quantidade){
    let ingressoPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > ingressoPista){
        alert('Quantidade indisponível para o Ingresso Pista.');
    } else {
        ingressoPista = ingressoPista - quantidade;
        document.getElementById('qtd-pista').textContent = ingressoPista;
        alert('Compra realizada com sucesso!');
    }

}

function comprarSuperior(quantidade){
    let ingressoSuperior = parseInt(document.getElementById('qtd-superior').textContent);    
    if (quantidade > ingressoSuperior){
        alert('Quantidade indisponível para o Ingresso Superior.');
    } else {
        ingressoSuperior = ingressoSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = ingressoSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(quantidade){
    let ingressoInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > ingressoInferior){
        alert('Quantidade indisponível para o Ingresso Inferior.');
    } else {
        ingressoInferior = ingressoInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = ingressoInferior;
        alert('Compra realizada com sucesso!');
    }
}