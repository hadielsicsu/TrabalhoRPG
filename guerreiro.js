class Alvo {
    receberDano() {
        console.log('Alvo recebeu dano!');
    }
}
function causarDano(personagem, alvo) {
    if (personagem.alcanceMaximo >= calcularDistancia(personagem, alvo)) {
        alvo.receberDano();
    }
    else {
        console.log('O alvo está fora do alcance do personagem!');
    }
}
function calcularDistancia(personagem, alvo) {
    return Math.floor(Math.random() * personagem.alcanceMaximo) + 1;
}
const guerreiroCorpoACorpo = {
    alcanceMaximo: 2,
};
const guerreiroLongoAlcance = {
    alcanceMaximo: 20,
};
//# sourceMappingURL=guerreiro.js.map