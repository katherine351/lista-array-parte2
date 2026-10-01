const patrimonio = produtos.reduce(
    (total, produto) => total + (produto.preco * produto.estoque),
    0
);

console.log(patrimonio);