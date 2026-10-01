const totalEstoque = produtos.reduce(
    (total, produto) => total + produto.estoque,
    0
);

console.log(totalEstoque);