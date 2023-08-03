export class coisa {
    vida:number;

    constructor(vida:number){
        this.vida = vida;
    }


machucar(alvo:coisa,dano:number){
    alvo.vida = Math.max(alvo.vida - dano, 0);
    if(alvo.vida ===0){
        console.log("coisa destruida")
    }
} 

}