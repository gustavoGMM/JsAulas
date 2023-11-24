// var empregado = document.getElementById("empregado");
var empregado = document.querySelector("#empregado").value;
var filhos = document.querySelector("#filhos");
var salario = document.querySelector("#salario");
var btnCalcular = document.querySelector("#bntCalcular");

btnCalcular.addEventListener("click",calcular );
  
function calcular(){
    // var empregado = document.getElementById("empregado");
    let empregado = document.querySelector("#empregado").value;
    let filhos = document.querySelector("#filhos").value;
    let salario = document.querySelector("#salario").value;
    let resultadoSpan = document.querySelector("#resultado").value;

    if(filhos == 0 || salario == 0 || empregado == ''){ 
        resultadoSpan.innerHTML = `Dados invalidos! Insira as informaçoes corretamente!` ;
     else if(s)
    if(salario <= 806.80){
        let resultado = filhos * 41.37;
        resultado.innerHTML = `O salario familia do empregado ${empregado} é de R$ ${resultado}`;
        else if(salario >= 806.81 && salario <= 1212.64){
            let resultado = filhos *29
    }
}