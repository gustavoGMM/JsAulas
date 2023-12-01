//PROMISSES
const primeiroPromise = new Promise((resolve, reject) => { 
    var nome = "Victor";

    if(nome == "Victor"){ 
      resolve("O usuário é o Victor! Seja bem vindo!");
    }else { 
      reject("O usuário não é o Victor! Acesso negado");
    }
});

//RESOLVE - CUMPRIR A PROMESSA (DEU CERTO)
//RESOLVE - NAO CUMPRIU A PROMESSA (DEU ERRADO)
//THEN - RODA A PROMESSA
//CATCH - RODA APENAS SE TIVER UM ERRO!

primeiroPromise.then((data) => {
     console.log(data);
})

//objectEntries
const cursos = {
    FronEnd : 60 , 
    BacoDeDaDados : 40 ,
    cyberSecurity: 100 ,
    pyton : 80
}
  

cursosArray = ["FrontEnd", "BancoDeDados",];
 var cursosMap = cusos.map((cadaElemento) => {
      "<li>Curso :"+cadaElemento+"</li>";
 });

 document.innerHTML =`O map faz um processo para cada elemento do nosso array! olha só: <ul>${cursos}</ul>`