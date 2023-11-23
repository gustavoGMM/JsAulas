// REPETIÇÕES
//WHILE (VERIFICA E DEPOIS FAZ)
var contador = 0;

//enquanto (condicao) faca

// CONTADOR + 1
//fimEnquanto

while (contador <= 10) {
    console.log(contador);
    contador++;
  //  contador = contador + 1;
}

// DO WHILE (FAZ E VERIFICA)
// REPITA
//
// CONTADOR
// ATE(CONDICAO)

var cont = 20
do{
 console.log(`FIZ ${cont} VEZES`);
 cont++;
}
while( cont <= 10);

// FOR
// PARA (VAR,CONDICAO,CONTROLARDOR)

//FIMPARA
for(let controlador = 1; controlador <=10; controlador++ )
     console.log(controlador+" - For é legal");

//FOR EACH
console.log('ELEMENTOS');
var elementos = ["ELEMENTO1","ELEMENTO","ELEMNENTO3","ELEMNENTO4","ELEMNENTO5"];

// function pseudofuntion , anonima
elementos.forEach((cadaElemento) => {
    console.log(" - "+cadaElementos);
});