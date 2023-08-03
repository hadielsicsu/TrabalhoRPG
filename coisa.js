"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coisa = void 0;
class coisa {
    constructor(vida) {
        this.vida = vida;
    }
    machucar(alvo, dano) {
        alvo.vida = Math.max(alvo.vida - dano, 0);
        if (alvo.vida === 0) {
            console.log("coisa destruida");
        }
    }
}
exports.coisa = coisa;
//# sourceMappingURL=coisa.js.map