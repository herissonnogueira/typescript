"use strict";
// pra criar um variável no ts é a mesma coisa que no js let ou const;
// tipos básicos 
// boolean
let estaChovendo = false;
estaChovendo = true;
// number
let idade = 27;
let altura = 1.75;
// string
const nacionalidade = 'brasileiro';
// arrays
const colegas = ['lucas', 'fernanda'];
const tecnologias = ['html', 'css', 'js'];
// array de apenas leitura
// exemplo :
// tecnologias.push();
// notas.push
const notas = [7, 9, 5, 8];
// tupla
const lista = ['herisson', true, 27];
// union type
let idadeDaAna = 25;
idadeDaAna = '25 anos';
// any
let dadosDaApi;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'string';
// tipagem explícita
let curso = 'frontend';
