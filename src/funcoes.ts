// criando uma nova função
// função tipada
function calculaArea(base: number, altura: number): number {
    return base * altura;
}

// também funciona para uma arrow function
const calculaArea2 = (base: number, altura: number): number => base * altura

// operador rest
function somar(...numeros: number[]): void {
    // numeros.reduce()
    console.log (numeros)
}

// union type
function teste(): string | number {
    if (10 > 5) {
        return 'dez maior que cinco'
    } else {
        return 5
    }
}

const resultadoDeTeste = teste()