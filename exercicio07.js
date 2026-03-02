//Lista de alunos

const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Beto", nota: 5.0 },
  { nome: "Caio", nota: 7.0 }
];

const alunosComStatus = alunos.map((aluno) => {
    return `nome: ${aluno.nome}, nota: ${aluno.nota}, aprovado: ${aluno.nota >= 7}`
});
console.log(alunosComStatus);
