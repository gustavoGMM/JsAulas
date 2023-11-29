// REPLACE / REPLACEALL
var frase = "Olá mundo, o mundo é muito legal";
console.log(frase);

console.log(frase.replace("mundo","bacana"));
console.log(frase.replaceAll("mundo","bacana"));

//SETATTRIBUTE
document.querySelector("span").setAttribute("style","color: blue ;");

//CLASS LIST
//document.querySelector("#classlist").classList.remove("claro");
//document.querySelector("#classlist").classList.add("claro");
var elemento = document.querySelector("#classlist");
if(elemento.classList.contains("claro")){
  //  elemento.classList.toggle("escuro");
    elemento.classList.replace("escuro","claro");
}

//inde of /includes
var frutas = ['Morango','Banana','Laranja','Uva']

// includes -> true e false
console.log(frutas.includes("Abacaxi"));
//indexOf -> o valor indice do array (caso nao exista, -1)
console.log(frutas.indexOf("Abacaxi"));

if(frutas.includes("Abacaxi" == false)){
    console.log("nao achei")
}

//SET TIMEOUT
function msg(){
    return new Promise((teste) =>{ 
        setTimeout(() =>{ 
    console.log("Bom dia");
    resolve()
},2000);

})

}

async function carregando(){ 
   console.log("iniciou");
   await msg();
   console.log("Seja bem vindo");

}

carregando ();