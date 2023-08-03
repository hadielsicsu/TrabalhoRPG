import { guilda } from "./guildas"

export class personagem {
    nome: string;
    vida: number = 1000;
    level: number = 1;
    vivo:boolean = true
    alcance:number = 0
    
    
    

    constructor(nome:string){
        this.nome = nome;  
        
    }

    getNome(){
        return this.nome
    }

    subirNivel(level:number){
        if(this.nome){
            this.level = level + 1
            return true
        }

    }

  // machucar(dano:number, alvo:personagem){
   // if (this.nome == alvo.getNome()){
       // console.log("Você errou")

   // }if(this.vivo){//


        machucar(alvo: personagem, dano: number) {
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
            } else if (this.level + 5 <= alvo.level) {
              dano *= 0.5;
            }
        
            alvo.vida -= dano;
            console.log(`${this.nome} causou ${dano} de dano a ${alvo.nome}.`);
          }

     //let nivelDiferenca = alvo.level - this.level;
       // let nivelDano = nivelDiferenca 
      //  let danoCausado = dano * nivelDano;
      //  alvo.vida = Math.max(alvo.vida - danoCausado, 0);
         
       // if(nivelDiferenca < - 5){
           // nivelDano = dano * 1.5
       // }

        //else if(nivelDiferenca > + 5){
         // nivelDano = dano * 0.5
       // }

       // if(alvo.vivo == true){
           // alvo.vida = alvo.vida - dano
           // if(alvo.vida > 0){
              //  alvo.vivo = true
           // }else{
                //alvo.vivo = false
                //alvo.vida = 0
           // }


curar(cura:number, alvo:personagem){
    if (this.nome == alvo.getNome()){
        console.log("Voce nao é capaz de curar ninguém")

    }else{

        if(alvo.vivo == true){
            alvo.vida = alvo.vida + cura
            if(alvo.vida > 0  && 1000){
                alvo.vivo = true
            }else{
                alvo.vivo = false
                alvo.vida = 0

               
            }

        
        } else{

            console.log("\n")
            console.log("Personagem morto, não pode ser curado", alvo.nome)
    }

}
  

}

}

