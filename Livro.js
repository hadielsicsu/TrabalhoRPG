"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, categoria, ano) {
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.ano = ano;
    }
    getTtulo() {
        return this.titulo;
    }
    toString() {
        return `{titulo: ${this.titulo}, autor: ${this.autor.toString()}, categoria: ${this.categoria}, ano: ${this.ano}}`;
    }
}
exports.Livro = Livro;
//# sourceMappingURL=Livro.js.map