//OPERADORES LOGICOS (COMPARAR)
// > MAIOR QUE
// < MENOR QUE
// != DIFERENTE (<>)
// == IGUAL (= RECEBE, == COMPARE VALOR, === COMPARA VALOR E TIPO )
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL

// OPERADORES ALTERNÀRIOS
// && E (DUAS CONDIÇÔES DEVERÂO SER IGUAIS EM RESULTADO)
// || OU (SE UMA DAS CONDIÇÒES FOR VERDADEIRA SERÀ EXECUTADO)
// ! NÂO (SE NÃO FOR A CONDIÇÃO)

//CONDICIONAIS 
// IF (SE SENAO)
if(true){
    console.log("Sou verdadeiro");
}else{
    console.log("Sou falso")
}

// verificar idade
var idade = Number(prompt("Qual é a sua idade?"));

if(idade >= 18){
   alert("Seja bem vindo");
}else{

if(idade == 0){
    alert("Idade invalida , tente novamente!");
    location.reload();
}else{     
     alert("Voce nao tem autorizaçao pra entrar no site");
     location.href = "https://www.google.com.br/";
     }
     // location.reload();
}

// condição ? bloco : bloco2 if ternario
