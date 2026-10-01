const produtosDesconto = produtos.map(produto => ({
    ...produto,
    preco: produto.preco * 0.9
}));

console.log(produtosDesconto);