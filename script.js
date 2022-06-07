window.onload = function(){

    const listaDeProdutos = document.querySelector("#produtos");
    const listaDeProdutosNaCesta = document.querySelector("#cestaDoCliente");
    const campoValorTotalCompra = document.querySelector("#mostraTotalCompra");
    
    let valorTotalDaCompra = 0.00;
    let produtosNaCesta = [];
    
    listaDeProdutos.addEventListener('click', function(e){
        const elementoHTML = e.target;
        const produto = elementoHTML.dataset;
        const nomeProduto = produto.nome;
        const precoProduto = produto.preco;

        const produtoJaEstaNaCesta = verificaSeProdutoEstaNaCesta(nomeProduto);
        
        if(produtoJaEstaNaCesta == true) {
            alert(`O Produto ${nomeProduto} ja está na cesta de compras`)
        }else {
            adicionarProdutoNaCesta(elementoHTML, nomeProduto);
            atualizaValorTotalDaCompra(precoProduto);
        }
    })


    function adicionarProdutoNaCesta(htmlProduto, nomeProduto) {
        listaDeProdutosNaCesta.appendChild(htmlProduto.cloneNode(true));
        produtosNaCesta.push(nomeProduto);
    }

    function atualizaValorTotalDaCompra(precoProduto) {
        valorTotalDaCompra = valorTotalDaCompra + parseFloat(precoProduto);
        campoValorTotalCompra.value = `R$ ${valorTotalDaCompra.toFixed(2)}`
    }

    function verificaSeProdutoEstaNaCesta(nomeProduto) {
        if(produtosNaCesta.includes(nomeProduto)) {
            return true;
        }else {
            return false;
        }
    }
        
}