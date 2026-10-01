const produtosSelecionados = produtos.filter(
    produto => produto.estoque > 0 && produto.preco > 100
);

console.log(produtosSelecionados);