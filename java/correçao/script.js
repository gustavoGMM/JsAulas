$("#btnCalcular").on("click", function(){
    let numeroEscolhido = $("#numeroEscolhido").val();
    for(let i = 1; i <= 10; i++){
       document.("#resultadoCalculo").html().innerHTML += `${i} x ${numeroEscolhido} = ${i *
        numeroEscolhido}`;
    }
});