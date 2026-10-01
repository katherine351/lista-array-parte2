const posicaoInativo = produtos.findIndex(
    produto => produto.ativo === false
);

console.log(posicaoInativo);