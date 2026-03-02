//Valor total carrinho de compras

const carrinho = [
  { produto: "Notebook", preco: 4500.0, quantidade: 1 },
  { produto: "Mouse", preco: 150.0, quantidade: 2 },
  { produto: "Teclado", preco: 300.0, quantidade: 1 }
];

const totalCarrinho = carrinho.reduce((acumulador, item) => {
    return acumulador + item.preco * item.quantidade;
}, 0);
console.log(totalCarrinho);
