
const jogos = ['The Witcher 3', 'Red Dead Redemption 2', 'Assassins Creed Valhalla'];


function pesquisarJogo(nomeJogo) {
    if (jogos.includes(nomeJogo)) {
        console.log(`O jogo ${nomeJogo} foi encontrado!`);
    } else {
        console.log(`O jogo ${nomeJogo} não foi encontrado.`);
    }
}
const nomeJogoPesquisado = 'Red Dead Redemption 2';
pesquisarJogo(nomeJogoPesquisado);