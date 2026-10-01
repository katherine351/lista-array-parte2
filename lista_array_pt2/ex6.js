const produtoSemEstoque = produtos.find(produto => produto.estoque === 0);

console.log(produtoSemEstoque);