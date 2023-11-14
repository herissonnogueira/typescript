// pra criar um variável no ts é a mesma coisa que no js let ou const;

// tipos básicos 

// boolean
let estaChovendo: boolean = false

estaChovendo = true

// number
let idade: number = 27

let altura: number = 1.75

// string
const nacionalidade: string = 'brasileiro'

// arrays
const colegas: string[] = ['lucas', 'fernanda']
const tecnologias: Array<string> = ['html', 'css', 'js']

// array de apenas leitura
// exemplo :
// tecnologias.push();
// notas.push
const notas: ReadonlyArray<number> = [7, 9, 5, 8];

// tupla
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['herisson', true, 27];

// union type
let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'

// any
let dadosDaApi: any;
dadosDaApi = 10
dadosDaApi = true
dadosDaApi = [1,2,3]
dadosDaApi = 'string'

// tipagem explícita
let curso = 'frontend'