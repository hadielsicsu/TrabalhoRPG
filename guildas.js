"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guilda = void 0;
class guilda {
    constructor() {
        this.membros = new Set();
    }
    adicionarMembro(membro) {
        this.membros.add(membro);
    }
    removerMembro(membro) {
        this.membros.delete(membro);
    }
    aliado(personagem) {
        return this.membros.has(personagem);
    }
}
exports.guilda = guilda;
//# sourceMappingURL=guildas.js.map