"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
const Emprestimo_1 = require("./Emprestimo");
class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.livros = [];
        this.emprestimos = [];
    }
    getLivros() {
        return this.livros;
    }
    addLivro(livro) {
        this.livros.push(livro);
    }
    removeLivro(tituloLivro) {
        for (let i = 0; i < this.livros.length; i++) {
            if (this.livros[i].getTtulo() === tituloLivro)
                this.livros.splice(i, 1);
        }
    }
    empresta(data, dataDevolucao, livro, leitor) {
        this.emprestimos.push(new Emprestimo_1.Emprestimo(leitor, data, dataDevolucao, livro));
    }
    toString() {
        let stringLivros = "[";
        let stringemprestimos = "[implementar]";
        for (const livro of this.livros) {
            stringLivros += livro.toString();
        }
        stringLivros += "]";
        return `{nome: ${this.nome}, livros: ${stringLivros}, emprestimos: ${stringemprestimos}}`;
    }
}
exports.Biblioteca = Biblioteca;
//# sourceMappingURL=Biblioteca.js.map