type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}

// criando um array de alunos
const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    },
]

// tentando adicionar um aluno ao array
alunos.push({
    nome : "Julia",
    cursos: ["Arquitetura"],
    idade: 29
})

// usando em um objeto
const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}

// utilizando o tipo em uma função
function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}