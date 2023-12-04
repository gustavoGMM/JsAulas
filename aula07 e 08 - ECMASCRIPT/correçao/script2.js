const btnTrocar = document.querySelector("#btnTrocar");
const btnTrocarTodos = document.querySelector("#btnTrocarTodos");

btnTrocar.addEventListener("click", trocarUmTermo);
btnTrocarTodos.addEventListener("click", btnTrocarTodosTermos);

function trocarUmTermo(){
    let blocoDeTexto = document.querySelector("#blocoDeTexto");value;
    let removerTermo = document.querySelector("#removerTermo").value;
    let adicionarTermo = document.querySelector("#adicinarTermo").value;
   
    let blocoDeTextoFormatado = blocoDeTexto.value.replace(removerTermo,adicionarTermo);
    
    blocoDeTexto.value = blocoDeTextoFormatado;

}

function TrocarTodosTermos(){
        let blocoDeTexto = document.querySelector("#blocoDeTexto");value;
        let removerTermo = document.querySelector("#removerTermo").value;
        let adicionarTermo = document.querySelector("#adicinarTermo").value;
}