"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leitor = void 0;
class Leitor {
    constructor(nome, endereco, cpf, anoNascimento) {
        this.nome = nome;
        this.endereco = endereco;
        this.cpf = cpf;
        this.anoNascimento = anoNascimento;
    }
    toString() {
        return `{nome: ${this.nome}, endereco: ${this.endereco.toString()}, cpf: ${this.cpf}, anoNascimento: ${this.anoNascimento}}`;
    }
}
exports.Leitor = Leitor;
//# sourceMappingURL=Leitor.js.map