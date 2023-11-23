//var produto1 = "Tenis";
//var produto2 = "Bola";
//var produto3 = "VideoGame";

//ARRAY
var estoqueProdutos = ["Tenis,Bola,VideoGame"];
console.log(estoqueProdutos);
//indice
console.log(estoqueProdutos[1])

// metodo alternado
// var frutas = Array();
// frutas[0] = "Banana";
// frutas[1] = "Abacaxi";
// frutas[2] = "Laranja";
// console.log(frutas);

//COMANDOS ARRAY
// Push - adiciona um elemento na ultima posicao
estoqueProdutos.push("chocolate");
console.log(estoqueProdutos);
// unshift - adiciona um elemento na primeira posicao 
estoqueProdutos.unshift("Refrigerante");
console.log(estoqueProdutos);
// pop - remover um elemento na ultima posicao
estoqueProdutos.pop()
// length - quantidade de elementos array
console.log(`Existem ${estoqueProdutos.lengt} no estoque`)
