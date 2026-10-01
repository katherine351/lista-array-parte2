const todosComEstoque = produtos.every(produto => produto.estoque > 0);

console.log(todosComEstoque);