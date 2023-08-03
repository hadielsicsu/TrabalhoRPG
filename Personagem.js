"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personagem = void 0;
class personagem {
    constructor(nome) {
        this.vida = 1000;
        this.level = 1;
        this.vivo = true;
        this.alcance = 0;
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    subirNivel(level) {
        if (this.nome) {
            this.level = level + 1;
            return true;
        }
    }
    machucar(alvo, dano) {
        if (alvo === this) {
            console.log("Um Personagem não pode causar dano a ele mesmo.");
            return;
        }
        if (dano < 0) {
            console.log("O dano deve ser um valor positivo.");
            return;
        }
        if (this.level >= alvo.level + 5) {
            dano *= 1.5;
        }
        else if (this.level + 5 <= alvo.level) {
            dano *= 0.5;
        }
        alvo.vida -= dano;
        console.log(`${this.nome} causou ${dano} de dano a ${alvo.nome}.`);
    }
    curar(cura, alvo) {
        if (this.nome == alvo.getNome()) {
            console.log("Voce nao é capaz de curar ninguém");
        }
        else {
            if (alvo.vivo == true) {
                alvo.vida = alvo.vida + cura;
                if (alvo.vida > 0 && 1000) {
                    alvo.vivo = true;
                }
                else {
                    alvo.vivo = false;
                    alvo.vida = 0;
                }
            }
            else {
                console.log("\n");
                console.log("Personagem morto, não pode ser curado", alvo.nome);
            }
        }
    }
}
exports.personagem = personagem;
//# sourceMappingURL=Personagem.js.map