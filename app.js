"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Personagem_1 = require("./Personagem");
const guildas_1 = require("./guildas");
let jaspion = new Personagem_1.personagem("Jaspion");
let giraia = new Personagem_1.personagem("Giraia");
let golias = new Personagem_1.personagem("Golias");
let davi = new Personagem_1.personagem("Davi");
let godzila = new guildas_1.guilda();
let alvo = new Alvo();
jaspion.subirNivel(7);
console.log(jaspion.level);
//# sourceMappingURL=app.js.map