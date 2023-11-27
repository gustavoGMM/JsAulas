//pegar input
var input = document.querySelector("#inputText");
var mensagem = document.querySelector("#mensagem");
// add evento foco e perder foco 
input.addEventListener("focus", mudarCor);
input.addEventListener("blur", mudarCorVerifica);
// fazer o input ficar amarelo qunado selecinado
function mudarCor() {
    let mensagem = document.querySelector("#mensagem");
    input.style.backgroundColor = "yeloow";
    mensagem.value.innerHTML = "Digite uma senha com mais de 3 digitos "
}
function mudarCorVerifica() {
    input.style.backgroundColor = "green";
}
// pegar a quantidade de caracteres
// verificaar se tem 3 ou mais para verde
// vereficar se menos qie 3 para vermelho