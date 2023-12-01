function verificarUsuarioADM(nome, senha) {
    return new Promise((resolve, reject) => {
        if (nome === 'ADM' && senha === 'ADM') {
            resolve('Usuário é o ADM');
        } else {
            reject('Usuário não é o ADM');
        }
    });
}

const nomeUsuario = 'ADM';
const senhaUsuario = 'ADM';

verificarUsuarioADM(nomeUsuario, senhaUsuario)
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.error(erro);
    });