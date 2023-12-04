// INSTALAÇAO
// VISITE https://jquery.com/download/
// clicar na opção "Download the uncompressed, development jQuery 3.7.1"
// aberto o arquivo, aperte com o botão direito e salvar página como.. e salve em um local de sua preferencia!

//SELETOR JQUERY = $(# OU . ELEMENTO)
var titulo = $("#tituloDaPagina").text("jquery aula");
console.log(titulo);

// var paragrafo = document.querySelector("#textoDaPagina");
// function consoleListar(){
//     console.log("Este é o texto do site");
// }

var paragrafo = $("textDaPagina").on("mouseover", function() {
    console.log("Este é o texto do site");
});

//Comportamento
// jquery tem capacidade de avaliar valores não definidos e vazios
var usuario = "Victor";
var usuarioIndefinido = undefined;

var usuarioResultado = $("#testeIndefinido").text(usuarioIndefinido);

//algotitmo contagem de caracteres
var blocoDetexto = $("#blocoDeTexto").on("input", function(){;
    let blocoDeTextoValue = $("#blocoDeTexto").val();
    let resposta = $("numCaracteres")

    var contagem = blocoDeTextoValue.length;
    resposta.text(contagem);
});
    

