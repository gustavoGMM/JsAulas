const verificarPromise = new Promise((resove, reject) => {
    let nome = "ADM";
    let senha = "ADM";

    if(nome == "ADM" && senha =="ADM"){
        resove("Seja bem vindo administrador");
     }else{
        reject("O usuário não é ADM! Faça o loguin de maneira alternativa");     
    }
});

verificarPromise.catch((x) => {
    console.log(x)
})