"use strict";
// Definindo a classe Pessoa
class Pessoa {
    // Construtor da classe
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    // Método da classe que retorna uma saudação
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
// Definindo a classe ContaBancaria
class ContaBancaria {
    // Construtor da classe
    constructor(numeroDaConta) {
        // Propriedades da classe
        this.saldo = 0;
        this.numeroConta = numeroDaConta;
    }
    // Método que retorna o saldo
    getSaldo() {
        return this.saldo;
    }
    // Método para depositar dinheiro na conta
    depositar(valor) {
        this.saldo += valor;
    }
}
// Definindo a classe ContaBancariaPessoaFisica, que herda de ContaBancaria
class ContaBancariaPessoaFisica extends ContaBancaria {
    // Sobrescrevendo o método depositar da classe pai
    depositar(valor) {
        // Multiplicando o valor por 2 ao depositar na conta de uma pessoa física
        this.saldo = valor * 2;
    }
}
// Exemplo de uso das classes
const pessoa1 = new Pessoa('João', 3000);
console.log(pessoa1.dizOla()); // Saída: João disse oi
const conta1 = new ContaBancaria(123456);
conta1.depositar(1000);
console.log(conta1.getSaldo()); // Saída: 1000
const contaPF = new ContaBancariaPessoaFisica(789012);
contaPF.depositar(500);
console.log(contaPF.getSaldo()); // Saída: 1000 (500 * 2)
