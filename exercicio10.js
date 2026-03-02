//Nível desenvolvedor

const desenvolvedores = [
  { nome: "Carlos", nivel: "Junior" },
  { nome: "Fernanda", nivel: "Senior" },
  { nome: "Ricardo", nivel: "Pleno" },
  { nome: "Elisa", nivel: "Junior" },
  { nome: "Gustavo", nivel: "Pleno" }
];

const contagemNiveis = desenvolvedores.reduce((acumulador, desenvolvedor) => {
    acumulador[desenvolvedor.nivel] = (acumulador[desenvolvedor.nivel] || 0) + 1;
    return acumulador;
}, {});
console.log(contagemNiveis);
