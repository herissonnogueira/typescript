"use strict";
// criando uma nova função
// função tipada
function calculaArea(base, altura) {
    return base * altura;
}
// também funciona para uma arrow function
const calculaArea2 = (base, altura) => base * altura;
// operador rest
function somar(...numeros) {
    // numeros.reduce()
    console.log(numeros);
}
// union type
function teste() {
    if (10 > 5) {
        return 'dez maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
