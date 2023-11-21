//alert("atividade 1 - calcula conta");
//var clientes = Number(prompt("Quantos clientes estão na conta?"))
//var valorTotal = Number(prompt("qual é o valor total da conta?"))

//var valorDivido = valorTotal / clientes;

//alert(`O valor pra cada cliente é de R$ ${valorDivido}`);

function calculeConta(clientes , valorTotal){
alert("atividade 1 - calcula conta");
var valorDivido = valorTotal / clientes;
alert(`O valor pra cada cleinte é de R$ ${valorDivido}`);
}
var clientes = Number(prompt("Quantos clientes estão na conta?"))
var valorTotal = Number(prompt("qual é o valor total da conta?"))
calculeConta(clientes,valorTotal)