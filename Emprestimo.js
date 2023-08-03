"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
class Emprestimo {
    constructor(leitor, dataEmprestimo, dataDevolucao, livro) {
        this.leitor = leitor;
        this.dataDevolucao = dataDevolucao;
        this.dataEmprestimo = dataEmprestimo;
        this.livro = livro;
    }
    toString() {
        return `{leitor: ${this.leitor}, dataEmprestimo: ${this.dataEmprestimo}, 
            dataDevolucao: ${this.dataDevolucao}, livro:${this.livro}}}`;
    }
}
exports.Emprestimo = Emprestimo;
//# sourceMappingURL=Emprestimo.js.map