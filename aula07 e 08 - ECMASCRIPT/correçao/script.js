const verificarPromise = new Promise((resove, reject) => {
    let nome = "ADM";
    let senha = "ADM";

    if(nome == "ADM" && senha =="ADM"){
        resove("Seja bem vindo administrador");
     }else{
        reject("O usuário não é ADM! Faça o loguin de maneira alternativa");     
    }
});

verificarPromise.then(() => {
    alert("Usuário encontrado! Seja bem vindo administrador");
})

verificarPromise.catch(() => {
    if(nome == "" )
    alert("Erro! Usuário não cadastrado!");
})