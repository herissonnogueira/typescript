// Definindo a interface IVeiculo
interface IVeiculo {
    acelerar: () => boolean;
    frear: () => boolean;
    velocidadeMaxima: number;
}

// Implementando a interface IVeiculo em uma classe Carro
class Carro implements IVeiculo {
    // Propriedade específica da classe Carro
    marca: string;

    // Propriedades da interface IVeiculo
    velocidadeMaxima = 120;

    // Implementação dos métodos da interface
    acelerar() {
        console.log("Carro acelerando...");
        return true;
    }

    frear() {
        console.log("Carro freando...");
        return true;
    }

    // Método específico da classe Carro
    abrirPorta() {
        console.log("Porta do carro aberta.");
    }

    // Construtor da classe Carro
    constructor(marca: string) {
        this.marca = marca;
    }
}

// Criando uma instância da classe Carro
const meuCarro = new Carro("Toyota");

// Chamando métodos da interface e da classe
meuCarro.acelerar(); // Saída: Carro acelerando...
meuCarro.frear();    // Saída: Carro freando...
meuCarro.abrirPorta();// Saída: Porta do carro aberta.
console.log(`Velocidade Máxima: ${meuCarro.velocidadeMaxima} km/h`); // Saída: Velocidade Máxima: 120 km/h
