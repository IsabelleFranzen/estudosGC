let totalGeral;
limpar();


function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let precoProduto = quantidade * valorUnitario;
    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${precoProduto}</span>
        </section>`;

    totalGeral = totalGeral + precoProduto;
    let valorTotal = document.getElementById('valor-total');
    valorTotal.textContent = `R$ ${totalGeral}`;

    document.getElementById('quantidade').value = '';
}



function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';

}


