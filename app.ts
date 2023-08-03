import { personagem } from "./Personagem"
import { guilda } from "./guildas"

let jaspion:personagem = new personagem ("Jaspion")

let giraia:personagem = new personagem ("Giraia")


let golias:personagem = new personagem ("Golias")

let davi:personagem = new personagem ("Davi")

let godzila: guilda = new guilda ()

let alvo: Alvo = new Alvo();

let homem: guilda = new guilda ()


//console.log(jaspion.vida )

//jaspion.machucar(giraia, 100)
//console.log(giraia.vida )

//golias.curar(2,giraia)
//console.log(giraia.vida )


//godzila.adicionarMembro(jaspion)

//jaspion.subirNivel(7)
//console.log(jaspion.level)
//console.log(jaspion.vida)


//console.log(jaspion.vida)
jaspion.subirNivel(7)
console.log(jaspion.level)


//causarDano(guerreiroCorpoACorpo, alvo);
//causarDano(guerreiroLongoAlcance, alvo);

//homem.adicionarMembro(jaspion)