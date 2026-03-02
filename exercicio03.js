//Carrinho de compras

const precos = [29.9, 50.0, 10.5, 100.0];

const total = precos.reduce((total, preco) => {
    return total + preco;
})
console.log(total);
