"use strict";
// Implementando a interface IVeiculo em uma classe Carro
class Carro {
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
    constructor(marca) {
        // Propriedades da interface IVeiculo
        this.velocidadeMaxima = 120;
        this.marca = marca;
    }
}
// Criando uma instância da classe Carro
const meuCarro = new Carro("Toyota");
// Chamando métodos da interface e da classe
meuCarro.acelerar(); // Saída: Carro acelerando...
meuCarro.frear(); // Saída: Carro freando...
meuCarro.abrirPorta(); // Saída: Porta do carro aberta.
console.log(`Velocidade Máxima: ${meuCarro.velocidadeMaxima} km/h`); // Saída: Velocidade Máxima: 120 km/h
