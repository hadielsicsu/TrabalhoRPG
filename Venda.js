"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venda = void 0;
class Venda {
    constructor(livro, valor, data) {
        this.livro = livro;
        this.valor = valor;
        this.data = data;
    }
    toString() {
        return `{livro: ${this.livro}, valor: ${this.valor.toString()}, data: ${this.data}}`;
    }
}
exports.Venda = Venda;
//# sourceMappingURL=Venda.js.map