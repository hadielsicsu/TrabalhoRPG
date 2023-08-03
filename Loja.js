"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loja = void 0;
const Venda_1 = require("./Venda");
class Loja {
    constructor(livro, autor, categoria, vendas) {
        this.livro = livro;
        this.autor = autor;
        this.categoria = categoria;
        this.vendas = vendas;
    }
    venderLivro(livro, data, preco) {
        let vendas = new Venda_1.Venda(livro, preco, data);
        this.vendas.push(vendas);
    }
    toString() {
        return `{livro: ${this.livro}, autor: ${this.autor.toString()}, categoria: ${this.categoria}, preco: ${this.vendas}}`;
    }
}
exports.Loja = Loja;
//# sourceMappingURL=Loja.js.map